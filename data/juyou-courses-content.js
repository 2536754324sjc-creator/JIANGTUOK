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