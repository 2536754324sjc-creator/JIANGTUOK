/* ============================================================
   句游英语 - 云端同步模块 juyou-sync.js （v2 修复版）
   ------------------------------------------------------------
   本版修复：
   1. 假邮箱域名改为 @example.com（Supabase 接受）
   2. 增加 isPulling 标志，拉取云端数据时不触发上传（防死循环）
   3. supabase-js CDN 改为多源兜底（jsdelivr → unpkg → skypack）
   4. 登录失败重试逻辑（处理"已注册但未确认"的老账号）
   5. 控制台日志更详细，方便排查
   ============================================================ */
(function() {
    'use strict';

    /* ---------- 配置 ---------- */
    var SUPABASE_URL = 'https://iakhuzyvwcgxhlrdguxk.supabase.co';
    var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlha2h1enl2d2NneGhscmRndXhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0MjEyMTQsImV4cCI6MjEwNjk5NzIxNH0.iklL7o0rk-rVXLH5YEYXAcWBNLD80wcRnaGZ58YrvQM';

    /* 需要同步到云端的 localStorage 键名 */
    var SYNC_KEYS = [
        'juyou_study',
        'juyou_community',
        'juyou_mall',
        'juyou_promote',
        'juyou_plugin',
        'juyou_video_progress'
    ];

    /* ---------- 状态 ---------- */
    var client = null;
    var isPulling = false;  // ★ 拉取期间标记，防止 setItem 触发上传

    /* ---------- 动态加载 supabase-js（多 CDN 兜底） ---------- */
    var CDN_LIST = [
        'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
        'https://unpkg.com/@supabase/supabase-js@2',
        'https://cdn.skypack.dev/@supabase/supabase-js@2'
    ];

    var initPromise = new Promise(function(resolve, reject) {
        // 如果页面上已经有 supabase（比如手动引入过），直接用
        if (window.supabase) {
            client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('[JYSync] 使用页面上已有的 supabase');
            return resolve(client);
        }

        var idx = 0;

        function tryNextCdn() {
            if (idx >= CDN_LIST.length) {
                console.error('[JYSync] ✗ 所有 CDN 均加载失败');
                return reject(new Error('supabase-js CDN 全部加载失败'));
            }
            var url = CDN_LIST[idx++];
            var script = document.createElement('script');
            script.src = url;

            script.onload = function() {
                if (!window.supabase) {
                    console.warn('[JYSync] ' + url + ' 已加载但 supabase 未就绪，尝试下一个');
                    return tryNextCdn();
                }
                client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                console.log('[JYSync] ✓ supabase 客户端已初始化（来源：' + url + '）');
                resolve(client);
            };

            script.onerror = function() {
                console.warn('[JYSync] ✗ CDN 加载失败：' + url + '，尝试下一个');
                tryNextCdn();
            };

            document.head.appendChild(script);
        }

        tryNextCdn();
    });

    /* ---------- 手机号 → 假邮箱 / 密码 ---------- */
    function phoneToEmail(phone) {
        // ★ 改用 example.com（Supabase 接受，不会被保留域名校验拦）
        return 'p' + phone + '@example.com';
    }

    function phoneToPassword(phone) {
        // 用手机号生成固定密码（同一手机号总是同一个密码）
        return 'JY' + phone.slice(-6) + '_sync!';
    }

    /* ---------- 登录 / 注册（一步完成） ---------- */
    function login(phone) {
        return initPromise.then(function() {
            var email = phoneToEmail(phone);
            var password = phoneToPassword(phone);

            // 先尝试登录
            return client.auth.signInWithPassword({ email: email, password: password })
                .then(function(res) {
                    if (!res.error && res.data && res.data.session) {
                        console.log('[JYSync] ✓ 登录成功：' + res.data.user.id);
                        return res.data.user;
                    }

                    console.log('[JYSync] 登录未成功（' +
                        (res.error ? res.error.message : '无 session') +
                        '），尝试注册');

                    // 登录失败 → 尝试注册
                    return client.auth.signUp({ email: email, password: password })
                        .then(function(signupRes) {
                            if (signupRes.error) {
                                var msg = (signupRes.error.message || '').toLowerCase();

                                // 若提示"已存在"，可能是之前未确认的老账号
                                // 现在 Confirm signup 已关闭，再登录一次通常能通过
                                if (msg.indexOf('already') >= 0 || msg.indexOf('registered') >= 0) {
                                    console.log('[JYSync] 用户已存在，重试登录');
                                    return client.auth.signInWithPassword({ email: email, password: password })
                                        .then(function(retryRes) {
                                            if (retryRes.error || !retryRes.data.session) {
                                                throw new Error('账号已存在但登录失败：' +
                                                    (retryRes.error ? retryRes.error.message : '无 session'));
                                            }
                                            console.log('[JYSync] ✓ 重试登录成功：' + retryRes.data.user.id);
                                            return retryRes.data.user;
                                        });
                                }
                                throw signupRes.error;
                            }

                            // 注册成功，但检查是否有 session
                            if (!signupRes.data.session) {
                                throw new Error('注册后未获得登录状态，请确认 Supabase 已关闭 Confirm signup');
                            }

                            console.log('[JYSync] ✓ 注册并登录成功：' + signupRes.data.user.id);
                            return signupRes.data.user;
                        });
                });
        });
    }

    /* ---------- 获取当前登录用户 ---------- */
    function getUser() {
        return initPromise.then(function() {
            return client.auth.getUser().then(function(res) {
                if (res.error) return null;
                return res.data ? res.data.user : null;
            });
        });
    }

    /* ---------- 登出 ---------- */
    function logout() {
        return initPromise.then(function() {
            return client.auth.signOut();
        });
    }

    /* ---------- localStorage 键名 → 数据库列名 ---------- */
    function keyToColumn(key) {
        var map = {
            'juyou_study': 'study_data',
            'juyou_community': 'community_data',
            'juyou_mall': 'mall_data',
            'juyou_promote': 'promote_data',
            'juyou_plugin': 'plugin_data',
            'juyou_video_progress': 'video_progress'
        };
        return map[key] || null;
    }

    /* ---------- 上传所有数据到云端 ---------- */
    function pushAll() {
        return getUser().then(function(user) {
            if (!user) {
                console.log('[JYSync] 未登录，跳过上传');
                return null;
            }

            var payload = {
                id: user.id,
                updated_at: new Date().toISOString()
            };

            SYNC_KEYS.forEach(function(key) {
                var colName = keyToColumn(key);
                if (!colName) return;
                try {
                    var raw = localStorage.getItem(key);
                    payload[colName] = raw ? JSON.parse(raw) : {};
                } catch (e) {
                    payload[colName] = {};
                }
            });

            return client.from('user_sync').upsert(payload, { onConflict: 'id' })
                .then(function(res) {
                    if (res.error) {
                        console.error('[JYSync] ✗ 上传失败：', res.error);
                        throw res.error;
                    }
                    console.log('[JYSync] ✓ 已上传到云端');
                    return true;
                });
        });
    }

    /* ---------- 从云端拉取所有数据 ---------- */
    function pullAll() {
        return getUser().then(function(user) {
            if (!user) {
                console.log('[JYSync] 未登录，跳过拉取');
                return null;
            }

            return client.from('user_sync').select('*').eq('id', user.id).maybeSingle()
                .then(function(res) {
                    if (res.error) {
                        console.error('[JYSync] ✗ 拉取失败：', res.error);
                        throw res.error;
                    }
                    if (!res.data) {
                        console.log('[JYSync] 云端无数据（首次登录）');
                        return null;
                    }

                    // ★ 关键：拉取期间禁止触发上传
                    isPulling = true;
                    try {
                        SYNC_KEYS.forEach(function(key) {
                            var colName = keyToColumn(key);
                            if (!colName) return;
                            var val = res.data[colName];
                            if (val) {
                                try {
                                    localStorage.setItem(key, JSON.stringify(val));
                                } catch (e) {}
                            }
                        });
                    } finally {
                        isPulling = false;
                    }

                    console.log('[JYSync] ✓ 已从云端拉取数据');
                    return res.data;
                });
        });
    }

    /* ---------- 登录 + 首次同步（核心入口） ---------- */
    function loginAndSync(phone) {
        return login(phone)
            .then(function() {
                return pullAll();
            })
            .then(function(cloudData) {
                if (cloudData) {
                    // 云端有数据 → 已覆盖本地
                    return { source: 'cloud' };
                } else {
                    // 云端无数据 → 上传本地
                    return pushAll().then(function() {
                        return { source: 'local' };
                    });
                }
            });
    }

    /* ---------- 自动推送（防抖 3 秒） ---------- */
    var pushTimer = null;

    function schedulePush() {
        if (pushTimer) clearTimeout(pushTimer);
        pushTimer = setTimeout(function() {
            pushAll().catch(function(err) {
                // 静默失败（未登录时不推送是正常的）
            });
        }, 3000);
    }

    /* ---------- 拦截 localStorage.setItem ---------- */
    var originalSetItem = localStorage.setItem.bind(localStorage);

    localStorage.setItem = function(key, value) {
        originalSetItem(key, value);

        // ★ 拉取期间不触发上传，防止"拉下来又推回去"
        if (isPulling) return;

        if (SYNC_KEYS.indexOf(key) >= 0) {
            schedulePush();
        }
    };

    /* ---------- 暴露 API ---------- */
    window.JYSync = {
        login: login,
        logout: logout,
        getUser: getUser,
        push: pushAll,
        pull: pullAll,
        loginAndSync: loginAndSync,
        getClient: function() { return initPromise; }
    };

    console.log('[JYSync] 模块已就绪（v2）');
})();
