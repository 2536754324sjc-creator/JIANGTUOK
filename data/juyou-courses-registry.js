/* ============================================================
   句游英语 - 课程库（唯一数据源）
   ============================================================
   ★ 以后新增课程：只需要往下面 courses 数组里加一个对象即可
   ★ 商城、我的课程、课程详情三个页面都会自动读取到
   ★ 加上一门课程的标准模板：

   {
       courseId: 'my_new_course',           // 英文 ID，不能重复，只能用英文和下划线
       title: '我的新课程',                   // 展示用标题
       emoji: '📗',                         // 封面 emoji 图标
       grad: 5,                             // 封面渐变色，1-8 里挑一个
       level: '初级',                        // 入门 / 初级 / 中级 / 高级
       learners: 0,                          // 学习人数（展示用数字）
       description: '课程简介...',            // 详情页上的描述文字
       isMemberOnly: true,                   // 是否会员专享，true/false
       units: [                              // 课程目录，每个对象是一个单元
           {
               title: 'Unit 1 Hello',
               desc: '本课学习打招呼',
               sentenceCount: 20,
               vocabulary: ['hello', 'hi'],
               phrases: ['say hello'],
               grammar: ['问候语']
           }
       ]
   }
   ============================================================ */
(function() {
    'use strict';

    var courses = [

        /* ================================================================
           1. Kid's Box 1
           ================================================================ */
        {
            courseId: 'kids_box_1',
            title: "Kid's Box 1",
            emoji: '📘',
            grad: 4,
            level: '初级',
            learners: 4156,
            isMemberOnly: true,
            description: "《Kid's Box 1》是剑桥国际少儿英语启蒙第一级，通过 Star 一家和玩具伙伴们的生动故事，以歌曲、游戏、卡通情景剧等多种形式，全面培养孩子的英语听说能力，打下坚实的语音与词汇基础。特别适合小学1-2年级（有一定字母基础）的孩子开启英语启蒙之旅！",
            units: [
                { title: 'Unit 1 Hello again!',   desc: '本课主要学习介绍家庭成员，以及询问别人姓名', sentenceCount: 22,
                  vocabulary: ['hello', 'name', 'friend', 'family', 'brother', 'sister'],
                  phrases: ['hello, I am', 'what is your name', 'this is my'],
                  grammar: ["问候语和自我介绍", "What's your name? 句型"] },
                { title: 'Unit 2 Back to School', desc: '本课主要围绕教室场景展开，学习教室物品', sentenceCount: 29,
                  vocabulary: ['classroom', 'pencil', 'book', 'chair', 'desk'],
                  phrases: ['go to school', 'in the classroom', 'sit down'],
                  grammar: ["What's this? / It's a ...", "冠词 a / an 用法"] },
                { title: 'Unit 3 Play time!',     desc: '本课围绕玩具主题，学习玩具名称和玩耍表达', sentenceCount: 26,
                  vocabulary: ['toy', 'ball', 'doll', 'kite', 'car'],
                  phrases: ['play with', 'I like playing', 'let us play'],
                  grammar: ["I like + 名词", "祈使句 Let's ..."] },
                { title: 'Unit 4 At home',        desc: '本课围绕家庭成员展开，介绍家庭成员称谓', sentenceCount: 28,
                  vocabulary: ['mother', 'father', 'grandma', 'grandpa', 'baby'],
                  phrases: ['my family', 'in my family', 'look at'],
                  grammar: ["物主代词 my / your", "This is my ..."] },
                { title: 'Unit 5 Our pets',       desc: '本课围绕宠物主题，学习宠物名称和简单描述', sentenceCount: 24,
                  vocabulary: ['pet', 'dog', 'cat', 'bird', 'fish'],
                  phrases: ['I have a', 'This is my pet', 'It is a'],
                  grammar: ["I have got ...", "形容词描述宠物"] },
                { title: 'Unit 6 My face',        desc: '本课围绕五官部位，学习身体部位的英语表达', sentenceCount: 25,
                  vocabulary: ['face', 'eyes', 'nose', 'mouth', 'ears'],
                  phrases: ['I have got', 'look at my', 'touch your'],
                  grammar: ["have got 句型", "身体部位表达"] },
                { title: 'Unit 7 Wild animals',   desc: '本课围绕野生动物，学习常见动物名称', sentenceCount: 27,
                  vocabulary: ['lion', 'tiger', 'elephant', 'monkey', 'panda'],
                  phrases: ['wild animal', 'in the zoo', 'look at the'],
                  grammar: ["形容词描述动物", "一般现在时"] },
                { title: 'Unit 8 My clothes',     desc: '本课围绕服装主题，学习常见衣物名称', sentenceCount: 26,
                  vocabulary: ['shirt', 'skirt', 'hat', 'shoes', 'socks'],
                  phrases: ['put on', 'take off', 'I like my'],
                  grammar: ["颜色 + 衣物表达", "I'm wearing ..."] }
            ]
        },

        /* ================================================================
           2. Kid's Box 2
           ================================================================ */
        {
            courseId: 'kids_box_2',
            title: "Kid's Box 2",
            emoji: '🎯',
            grad: 2,
            level: '初级',
            learners: 6384,
            isMemberOnly: true,
            description: "《Kid's Box 2》（剑桥国际少儿英语第2级）是一门\"听说读写全面起步与剑桥考级冲刺课\"。延续 Star 一家的生动故事，由\"纯听说\"平稳过渡到\"读写结合\"，系统巩固自然拼读规律，拓展日常场景表达与基础语法句型，全面对标剑桥少儿英语一级（YLE Starters）满盾标准。特别适合小学1-2年级（有一定字母/简单听说基础）、想要稳步提升校内成绩、实现自信自主阅读并考取首张国际权威证书的孩子！",
            units: [
                { title: 'Unit 1 Hello again!', desc: '本课主要学习介绍家庭成员，以及询问...', sentenceCount: 22,
                  vocabulary: ['family', 'brother', 'sister', 'parents', 'friend'],
                  phrases: ['hello I am', 'this is', 'nice to meet'],
                  grammar: ["自我介绍句型", "物主代词"] },
                { title: 'Unit 2 Back to School', desc: '本课主要围绕教室场景展开，学习教室...', sentenceCount: 29,
                  vocabulary: ['classroom', 'teacher', 'student', 'board', 'book'],
                  phrases: ['go to school', 'in the classroom'],
                  grammar: ["What's this?", "There be 句型"] },
                { title: 'Unit 3 Play time!', desc: '本课围绕玩耍场景，学习游戏表达', sentenceCount: 26,
                  vocabulary: ['play', 'game', 'toy', 'ball', 'kite'],
                  phrases: ['let us play', 'I like to', 'have fun'],
                  grammar: ["Let's + 动词", "I like + doing"] },
                { title: 'Unit 4 At home', desc: '本课围绕居家场景，学习家中物品', sentenceCount: 27,
                  vocabulary: ['home', 'room', 'kitchen', 'bedroom', 'table'],
                  phrases: ['at home', 'in the room'],
                  grammar: ["方位介词", "There be 句型"] },
                { title: 'Unit 5 Our pets', desc: '本课围绕宠物，学习动物表达', sentenceCount: 25,
                  vocabulary: ['pet', 'dog', 'cat', 'rabbit', 'hamster'],
                  phrases: ['I have got', 'look after'],
                  grammar: ["have got 句型", "形容词描述"] },
                { title: 'Unit 6 My face', desc: '本课围绕五官部位', sentenceCount: 24,
                  vocabulary: ['face', 'eyes', 'nose', 'mouth', 'hair'],
                  phrases: ['I have got', 'touch your'],
                  grammar: ["have got 句型", "身体部位"] }
            ]
        },

        /* ================================================================
           3. 互联网大厂程序员职场英语口语
           ================================================================ */
        {
            courseId: 'dev_english',
            title: '互联网大厂程序员职场英语口语',
            emoji: '💻',
            grad: 6,
            level: '中级',
            learners: 3929,
            isMemberOnly: true,
            description: "《互联网大厂程序员职场英语口语》专为互联网从业者打造，覆盖需求评审、系统架构、敏捷开发、Code Review、线上问题排查、跨时区协作等真实工作场景。帮助技术人员用英语流畅进行技术讨论、文档撰写和跨国团队协作，提升职场竞争力！",
            units: [
                { title: '需求分析与功能讨论', desc: '70 句 · 学习产品需求沟通的表达方式', sentenceCount: 70,
                  vocabulary: ['feature', 'requirement', 'user story', 'stakeholder', 'backlog'],
                  phrases: ['we need to', 'the requirement is', 'let us discuss'],
                  grammar: ["技术讨论常用句型", "被动语态描述需求"] },
                { title: '系统架构与技术方案', desc: '86 句 · 掌握技术选型与架构沟通', sentenceCount: 86,
                  vocabulary: ['architecture', 'scalable', 'database', 'microservice', 'cache'],
                  phrases: ['we decided to', 'the design is', 'based on'],
                  grammar: ["技术对比句型", "原因/结果表达"] },
                { title: '敏捷开发与每日站会', desc: '79 句 · 敏捷开发日常沟通', sentenceCount: 79,
                  vocabulary: ['sprint', 'standup', 'ticket', 'blocker', 'milestone'],
                  phrases: ['I am working on', 'blocked by', 'will finish by'],
                  grammar: ["现在进行时描述进度", "将来时表达计划"] },
                { title: 'Code Review 与代码讨论', desc: '88 句 · 代码评审时的英语沟通', sentenceCount: 88,
                  vocabulary: ['refactor', 'bug', 'commit', 'merge', 'review'],
                  phrases: ['could you please', 'looks good to me', 'need to fix'],
                  grammar: ["礼貌请求", "给出建议"] },
                { title: '线上问题排查', desc: '82 句 · 生产事故应急沟通', sentenceCount: 82,
                  vocabulary: ['incident', 'root cause', 'rollback', 'monitoring', 'alert'],
                  phrases: ['we are investigating', 'the issue is', 'fix is on the way'],
                  grammar: ["紧急情况表达", "优先级描述"] },
                { title: '跨时区团队协作', desc: '78 句 · 跨国团队远程协作', sentenceCount: 78,
                  vocabulary: ['timezone', 'handover', 'sync', 'async', 'follow-up'],
                  phrases: ['as discussed', 'let us sync up', 'thank you for'],
                  grammar: ["书面沟通语气", "会议安排表达"] }
            ]
        },

        /* ================================================================
           4. 小小动物园探险家
           ================================================================ */
        {
            courseId: 'zoo_explorer',
            title: '小小动物园探险家：6-8岁英语入门',
            emoji: '🦁',
            grad: 7,
            level: '入门',
            learners: 1260,
            isMemberOnly: false,
            description: "通过动物园主题，帮助6-8岁儿童学习基础英语表达，培养语言兴趣与家庭互动能力。从认识动物名称开始，逐步学习描述动物外形、动物栖息地、家庭动物园参观等真实场景表达。",
            units: [
                { title: 'Unit 1 动物园欢迎你',   desc: '认识常见动物，学习一般现在时', sentenceCount: 10,
                  vocabulary: ['zoo', 'animal', 'lion', 'elephant', 'monkey', 'panda'],
                  phrases: ['go to the zoo', 'look at', 'feed the animals'],
                  grammar: ["一般现在时基本结构", "第三人称单数加 s"] },
                { title: 'Unit 2 认识动物朋友们', desc: '用形容词描述动物外形', sentenceCount: 10,
                  vocabulary: ['big', 'small', 'tall', 'long', 'cute', 'fluffy'],
                  phrases: ['big ears', 'long neck', 'fluffy fur'],
                  grammar: ["描述性形容词", "形容词放在名词前"] },
                { title: 'Unit 3 动物们的家',     desc: '学习栖息地词汇和方位介词', sentenceCount: 10,
                  vocabulary: ['forest', 'ocean', 'desert', 'jungle', 'nest', 'cave'],
                  phrases: ['live in', 'live on', 'live under'],
                  grammar: ["方位介词 in / on / under", "一般现在时描述栖息地"] },
                { title: 'Unit 4 和家人一起逛动物园', desc: '学习名词所有格与物主代词', sentenceCount: 10,
                  vocabulary: ['family', 'ticket', 'camera', 'cage'],
                  phrases: ['family trip', 'take photos', 'buy tickets'],
                  grammar: ["名词所有格 's", "物主代词 mine / yours / his / hers"] },
                { title: 'Unit 5 动物园里的日常活动', desc: '学习动词短语和现在进行时', sentenceCount: 10,
                  vocabulary: ['feed', 'watch', 'clean', 'swim', 'climb', 'jump'],
                  phrases: ['feed the animals', 'watch the show', 'play with toys'],
                  grammar: ["现在进行时 be + doing", "动词 ing 形式变化"] }
            ]
        },

        /* ================================================================
           快乐家庭英语启蒙
           ================================================================ */
        {
            courseId: 'happy_family_english',
            title: '快乐家庭英语启蒙',
            emoji: '👨‍👩‍👧',
            grad: 3,
            level: '入门',
            learners: 2108,
            isMemberOnly: false,
            description: '专为6-8岁儿童设计的家庭主题英语课程，通过有趣的家庭场景学习家庭成员、居家物品、日常活动和家庭时光等地道表达。每句话都配有语法结构标注，帮助孩子在真实情境中自然习得英语。',
            units: [
                { title: 'U1 认识我的家人', desc: '学习家庭成员的称呼和表达', sentenceCount: 10,
                  vocabulary: ['father', 'mother', 'brother', 'sister', 'grandfather', 'grandmother', 'uncle', 'aunt', 'cousin', 'family'],
                  phrases: ['family members', 'play with', 'help with', 'live with', 'look like', 'take care of'],
                  grammar: ['一般现在时（肯定句）', '第三人称单数加 -s'] },
                { title: 'U2 我的家', desc: '学习居家物品和方位介词', sentenceCount: 10,
                  vocabulary: ['home', 'house', 'room', 'bedroom', 'kitchen', 'bathroom', 'living room', 'table', 'chair', 'bed'],
                  phrases: ['in the bedroom', 'on the table', 'under the bed', 'next to the window', 'in the kitchen', 'between two chairs'],
                  grammar: ['方位介词 in / on / under', 'next to / between 用法'] },
                { title: 'U3 家庭日常活动', desc: '学习描述家庭每天的日常活动', sentenceCount: 10,
                  vocabulary: ['wake up', 'brush', 'teeth', 'eat', 'breakfast', 'go', 'school', 'play', 'homework', 'dinner'],
                  phrases: ['get dressed', 'brush teeth', 'go to bed', 'do homework', 'watch TV', 'have dinner'],
                  grammar: ['一般现在时', '第三人称单数变化'] },
                { title: 'U4 家庭时光', desc: '学习表达喜欢和不喜欢', sentenceCount: 10,
                  vocabulary: ['family', 'parent', 'sibling', 'grandparent', 'cousin', 'activity', 'game', 'movie', 'park', 'dinner'],
                  phrases: ['family time', 'play games', 'watch movies', 'go to the park', 'have dinner', 'tell stories'],
                  grammar: ['like / love / enjoy 用法', 'dislike 用法'] },
                { title: 'U5 家庭特别日子', desc: '学习描述过去的庆祝活动', sentenceCount: 10,
                  vocabulary: ['celebration', 'birthday', 'party', 'cake', 'gift', 'family', 'friend', 'sing', 'dance', 'play'],
                  phrases: ['birthday party', 'blow out candles', 'cut the cake', 'open gifts', 'celebrate together', 'have fun'],
                  grammar: ['一般过去时', '规则动词加 -ed', '不规则动词过去式'] }
            ]
        }

        /* ================================================================
           ★★★ 加新课程就加在这里 ★★★
           示例：
           ,
           {
               courseId: 'my_new_course',
               title: '我的新课程',
               emoji: '📗',
               grad: 5,
               level: '初级',
               learners: 0,
               isMemberOnly: false,
               description: '课程简介...',
               units: [
                   { title: 'Unit 1 第一课', desc: '描述', sentenceCount: 10,
                     vocabulary: ['word1', 'word2'],
                     phrases: ['phrase1'],
                     grammar: ['语法点'] }
               ]
           }
           ================================================================ */

    ];

    /* ============================================================
       对外接口
       ============================================================ */
    window.JY_COURSES = {
        // 全部课程
        all: function() { return courses.slice(); },

        // 按 id 找一门课
        get: function(courseId) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].courseId === courseId) return courses[i];
            }
            return null;
        },

        // 按分类筛选（暂时用不上，留作扩展）
        byCategory: function(cat) {
            if (!cat || cat === 'all') return courses.slice();
            return courses.filter(function(c) { return c.category === cat; });
        },

        // 按关键词搜索
        search: function(keyword) {
            if (!keyword) return courses.slice();
            var kw = keyword.toLowerCase();
            return courses.filter(function(c) {
                return (c.title || '').toLowerCase().indexOf(kw) >= 0
                    || (c.description || '').toLowerCase().indexOf(kw) >= 0;
            });
        },

        // 课程总句子数（自动算，不用手写）
        totalSentences: function(courseId) {
            var c = this.get(courseId);
            if (!c || !c.units) return 0;
            return c.units.reduce(function(sum, u) {
                return sum + (u.sentenceCount || 0);
            }, 0);
        },

        // 课程总课节数
        totalLessons: function(courseId) {
            var c = this.get(courseId);
            if (!c || !c.units) return 0;
            return c.units.length;
        }
    };

    console.log('[JY_COURSES] 课程库已加载，共 ' + courses.length + ' 门课程');
})();