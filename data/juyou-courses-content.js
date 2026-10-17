/* ============================================================
   句游英语 - 课程内容库（学习内容，只有听写/听力/口语/阅读读它）
   ============================================================
   ★ 商城、我的课程、课程详情页不读这个文件
   ★ 学习功能页（听写等）读这个文件
   ★ 通过 courseId 和 juyou-courses-registry.js 关联

   每句话的字段说明：
   - en         英文句子（必填）
   - cn         中文翻译（必填）
   - words      单词数组，听写用（必填）
   - chunks     词块数组，中译英用（可选，没有就用 words 代替）
   - distractors 干扰词数组，中译英用（可选）
   - structure  语法结构数组，听写"语法提示"用（可选）
                [{ label: '主语', word: 'Lions' }, ...]

   ★ 完整课程内容（由 Dify 工作流生成的课程包，可选字段）：
   - vocabulary 词汇数组：[{ word, phonetic, pos, meaning_cn }]
   - phrases    短语数组：[{ phrase, meaning_cn, example_en }]
   - grammar    语法数组：[{ point, explanation, examples: [] }]
   - exercises  练习数组：[{ type, question, options, answer, explanation }]
                （听写页目前只用 sentences；其余字段供后续阅读/中译英/练习页使用）
   ============================================================ */
