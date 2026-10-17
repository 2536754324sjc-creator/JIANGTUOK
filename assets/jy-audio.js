/* ============================================================
   JYAudio —— 多源语音引擎（v1）
   播放链路（前一条真人语音都拿不到时，才降级系统 TTS，保证不卡）：
     1. 有道真人语音（美音）   —— 主源
     2. 百度真人语音           —— 备用源①
     3. Google 真人语音        —— 备用源②
     4. 系统 TTS（speechSynthesis）—— 最终兜底，无需网络

   特性：
   - 预加载成功后 Audio 对象常驻内存，播放秒开、不重复发请求
   - 源偏好记忆（sessionStorage）：优先使用上次成功的源，少走弯路
   - 已知失败组合跳过（sessionStorage，会话级）：同一源对同一句子失败过不再重踩
   - 播放中途失败自动现场换源，用户无感知
   - 限并发预加载队列（默认 3）
   ============================================================ */
window.JYAudio = (function() {
    'use strict';

    /* ---------- 语音源定义（按优先级排列） ---------- */
    var SOURCES = [
        {
            id: 'youdao',
            name: '有道',
            url: function(en) {
                return 'https://dict.youdao.com/dictvoice?audio=' +
                    encodeURIComponent(en) + '&type=2';
            }
        },
        {
            id: 'baidu',
            name: '百度',
            url: function(en) {
                return 'https://fanyi.baidu.com/gettts?lan=en&text=' +
                    encodeURIComponent(en) + '&spd=5&source=web';
            }
        },
        {
            id: 'google',
            name: 'Google',
            url: function(en) {
                return 'https://translate.google.com/translate_tts?ie=UTF-8&q=' +
                    encodeURIComponent(en) + '&tl=en&client=tw-ob';
            }
        }
    ];

    var SOURCE_TIMEOUT_MS = 6000;   // 单个源加载超时（毫秒）

    /* 句子缓存：{ en: { state, audio, sourceId, duration, promise } }
       state: 'loading' | 'ready' | 'error' */
    var cache = {};

    /* ---------- 系统 TTS（最终兜底） ---------- */
    var EN_VOICE = null;

    function loadTTSVoices() {
        if (!('speechSynthesis' in window)) return;
        var voices = window.speechSynthesis.getVoices();
        if (!voices || !voices.length) return;
        EN_VOICE = voices.find(function(v) { return v.lang === 'en-US'; })
                || voices.find(function(v) { return v.lang === 'en-GB'; })
                || voices.find(function(v) { return v.lang && v.lang.indexOf('en') === 0; })
                || null;
    }

    if ('speechSynthesis' in window) {
        loadTTSVoices();
        if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
            window.speechSynthesis.onvoiceschanged = loadTTSVoices;
        }
    }

    /* ---------- 源偏好与失败记忆（会话级，存 sessionStorage） ---------- */
    function readPref() {
        try { return sessionStorage.getItem('jy_audio_pref') || ''; } catch (e) { return ''; }
    }
    function writePref(id) {
        try { sessionStorage.setItem('jy_audio_pref', id); } catch (e) {}
    }
    function readBad() {
        try { return JSON.parse(sessionStorage.getItem('jy_audio_bad') || '{}'); } catch (e) { return {}; }
    }
    function writeBad(map) {
        try { sessionStorage.setItem('jy_audio_bad', JSON.stringify(map)); } catch (e) {}
    }
    function isBad(sourceId, en) {
        var map = readBad();
        return !!(map[sourceId] && map[sourceId][en]);
    }
    function markBad(sourceId, en) {
        var map = readBad();
        if (!map[sourceId]) map[sourceId] = {};
        map[sourceId][en] = true;
        writeBad(map);
    }
    /* 源尝试顺序：上次成功的源优先，其余按固定顺序 */
    function sourceOrder() {
        var pref = readPref();
        var others = SOURCES.slice();
        if (pref) {
            for (var k = 0; k < others.length; k++) {
                if (others[k].id === pref) {
                    var hit = others.splice(k, 1)[0];
                    others.unshift(hit);
                    break;
                }
            }
        }
        return others;
    }

    /* ---------- 单个源加载（用 Audio 元素，不受 CORS 限制） ---------- */
    function loadFromSource(source, en) {
        return new Promise(function(resolve, reject) {
            var audio = new Audio();
            audio.preload = 'auto';
            audio.src = source.url(en);

            var settled = false;
            var timer = setTimeout(function() {
                if (settled) return;
                settled = true;
                try { audio.src = ''; } catch (e) {}
                reject(new Error('timeout'));
            }, SOURCE_TIMEOUT_MS);

            audio.addEventListener('loadeddata', function() {
                if (settled) return;
                settled = true;
                clearTimeout(timer);
                resolve(audio);
            }, { once: true });
            audio.addEventListener('error', function() {
                if (settled) return;
                settled = true;
                clearTimeout(timer);
                try { audio.src = ''; } catch (e) {}
                reject(new Error('load-error'));
            }, { once: true });
        });
    }

    /* ---------- 多源加载（带缓存；相同文本并发加载会共享同一个任务） ---------- */
    function loadSentence(en) {
        var c = cache[en];
        if (c && c.state === 'ready') return Promise.resolve(true);
        if (c && c.state === 'loading') return c.promise;

        var entry = { state: 'loading', audio: null, sourceId: null, duration: 0 };
        cache[en] = entry;

        var order = sourceOrder();
        var idx = 0;

        function tryNext() {
            while (idx < order.length && isBad(order[idx].id, en)) idx++;
            if (idx >= order.length) {
                entry.state = 'error';
                if (entry.onStateChange) entry.onStateChange('error');
                return Promise.resolve(false);
            }
            var source = order[idx++];
            return loadFromSource(source, en).then(function(audio) {
                entry.audio = audio;
                entry.sourceId = source.id;
                entry.state = 'ready';
                try { entry.duration = audio.duration; } catch (e) { entry.duration = 0; }
                if (!(entry.duration > 0)) entry.duration = 0;
                writePref(source.id);
                if (entry.onStateChange) entry.onStateChange('ready');
                return true;
            }, function() {
                markBad(source.id, en);
                return tryNext();
            });
        }

        entry.promise = tryNext();
        return entry.promise;
    }

    /* 查询某句语音状态：'loading' | 'ready' | 'error' | null（未开始） */
    function getState(en) {
        var c = cache[en];
        return c ? c.state : null;
    }

    /* ---------- 系统 TTS 兜底播放 ---------- */
    function speakSystem(en, opts) {
        if (!('speechSynthesis' in window)) {
            if (opts.onEnd) opts.onEnd();
            return;
        }
        try { window.speechSynthesis.cancel(); } catch (e) {}
        /* 部分浏览器（尤其移动端）语音合成处于 suspended 状态，
           先 resume 一下，避免"点了没声音"导致体验卡顿 */
        try { window.speechSynthesis.resume(); } catch (e) {}
        var u = new SpeechSynthesisUtterance(en);
        u.lang = 'en-US';
        u.rate = 0.85;
        u.pitch = 1;
        u.volume = 1;
        if (EN_VOICE) u.voice = EN_VOICE;
        var est = Math.max(1200, en.length * 80);
        if (opts.onStart) opts.onStart(est);
        u.onend = function() { if (opts.onEnd) opts.onEnd(); };
        u.onerror = function() { if (opts.onEnd) opts.onEnd(); };
        window.speechSynthesis.speak(u);
    }

    /* ---------- 播放管理 ---------- */
    var currentAudio = null;

    function stopCurrent() {
        if (currentAudio) {
            try { currentAudio.pause(); } catch (e) {}
            try { currentAudio.currentTime = 0; } catch (e) {}
            currentAudio = null;
        }
        if ('speechSynthesis' in window) {
            try { window.speechSynthesis.cancel(); } catch (e) {}
        }
    }

    /* 播放已就绪的音频；中途失败自动现场换源，仍失败则降级系统 TTS */
    function playEntry(entry, en, opts) {
        var audio = entry.audio;
        if (!audio) {
            speakSystem(en, opts);
            return;
        }
        currentAudio = audio;
        var done = false;

        function finish() {
            if (done) return;
            done = true;
            if (currentAudio === audio) currentAudio = null;
            if (opts.onEnd) opts.onEnd();
        }

        function degradeToTTS() {
            entry.state = 'error';
            if (opts.onStateChange) opts.onStateChange();
            loadSentence(en).then(function(ok) {
                if (ok && entry.audio && entry.state === 'ready') {
                    playEntry(entry, en, opts);
                } else {
                    speakSystem(en, opts);
                }
            });
        }

        audio.onended = finish;
        audio.onerror = function() {
            if (done) return;
            degradeToTTS();
        };

        var durationMs = (entry.duration > 0 && isFinite(entry.duration))
            ? entry.duration * 1000 : 6000;
        if (opts.onStart) opts.onStart(durationMs);

        var p = null;
        try { p = audio.play(); } catch (e) { p = null; }
        if (p && p.catch) {
            p.catch(function(err) {
                if (done) return;
                degradeToTTS();
            });
        }
    }

    /* ---------- 对外主播放函数 ----------
       opts:
         onStart(durationMs)  开始发声（真人音频为真实时长，系统 TTS 为估算）
         onEnd()              播放结束
         onStateChange()      该句语音状态变化（loading→ready/error），用于刷新按钮 */
    function play(en, opts) {
        opts = opts || {};
        stopCurrent();

        var entry = cache[en];

        /* 1) 已就绪 → 直接播放（秒播，不重复请求） */
        if (entry && entry.state === 'ready' && entry.audio) {
            playEntry(entry, en, opts);
            return;
        }

        /* 2) 还在获取中 → 先用系统 TTS 出声，保证零等待；
             真人语音就绪后，下次播放自动秒播 */
        if (entry && entry.state === 'loading') {
            speakSystem(en, opts);
            if (!entry.onStateChange) entry.onStateChange = opts.onStateChange;
            return;
        }

        /* 3) 无缓存 / 上次全失败 → 现场多源加载 */
        loadSentence(en).then(function(ok) {
            var e2 = cache[en];
            if (ok && e2 && e2.audio && e2.state === 'ready') {
                playEntry(e2, en, opts);
            } else {
                speakSystem(en, opts);
            }
        });
    }

    /* ---------- 限并发预加载队列 ----------
       opts:
         concurrency   并发数（默认 3）
         timeoutMs     整体超时（可选，超时触发 onTimeout）
         onProgress(done, total, ok)  每完成一句
         onTimeout(done, total)       整体超时
         onDone(done, total)          全部完成（或超时后不再等待）
       返回 { cancel() } */
    function prefetchAll(list, opts) {
        opts = opts || {};
        var concurrency = opts.concurrency || 3;
        var queue = (list || []).slice();
        var total = queue.length;
        var doneCount = 0;
        var active = 0;
        var finished = false;
        var timer = null;

        function finish(cb, d, t) {
            if (finished) return;
            finished = true;
            if (timer) { clearTimeout(timer); timer = null; }
            if (cb) cb(d, t);
        }

        if (opts.timeoutMs && total > 0) {
            timer = setTimeout(function() {
                finish(opts.onTimeout, doneCount, total);
            }, opts.timeoutMs);
        }

        function pump() {
            while (active < concurrency && queue.length > 0 && !finished) {
                var en = queue.shift();
                active++;
                loadSentence(en).then(function(ok) {
                    active--;
                    doneCount++;
                    if (opts.onProgress) opts.onProgress(doneCount, total, ok);
                    if (finished) return;
                    if (active === 0 && queue.length === 0) {
                        finish(opts.onDone, doneCount, total);
                    } else {
                        pump();
                    }
                });
            }
        }

        if (total === 0) {
            finished = true;
            if (timer) { clearTimeout(timer); timer = null; }
            if (opts.onDone) opts.onDone(0, 0);
            return { cancel: function() {} };
        }

        pump();
        return {
            cancel: function() {
                finished = true;
                if (timer) { clearTimeout(timer); timer = null; }
            }
        };
    }

    return {
        loadSentence: loadSentence,
        getState: getState,
        play: play,
        stop: stopCurrent,
        prefetchAll: prefetchAll,
        sourceName: function(id) {
            for (var i = 0; i < SOURCES.length; i++) {
                if (SOURCES[i].id === id) return SOURCES[i].name;
            }
            return '';
        }
    };
})();
