/* ============================================================
   句游英语 - 云端同步模块 juyou-sync.js
   ------------------------------------------------------------
   功能：
   1. 用手机号自动注册/登录 Supabase 账号（手机号 → 假邮箱）
   2. 拦截 localStorage.setItem，数据变化后 3 秒自动上传云端
   3. 登录时自动从云端拉取数据（有云端数据则覆盖本地）
   4. 暴露 JYSync.loginAndSync(phone) / JYSync.logout() 等 API
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

    /* ---------- 动态加载 supabase-js ---------- */
    var client = null;
    var initPromise = new Promise(function(resolve, reject) {
        if (window.supabase) {
            client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return resolve(client);
        }
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = function() {
            if (!window.supabase) {
                console.error('[JYSync] supabase-js 加载后未就绪');
                return reject(new Error('supabase-js not ready'));
            }
            client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('[JYSync] supabase 客户端已初始化');
            resolve(client);
        };
        script.onerror = function() {
            console.error('[JYSync] supabase-js CDN 加载失败');
            reject(new Error('supabase-js load failed'));
        };
        document.head.appendChild(script);
    });

    /* ---------- 手机号 → 假邮箱 / 密码 ---------- */
    function phoneToEmail(phone) {
        return 'p' + phone + '@juyou.local';
    }
    function phoneToPassword(phone) {
        // 用手机号生成固定密码（同一手机号总是同一个密码）
        return 'JY' + phone.slice(-6) + '_sync!';
    }

    /* ---------- 登录/注册（一步完成） ---------- */
    function login(phone) {
        return initPromise.then(function() {
            var email = phoneToEmail(phone);
            var password = phoneToPassword(phone);

            // 先尝试登录
            return client.auth.signInWithPassword({ email: email, password: password })
                .then(function(res) {
                    if (res.error) {
                        // 密码错误或用户不存在 → 尝试注册
                        console.log('[JYSync] 登录失败，尝试注册：', res.error.message);
                        return client.auth.signUp({ email: email, password: password });
                    }
                    return res;
                })
                .then(function(res) {
                    if (res.error) {
                        // 注册也可能失败（比如已存在但密码不对）
                        // 这种情况极少，因为密码是手机号确定的
                        throw res.error;
                    }
                    console.log('[JYSync] ✓ 登录成功：', res.data.user ? res.data.user.id : 'no user');
                    return res.data.user;
                });
        });
    }

    /* ---------- 获取当前登录用户 ---------- */
    function getUser() {
        return initPromise.then(function() {
            return client.auth.getUser().then(function(res) {
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
                        console.error('[JYSync] 上传失败：', res.error);
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
                        console.error('[JYSync] 拉取失败：', res.error);
                        throw res.error;
                    }
                    if (!res.data) {
                        console.log('[JYSync] 云端无数据（首次登录）');
                        return null;
                    }
                    // 存回本地 localStorage
                    SYNC_KEYS.forEach(function(key) {
                        var colName = keyToColumn(key);
                        var val = res.data[colName];
                        if (val) {
                            try {
                                localStorage.setItem(key, JSON.stringify(val));
                            } catch (e) {}
                        }
                    });
                    console.log('[JYSync] ✓ 已从云端拉取数据');
                    return res.data;
                });
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

    /* ---------- 登录 + 首次同步（核心入口） ---------- */
    function loginAndSync(phone) {
        return login(phone).then(function() {
            return pullAll();
        }).then(function(cloudData) {
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
                // 静默失败（比如未登录时不推送）
            });
        }, 3000);
    }

    /* ---------- 拦截 localStorage.setItem ---------- */
    var originalSetItem = localStorage.setItem.bind(localStorage);
    localStorage.setItem = function(key, value) {
        originalSetItem(key, value);
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

    console.log('[JYSync] 模块已就绪');
})();
