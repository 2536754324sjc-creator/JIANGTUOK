/* ============================================================
   句游英语 · 全站公共脚本（common.js）
   内容：登录检查 / 侧边栏渲染 / 页面跳转 / 点击提示 / 网络时间 / HTML转义
   用法：所有页面共享。要改登录逻辑、侧边栏菜单、跳转行为，
         只改这一个文件即可，不用再逐个改 10 多个页面。
   接口：JUYOU.requireLogin()  检查登录（未登录跳 index.html）
         JUYOU.renderSidebar() 渲染侧边栏（页面只需留空 <aside id="jy-sidebar">）
   ============================================================ */
(function() {
    'use strict';

    /* ============================================================
       1. 登录状态检查
       ============================================================ */
    function requireLogin() {
        var userStr = localStorage.getItem('juyou_user');
        if (!userStr) {
            window.location.href = 'index.html';
            return null;
        }
        var user = null;
        try {
            user = JSON.parse(userStr);
        } catch (e) {
            localStorage.removeItem('juyou_user');
            window.location.href = 'index.html';
            return null;
        }
        if (!user || !user.phone) {
            localStorage.removeItem('juyou_user');
            window.location.href = 'index.html';
            return null;
        }
        window.currentUser = user;
        return user;
    }

    /* ============================================================
       2. 侧边栏菜单配置（★ 改这里 = 全站侧边栏生效）
          每个页面只需保留：
          <aside class="sidebar" id="jy-sidebar"></aside>
       ============================================================ */
    var NAV_GROUPS = [
        {
            title: '学习',
            items: [
                { href: 'home.html',       icon: '🏠', label: '首页' },
                { href: 'my-courses.html', icon: '📁', label: '我的课程' },
                { href: 'mall.html',       icon: '📚', label: '课程包商城' },
                { href: 'archive.html',    icon: '🗂️', label: '学习档案' },
                { href: 'growth.html',     icon: '📈', label: '成长分析' }
            ]
        },
        {
            title: '社交',
            items: [
                { href: 'community.html', icon: '👥', label: '社区' },
                { href: 'community.html', icon: '⚔️', label: 'PK 对战' },
                { href: 'community.html', icon: '🏆', label: '排行榜' }
            ]
        },
        {
            title: '我的',
            items: [
                { href: 'profile.html', icon: '👤', label: '个人中心' },
                { href: 'promote.html', icon: '💰', label: '推广返佣' },
                { href: 'plugin.html',  icon: '🧩', label: '浏览器插件' }
            ]
        }
    ];

    /* 课程详情页(course.html)归入"课程包商城"高亮 */
    var ACTIVE_PAGE_MAP = {
        'course.html': 'mall.html'
    };

    function getCurrentFile() {
        return window.location.pathname.split('/').pop() || 'home.html';
    }

    function getActivePage() {
        var f = getCurrentFile();
        return ACTIVE_PAGE_MAP[f] || f;
    }

    function renderSidebar() {
        var mount = document.getElementById('jy-sidebar');
        if (!mount) return;
        var active = getActivePage();
        var html = '';
        html += '<div class="logo">' +
                    '<span class="logo-icon">🎯</span>' +
                    '<span class="logo-text">句游英语</span>' +
                '</div>';
        html += '<nav>';
        NAV_GROUPS.forEach(function(group) {
            html += '<div class="nav-group">' +
                        '<div class="nav-group-title">' + group.title + '</div>';
            group.items.forEach(function(item) {
                var cls = (item.href === active) ? 'nav-item on' : 'nav-item';
                html += '<div class="' + cls + '" data-href="' + item.href + '">' +
                            '<span class="nav-icon">' + item.icon + '</span>' +
                            '<span class="nav-text">' + item.label + '</span>' +
                        '</div>';
            });
            html += '</div>';
        });
        html += '</nav>';
        html += '<div class="sidebar-bottom">' +
                    '<div class="vip-card" data-href="profile.html">' +
                        '<div class="vip-title">👑 升级会员</div>' +
                        '<div class="vip-desc">解锁全部课程<br>AI 助手无限次提问</div>' +
                    '</div>' +
                '</div>';
        mount.innerHTML = html;
    }

    /* ============================================================
       3. data-href 页面跳转（点击带 data-href 的元素即跳转；
          点当前页自己的菜单项不重复跳转）
       ============================================================ */
    function initNav() {
        var currentFile = getCurrentFile();
        document.addEventListener('click', function(e) {
            var el = e.target && e.target.closest ? e.target.closest('[data-href]') : null;
            if (!el) return;
            var href = el.getAttribute('data-href');
            if (!href || href === currentFile) return;
            e.stopPropagation();
            window.location.href = href;
        });
    }

    /* ============================================================
       4. data-tip 点击提示
       ============================================================ */
    function initTips() {
        document.addEventListener('click', function(e) {
            var el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
            if (!el) return;
            e.stopPropagation();
            alert(el.getAttribute('data-tip'));
        });
    }

    /* ============================================================
       5. 网络时间校准（JYTime）
       ============================================================ */
    window.JYTime = (function() {
        var offset = 0;
        var synced = false;
        var syncPromise = null;
        var syncedSource = '';

        function fetchWithTimeout(url, opts, timeoutMs, parseFn) {
            return new Promise(function(resolve) {
                if (!window.fetch) return resolve(0);
                var controller = ('AbortController' in window) ? new AbortController() : null;
                var finished = false;
                var timer = setTimeout(function() {
                    if (finished) return;
                    finished = true;
                    if (controller) { try { controller.abort(); } catch (e) {} }
                    resolve(0);
                }, timeoutMs);
                var fetchOpts = Object.assign({ cache: 'no-store' }, opts || {});
                if (controller) fetchOpts.signal = controller.signal;
                fetch(url, fetchOpts)
                    .then(function(res) {
                        if (finished) return 0;
                        return parseFn(res);
                    })
                    .then(function(ts) {
                        if (finished) return;
                        finished = true;
                        clearTimeout(timer);
                        resolve(ts > 0 ? ts : 0);
                    })
                    .catch(function() {
                        if (finished) return;
                        finished = true;
                        clearTimeout(timer);
                        resolve(0);
                    });
            });
        }

        /* 源 1：Cloudflare trace */
        function tryCloudflare() {
            return fetchWithTimeout(
                'https://www.cloudflare.com/cdn-cgi/trace',
                {},
                2500,
                function(res) {
                    return res.text().then(function(text) {
                        var m = text.match(/^ts=([\d.]+)/m);
                        if (!m) return 0;
                        return Math.round(parseFloat(m[1]) * 1000);
                    });
                }
            ).then(function(ts) {
                return { ts: ts || 0, source: 'Cloudflare' };
            });
        }

        /* 源 2：苏宁时间（JSONP 兜底） */
        function trySuning() {
            return new Promise(function(resolve) {
                var cbName = '__jySn_' + Date.now() + '_' + Math.floor(Math.random() * 1e6);
                var script = document.createElement('script');
                var done = false;

                function cleanup() {
                    if (script.parentNode) script.parentNode.removeChild(script);
                    try { delete window[cbName]; } catch (e) { window[cbName] = undefined; }
                }

                var timer = setTimeout(function() {
                    if (done) return;
                    done = true;
                    cleanup();
                    resolve({ ts: 0, source: '苏宁' });
                }, 2500);

                window[cbName] = function(data) {
                    if (done) return;
                    done = true;
                    clearTimeout(timer);
                    var ts = 0;
                    try {
                        if (data && data.sysTime1) {
                            var s = String(data.sysTime1);
                            var year = parseInt(s.slice(0, 4), 10);
                            var mon = parseInt(s.slice(4, 6), 10) - 1;
                            var day = parseInt(s.slice(6, 8), 10);
                            var hr = parseInt(s.slice(8, 10), 10);
                            var min = parseInt(s.slice(10, 12), 10);
                            var sec = parseInt(s.slice(12, 14), 10);
                            ts = new Date(year, mon, day, hr, min, sec).getTime();
                        }
                    } catch (e) {}
                    cleanup();
                    resolve({ ts: ts > 0 ? ts : 0, source: '苏宁' });
                };

                script.src = 'https://quan.suning.com/getSysTime.do?callback=' + cbName;
                script.onerror = function() {
                    if (done) return;
                    done = true;
                    clearTimeout(timer);
                    cleanup();
                    resolve({ ts: 0, source: '苏宁' });
                };
                document.head.appendChild(script);
            });
        }

        function sync() {
            if (syncPromise) return syncPromise;
            syncPromise = Promise.all([tryCloudflare(), trySuning()])
                .then(function(results) {
                    console.log('[JYTime] 各源结果：', results);
                    var best = null;
                    for (var i = 0; i < results.length; i++) {
                        if (results[i].ts > 0) { best = results[i]; break; }
                    }
                    if (best) {
                        var localTs = Date.now();
                        var diff = best.ts - localTs;
                        if (Math.abs(diff) < 86400000 * 365) {
                            offset = diff;
                            synced = true;
                            syncedSource = best.source;
                            console.log('[JYTime] ✅ 同步成功（来源：' + best.source + '），校正 ' + diff + ' 毫秒');
                            return true;
                        }
                    }
                    console.log('[JYTime] ⚠️ 所有时间源均失败，使用本机时间');
                    return false;
                });
            return syncPromise;
        }

        function now() { return Date.now() + offset; }
        function date() { return new Date(now()); }
        function getOffset() { return offset; }
        function isSynced() { return synced; }
        function getSource() { return syncedSource; }

        return {
            sync: sync,
            now: now,
            date: date,
            getOffset: getOffset,
            isSynced: isSynced,
            getSource: getSource
        };
    })();

    /* ============================================================
       6. HTML 转义
       ============================================================ */
    function escapeHtml(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /* ============================================================
       7. 用户档案（注册信息：用户名、英语水平）
       存放在 localStorage 的 juyou_user 里，所有页面共享
       ============================================================ */
    function getProfile() {
        try {
            var p = JSON.parse(localStorage.getItem('juyou_user'));
            return (p && p.phone) ? p : null;
        } catch (e) {
            return null;
        }
    }

    function saveProfile(profile) {
        try {
            localStorage.setItem('juyou_user', JSON.stringify(profile));
        } catch (e) {}
        window.currentUser = profile;
        return profile;
    }

    /* 用户编号：从 1001 开始，每注册一个新用户 +1（暂存本机） */
    function nextUserNumber() {
        var n = 1000;
        try {
            n = parseInt(localStorage.getItem('jy_user_counter'), 10) || 1000;
        } catch (e) {}
        n += 1;
        try {
            localStorage.setItem('jy_user_counter', String(n));
        } catch (e) {}
        return n;
    }

    /* ============================================================
       对外接口 + 自动初始化
       ============================================================ */
    window.JUYOU = {
        requireLogin: requireLogin,
        renderSidebar: renderSidebar,
        initNav: initNav,
        initTips: initTips,
        getProfile: getProfile,
        saveProfile: saveProfile,
        nextUserNumber: nextUserNumber
    };

    initNav();
    initTips();
    document.addEventListener('DOMContentLoaded', renderSidebar);
})();