(function() {
    'use strict';

    window.JY_COURSE_CONTENT = {

        /* ================================================================
           小小动物园探险家：6-8岁英语入门
           ================================================================ */
        'zoo_explorer': {
            courseId: 'zoo_explorer',
            courseName: '小小动物园探险家：6-8岁英语入门',
            units: [

                /* ---------- U1 动物园欢迎你 ---------- */
                {
                    unitId: 'U1',
                    title: '动物园欢迎你',
                    sentences: [
                        { en: 'Lions eat meat.', cn: '狮子吃肉。',
                          words: ['Lions', 'eat', 'meat'], structure: [] },
                        { en: 'Monkeys like to play in trees.', cn: '猴子喜欢在树上玩。',
                          words: ['Monkeys', 'like', 'to', 'play', 'in', 'trees'], structure: [] },
                        { en: 'Elephants walk very slowly.', cn: '大象走得很慢。',
                          words: ['Elephants', 'walk', 'very', 'slowly'], structure: [] },
                        { en: 'Giraffes eat leaves from tall trees.', cn: '长颈鹿吃高树上的叶子。',
                          words: ['Giraffes', 'eat', 'leaves', 'from', 'tall', 'trees'], structure: [] },
                        { en: 'Pandas eat bamboo all day.', cn: '熊猫整天吃竹子。',
                          words: ['Pandas', 'eat', 'bamboo', 'all', 'day'], structure: [] },
                        { en: 'Tigers sleep during the day.', cn: '老虎白天睡觉。',
                          words: ['Tigers', 'sleep', 'during', 'the', 'day'], structure: [] },
                        { en: 'Zebras have black and white stripes.', cn: '斑马有黑白条纹。',
                          words: ['Zebras', 'have', 'black', 'and', 'white', 'stripes'], structure: [] },
                        { en: 'Birds can fly in the sky.', cn: '鸟可以在天空中飞翔。',
                          words: ['Birds', 'can', 'fly', 'in', 'the', 'sky'], structure: [] },
                        { en: 'Fish swim in the water.', cn: '鱼在水里游泳。',
                          words: ['Fish', 'swim', 'in', 'the', 'water'], structure: [] },
                        { en: 'We see many animals at the zoo.', cn: '我们在动物园看到许多动物。',
                          words: ['We', 'see', 'many', 'animals', 'at', 'the', 'zoo'], structure: [] }
                    ]
                },

                /* ---------- U2 认识动物朋友们 ---------- */
                {
                    unitId: 'U2',
                    title: '认识动物朋友们',
                    sentences: [
                        { en: 'The elephant is big and has a long trunk.', cn: '大象很大，有长鼻子。',
                          words: ['The', 'elephant', 'is', 'big', 'and', 'has', 'a', 'long', 'trunk'], structure: [] },
                        { en: 'Giraffes are tall with spotted bodies.', cn: '长颈鹿很高，身体有斑点。',
                          words: ['Giraffes', 'are', 'tall', 'with', 'spotted', 'bodies'], structure: [] },
                        { en: 'Lions are strong and have golden fur.', cn: '狮子很强壮，有金色的皮毛。',
                          words: ['Lions', 'are', 'strong', 'and', 'have', 'golden', 'fur'], structure: [] },
                        { en: 'Monkeys are small and can climb trees quickly.', cn: '猴子很小，能很快地爬树。',
                          words: ['Monkeys', 'are', 'small', 'and', 'can', 'climb', 'trees', 'quickly'], structure: [] },
                        { en: 'Pandas are cute and eat bamboo.', cn: '熊猫很可爱，吃竹子。',
                          words: ['Pandas', 'are', 'cute', 'and', 'eat', 'bamboo'], structure: [] },
                        { en: 'Tigers are striped animals that live in forests.', cn: '老虎是有条纹的动物，生活在森林里。',
                          words: ['Tigers', 'are', 'striped', 'animals', 'that', 'live', 'in', 'forests'], structure: [] },
                        { en: 'The lion has a big mane and a loud roar.', cn: '狮子有浓密的鬃毛和响亮的吼声。',
                          words: ['The', 'lion', 'has', 'a', 'big', 'mane', 'and', 'a', 'loud', 'roar'], structure: [] },
                        { en: 'The monkey has a long tail and likes to play.', cn: '猴子有长尾巴，喜欢玩耍。',
                          words: ['The', 'monkey', 'has', 'a', 'long', 'tail', 'and', 'likes', 'to', 'play'], structure: [] },
                        { en: 'The panda has black and white fur and eats bamboo.', cn: '熊猫有黑白相间的皮毛，吃竹子。',
                          words: ['The', 'panda', 'has', 'black', 'and', 'white', 'fur', 'and', 'eats', 'bamboo'], structure: [] },
                        { en: 'The tiger is a big cat with stripes on its body.', cn: '老虎是一种大猫，身体上有条纹。',
                          words: ['The', 'tiger', 'is', 'a', 'big', 'cat', 'with', 'stripes', 'on', 'its', 'body'], structure: [] }
                    ]
                },

                /* ---------- U3 动物们的家 ---------- */
                {
                    unitId: 'U3',
                    title: '动物们的家',
                    sentences: [
                        { en: 'The monkey lives in the jungle.', cn: '猴子生活在丛林里。',
                          words: ['The', 'monkey', 'lives', 'in', 'the', 'jungle'], structure: [] },
                        { en: 'Fish live in the ocean.', cn: '鱼生活在海洋里。',
                          words: ['Fish', 'live', 'in', 'the', 'ocean'], structure: [] },
                        { en: 'Camels live in the desert.', cn: '骆驼生活在沙漠里。',
                          words: ['Camels', 'live', 'in', 'the', 'desert'], structure: [] },
                        { en: "The bird's nest is on the branch.", cn: '鸟巢在树枝上。',
                          words: ['The', "bird's", 'nest', 'is', 'on', 'the', 'branch'], structure: [] },
                        { en: "The rabbit's home is under the ground.", cn: '兔子的家在地下。',
                          words: ['The', "rabbit's", 'home', 'is', 'under', 'the', 'ground'], structure: [] },
                        { en: 'The frog is in the pond.', cn: '青蛙在池塘里。',
                          words: ['The', 'frog', 'is', 'in', 'the', 'pond'], structure: [] },
                        { en: 'The polar bear lives in the Arctic.', cn: '北极熊生活在北极地区。',
                          words: ['The', 'polar', 'bear', 'lives', 'in', 'the', 'Arctic'], structure: [] },
                        { en: 'The beaver builds a home by the river.', cn: '河狸在河边建造家园。',
                          words: ['The', 'beaver', 'builds', 'a', 'home', 'by', 'the', 'river'], structure: [] },
                        { en: "The eagle's nest is high in the mountain.", cn: '鹰巢在高高的山上。',
                          words: ['The', "eagle's", 'nest', 'is', 'high', 'in', 'the', 'mountain'], structure: [] },
                        { en: 'The snake lives in a cave.', cn: '蛇住在洞穴里。',
                          words: ['The', 'snake', 'lives', 'in', 'a', 'cave'], structure: [] }
                    ]
                },

                /* ---------- U4 和家人一起逛动物园 ---------- */
                {
                    unitId: 'U4',
                    title: '和家人一起逛动物园',
                    sentences: [
                        { en: "This is my family's trip to the zoo.", cn: '这是我们家人去动物园的旅行。',
                          words: ['This', 'is', 'my', "family's", 'trip', 'to', 'the', 'zoo'], structure: [] },
                        { en: 'The elephant is eating its food.', cn: '大象正在吃它的食物。',
                          words: ['The', 'elephant', 'is', 'eating', 'its', 'food'], structure: [] },
                        { en: "Those are the lions' cages.", cn: '那些是狮子的笼子。',
                          words: ['Those', 'are', 'the', "lions'", 'cages'], structure: [] },
                        { en: "This is my sister's favorite animal.", cn: '这是我妹妹最喜欢的动物。',
                          words: ['This', 'is', 'my', "sister's", 'favorite', 'animal'], structure: [] },
                        { en: 'The monkey is playing with its toy.', cn: '猴子正在玩它的玩具。',
                          words: ['The', 'monkey', 'is', 'playing', 'with', 'its', 'toy'], structure: [] },
                        { en: 'These are our tickets for the zoo.', cn: '这些是我们去动物园的门票。',
                          words: ['These', 'are', 'our', 'tickets', 'for', 'the', 'zoo'], structure: [] },
                        { en: "That is the panda's home.", cn: '那是熊猫的家。',
                          words: ['That', 'is', 'the', "panda's", 'home'], structure: [] },
                        { en: "This is my dad's camera.", cn: '这是我爸爸的相机。',
                          words: ['This', 'is', 'my', "dad's", 'camera'], structure: [] },
                        { en: "Those are the children's snacks.", cn: '那些是孩子们的零食。',
                          words: ['Those', 'are', 'the', "children's", 'snacks'], structure: [] },
                        { en: "This is our family's favorite place.", cn: '这是我们家人最喜欢的地方。',
                          words: ['This', 'is', 'our', "family's", 'favorite', 'place'], structure: [] }
                    ]
                },

                /* ---------- U5 动物园里的日常活动 ---------- */
                {
                    unitId: 'U5',
                    title: '动物园里的日常活动',
                    sentences: [
                        { en: 'The zookeeper is feeding the elephants.', cn: '动物园管理员正在喂大象。',
                          words: ['The', 'zookeeper', 'is', 'feeding', 'the', 'elephants'], structure: [] },
                        { en: 'The monkeys are playing in the trees.', cn: '猴子正在树上玩耍。',
                          words: ['The', 'monkeys', 'are', 'playing', 'in', 'the', 'trees'], structure: [] },
                        { en: 'We are watching the dolphin show.', cn: '我们正在观看海豚表演。',
                          words: ['We', 'are', 'watching', 'the', 'dolphin', 'show'], structure: [] },
                        { en: 'The lions are sleeping in the sun.', cn: '狮子正在阳光下睡觉。',
                          words: ['The', 'lions', 'are', 'sleeping', 'in', 'the', 'sun'], structure: [] },
                        { en: 'The giraffe is eating leaves from a tall tree.', cn: '长颈鹿正在吃高树上的叶子。',
                          words: ['The', 'giraffe', 'is', 'eating', 'leaves', 'from', 'a', 'tall', 'tree'], structure: [] },
                        { en: 'The children are taking photos of the pandas.', cn: '孩子们正在给熊猫拍照。',
                          words: ['The', 'children', 'are', 'taking', 'photos', 'of', 'the', 'pandas'], structure: [] },
                        { en: 'The zookeeper is cleaning the monkey cage.', cn: '动物园管理员正在清洁猴子笼子。',
                          words: ['The', 'zookeeper', 'is', 'cleaning', 'the', 'monkey', 'cage'], structure: [] },
                        { en: 'The penguins are swimming in the pool.', cn: '企鹅正在游泳池里游泳。',
                          words: ['The', 'penguins', 'are', 'swimming', 'in', 'the', 'pool'], structure: [] },
                        { en: 'The parrot is talking to the visitors.', cn: '鹦鹉正在和游客说话。',
                          words: ['The', 'parrot', 'is', 'talking', 'to', 'the', 'visitors'], structure: [] },
                        { en: 'I am walking around the zoo with my family.', cn: '我正和家人在动物园里四处走动。',
                          words: ['I', 'am', 'walking', 'around', 'the', 'zoo', 'with', 'my', 'family'], structure: [] }
                    ]
                }

            ]
        } ,

        /* ================================================================
           快乐家庭英语启蒙
           ================================================================ */
        'happy_family_english': {
            courseId: 'happy_family_english',
            courseName: '快乐家庭英语启蒙',
            units: [

                /* ---------- U1 认识我的家人 ---------- */
                {
                    unitId: 'U1',
                    title: '认识我的家人',
                    sentences: [
                        { en: 'I love my family.', cn: '我爱我的家人。',
                          words: ['I','love','my','family'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'love'},{label:'宾语',word:'my family'}] },
                        { en: 'My father works in an office.', cn: '我爸爸在办公室工作。',
                          words: ['My','father','works','in','an','office'],
                          structure: [{label:'主语',word:'My father'},{label:'谓语',word:'works'},{label:'状语',word:'in an office'}] },
                        { en: 'My mother cooks delicious meals.', cn: '我妈妈做美味的饭菜。',
                          words: ['My','mother','cooks','delicious','meals'],
                          structure: [{label:'主语',word:'My mother'},{label:'谓语',word:'cooks'},{label:'宾语',word:'delicious meals'}] },
                        { en: 'My brother plays football every weekend.', cn: '我哥哥每个周末都踢足球。',
                          words: ['My','brother','plays','football','every','weekend'],
                          structure: [{label:'主语',word:'My brother'},{label:'谓语',word:'plays'},{label:'宾语',word:'football'},{label:'状语',word:'every weekend'}] },
                        { en: 'My sister likes dolls very much.', cn: '我妹妹非常喜欢洋娃娃。',
                          words: ['My','sister','likes','dolls','very','much'],
                          structure: [{label:'主语',word:'My sister'},{label:'谓语',word:'likes'},{label:'宾语',word:'dolls'},{label:'状语',word:'very much'}] },
                        { en: 'My grandmother tells me stories before bed.', cn: '我奶奶睡前给我讲故事。',
                          words: ['My','grandmother','tells','me','stories','before','bed'],
                          structure: [{label:'主语',word:'My grandmother'},{label:'谓语',word:'tells'},{label:'宾语',word:'me'},{label:'宾语',word:'stories'},{label:'状语',word:'before bed'}] },
                        { en: 'We have a big family.', cn: '我们有一个大家庭。',
                          words: ['We','have','a','big','family'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'have'},{label:'定语',word:'big'},{label:'宾语',word:'a family'}] },
                        { en: 'My grandfather is very kind.', cn: '我的爷爷非常和蔼。',
                          words: ['My','grandfather','is','very','kind'],
                          structure: [{label:'主语',word:'My grandfather'},{label:'谓语',word:'is'},{label:'状语',word:'very'},{label:'表语',word:'kind'}] },
                        { en: 'My aunt lives near our house.', cn: '我的阿姨住在我们家附近。',
                          words: ['My','aunt','lives','near','our','house'],
                          structure: [{label:'主语',word:'My aunt'},{label:'谓语',word:'lives'},{label:'状语',word:'near our house'}] },
                        { en: 'My cousins and I play games together.', cn: '我的堂/表兄弟姐妹和我一起玩游戏。',
                          words: ['My','cousins','and','I','play','games','together'],
                          structure: [{label:'主语',word:'My cousins and I'},{label:'谓语',word:'play'},{label:'宾语',word:'games'},{label:'状语',word:'together'}] }
                    ]
                },

                /* ---------- U2 我的家 ---------- */
                {
                    unitId: 'U2',
                    title: '我的家',
                    sentences: [
                        { en: 'The cat is under the table.', cn: '猫在桌子下面。',
                          words: ['The','cat','is','under','the','table'],
                          structure: [{label:'主语',word:'The cat'},{label:'谓语',word:'is'},{label:'状语',word:'under the table'}] },
                        { en: 'My bed is in my bedroom.', cn: '我的床在我的卧室里。',
                          words: ['My','bed','is','in','my','bedroom'],
                          structure: [{label:'主语',word:'My bed'},{label:'谓语',word:'is'},{label:'状语',word:'in my bedroom'}] },
                        { en: 'The book is on the sofa.', cn: '书在沙发上。',
                          words: ['The','book','is','on','the','sofa'],
                          structure: [{label:'主语',word:'The book'},{label:'谓语',word:'is'},{label:'状语',word:'on the sofa'}] },
                        { en: 'The ball is between the chairs.', cn: '球在椅子之间。',
                          words: ['The','ball','is','between','the','chairs'],
                          structure: [{label:'主语',word:'The ball'},{label:'谓语',word:'is'},{label:'状语',word:'between the chairs'}] },
                        { en: 'I put my toys next to the bed.', cn: '我把我的玩具放在床旁边。',
                          words: ['I','put','my','toys','next','to','the','bed'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'put'},{label:'宾语',word:'my toys'},{label:'状语',word:'next to the bed'}] },
                        { en: 'The picture is on the wall.', cn: '画在墙上。',
                          words: ['The','picture','is','on','the','wall'],
                          structure: [{label:'主语',word:'The picture'},{label:'谓语',word:'is'},{label:'状语',word:'on the wall'}] },
                        { en: 'We eat dinner in the kitchen.', cn: '我们在厨房吃晚饭。',
                          words: ['We','eat','dinner','in','the','kitchen'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'eat'},{label:'宾语',word:'dinner'},{label:'状语',word:'in the kitchen'}] },
                        { en: 'The dog is sleeping under the chair.', cn: '狗在椅子下面睡觉。',
                          words: ['The','dog','is','sleeping','under','the','chair'],
                          structure: [{label:'主语',word:'The dog'},{label:'谓语',word:'is sleeping'},{label:'状语',word:'under the chair'}] },
                        { en: 'My shoes are next to the door.', cn: '我的鞋子在门旁边。',
                          words: ['My','shoes','are','next','to','the','door'],
                          structure: [{label:'主语',word:'My shoes'},{label:'谓语',word:'are'},{label:'状语',word:'next to the door'}] },
                        { en: 'The flowers are on the windowsill.', cn: '花在窗台上。',
                          words: ['The','flowers','are','on','the','windowsill'],
                          structure: [{label:'主语',word:'The flowers'},{label:'谓语',word:'are'},{label:'状语',word:'on the windowsill'}] }
                    ]
                },

                /* ---------- U3 家庭日常活动 ---------- */
                {
                    unitId: 'U3',
                    title: '家庭日常活动',
                    sentences: [
                        { en: 'I wake up at 7 AM.', cn: '我早上7点醒来。',
                          words: ['I','wake','up','at','7','AM'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'wake up'},{label:'状语',word:'at 7 AM'}] },
                        { en: 'She brushes her teeth every morning.', cn: '她每天早上刷牙。',
                          words: ['She','brushes','her','teeth','every','morning'],
                          structure: [{label:'主语',word:'She'},{label:'谓语',word:'brushes'},{label:'宾语',word:'her teeth'},{label:'状语',word:'every morning'}] },
                        { en: 'We eat breakfast together as a family.', cn: '我们一家人一起吃早餐。',
                          words: ['We','eat','breakfast','together','as','a','family'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'eat'},{label:'宾语',word:'breakfast'},{label:'状语',word:'together'},{label:'状语',word:'as a family'}] },
                        { en: 'Tom goes to school by bus.', cn: '汤姆乘公交车去学校。',
                          words: ['Tom','goes','to','school','by','bus'],
                          structure: [{label:'主语',word:'Tom'},{label:'谓语',word:'goes'},{label:'状语',word:'to school'},{label:'状语',word:'by bus'}] },
                        { en: 'My parents help me with my homework.', cn: '我的父母帮助我做家庭作业。',
                          words: ['My','parents','help','me','with','my','homework'],
                          structure: [{label:'主语',word:'My parents'},{label:'谓语',word:'help'},{label:'宾语',word:'me'},{label:'状语',word:'with my homework'}] },
                        { en: 'The children play games in the park.', cn: '孩子们在公园里玩游戏。',
                          words: ['The','children','play','games','in','the','park'],
                          structure: [{label:'主语',word:'The children'},{label:'谓语',word:'play'},{label:'宾语',word:'games'},{label:'状语',word:'in the park'}] },
                        { en: 'He reads books before sleeping.', cn: '他在睡觉前读书。',
                          words: ['He','reads','books','before','sleeping'],
                          structure: [{label:'主语',word:'He'},{label:'谓语',word:'reads'},{label:'宾语',word:'books'},{label:'状语',word:'before sleeping'}] },
                        { en: 'We watch TV after dinner.', cn: '我们晚餐后看电视。',
                          words: ['We','watch','TV','after','dinner'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'watch'},{label:'宾语',word:'TV'},{label:'状语',word:'after dinner'}] },
                        { en: 'I clean my room on Saturdays.', cn: '我周六打扫我的房间。',
                          words: ['I','clean','my','room','on','Saturdays'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'clean'},{label:'宾语',word:'my room'},{label:'状语',word:'on Saturdays'}] },
                        { en: 'They go to bed at 9 PM.', cn: '他们晚上9点上床睡觉。',
                          words: ['They','go','to','bed','at','9','PM'],
                          structure: [{label:'主语',word:'They'},{label:'谓语',word:'go'},{label:'状语',word:'to bed'},{label:'状语',word:'at 9 PM'}] }
                    ]
                },

                /* ---------- U4 家庭时光 ---------- */
                {
                    unitId: 'U4',
                    title: '家庭时光',
                    sentences: [
                        { en: 'I like playing games with my family.', cn: '我喜欢和家人一起玩游戏。',
                          words: ['I','like','playing','games','with','my','family'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'like'},{label:'宾语',word:'playing games with my family'}] },
                        { en: 'She loves watching movies on weekends.', cn: '她喜欢在周末看电影。',
                          words: ['She','loves','watching','movies','on','weekends'],
                          structure: [{label:'主语',word:'She'},{label:'谓语',word:'loves'},{label:'宾语',word:'watching movies on weekends'}] },
                        { en: 'They enjoy having dinner together every night.', cn: '他们喜欢每晚一起吃晚餐。',
                          words: ['They','enjoy','having','dinner','together','every','night'],
                          structure: [{label:'主语',word:'They'},{label:'谓语',word:'enjoy'},{label:'宾语',word:'having dinner together every night'}] },
                        { en: 'He dislikes cleaning his room.', cn: '他不喜欢打扫他的房间。',
                          words: ['He','dislikes','cleaning','his','room'],
                          structure: [{label:'主语',word:'He'},{label:'谓语',word:'dislikes'},{label:'宾语',word:'cleaning his room'}] },
                        { en: 'My parents always go to the park on Sundays.', cn: '我的父母总是在周日去公园。',
                          words: ['My','parents','always','go','to','the','park','on','Sundays'],
                          structure: [{label:'主语',word:'My parents'},{label:'状语',word:'always'},{label:'谓语',word:'go'},{label:'状语',word:'to the park'},{label:'状语',word:'on Sundays'}] },
                        { en: 'We sometimes tell stories before bedtime.', cn: '我们有时在睡前讲故事。',
                          words: ['We','sometimes','tell','stories','before','bedtime'],
                          structure: [{label:'主语',word:'We'},{label:'状语',word:'sometimes'},{label:'谓语',word:'tell'},{label:'宾语',word:'stories'},{label:'状语',word:'before bedtime'}] },
                        { en: 'My sister and I cook together on weekends.', cn: '我和我的姐姐在周末一起做饭。',
                          words: ['My','sister','and','I','cook','together','on','weekends'],
                          structure: [{label:'主语',word:'My sister and I'},{label:'状语',word:'together'},{label:'谓语',word:'cook'},{label:'状语',word:'on weekends'}] },
                        { en: 'The children are happy when they play games.', cn: '孩子们玩游戏时很开心。',
                          words: ['The','children','are','happy','when','they','play','games'],
                          structure: [{label:'主语',word:'The children'},{label:'谓语',word:'are'},{label:'表语',word:'happy'},{label:'状语',word:'when they play games'}] },
                        { en: 'Family time is fun for everyone.', cn: '家庭时光对每个人来说都很有趣。',
                          words: ['Family','time','is','fun','for','everyone'],
                          structure: [{label:'主语',word:'Family time'},{label:'谓语',word:'is'},{label:'表语',word:'fun'},{label:'状语',word:'for everyone'}] },
                        { en: 'Grandparents tell interesting stories to grandchildren.', cn: '祖父母给孙子孙女讲有趣的故事。',
                          words: ['Grandparents','tell','interesting','stories','to','grandchildren'],
                          structure: [{label:'主语',word:'Grandparents'},{label:'谓语',word:'tell'},{label:'定语',word:'interesting'},{label:'宾语',word:'stories'},{label:'状语',word:'to grandchildren'}] }
                    ]
                },

                /* ---------- U5 家庭特别日子 ---------- */
                {
                    unitId: 'U5',
                    title: '家庭特别日子',
                    sentences: [
                        { en: 'We celebrated my birthday yesterday.', cn: '我们昨天庆祝了我的生日。',
                          words: ['We','celebrated','my','birthday','yesterday'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'celebrated'},{label:'宾语',word:'my birthday'},{label:'状语',word:'yesterday'}] },
                        { en: 'She received many gifts from her friends.', cn: '她从朋友们那里收到了很多礼物。',
                          words: ['She','received','many','gifts','from','her','friends'],
                          structure: [{label:'主语',word:'She'},{label:'谓语',word:'received'},{label:'宾语',word:'many gifts'},{label:'状语',word:'from her friends'}] },
                        { en: 'The children played games at the party.', cn: '孩子们在派对上玩游戏。',
                          words: ['The','children','played','games','at','the','party'],
                          structure: [{label:'主语',word:'The children'},{label:'谓语',word:'played'},{label:'宾语',word:'games'},{label:'状语',word:'at the party'}] },
                        { en: 'My family laughed and danced together.', cn: '我的家人一起大笑和跳舞。',
                          words: ['My','family','laughed','and','danced','together'],
                          structure: [{label:'主语',word:'My family'},{label:'谓语',word:'laughed'},{label:'连接词',word:'and'},{label:'谓语',word:'danced'},{label:'状语',word:'together'}] },
                        { en: 'They ate colorful cake at the celebration.', cn: '他们在庆典上吃了多彩的蛋糕。',
                          words: ['They','ate','colorful','cake','at','the','celebration'],
                          structure: [{label:'主语',word:'They'},{label:'谓语',word:'ate'},{label:'宾语',word:'colorful cake'},{label:'状语',word:'at the celebration'}] },
                        { en: 'I blew out the candles on my birthday cake.', cn: '我吹灭了生日蛋糕上的蜡烛。',
                          words: ['I','blew','out','the','candles','on','my','birthday','cake'],
                          structure: [{label:'主语',word:'I'},{label:'谓语',word:'blew out'},{label:'宾语',word:'the candles'},{label:'定语',word:'on my birthday cake'}] },
                        { en: "We sang 'Happy Birthday' to our mom.", cn: '我们为妈妈唱了《生日快乐歌》。',
                          words: ['We','sang',"'Happy","Birthday'",'to','our','mom'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'sang'},{label:'宾语',word:"'Happy Birthday'"},{label:'状语',word:'to our mom'}] },
                        { en: 'The party was very fun and happy.', cn: '派对非常有趣和快乐。',
                          words: ['The','party','was','very','fun','and','happy'],
                          structure: [{label:'主语',word:'The party'},{label:'谓语',word:'was'},{label:'表语',word:'very fun and happy'}] },
                        { en: 'My friends came to my house for the celebration.', cn: '我的朋友们来我家参加庆祝活动。',
                          words: ['My','friends','came','to','my','house','for','the','celebration'],
                          structure: [{label:'主语',word:'My friends'},{label:'谓语',word:'came'},{label:'状语',word:'to my house'},{label:'状语',word:'for the celebration'}] },
                        { en: 'We took photos outside after the party.', cn: '派对结束后我们在外面拍照。',
                          words: ['We','took','photos','outside','after','the','party'],
                          structure: [{label:'主语',word:'We'},{label:'谓语',word:'took'},{label:'宾语',word:'photos'},{label:'状语',word:'outside'},{label:'状语',word:'after the party'}] }
                    ]
                }

            ]
        },

        /* ================================================================
           校园英语初阶：我的学校生活（初级）
           ================================================================ */
        'school_life_elementary': {
            courseId: 'school_life_elementary',
            courseName: '校园英语初阶：我的学校生活',
            units: [

                /* ---------- U1 我的学校 My School ---------- */
                {
                    unitId: 'U1',
                    title: '我的学校 My School',
                    sentences: [
                        { en: 'There is a big playground in our school.', cn: '我们学校有一个大操场。',
                          words: ['There', 'is', 'a', 'big', 'playground', 'in', 'our', 'school'], structure: [{label:'引导词',word:'There'}, {label:'谓语',word:'is'}, {label:'主语',word:'a big playground'}, {label:'状语',word:'in our school'}] },
                        { en: 'Our classroom is on the second floor.', cn: '我们的教室在二楼。',
                          words: ['Our', 'classroom', 'is', 'on', 'the', 'second', 'floor'], structure: [{label:'主语',word:'Our classroom'}, {label:'谓语',word:'is'}, {label:'表语',word:'on the second floor'}] },
                        { en: 'The library is next to the office.', cn: '图书馆在办公室旁边。',
                          words: ['The', 'library', 'is', 'next', 'to', 'the', 'office'], structure: [{label:'主语',word:'The library'}, {label:'谓语',word:'is'}, {label:'表语',word:'next to the office'}] },
                        { en: 'There are many books in the library.', cn: '图书馆里有很多书。',
                          words: ['There', 'are', 'many', 'books', 'in', 'the', 'library'], structure: [{label:'引导词',word:'There'}, {label:'谓语',word:'are'}, {label:'主语',word:'many books'}, {label:'状语',word:'in the library'}] },
                        { en: 'The gym is behind the teaching building.', cn: '体育馆在教学楼后面。',
                          words: ['The', 'gym', 'is', 'behind', 'the', 'teaching', 'building'], structure: [{label:'主语',word:'The gym'}, {label:'谓语',word:'is'}, {label:'表语',word:'behind the teaching building'}] },
                        { en: 'There is a beautiful garden in front of our school.', cn: '我们学校前面有一个漂亮的花园。',
                          words: ['There', 'is', 'a', 'beautiful', 'garden', 'in', 'front', 'of', 'our', 'school'], structure: [{label:'引导词',word:'There'}, {label:'谓语',word:'is'}, {label:'主语',word:'a beautiful garden'}, {label:'状语',word:'in front of our school'}] },
                        { en: 'The canteen is between the hall and the lab.', cn: '食堂在大厅和实验室之间。',
                          words: ['The', 'canteen', 'is', 'between', 'the', 'hall', 'and', 'the', 'lab'], structure: [{label:'主语',word:'The canteen'}, {label:'谓语',word:'is'}, {label:'表语',word:'between the hall and the lab'}] },
                        { en: 'There are thirty classrooms in our school.', cn: '我们学校有三十间教室。',
                          words: ['There', 'are', 'thirty', 'classrooms', 'in', 'our', 'school'], structure: [{label:'引导词',word:'There'}, {label:'谓语',word:'are'}, {label:'主语',word:'thirty classrooms'}, {label:'状语',word:'in our school'}] },
                        { en: 'The computer room is on the third floor.', cn: '计算机房在三楼。',
                          words: ['The', 'computer', 'room', 'is', 'on', 'the', 'third', 'floor'], structure: [{label:'主语',word:'The computer room'}, {label:'谓语',word:'is'}, {label:'表语',word:'on the third floor'}] },
                        { en: 'We often read books in the school library.', cn: '我们经常在学校图书馆看书。',
                          words: ['We', 'often', 'read', 'books', 'in', 'the', 'school', 'library'], structure: [{label:'主语',word:'We'}, {label:'状语',word:'often'}, {label:'谓语',word:'read'}, {label:'宾语',word:'books'}, {label:'状语',word:'in the school library'}] },
                    ],
                    vocabulary: [
                        { word: 'school', phonetic: '/skuːl/', pos: 'n.', meaning_cn: '学校' },
                        { word: 'building', phonetic: '/ˈbɪldɪŋ/', pos: 'n.', meaning_cn: '楼房；建筑物' },
                        { word: 'classroom', phonetic: '/ˈklæsruːm/', pos: 'n.', meaning_cn: '教室' },
                        { word: 'library', phonetic: '/ˈlaɪbreri/', pos: 'n.', meaning_cn: '图书馆' },
                        { word: 'playground', phonetic: '/ˈpleɪɡraʊnd/', pos: 'n.', meaning_cn: '操场；运动场' },
                        { word: 'gym', phonetic: '/dʒɪm/', pos: 'n.', meaning_cn: '体育馆' },
                        { word: 'hall', phonetic: '/hɔːl/', pos: 'n.', meaning_cn: '大厅；礼堂' },
                        { word: 'gate', phonetic: '/ɡeɪt/', pos: 'n.', meaning_cn: '大门' },
                        { word: 'garden', phonetic: '/ˈɡɑːrdn/', pos: 'n.', meaning_cn: '花园' },
                        { word: 'canteen', phonetic: '/kænˈtiːn/', pos: 'n.', meaning_cn: '食堂' },
                        { word: 'lab', phonetic: '/læb/', pos: 'n.', meaning_cn: '实验室' },
                        { word: 'office', phonetic: '/ˈɑːfɪs/', pos: 'n.', meaning_cn: '办公室' },
                        { word: 'pool', phonetic: '/puːl/', pos: 'n.', meaning_cn: '游泳池' },
                        { word: 'field', phonetic: '/fiːld/', pos: 'n.', meaning_cn: '场地' },
                        { word: 'floor', phonetic: '/flɔːr/', pos: 'n.', meaning_cn: '楼层' },
                        { word: 'gatekeeper', phonetic: '/ˈɡeɪtkiːpər/', pos: 'n.', meaning_cn: '看门人' },
                    ],
                    phrases: [
                        { phrase: 'next to', meaning_cn: '在……旁边', example_en: 'Our classroom is next to the library.' },
                        { phrase: 'in front of', meaning_cn: '在……前面', example_en: 'There is a big tree in front of our school.' },
                        { phrase: 'behind', meaning_cn: '在……后面', example_en: 'The playground is behind the teaching building.' },
                        { phrase: 'between ... and ...', meaning_cn: '在……和……之间', example_en: 'The lab is between the office and the library.' },
                        { phrase: 'on the left', meaning_cn: '在左边', example_en: 'The gym is on the left of the hall.' },
                        { phrase: 'on the right', meaning_cn: '在右边', example_en: 'The canteen is on the right of the gate.' },
                    ],
                    grammar: [
                        { point: 'There be 句型', explanation: '表示"某处有某物或某人"。be 动词的单复数由它后面的名词决定：单数或不可数名词用 There is，复数名词用 There are。', examples: ['There is a library in our school.', 'There are many students in the classroom.', 'There is some water in the bottle.'] },
                        { point: '方位介词', explanation: 'in 在……里；on 在……上；next to 在……旁边；in front of 在……前面；behind 在……后面；between 在……之间，用来描述位置关系。', examples: ['The gym is next to the library.', 'The garden is in front of the hall.', 'The office is between two classrooms.'] },
                    ],
                    exercises: [
                        { type: 'multiple_choice', question: 'There ___ a big library in our school.', options: ['is', 'are', 'am', 'be'], answer: 'is', explanation: 'library 是单数名词，be 动词用 is。' },
                        { type: 'multiple_choice', question: 'The gym is ___ the hall and the lab.', options: ['next to', 'between', 'in front of', 'behind'], answer: 'between', explanation: 'between ... and ... 表示"在……和……之间"。' },
                        { type: 'multiple_choice', question: 'Our classroom is on the ___ floor.', options: ['two', 'second', 'twoth', 'twofloor'], answer: 'second', explanation: '表示"第几层楼"要用序数词 second。' },
                        { type: 'multiple_choice', question: 'There ___ many trees in the garden.', options: ['is', 'are', 'am', 'has'], answer: 'are', explanation: 'trees 是复数名词，be 动词用 are。' },
                        { type: 'fill_in_blank', question: 'The playground is behind ___ (we) teaching building.', options: [], answer: 'our', explanation: '修饰名词 teaching building 要用形容词性物主代词 our。' },
                        { type: 'fill_in_blank', question: 'There is a big tree in front of ___ (I) classroom.', options: [], answer: 'my', explanation: '修饰名词 classroom 要用形容词性物主代词 my。' },
                    ]
                },

                /* ---------- U2 我的课程 My Subjects ---------- */
                {
                    unitId: 'U2',
                    title: '我的课程 My Subjects',
                    sentences: [
                        { en: 'My favorite subject is English.', cn: '我最喜欢的科目是英语。',
                          words: ['My', 'favorite', 'subject', 'is', 'English'], structure: [{label:'主语',word:'My favorite subject'}, {label:'谓语',word:'is'}, {label:'表语',word:'English'}] },
                        { en: 'We have six lessons every day.', cn: '我们每天有六节课。',
                          words: ['We', 'have', 'six', 'lessons', 'every', 'day'], structure: [{label:'主语',word:'We'}, {label:'谓语',word:'have'}, {label:'宾语',word:'six lessons'}, {label:'状语',word:'every day'}] },
                        { en: 'She is good at math and science.', cn: '她擅长数学和科学。',
                          words: ['She', 'is', 'good', 'at', 'math', 'and', 'science'], structure: [{label:'主语',word:'She'}, {label:'谓语',word:'is'}, {label:'表语',word:'good'}, {label:'状语',word:'at math and science'}] },
                        { en: 'I like art because it is interesting.', cn: '我喜欢美术，因为它很有趣。',
                          words: ['I', 'like', 'art', 'because', 'it', 'is', 'interesting'], structure: [{label:'主语',word:'I'}, {label:'谓语',word:'like'}, {label:'宾语',word:'art'}, {label:'状语',word:'because it is interesting'}] },
                        { en: 'He is interested in Chinese history.', cn: '他对中国历史感兴趣。',
                          words: ['He', 'is', 'interested', 'in', 'Chinese', 'history'], structure: [{label:'主语',word:'He'}, {label:'谓语',word:'is'}, {label:'表语',word:'interested'}, {label:'状语',word:'in Chinese history'}] },
                        { en: 'We have a music lesson on Wednesday.', cn: '我们星期三有一节音乐课。',
                          words: ['We', 'have', 'a', 'music', 'lesson', 'on', 'Wednesday'], structure: [{label:'主语',word:'We'}, {label:'谓语',word:'have'}, {label:'宾语',word:'a music lesson'}, {label:'状语',word:'on Wednesday'}] },
                        { en: 'Math is difficult but very useful.', cn: '数学很难但非常有用。',
                          words: ['Math', 'is', 'difficult', 'but', 'very', 'useful'], structure: [{label:'主语',word:'Math'}, {label:'谓语',word:'is'}, {label:'表语',word:'difficult but very useful'}] },
                        { en: 'They do well in English this term.', cn: '他们这学期英语学得很好。',
                          words: ['They', 'do', 'well', 'in', 'English', 'this', 'term'], structure: [{label:'主语',word:'They'}, {label:'谓语',word:'do well in'}, {label:'宾语',word:'English'}, {label:'状语',word:'this term'}] },
                        { en: 'Our teacher gives us fun science lessons.', cn: '我们的老师给我们上有趣的科学课。',
                          words: ['Our', 'teacher', 'gives', 'us', 'fun', 'science', 'lessons'], structure: [{label:'主语',word:'Our teacher'}, {label:'谓语',word:'gives'}, {label:'宾语',word:'us'}, {label:'宾语',word:'fun science lessons'}] },
                        { en: 'I have computer class twice a week.', cn: '我每周上两次计算机课。',
                          words: ['I', 'have', 'computer', 'class', 'twice', 'a', 'week'], structure: [{label:'主语',word:'I'}, {label:'谓语',word:'have'}, {label:'宾语',word:'computer class'}, {label:'状语',word:'twice a week'}] },
                    ],
                    vocabulary: [
                        { word: 'subject', phonetic: '/ˈsʌbdʒekt/', pos: 'n.', meaning_cn: '学科；科目' },
                        { word: 'Chinese', phonetic: '/ˌtʃaɪˈniːz/', pos: 'n.', meaning_cn: '语文；中文' },
                        { word: 'math', phonetic: '/mæθ/', pos: 'n.', meaning_cn: '数学' },
                        { word: 'English', phonetic: '/ˈɪŋɡlɪʃ/', pos: 'n.', meaning_cn: '英语' },
                        { word: 'science', phonetic: '/ˈsaɪəns/', pos: 'n.', meaning_cn: '科学' },
                        { word: 'history', phonetic: '/ˈhɪstri/', pos: 'n.', meaning_cn: '历史' },
                        { word: 'art', phonetic: '/ɑːrt/', pos: 'n.', meaning_cn: '美术' },
                        { word: 'music', phonetic: '/ˈmjuːzɪk/', pos: 'n.', meaning_cn: '音乐' },
                        { word: 'PE', phonetic: '/ˌpiː ˈiː/', pos: 'n.', meaning_cn: '体育' },
                        { word: 'computer', phonetic: '/kəmˈpjuːtər/', pos: 'n.', meaning_cn: '计算机；电脑' },
                        { word: 'lesson', phonetic: '/ˈlesn/', pos: 'n.', meaning_cn: '课；课程' },
                        { word: 'favorite', phonetic: '/ˈfeɪvərɪt/', pos: 'adj.', meaning_cn: '最喜欢的' },
                        { word: 'interesting', phonetic: '/ˈɪntrəstɪŋ/', pos: 'adj.', meaning_cn: '有趣的' },
                        { word: 'difficult', phonetic: '/ˈdɪfɪkəlt/', pos: 'adj.', meaning_cn: '困难的' },
                        { word: 'easy', phonetic: '/ˈiːzi/', pos: 'adj.', meaning_cn: '容易的' },
                        { word: 'week', phonetic: '/wiːk/', pos: 'n.', meaning_cn: '星期；周' },
                    ],
                    phrases: [
                        { phrase: 'favorite subject', meaning_cn: '最喜欢的学科', example_en: 'My favorite subject is English.' },
                        { phrase: 'be good at', meaning_cn: '擅长', example_en: 'She is good at math and science.' },
                        { phrase: 'have a lesson', meaning_cn: '上……课', example_en: 'We have an art lesson on Monday.' },
                        { phrase: 'be interested in', meaning_cn: '对……感兴趣', example_en: 'He is interested in science.' },
                        { phrase: 'twice a week', meaning_cn: '每周两次', example_en: 'We have PE twice a week.' },
                        { phrase: 'do well in', meaning_cn: '在……方面做得好', example_en: 'They do well in Chinese this term.' },
                    ],
                    grammar: [
                        { point: '一般现在时', explanation: '描述经常性、习惯性的动作或状态。主语是第三人称单数（he / she / it）时，动词要加 -s 或 -es。', examples: ['She likes English.', 'He has math on Monday.', 'We have six lessons every day.'] },
                        { point: '喜好与原因表达', explanation: 'like / love / enjoy 后接名词或动名词；be good at 表示"擅长"；be interested in 表示"对……感兴趣"；because 引导原因状语从句。', examples: ['I like art because it is fun.', 'She is good at math.', 'He is interested in science.'] },
                    ],
                    exercises: [
                        { type: 'multiple_choice', question: 'My favorite subject ___ English.', options: ['is', 'are', 'am', 'be'], answer: 'is', explanation: 'subject 是单数名词，be 动词用 is。' },
                        { type: 'multiple_choice', question: 'She ___ good at math.', options: ['is', 'am', 'are', 'be'], answer: 'is', explanation: '主语 She 是第三人称单数，用 is。' },
                        { type: 'multiple_choice', question: 'We have an art lesson ___ Wednesday.', options: ['in', 'on', 'at', 'by'], answer: 'on', explanation: '在星期几前面用介词 on。' },
                        { type: 'multiple_choice', question: 'He ___ science because it is interesting.', options: ['like', 'likes', 'liking', 'is like'], answer: 'likes', explanation: '主语 He 是第三人称单数，动词 like 要加 -s。' },
                        { type: 'fill_in_blank', question: 'I like art because it is ___ (interest).', options: [], answer: 'interesting', explanation: '描述事物"有趣的"要用形容词 interesting。' },
                        { type: 'fill_in_blank', question: 'We have PE ___ (two) a week.', options: [], answer: 'twice', explanation: '表示"每周两次"要用 twice a week。' },
                    ]
                },

                /* ---------- U3 在课堂上 In the Classroom ---------- */
                {
                    unitId: 'U3',
                    title: '在课堂上 In the Classroom',
                    sentences: [
                        { en: 'Please open your books to page ten.', cn: '请把书翻到第十页。',
                          words: ['Please', 'open', 'your', 'books', 'to', 'page', 'ten'], structure: [{label:'谓语',word:'open'}, {label:'宾语',word:'your books'}, {label:'状语',word:'to page ten'}] },
                        { en: 'Listen to the teacher carefully in class.', cn: '上课认真听老师讲。',
                          words: ['Listen', 'to', 'the', 'teacher', 'carefully', 'in', 'class'], structure: [{label:'谓语',word:'Listen'}, {label:'状语',word:'to the teacher'}, {label:'状语',word:'carefully'}, {label:'状语',word:'in class'}] },
                        { en: 'Look at the blackboard and read the new words.', cn: '看黑板并朗读新单词。',
                          words: ['Look', 'at', 'the', 'blackboard', 'and', 'read', 'the', 'new', 'words'], structure: [{label:'谓语',word:'Look'}, {label:'状语',word:'at the blackboard'}, {label:'连接词',word:'and'}, {label:'谓语',word:'read'}, {label:'宾语',word:'the new words'}] },
                        { en: 'Raise your hand if you know the answer.', cn: '如果你知道答案就举手。',
                          words: ['Raise', 'your', 'hand', 'if', 'you', 'know', 'the', 'answer'], structure: [{label:'谓语',word:'Raise'}, {label:'宾语',word:'your hand'}, {label:'状语',word:'if you know the answer'}] },
                        { en: 'Close the door quietly, please.', cn: '请轻轻关上门。',
                          words: ['Close', 'the', 'door', 'quietly', 'please'], structure: [{label:'谓语',word:'Close'}, {label:'宾语',word:'the door'}, {label:'状语',word:'quietly'}] },
                        { en: 'Read the new sentences after me.', cn: '请跟我读新句子。',
                          words: ['Read', 'the', 'new', 'sentences', 'after', 'me'], structure: [{label:'谓语',word:'Read'}, {label:'宾语',word:'the new sentences'}, {label:'状语',word:'after me'}] },
                        { en: 'Write your name on the notebook.', cn: '把你的名字写在笔记本上。',
                          words: ['Write', 'your', 'name', 'on', 'the', 'notebook'], structure: [{label:'谓语',word:'Write'}, {label:'宾语',word:'your name'}, {label:'状语',word:'on the notebook'}] },
                        { en: 'Answer the question in English, please.', cn: '请用英语回答这个问题。',
                          words: ['Answer', 'the', 'question', 'in', 'English', 'please'], structure: [{label:'谓语',word:'Answer'}, {label:'宾语',word:'the question'}, {label:'状语',word:'in English'}] },
                        { en: 'Be quiet when others are speaking.', cn: '别人说话时要保持安静。',
                          words: ['Be', 'quiet', 'when', 'others', 'are', 'speaking'], structure: [{label:'谓语',word:'Be'}, {label:'表语',word:'quiet'}, {label:'状语',word:'when others are speaking'}] },
                        { en: 'Work in pairs and practice the dialogue.', cn: '两人一组练习对话。',
                          words: ['Work', 'in', 'pairs', 'and', 'practice', 'the', 'dialogue'], structure: [{label:'谓语',word:'Work'}, {label:'状语',word:'in pairs'}, {label:'连接词',word:'and'}, {label:'谓语',word:'practice'}, {label:'宾语',word:'the dialogue'}] },
                    ],
                    vocabulary: [
                        { word: 'listen', phonetic: '/ˈlɪsn/', pos: 'v.', meaning_cn: '听' },
                        { word: 'look', phonetic: '/lʊk/', pos: 'v.', meaning_cn: '看' },
                        { word: 'read', phonetic: '/riːd/', pos: 'v.', meaning_cn: '读' },
                        { word: 'write', phonetic: '/raɪt/', pos: 'v.', meaning_cn: '写' },
                        { word: 'open', phonetic: '/ˈoʊpən/', pos: 'v.', meaning_cn: '打开' },
                        { word: 'close', phonetic: '/kloʊz/', pos: 'v.', meaning_cn: '关闭' },
                        { word: 'answer', phonetic: '/ˈænsər/', pos: 'v.', meaning_cn: '回答' },
                        { word: 'question', phonetic: '/ˈkwestʃən/', pos: 'n.', meaning_cn: '问题' },
                        { word: 'repeat', phonetic: '/rɪˈpiːt/', pos: 'v.', meaning_cn: '重复' },
                        { word: 'quiet', phonetic: '/ˈkwaɪət/', pos: 'adj.', meaning_cn: '安静的' },
                        { word: 'careful', phonetic: '/ˈkerfl/', pos: 'adj.', meaning_cn: '仔细的' },
                        { word: 'hand', phonetic: '/hænd/', pos: 'n.', meaning_cn: '手' },
                        { word: 'board', phonetic: '/bɔːrd/', pos: 'n.', meaning_cn: '黑板' },
                        { word: 'notebook', phonetic: '/ˈnoʊtbʊk/', pos: 'n.', meaning_cn: '笔记本' },
                        { word: 'page', phonetic: '/peɪdʒ/', pos: 'n.', meaning_cn: '页' },
                        { word: 'sentence', phonetic: '/ˈsentəns/', pos: 'n.', meaning_cn: '句子' },
                    ],
                    phrases: [
                        { phrase: 'listen to', meaning_cn: '听……', example_en: 'Please listen to the teacher carefully.' },
                        { phrase: 'look at', meaning_cn: '看……', example_en: 'Look at the blackboard, please.' },
                        { phrase: 'open your book', meaning_cn: '打开书', example_en: 'Open your books to page ten.' },
                        { phrase: 'raise your hand', meaning_cn: '举手', example_en: 'Raise your hand if you know the answer.' },
                        { phrase: 'in pairs', meaning_cn: '两人一组', example_en: 'Practice the dialogue in pairs.' },
                        { phrase: 'read after me', meaning_cn: '跟我读', example_en: 'Read after me, please.' },
                    ],
                    grammar: [
                        { point: '祈使句', explanation: "表示命令、请求或建议，以动词原形开头；否定形式在动词原形前加 Don't；为使语气委婉，句首或句末可加 please。", examples: ['Open the door, please.', "Don't be late for school.", 'Listen to me carefully.'] },
                        { point: 'if 引导的条件状语从句', explanation: 'if 表示"如果"，引导条件状语从句，描述某种条件下会发生的事。', examples: ['Raise your hand if you know the answer.', 'Tell me if you have any questions.', 'Ask me if you need help.'] },
                    ],
                    exercises: [
                        { type: 'multiple_choice', question: '___ your books to page ten, please.', options: ['Open', 'Opening', 'Opens', 'To open'], answer: 'Open', explanation: '祈使句以动词原形开头。' },
                        { type: 'multiple_choice', question: '___ be late for school again.', options: ["Don't", 'Not', 'No', "Doesn't"], answer: "Don't", explanation: "祈使句的否定形式在动词前加 Don't。" },
                        { type: 'multiple_choice', question: 'Raise your hand ___ you know the answer.', options: ['if', 'because', 'and', 'but'], answer: 'if', explanation: 'if 引导条件状语从句，表示"如果"。' },
                        { type: 'multiple_choice', question: 'Listen ___ the teacher carefully.', options: ['at', 'to', 'in', 'for'], answer: 'to', explanation: 'listen to 是固定搭配，表示"听……"。' },
                        { type: 'fill_in_blank', question: '___ (not open) the window, please. It is cold.', options: [], answer: "Don't open", explanation: "否定祈使句用 Don't 加动词原形。" },
                        { type: 'fill_in_blank', question: 'Read the new words ___ (careful), please.', options: [], answer: 'carefully', explanation: '修饰动词 read 要用副词 carefully。' },
                    ]
                },

                /* ---------- U4 我的同学们 My Classmates ---------- */
                {
                    unitId: 'U4',
                    title: '我的同学们 My Classmates',
                    sentences: [
                        { en: 'My best friend is tall and strong.', cn: '我最好的朋友又高又壮。',
                          words: ['My', 'best', 'friend', 'is', 'tall', 'and', 'strong'], structure: [{label:'主语',word:'My best friend'}, {label:'谓语',word:'is'}, {label:'表语',word:'tall and strong'}] },
                        { en: 'She has long black hair and wears glasses.', cn: '她留着黑色长发，戴着眼镜。',
                          words: ['She', 'has', 'long', 'black', 'hair', 'and', 'wears', 'glasses'], structure: [{label:'主语',word:'She'}, {label:'谓语',word:'has'}, {label:'宾语',word:'long black hair'}, {label:'连接词',word:'and'}, {label:'谓语',word:'wears'}, {label:'宾语',word:'glasses'}] },
                        { en: 'Tom is a funny boy and makes us laugh.', cn: '汤姆是个有趣的男孩，常把我们逗笑。',
                          words: ['Tom', 'is', 'a', 'funny', 'boy', 'and', 'makes', 'us', 'laugh'], structure: [{label:'主语',word:'Tom'}, {label:'谓语',word:'is'}, {label:'表语',word:'a funny boy'}, {label:'连接词',word:'and'}, {label:'谓语',word:'makes'}, {label:'宾语',word:'us'}, {label:'宾补',word:'laugh'}] },
                        { en: 'Our monitor is helpful and hard-working.', cn: '我们的班长乐于助人又勤奋。',
                          words: ['Our', 'monitor', 'is', 'helpful', 'and', 'hard-working'], structure: [{label:'主语',word:'Our monitor'}, {label:'谓语',word:'is'}, {label:'表语',word:'helpful and hard-working'}] },
                        { en: 'He is shy but very smart.', cn: '他很害羞但非常聪明。',
                          words: ['He', 'is', 'shy', 'but', 'very', 'smart'], structure: [{label:'主语',word:'He'}, {label:'谓语',word:'is'}, {label:'表语',word:'shy but very smart'}] },
                        { en: 'Lily is friendly to everyone in our class.', cn: '莉莉对我们班每个人都很友好。',
                          words: ['Lily', 'is', 'friendly', 'to', 'everyone', 'in', 'our', 'class'], structure: [{label:'主语',word:'Lily'}, {label:'谓语',word:'is'}, {label:'表语',word:'friendly'}, {label:'状语',word:'to everyone'}, {label:'状语',word:'in our class'}] },
                        { en: 'We help each other with our homework.', cn: '我们在作业上互相帮助。',
                          words: ['We', 'help', 'each', 'other', 'with', 'our', 'homework'], structure: [{label:'主语',word:'We'}, {label:'谓语',word:'help'}, {label:'宾语',word:'each other'}, {label:'状语',word:'with our homework'}] },
                        { en: 'The new student is a little quiet today.', cn: '那位新同学今天有点安静。',
                          words: ['The', 'new', 'student', 'is', 'a', 'little', 'quiet', 'today'], structure: [{label:'主语',word:'The new student'}, {label:'谓语',word:'is'}, {label:'表语',word:'quiet'}, {label:'状语',word:'today'}] },
                        { en: 'My deskmate is outgoing and loves sports.', cn: '我的同桌性格外向，热爱运动。',
                          words: ['My', 'deskmate', 'is', 'outgoing', 'and', 'loves', 'sports'], structure: [{label:'主语',word:'My deskmate'}, {label:'谓语',word:'is'}, {label:'表语',word:'outgoing'}, {label:'连接词',word:'and'}, {label:'谓语',word:'loves'}, {label:'宾语',word:'sports'}] },
                        { en: "Don't laugh at others when they make mistakes.", cn: '别人犯错时不要嘲笑他们。',
                          words: ["Don't", 'laugh', 'at', 'others', 'when', 'they', 'make', 'mistakes'], structure: [{label:'谓语',word:"Don't laugh"}, {label:'状语',word:'at others'}, {label:'状语',word:'when they make mistakes'}] },
                    ],
                    vocabulary: [
                        { word: 'classmate', phonetic: '/ˈklæsmeɪt/', pos: 'n.', meaning_cn: '同学' },
                        { word: 'friend', phonetic: '/frend/', pos: 'n.', meaning_cn: '朋友' },
                        { word: 'tall', phonetic: '/tɔːl/', pos: 'adj.', meaning_cn: '高的' },
                        { word: 'short', phonetic: '/ʃɔːrt/', pos: 'adj.', meaning_cn: '矮的；短的' },
                        { word: 'thin', phonetic: '/θɪn/', pos: 'adj.', meaning_cn: '瘦的' },
                        { word: 'strong', phonetic: '/strɔːŋ/', pos: 'adj.', meaning_cn: '强壮的' },
                        { word: 'kind', phonetic: '/kaɪnd/', pos: 'adj.', meaning_cn: '友善的' },
                        { word: 'funny', phonetic: '/ˈfʌni/', pos: 'adj.', meaning_cn: '有趣的' },
                        { word: 'helpful', phonetic: '/ˈhelpfl/', pos: 'adj.', meaning_cn: '乐于助人的' },
                        { word: 'shy', phonetic: '/ʃaɪ/', pos: 'adj.', meaning_cn: '害羞的' },
                        { word: 'smart', phonetic: '/smɑːrt/', pos: 'adj.', meaning_cn: '聪明的' },
                        { word: 'hair', phonetic: '/her/', pos: 'n.', meaning_cn: '头发' },
                        { word: 'glasses', phonetic: '/ˈɡlæsɪz/', pos: 'n.', meaning_cn: '眼镜' },
                        { word: 'friendly', phonetic: '/ˈfrendli/', pos: 'adj.', meaning_cn: '友好的' },
                        { word: 'outgoing', phonetic: '/ˈaʊtɡoʊɪŋ/', pos: 'adj.', meaning_cn: '外向的' },
                        { word: 'lovely', phonetic: '/ˈlʌvli/', pos: 'adj.', meaning_cn: '可爱的' },
                    ],
                    phrases: [
                        { phrase: 'make friends', meaning_cn: '交朋友', example_en: 'I make friends with my classmates.' },
                        { phrase: 'be friendly to', meaning_cn: '对……友好', example_en: 'She is friendly to everyone in our class.' },
                        { phrase: 'help each other', meaning_cn: '互相帮助', example_en: 'We help each other with our homework.' },
                        { phrase: 'wear glasses', meaning_cn: '戴眼镜', example_en: 'The boy with glasses is my deskmate.' },
                        { phrase: 'laugh at', meaning_cn: '嘲笑', example_en: "Don't laugh at others' mistakes." },
                        { phrase: 'be good with', meaning_cn: '与……相处得好', example_en: 'He is good with his classmates.' },
                    ],
                    grammar: [
                        { point: '描述性形容词', explanation: '形容词常放在名词前作定语，说明人或物的特征；多个形容词并列时用 and 连接；be 动词加形容词构成系表结构。', examples: ['She is tall and thin.', 'He is a smart and funny boy.', 'They are kind and helpful.'] },
                        { point: '物主代词', explanation: 'my 我的；your 你的；his 他的；her 她的；our 我们的；their 他们的。用来表示所属关系。', examples: ['This is my classmate.', 'Her hair is long and beautiful.', 'Our classroom is big and clean.'] },
                    ],
                    exercises: [
                        { type: 'multiple_choice', question: 'She has ___ black hair.', options: ['long black', 'black long', 'a long', 'longs'], answer: 'long black', explanation: '多个形容词修饰名词时按相对固定的顺序排列。' },
                        { type: 'multiple_choice', question: 'Tom is ___ funny boy.', options: ['a', 'an', 'the', 'is'], answer: 'a', explanation: 'funny 以辅音音素开头，用不定冠词 a。' },
                        { type: 'multiple_choice', question: '___ hair is long and beautiful.', options: ['She', 'Her', 'Hers', 'He'], answer: 'Her', explanation: '修饰名词 hair 要用形容词性物主代词 Her。' },
                        { type: 'multiple_choice', question: "Don't laugh ___ others' mistakes.", options: ['at', 'in', 'on', 'for'], answer: 'at', explanation: 'laugh at 是固定搭配，表示"嘲笑"。' },
                        { type: 'fill_in_blank', question: 'My deskmate is ___ (help) and kind.', options: [], answer: 'helpful', explanation: '描述人"乐于助人的"要用形容词 helpful。' },
                        { type: 'fill_in_blank', question: 'The boy ___ glasses is my deskmate.', options: [], answer: 'with', explanation: 'with 表示"带有、戴着"，作后置定语。' },
                    ]
                },

                /* ---------- U5 校园活动 School Activities ---------- */
                {
                    unitId: 'U5',
                    title: '校园活动 School Activities',
                    sentences: [
                        { en: 'The students are playing basketball on the playground.', cn: '学生们正在操场上打篮球。',
                          words: ['The', 'students', 'are', 'playing', 'basketball', 'on', 'the', 'playground'], structure: [{label:'主语',word:'The students'}, {label:'谓语',word:'are playing'}, {label:'宾语',word:'basketball'}, {label:'状语',word:'on the playground'}] },
                        { en: 'She is practicing singing in the music room.', cn: '她正在音乐教室里练习唱歌。',
                          words: ['She', 'is', 'practicing', 'singing', 'in', 'the', 'music', 'room'], structure: [{label:'主语',word:'She'}, {label:'谓语',word:'is practicing'}, {label:'宾语',word:'singing'}, {label:'状语',word:'in the music room'}] },
                        { en: 'They are drawing pictures in the art club.', cn: '他们正在美术社团画画。',
                          words: ['They', 'are', 'drawing', 'pictures', 'in', 'the', 'art', 'club'], structure: [{label:'主语',word:'They'}, {label:'谓语',word:'are drawing'}, {label:'宾语',word:'pictures'}, {label:'状语',word:'in the art club'}] },
                        { en: 'We are having a sports meet this week.', cn: '我们这周正在举行运动会。',
                          words: ['We', 'are', 'having', 'a', 'sports', 'meet', 'this', 'week'], structure: [{label:'主语',word:'We'}, {label:'谓语',word:'are having'}, {label:'宾语',word:'a sports meet'}, {label:'状语',word:'this week'}] },
                        { en: 'He is running on the playground now.', cn: '他现在正在操场上跑步。',
                          words: ['He', 'is', 'running', 'on', 'the', 'playground', 'now'], structure: [{label:'主语',word:'He'}, {label:'谓语',word:'is running'}, {label:'状语',word:'on the playground'}, {label:'状语',word:'now'}] },
                        { en: 'Our class is preparing for the English festival.', cn: '我们班正在为英语节做准备。',
                          words: ['Our', 'class', 'is', 'preparing', 'for', 'the', 'English', 'festival'], structure: [{label:'主语',word:'Our class'}, {label:'谓语',word:'is preparing'}, {label:'状语',word:'for the English festival'}] },
                        { en: 'The children are dancing in the hall.', cn: '孩子们正在大厅里跳舞。',
                          words: ['The', 'children', 'are', 'dancing', 'in', 'the', 'hall'], structure: [{label:'主语',word:'The children'}, {label:'谓语',word:'are dancing'}, {label:'状语',word:'in the hall'}] },
                        { en: 'Tom is playing chess with his friend.', cn: '汤姆正在和他的朋友下国际象棋。',
                          words: ['Tom', 'is', 'playing', 'chess', 'with', 'his', 'friend'], structure: [{label:'主语',word:'Tom'}, {label:'谓语',word:'is playing'}, {label:'宾语',word:'chess'}, {label:'状语',word:'with his friend'}] },
                        { en: 'The team is winning the match.', cn: '这支队伍正在赢得比赛。',
                          words: ['The', 'team', 'is', 'winning', 'the', 'match'], structure: [{label:'主语',word:'The team'}, {label:'谓语',word:'is winning'}, {label:'宾语',word:'the match'}] },
                        { en: 'I am joining the science club after school.', cn: '我放学后要加入科学社团。',
                          words: ['I', 'am', 'joining', 'the', 'science', 'club', 'after', 'school'], structure: [{label:'主语',word:'I'}, {label:'谓语',word:'am joining'}, {label:'宾语',word:'the science club'}, {label:'状语',word:'after school'}] },
                    ],
                    vocabulary: [
                        { word: 'activity', phonetic: '/ækˈtɪvəti/', pos: 'n.', meaning_cn: '活动' },
                        { word: 'club', phonetic: '/klʌb/', pos: 'n.', meaning_cn: '社团；俱乐部' },
                        { word: 'basketball', phonetic: '/ˈbæskɪtbɔːl/', pos: 'n.', meaning_cn: '篮球' },
                        { word: 'football', phonetic: '/ˈfʊtbɔːl/', pos: 'n.', meaning_cn: '足球' },
                        { word: 'running', phonetic: '/ˈrʌnɪŋ/', pos: 'n.', meaning_cn: '跑步' },
                        { word: 'singing', phonetic: '/ˈsɪŋɪŋ/', pos: 'n.', meaning_cn: '唱歌' },
                        { word: 'dancing', phonetic: '/ˈdænsɪŋ/', pos: 'n.', meaning_cn: '跳舞' },
                        { word: 'drawing', phonetic: '/ˈdrɔːɪŋ/', pos: 'n.', meaning_cn: '画画' },
                        { word: 'chess', phonetic: '/tʃes/', pos: 'n.', meaning_cn: '国际象棋' },
                        { word: 'match', phonetic: '/mætʃ/', pos: 'n.', meaning_cn: '比赛' },
                        { word: 'team', phonetic: '/tiːm/', pos: 'n.', meaning_cn: '队；团队' },
                        { word: 'practice', phonetic: '/ˈpræktɪs/', pos: 'v./n.', meaning_cn: '练习' },
                        { word: 'join', phonetic: '/dʒɔɪn/', pos: 'v.', meaning_cn: '加入' },
                        { word: 'win', phonetic: '/wɪn/', pos: 'v.', meaning_cn: '赢' },
                        { word: 'festival', phonetic: '/ˈfestɪvl/', pos: 'n.', meaning_cn: '节日；活动' },
                        { word: 'show', phonetic: '/ʃoʊ/', pos: 'n.', meaning_cn: '演出' },
                    ],
                    phrases: [
                        { phrase: 'join the club', meaning_cn: '加入社团', example_en: 'I want to join the art club.' },
                        { phrase: 'play basketball', meaning_cn: '打篮球', example_en: 'They are playing basketball on the playground.' },
                        { phrase: 'take part in', meaning_cn: '参加', example_en: 'Many students take part in the sports meet.' },
                        { phrase: 'practice singing', meaning_cn: '练习唱歌', example_en: 'She is practicing singing in the music room.' },
                        { phrase: 'win the match', meaning_cn: '赢得比赛', example_en: 'Our team won the basketball match.' },
                        { phrase: 'after school', meaning_cn: '放学后', example_en: 'We have many activities after school.' },
                    ],
                    grammar: [
                        { point: '现在进行时', explanation: '表示现在正在进行的动作，结构：be 动词（am / is / are）加动词 -ing 形式。常与 now、look、listen 等词连用。', examples: ['She is reading a book now.', 'They are playing football.', 'I am doing my homework.'] },
                        { point: '动词 -ing 形式的变化规则', explanation: '一般情况直接加 -ing；以不发音的 e 结尾，去 e 加 -ing；重读闭音节结尾，双写末尾辅音字母再加 -ing。', examples: ['play 变为 playing', 'write 变为 writing', 'run 变为 running', 'swim 变为 swimming'] },
                    ],
                    exercises: [
                        { type: 'multiple_choice', question: 'Look! The students ___ basketball on the playground.', options: ['play', 'are playing', 'played', 'plays'], answer: 'are playing', explanation: 'Look! 提示动作正在进行，用现在进行时 are playing。' },
                        { type: 'multiple_choice', question: 'She ___ singing in the music room now.', options: ['practice', 'is practicing', 'practices', 'practiced'], answer: 'is practicing', explanation: 'now 提示现在进行时，结构是 be 加动词 -ing。' },
                        { type: 'multiple_choice', question: 'Tom likes ___. He draws every day.', options: ['draw', 'draws', 'drawing', 'to drawing'], answer: 'drawing', explanation: 'like 后接动名词 drawing 表示爱好。' },
                        { type: 'multiple_choice', question: 'Our class ___ for the English festival now.', options: ['prepares', 'is preparing', 'prepared', 'prepare'], answer: 'is preparing', explanation: 'now 提示现在进行时，用 is preparing。' },
                        { type: 'fill_in_blank', question: 'The children ___ (dance) in the hall now.', options: [], answer: 'are dancing', explanation: '现在进行时结构：are 加 dancing。' },
                        { type: 'fill_in_blank', question: 'I want ___ (join) the science club.', options: [], answer: 'to join', explanation: 'want to do sth. 是固定搭配，用动词不定式 to join。' },
                    ]
                }

            ]
        }
        /* ================================================================
           ★★★ 以后新增课程内容加在这里 ★★★
           示例：
           ,
           'courseId_xxx': {
               courseId: 'courseId_xxx',
               courseName: '课程名称',
               units: [
                   {
                       unitId: 'U1',
                       title: '单元标题',
                       sentences: [
                           { en: '英文句子', cn: '中文翻译',
                             words: ['单词1', '单词2'], structure: [] }
                       ]
                   }
               ]
           }
           ================================================================ */

    };

    console.log('[JY_COURSE_CONTENT] 课程内容库已加载，共 ' +
        Object.keys(window.JY_COURSE_CONTENT).length + ' 门课程的内容');

})();
