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
        },

        /* ================================================================
           校园英语初阶：我的学校生活（初级 · Dify 工作流生成）
           ================================================================ */
        {
            courseId: 'school_life_elementary',
            title: '校园英语初阶：我的学校生活',
            emoji: '🏫',
            grad: 1,
            level: '初级',
            learners: 0,
            isMemberOnly: false,
            description: '围绕校园生活场景，帮助初级学习者掌握学校场所、课程科目、课堂用语与校园活动的基础英语表达，每句配语法结构标注。',
            units: [
                { title: 'U1 我的学校 My School', desc: '认识学校场所，学习 There be 句型与方位介词', sentenceCount: 10,
                  vocabulary: ['school', 'classroom', 'library', 'playground', 'gym', 'canteen'],
                  phrases: ['next to', 'in front of', 'behind', 'between ... and ...'],
                  grammar: ['There be 句型', '方位介词'] },
                { title: 'U2 我的课程 My Subjects', desc: '学习学科名称与课程安排，掌握一般现在时', sentenceCount: 10,
                  vocabulary: ['subject', 'math', 'English', 'science', 'art', 'music'],
                  phrases: ['favorite subject', 'be good at', 'be interested in'],
                  grammar: ['一般现在时', '喜好与原因表达'] },
                { title: 'U3 在课堂上 In the Classroom', desc: '学习课堂常用英语，掌握祈使句', sentenceCount: 10,
                  vocabulary: ['listen', 'look', 'open', 'answer', 'raise', 'board'],
                  phrases: ['listen to', 'look at', 'raise your hand', 'open your book'],
                  grammar: ['祈使句', 'if 条件状语从句'] },
                { title: 'U4 我的同学们 My Classmates', desc: '学习描述同学外貌与性格，掌握形容词与物主代词', sentenceCount: 10,
                  vocabulary: ['classmate', 'tall', 'kind', 'funny', 'helpful', 'glasses'],
                  phrases: ['make friends', 'be friendly to', 'help each other', 'laugh at'],
                  grammar: ['描述性形容词', '物主代词'] },
                { title: 'U5 校园活动 School Activities', desc: '学习校园社团与活动表达，掌握现在进行时', sentenceCount: 10,
                  vocabulary: ['club', 'basketball', 'singing', 'dancing', 'match', 'join'],
                  phrases: ['join the club', 'take part in', 'after school', 'play basketball'],
                  grammar: ['现在进行时', '动词-ing 形式变化'] }
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
