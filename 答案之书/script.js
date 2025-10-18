// 答案库 - 包含多种类别的启发性语句
const answers = [
    // === 正能量类 ===
    "是的，一切都在最好的时机。",
    "相信自己，你比想象中更强大。",
    "命运会眷顾勇敢的人。",
    "生活充满惊喜，保持期待。",
    "你值得拥有更好的。",
    "保持乐观，好运即将到来。",
    "你的努力不会白费。",
    "你已经在正确的道路上了。",
    "不要低估自己的力量。",
    "你比昨天更接近梦想了。",
    "相信奇迹，它正在发生。",
    "转角处，总有惊喜在等你。",
    "每一天都是全新的礼物。",
    "你的光芒无法被遮挡。",
    "今天的你，已经足够好了。",
    
    // === 平静类 ===
    "顺其自然，水到渠成。",
    "内心的平静，胜过外在的喧嚣。",
    "珍惜当下，活在此刻。",
    "有些事情，顺其自然就好。",
    "静待花开，好事将近。",
    "深呼吸，一切都会好起来的。",
    "慢一点，你会看得更清楚。",
    "让时间给你答案。",
    "此刻的宁静，是最好的答案。",
    "放慢脚步，感受生活的美好。",
    "沉淀心灵，答案自会浮现。",
    "在静谧中，找到真正的自己。",
    
    // === 哲理类 ===
    "答案就在你心中，你已经知道了。",
    "也许换个角度，你会看到不同的风景。",
    "有时候，放手也是一种智慧。",
    "听从内心的声音，它不会欺骗你。",
    "当下的选择，会成就未来的你。",
    "不要害怕失败，它是成功的垫脚石。",
    "相信过程，享受旅程。",
    "保持真实，做你自己。",
    "你的选择没有对错，只有不同的经历。",
    "保持初心，方得始终。",
    "困难只是暂时的，坚持就是胜利。",
    "每个结束都是新的开始。",
    "答案会在合适的时候出现。",
    "心怀感恩，生活会更美好。",
    "放下执念，轻装前行。",
    "接受不完美，才能遇见完美。",
    "问题的答案，往往藏在问题里。",
    "向内寻找，而非向外追求。",
    
    // === 爱情类 ===
    "爱与被爱，都需要勇气。",
    "缘分自有安排，无需强求。",
    "爱自己，是终身浪漫的开始。",
    "勇敢地爱，勇敢地生活。",
    "爱与希望永远同在。",
    "真爱值得等待。",
    "勇敢表达你的心意。",
    "对的人，终会在对的时候出现。",
    "爱是相互的成全。",
    "用心感受，爱就在身边。",
    "给彼此一些时间和空间。",
    "真诚的心，会得到真诚的回应。",
    "爱需要勇气，更需要智慧。",
    "倾听内心，它知道谁是对的人。",
    
    // === 神秘类 ===
    "宇宙会给你最好的安排。",
    "相信直觉，它会指引你。",
    "一切早已注定，又充满变数。",
    "答案就在你看不见的地方。",
    "今夜的梦，会给你启示。",
    "跟随直觉，它是宇宙的低语。",
    "冥冥之中，自有天意。",
    "答案以你意想不到的方式到来。",
    "星辰指引着你的方向。",
    "神秘的力量与你同在。",
    "宇宙正在为你重新排列。",
    "魔法正在发生，请相信。",
    "命运之轮正在转动。",
    
    // === 行动类 ===
    "不要犹豫，跟随你的直觉。",
    "勇敢迈出那一步，不会后悔。",
    "改变从现在开始。",
    "勇敢说出你的想法。",
    "现在正是最好的时刻。",
    "勇敢面对，没有什么过不去。",
    "这是一个新的开始。",
    "跟随心之所向，无问西东。",
    "立即行动，机不可失。",
    "去做吧，结果会超出预期。",
    "迈出第一步，剩下的自然会来。",
    "不要想太多，去做就对了。",
    "现在就是最佳时机。",
    "大胆尝试，不要给自己设限。",
    "行动起来，答案会在路上。",
    
    // === 趣味类 ===
    "答案是：试试看就知道啦！",
    "也许，也许不，生活就是这么好玩。",
    "宇宙建议你：先吃点好吃的。",
    "答案模糊不清，但你可以自己创造。",
    "翻开这一页，惊喜会出现。",
    "试试和猫咪商量一下？",
    "答案说：为什么不呢？",
    "心情好的时候，答案都是好的。",
    "今天适合冒险和尝试。",
    "答案在微笑中浮现。",
    "偶尔糊涂一点，也挺好的。",
    "生活需要一些小冒险。",
    "跟着感觉走，会很有趣。",
    
    // === 等待/观望类 ===
    "现在还不是时候，请耐心等待。",
    "有些事，需要时间来证明。",
    "再等等，时机未到。",
    "让子弹飞一会儿。",
    "时机成熟时，你会知道的。",
    "沉淀一下，答案会更清晰。",
    "给时间一点时间。",
    "暂时按兵不动是上策。",
    "静观其变，答案会浮现。",
    "慢慢来，比较快。",
    
    // === 更多正能量 ===
    "阳光总在风雨后。",
    "你的付出，时间会给答案。",
    "世界在偷偷奖励善良的人。",
    "保持热爱，奔赴山海。",
    "前路漫漫，未来可期。",
    "所有的遇见，都是久别重逢。",
    "你笑起来真好看，像春天的花一样。",
    "慢慢来，一切都来得及。",
    "别怕，有光在前方等你。",
    "温柔的人，值得温柔以待。",
    "每一次努力，都在积蓄光芒。",
    "相信美好，它会如约而至。",
    "勇敢的人，运气不会太差。",
    "你的善良，会被世界温柔以待。",
    "坚持住，好运在路上了。",
    
    // === 更多哲理 ===
    "人生没有白走的路，每一步都算数。",
    "做难事必有所得。",
    "凡是过往，皆为序章。",
    "山高自有客行路，水深自有渡船人。",
    "大道至简，知易行难。",
    "君子不器，随遇而安。",
    "厚积薄发，顺势而为。",
    "知行合一，方能致远。",
    "塞翁失马，焉知非福。",
    "道阻且长，行则将至。",
    "路虽远，行则将至；事虽难，做则必成。",
    "云在青天水在瓶。",
    "采菊东篱下，悠然见南山。",
    "天行健，君子以自强不息。",
    "上善若水，水善利万物而不争。",
    "大音希声，大象无形。",
    "宠辱不惊，看庭前花开花落。",
    "去留无意，望天上云卷云舒。",
    
    // === 更多平静 ===
    "心静自然凉。",
    "清风徐来，水波不兴。",
    "闲看庭前花开花落，漫随天外云卷云舒。",
    "行到水穷处，坐看云起时。",
    "静能生慧，定能生慧。",
    "心如止水，波澜不惊。",
    "简单生活，自在随心。",
    "一念放下，万般自在。",
    "闭目养神，静待花开。",
    "岁月静好，现世安稳。",
    "春有百花秋有月，夏有凉风冬有雪。",
    "若无闲事挂心头，便是人间好时节。",
    "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。",
    "回首向来萧瑟处，归去，也无风雨也无晴。",
    
    // === 更多爱情 ===
    "爱要大声说出来。",
    "勇敢的爱，才有回报。",
    "两情若是久长时，又岂在朝朝暮暮。",
    "山有木兮木有枝，心悦君兮君不知。",
    "愿得一心人，白首不相离。",
    "陌上人如玉，公子世无双。",
    "我见青山多妩媚，料青山见我应如是。",
    "心之所向，素履以往。",
    "你是我的今天，和所有的明天。",
    "你是我的半个心脏。",
    "愿有岁月可回首，且以深情共白头。",
    "我在最美的年华里，遇见了你。",
    "余生很长，请多指教。",
    "时光不老，我们不散。",
    "因为你，我想成为更好的人。",
    "你若盛开，清风自来。",
    
    // === 更多神秘 ===
    "月亮知道所有的秘密。",
    "星星会告诉你答案。",
    "风中传来了指引。",
    "梦境是潜意识的语言。",
    "你的守护神正在保佑你。",
    "缘分自有天意。",
    "前世的约定，今生的重逢。",
    "命运的齿轮开始转动。",
    "宇宙正在为你重新编码。",
    "第六感不会骗人。",
    "水晶球显示：前方有惊喜。",
    "塔罗牌说：相信自己。",
    "能量场在为你重新排列。",
    "天使在为你祝福。",
    "灵感会在凌晨三点降临。",
    
    // === 更多行动 ===
    "该出手时就出手。",
    "犹豫就会败北。",
    "先做再说，做了再优化。",
    "别想了，干就完了。",
    "行动是治愈恐惧的良药。",
    "与其担忧，不如行动。",
    "机会只给有准备的人。",
    "没有完美的时刻，只有合适的行动。",
    "想到就去做，错过就来不及了。",
    "不要怕失败，怕的是不敢尝试。",
    "人生没有彩排，每一天都是现场直播。",
    "Go for it! 勇敢去做！",
    "Just do it! 去做就对了！",
    "Why not? 为什么不呢？",
    "Now or never! 机不可失！",
    
    // === 更多趣味 ===
    "答案藏在下一杯咖啡里。",
    "试试向左转，会有惊喜哦。",
    "今天适合穿黄色。",
    "答案说：吃点甜的吧。",
    "宇宙建议：先睡一觉再说。",
    "问问你的宠物，它知道。",
    "今天的幸运数字是7。",
    "闭上眼睛数到十，答案就来了。",
    "抛个硬币决定吧。",
    "答案在冰箱里（认真的）。",
    "今天适合发呆。",
    "去散个步，答案会跟着你。",
    "换个发型，换个心情。",
    "吃顿好的，人生就有答案了。",
    "笑一下，答案就清晰了。",
    
    // === 实用建议 ===
    "列一个清单，理清思路。",
    "找个信任的人聊聊。",
    "给自己一些独处的时间。",
    "换个环境，换个心境。",
    "运动一下，会有新想法。",
    "写下来，答案会更清晰。",
    "深呼吸三次，感受当下。",
    "关掉手机，静心思考。",
    "去大自然走走。",
    "听听音乐，放松心情。",
    "读一本书，会有启发。",
    "做自己喜欢的事。",
    "早睡早起，精神百倍。",
    "喝一杯热茶，慢慢来。",
    "拥抱一下自己。",
    
    // === 反转类 ===
    "不如反着想试试？",
    "也许你想多了。",
    "答案可能恰恰相反。",
    "退一步海阔天空。",
    "换个角度，豁然开朗。",
    "逆向思维，别有洞天。",
    "停下来，反思一下。",
    "慢就是快，少就是多。",
    "做减法，反而更好。",
    "简单的，往往是对的。",
    
    // === 鼓励坚持 ===
    "再坚持一下，就要成功了。",
    "黎明前总是最黑暗的。",
    "胜利属于坚持到最后的人。",
    "不要放弃，曙光就在前方。",
    "你比自己想象的更坚强。",
    "困难是暂时的，坚持是永恒的。",
    "每一次坚持，都在靠近目标。",
    "成功往往在再试一次之后。",
    "相信自己，一定可以的。",
    "你已经走了这么远，不要停下。",
    "坚持就是胜利，永不放弃。",
    "熬过去，你就赢了。",
    "再难也要挺住，因为你值得。",
    "咬紧牙关，光明就在转角。",
    "别松手，胜利的曙光在前方。",
    
    // === 事业/工作类 ===
    "机会正在向你招手。",
    "你的能力会被看见。",
    "是时候展现真正的实力了。",
    "这个项目会很成功。",
    "你的付出会得到回报。",
    "职场贵人即将出现。",
    "升职加薪指日可待。",
    "团队会支持你的想法。",
    "现在是跳槽的好时机。",
    "创业的时机已经成熟。",
    "你的领导力会被认可。",
    "这次合作会很顺利。",
    "谈判会朝着你期望的方向发展。",
    "工作中的难题会迎刃而解。",
    "你的专业会得到尊重。",
    "换个角度，工作会更顺。",
    "同事会成为你的助力。",
    "这次会议会有好结果。",
    "你的方案会被采纳。",
    "职业瓶颈期即将过去。",
    "新的工作机会在路上。",
    "你的价值远超你的想象。",
    "大胆提出你的想法。",
    "现在正是表现的最佳时机。",
    "你的努力领导都看在眼里。",
    
    // === 友情类 ===
    "真正的朋友会一直在你身边。",
    "友谊的种子正在发芽。",
    "你的真诚会收获真挚的友谊。",
    "是时候主动联系老朋友了。",
    "新朋友会带来新的视角。",
    "朋友会在关键时刻帮助你。",
    "友谊需要用心经营。",
    "理解和包容是友谊的基石。",
    "这段友谊值得珍惜。",
    "朋友圈会扩大，贵人会出现。",
    "坦诚相待，友谊长存。",
    "你的朋友比你想象的更关心你。",
    "友谊不在数量，在于质量。",
    "有些朋友，一生都不会变。",
    "珍惜那些懂你的人。",
    "距离不会影响真正的友谊。",
    "朋友的建议值得参考。",
    "是时候原谅那个朋友了。",
    "友谊经得起时间的考验。",
    "你会遇到志同道合的伙伴。",
    "好朋友会雪中送炭。",
    "友情的力量会支撑你。",
    "主动示好会化解误会。",
    "真诚待人，必有回响。",
    "你的朋友需要你的支持。",
    
    // === 学习成长类 ===
    "知识会改变你的命运。",
    "学习永远不会太晚。",
    "这门课程会给你启发。",
    "考试会顺利通过。",
    "你的进步有目共睹。",
    "持续学习，终身成长。",
    "这本书会给你答案。",
    "新技能会打开新世界。",
    "学以致用，知行合一。",
    "你比昨天更聪明了。",
    "温故而知新，可以为师矣。",
    "读万卷书，行万里路。",
    "学习是最好的投资。",
    "这次培训会很值得。",
    "你的求知欲会带你飞得更高。",
    "专注学习，效果显著。",
    "学习中的困难是暂时的。",
    "你的理解力正在提升。",
    "分享知识，双倍收获。",
    "终身学习，永葆年轻。",
    "这次考试不用担心。",
    "学习方法对了，事半功倍。",
    "知识的积累会在关键时刻显现。",
    "学习是通往自由的道路。",
    "你的努力学习会有回报。",
    
    // === 健康生活类 ===
    "健康是一切的基础。",
    "多运动，身体会感谢你。",
    "早睡早起，精神倍儿棒。",
    "健康的身体，健康的心灵。",
    "多喝水，身体会更好。",
    "运动是最好的药。",
    "注意休息，劳逸结合。",
    "健康饮食，活力满满。",
    "听从身体的信号。",
    "定期体检，预防为主。",
    "心态好，身体才会好。",
    "放松心情，释放压力。",
    "大自然是最好的疗愈师。",
    "慢下来，感受生活。",
    "照顾好自己，才能照顾别人。",
    "身心平衡，才是真正的健康。",
    "这个身体不适会很快过去。",
    "多晒太阳，心情会变好。",
    "保持规律作息，健康自来。",
    "运动后的快感，无可替代。",
    
    // === 财富类 ===
    "财富会向你流动。",
    "财运亨通，收入增长。",
    "你的投资会有回报。",
    "意外之财即将到来。",
    "理财规划会带来安全感。",
    "财富自由指日可待。",
    "钱会在对的时候出现。",
    "你的经济状况会好转。",
    "理性消费，稳健理财。",
    "这笔钱会花得值得。",
    "财富是努力的副产品。",
    "开源节流，财富增长。",
    "你的价值会转化为收入。",
    "财务自由需要规划和耐心。",
    "金钱是工具，不是目的。",
    "合理支配，财富倍增。",
    "投资自己，回报最高。",
    "财富会随着能力增长。",
    "这次理财决策是对的。",
    "钱来钱往，细水长流。",
    
    // === 更多浪漫爱情 ===
    "爱情会在不经意间降临。",
    "勇敢表白，不留遗憾。",
    "这段感情值得坚持。",
    "爱情需要双方的努力。",
    "给彼此一些时间和理解。",
    "真心会换来真心。",
    "缘分会让你们再次相遇。",
    "爱要说出口，别藏在心里。",
    "这次约会会很顺利。",
    "对方的心意，你会明白。",
    "爱情需要勇气和真诚。",
    "携手并进，共度一生。",
    "爱与被爱，都是幸福。",
    "这个人值得你等待。",
    "爱情的火花会重新点燃。",
    "感情的裂痕可以修复。",
    "真爱经得起考验。",
    "两颗心会越来越近。",
    "浪漫会在细节中绽放。",
    "爱情不需要完美，需要真实。",
    
    // === 更多智慧哲理 ===
    "水滴石穿，非一日之功。",
    "千里之行，始于足下。",
    "知足常乐，平安是福。",
    "静以修身，俭以养德。",
    "己所不欲，勿施于人。",
    "有志者事竟成。",
    "精诚所至，金石为开。",
    "读书破万卷，下笔如有神。",
    "业精于勤，荒于嬉。",
    "学而不思则罔，思而不学则殆。",
    "三人行，必有我师焉。",
    "温故而知新，可以为师矣。",
    "学而时习之，不亦说乎。",
    "知之为知之，不知为不知。",
    "择其善者而从之，其不善者而改之。",
    "君子坦荡荡，小人长戚戚。",
    "人无远虑，必有近忧。",
    "欲速则不达。",
    "吾日三省吾身。",
    "海纳百川，有容乃大。",
    
    // === 更多正能量激励 ===
    "你的光芒挡也挡不住。",
    "每天都是崭新的开始。",
    "生活会给你想要的答案。",
    "你的笑容可以治愈一切。",
    "幸福就在转角处。",
    "美好的事情即将发生。",
    "你是独一无二的存在。",
    "世界因你而更美好。",
    "你的每一步都算数。",
    "阳光会驱散所有阴霾。",
    "好运气正在赶来的路上。",
    "你的人生会越来越精彩。",
    "拥抱变化，迎接美好。",
    "你值得拥有所有的好运。",
    "生命中充满无限可能。",
    "你的潜力无穷无尽。",
    "每一天都是最好的一天。",
    "你的未来充满希望。",
    "相信自己，你能做到。",
    "生活在奖励积极的人。",
    
    // === 更多神秘玄学 ===
    "紫微星照耀着你。",
    "天时地利人和，皆具备。",
    "你的磁场正在变好。",
    "吉星高照，好运连连。",
    "贵人星动，机会降临。",
    "今日宜行动，不宜等待。",
    "东方有喜，西方有财。",
    "月圆之夜，心想事成。",
    "流星划过，许愿会实现。",
    "彩虹过后，必见阳光。",
    "水晶能量在为你充电。",
    "你的生命之数正处于高峰期。",
    "守护天使在保护你。",
    "今天的风向对你有利。",
    "宇宙在为你清理障碍。",
    
    // === 更多趣味轻松 ===
    "答案在你的左口袋里。",
    "试试跺三下脚，答案就来了。",
    "去吃一顿火锅吧。",
    "听一首歌，灵感就来了。",
    "答案说：周末出去玩。",
    "拥抱一下，心情会变好。",
    "跟着直觉走，准没错。",
    "今天适合买新衣服。",
    "试试新发型，运气会变好。",
    "喝杯奶茶，人生就有答案了。",
    "今天的幸运色是蓝色。",
    "向北走，会有惊喜。",
    "给自己放个假吧。",
    "答案在你喜欢的那本书里。",
    "跟小动物玩一会儿。",
    
    // === 决策建议 ===
    "A和B都不错，选A。",
    "这件事可以大胆尝试。",
    "先听听别人的意见。",
    "相信第一直觉。",
    "列个优缺点清单再决定。",
    "这个决定不会错。",
    "需要更多信息才能决定。",
    "跟随你的心。",
    "理性分析，感性选择。",
    "睡一觉再做决定。",
    "这个选择会改变你的人生。",
    "两者兼顾，创造第三种可能。",
    "相信自己的判断。",
    "答案已经很明显了。",
    "闭上眼睛，感受内心的声音。",
    
    // === 安慰治愈 ===
    "没关系，一切都会过去的。",
    "你已经很棒了，别太苛求自己。",
    "哭出来，没什么不好。",
    "给自己一个拥抱。",
    "你不是一个人，我们都在。",
    "这不是你的错。",
    "允许自己脆弱。",
    "伤口会愈合，心也会变强。",
    "慢慢来，不要急。",
    "你已经尽力了。",
    "休息一下，明天会更好。",
    "你值得被温柔对待。",
    "不完美也很美。",
    "给时间一点时间。",
    "你比你想象的更勇敢。"
];

// 当前显示的答案
let currentAnswer = "";

// 最近出现过的答案（防重复）
let recentAnswers = [];
const MAX_RECENT_ANSWERS = 50; // 保存最近50个答案，避免短期内重复

// 页面元素
const welcomePage = document.getElementById('welcomePage');
const answerPage = document.getElementById('answerPage');
const collectionPage = document.getElementById('collectionPage');
const openAnswerBtn = document.getElementById('openAnswerBtn');
const viewCollectionBtn = document.getElementById('viewCollectionBtn');
const askAgainBtn = document.getElementById('askAgainBtn');
const speakBtn = document.getElementById('speakBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const backFromCollectionBtn = document.getElementById('backFromCollectionBtn');
const answerText = document.getElementById('answerText');
const collectionList = document.getElementById('collectionList');
const toast = document.getElementById('toast');

// 音频元素
const bgMusic = document.getElementById('bgMusic');
const pageFlipSound = document.getElementById('pageFlipSound');
const musicControl = document.getElementById('musicControl');
const musicIcon = document.querySelector('.music-icon');

// 音乐状态
let isMusicPlaying = false;
let isMusicEnabled = localStorage.getItem('musicEnabled') === 'true';

// 页面切换函数
function showPage(pageToShow) {
    // 隐藏所有页面
    welcomePage.classList.remove('active');
    answerPage.classList.remove('active');
    collectionPage.classList.remove('active');
    
    // 显示目标页面
    setTimeout(() => {
        pageToShow.classList.add('active');
    }, 100);
}

// 获取随机答案（带增强防重复机制）
function getRandomAnswer() {
    // 如果答案库数量太少，直接随机返回
    if (answers.length <= MAX_RECENT_ANSWERS) {
        const randomIndex = Math.floor(Math.random() * answers.length);
        return answers[randomIndex];
    }
    
    // 获取可用的答案（排除最近出现过的）
    let availableAnswers = answers.filter(answer => !recentAnswers.includes(answer));
    
    // 如果可用答案太少（不到总数的20%），进行智能清理
    if (availableAnswers.length < answers.length * 0.2) {
        // 保留最近的30%历史记录，删除70%
        const keepCount = Math.floor(MAX_RECENT_ANSWERS * 0.3);
        recentAnswers = recentAnswers.slice(-keepCount);
        availableAnswers = answers.filter(answer => !recentAnswers.includes(answer));
        console.log('🔄 历史记录已清理，为您提供更多新答案');
    }
    
    // 如果可用答案还是太少，完全清空历史
    if (availableAnswers.length < 10) {
        recentAnswers = [];
        availableAnswers = [...answers];
        console.log('🆕 历史记录已完全清空，所有答案重新可用');
    }
    
    // 使用加权随机，让更靠后的答案权重更高（更新鲜）
    const randomIndex = Math.floor(Math.random() * availableAnswers.length);
    const selectedAnswer = availableAnswers[randomIndex];
    
    // 将选中的答案加入历史记录
    recentAnswers.push(selectedAnswer);
    
    // 如果历史记录超过限制，删除最老的
    if (recentAnswers.length > MAX_RECENT_ANSWERS) {
        recentAnswers.shift();
    }
    
    // 调试信息
    const repeatRate = ((MAX_RECENT_ANSWERS / answers.length) * 100).toFixed(1);
    console.log(`📖 答案库总数: ${answers.length} 条`);
    console.log(`🔄 可选答案: ${availableAnswers.length} 条`);
    console.log(`📝 历史记录: ${recentAnswers.length}/${MAX_RECENT_ANSWERS}`);
    console.log(`✨ 重复概率: ${repeatRate}% (最近${MAX_RECENT_ANSWERS}次保证不重复)`);
    console.log(`💫 当前答案: "${selectedAnswer}"`);
    
    return selectedAnswer;
}

// 显示答案
function showAnswer() {
    currentAnswer = getRandomAnswer();
    
    // 添加书本打开动画
    const bookCover = document.querySelector('.book-cover');
    if (bookCover) {
        bookCover.classList.add('opening');
        setTimeout(() => bookCover.classList.remove('opening'), 1000);
    }
    
    // 播放翻页音效
    playPageFlipSound();
    
    // 设置答案文字
    answerText.textContent = currentAnswer;
    
    // 显示答案页面
    showPage(answerPage);
    
    // 添加翻页动画效果
    const answerCard = document.querySelector('.answer-card');
    if (answerCard) {
        answerCard.classList.add('flipping');
        setTimeout(() => answerCard.classList.remove('flipping'), 1200);
    }
    
    // 创建粒子效果
    createParticles();
    
    // 自动朗读答案（延迟1.5秒，等动画完成）
    setTimeout(() => {
        speakAnswer(currentAnswer);
    }, 1500);
}

// 显示提示消息
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 收藏当前答案
function favoriteAnswer() {
    // 从localStorage获取收藏列表
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // 检查是否已收藏
    const isAlreadyFavorited = favorites.some(item => item.text === currentAnswer);
    
    if (isAlreadyFavorited) {
        showToast('💫 这个答案已经在你的收藏中了');
        return;
    }
    
    // 添加到收藏
    const favoriteItem = {
        text: currentAnswer,
        date: new Date().toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }),
        timestamp: Date.now()
    };
    
    favorites.unshift(favoriteItem);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    showToast('💖 已添加到收藏');
}

// 显示收藏列表
function showCollection() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.length === 0) {
        collectionList.innerHTML = '<div class="empty-collection">还没有收藏任何答案<br>快去寻找属于你的答案吧！✨</div>';
    } else {
        collectionList.innerHTML = favorites.map((item, index) => `
            <div class="collection-item">
                <div class="collection-item-text">${item.text}</div>
                <div class="collection-item-date">收藏于：${item.date}</div>
                <button class="collection-item-delete" onclick="deleteFavorite(${index})">🗑️ 删除</button>
            </div>
        `).join('');
    }
    
    showPage(collectionPage);
}

// 删除收藏
function deleteFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showCollection(); // 重新渲染列表
    showToast('已删除收藏');
}

// 事件监听
openAnswerBtn.addEventListener('click', showAnswer);
askAgainBtn.addEventListener('click', () => {
    stopSpeaking(); // 停止朗读
    showPage(welcomePage); // 返回封面
});
speakBtn.addEventListener('click', () => speakAnswer(currentAnswer));
favoriteBtn.addEventListener('click', favoriteAnswer);
viewCollectionBtn.addEventListener('click', showCollection);
backFromCollectionBtn.addEventListener('click', () => showPage(welcomePage));

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // 空格键或回车键：打开答案/返回封面
    if (e.code === 'Space' || e.code === 'Enter') {
        if (welcomePage.classList.contains('active')) {
            e.preventDefault();
            showAnswer();
        } else if (answerPage.classList.contains('active')) {
            e.preventDefault();
            stopSpeaking(); // 停止朗读
            showPage(welcomePage); // 返回封面
        }
    }
    
    // F键：收藏
    if (e.code === 'KeyF' && answerPage.classList.contains('active')) {
        e.preventDefault();
        favoriteAnswer();
    }
    
    // ESC键：返回首页
    if (e.code === 'Escape') {
        showPage(welcomePage);
    }
});

// 添加页面加载动画
window.addEventListener('load', () => {
    welcomePage.classList.add('active');
});

// 创建增强的动态星星效果
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const stars2Container = document.querySelector('.stars2');
    const stars3Container = document.querySelector('.stars3');
    
    // 创建小星星（更多数量）
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        star.style.boxShadow = '0 0 2px rgba(255, 255, 255, 0.8)';
        starsContainer.appendChild(star);
    }
    
    // 创建中等星星（更多数量和颜色）
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '3px';
        star.style.height = '3px';
        const colors = ['#ffffff', '#ffe8a1', '#a8d8ff', '#ffc8ff'];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 4 + 3}s infinite`;
        star.style.boxShadow = `0 0 4px ${star.style.backgroundColor}`;
        stars2Container.appendChild(star);
    }
    
    // 创建大星星（带发光效果）
    for (let i = 0; i < 40; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '4px';
        star.style.height = '4px';
        const colors = ['#ffffff', '#ffd700', '#87ceeb', '#ff69b4', '#9370db'];
        star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animation = `twinkle ${Math.random() * 5 + 4}s infinite`;
        star.style.boxShadow = `0 0 8px ${star.style.backgroundColor}, 0 0 12px ${star.style.backgroundColor}`;
        stars3Container.appendChild(star);
    }
    
    // 创建偶尔出现的流星
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar();
        }
    }, 3000);
}

// 创建流星效果
function createShootingStar() {
    const body = document.body;
    const shootingStar = document.createElement('div');
    shootingStar.style.position = 'fixed';
    shootingStar.style.width = '100px';
    shootingStar.style.height = '2px';
    shootingStar.style.background = 'linear-gradient(to right, transparent, white, transparent)';
    shootingStar.style.left = Math.random() * 50 + '%';
    shootingStar.style.top = Math.random() * 50 + '%';
    shootingStar.style.transform = 'rotate(-45deg)';
    shootingStar.style.boxShadow = '0 0 8px white';
    shootingStar.style.zIndex = '0';
    shootingStar.style.pointerEvents = 'none';
    shootingStar.style.animation = 'shootingStar 1.5s ease-out forwards';
    
    body.appendChild(shootingStar);
    
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 1500);
}

// 添加闪烁动画
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// 页面加载时创建星星
createStars();

// ==================== 音乐和音效功能 ====================

// 音乐库 - 多首久石让风格的钢琴曲
const musicLibrary = [
    // 🎵 曲目1：《天空之城》风格 - 空灵、充满希望
    {
        name: "天空之城",
        melody: [
            { type: 'note', freq: 659.25, dur: 1.0 },   { type: 'note', freq: 783.99, dur: 1.0 },
            { type: 'note', freq: 880.00, dur: 1.5 },   { type: 'note', freq: 783.99, dur: 0.5 },
            { type: 'note', freq: 880.00, dur: 2.0 },   { type: 'rest', dur: 0.5 },
            { type: 'note', freq: 987.77, dur: 1.0 },   { type: 'note', freq: 1046.50, dur: 1.5 },
            { type: 'note', freq: 987.77, dur: 0.5 },   { type: 'note', freq: 880.00, dur: 1.0 },
            { type: 'note', freq: 783.99, dur: 1.0 },   { type: 'note', freq: 659.25, dur: 2.0 },
            { type: 'rest', dur: 0.5 },
            { type: 'note', freq: 587.33, dur: 1.0 },   { type: 'note', freq: 659.25, dur: 1.0 },
            { type: 'note', freq: 698.46, dur: 1.5 },   { type: 'note', freq: 659.25, dur: 0.5 },
            { type: 'note', freq: 587.33, dur: 2.0 },   { type: 'rest', dur: 0.5 },
            { type: 'note', freq: 659.25, dur: 1.0 },   { type: 'note', freq: 587.33, dur: 1.0 },
            { type: 'note', freq: 523.25, dur: 3.0 },   { type: 'rest', dur: 1.0 },
        ],
        chords: [
            { time: 0, freqs: [220.00, 329.63, 440.00], dur: 6.0 },
            { time: 6.5, freqs: [349.23, 440.00, 523.25], dur: 6.0 },
            { time: 13.0, freqs: [261.63, 329.63, 392.00], dur: 5.0 },
            { time: 18.5, freqs: [293.66, 440.00, 587.33], dur: 5.0 },
            { time: 24.0, freqs: [220.00, 329.63, 440.00], dur: 4.0 },
        ]
    },
    
    // 🎵 曲目2：《龙猫》风格 - 温暖、童真
    {
        name: "龙猫",
        melody: [
            { type: 'note', freq: 523.25, dur: 0.8 },   { type: 'note', freq: 659.25, dur: 0.8 },
            { type: 'note', freq: 783.99, dur: 1.2 },   { type: 'note', freq: 659.25, dur: 0.8 },
            { type: 'note', freq: 523.25, dur: 1.6 },   { type: 'rest', dur: 0.4 },
            { type: 'note', freq: 587.33, dur: 0.8 },   { type: 'note', freq: 698.46, dur: 0.8 },
            { type: 'note', freq: 880.00, dur: 1.2 },   { type: 'note', freq: 783.99, dur: 0.8 },
            { type: 'note', freq: 659.25, dur: 2.0 },   { type: 'rest', dur: 0.6 },
            { type: 'note', freq: 783.99, dur: 1.0 },   { type: 'note', freq: 880.00, dur: 1.0 },
            { type: 'note', freq: 987.77, dur: 1.4 },   { type: 'note', freq: 880.00, dur: 0.6 },
            { type: 'note', freq: 783.99, dur: 1.6 },   { type: 'note', freq: 659.25, dur: 0.8 },
            { type: 'note', freq: 523.25, dur: 2.4 },   { type: 'rest', dur: 0.8 },
        ],
        chords: [
            { time: 0, freqs: [261.63, 329.63, 392.00], dur: 5.6 },
            { time: 6.0, freqs: [293.66, 369.99, 440.00], dur: 5.4 },
            { time: 11.8, freqs: [220.00, 329.63, 440.00], dur: 5.8 },
            { time: 18.0, freqs: [261.63, 329.63, 392.00], dur: 4.8 },
        ]
    },
    
    // 🎵 曲目3：《千与千寻》风格 - 神秘、优美
    {
        name: "千与千寻",
        melody: [
            { type: 'note', freq: 587.33, dur: 1.2 },   { type: 'note', freq: 659.25, dur: 1.0 },
            { type: 'note', freq: 783.99, dur: 1.6 },   { type: 'rest', dur: 0.4 },
            { type: 'note', freq: 880.00, dur: 1.0 },   { type: 'note', freq: 987.77, dur: 1.0 },
            { type: 'note', freq: 1046.50, dur: 2.0 },  { type: 'note', freq: 987.77, dur: 0.8 },
            { type: 'note', freq: 880.00, dur: 1.6 },   { type: 'rest', dur: 0.6 },
            { type: 'note', freq: 783.99, dur: 1.0 },   { type: 'note', freq: 698.46, dur: 1.0 },
            { type: 'note', freq: 659.25, dur: 1.4 },   { type: 'note', freq: 587.33, dur: 1.0 },
            { type: 'note', freq: 523.25, dur: 2.6 },   { type: 'rest', dur: 1.0 },
        ],
        chords: [
            { time: 0, freqs: [293.66, 369.99, 440.00], dur: 5.2 },
            { time: 5.6, freqs: [220.00, 329.63, 440.00], dur: 6.0 },
            { time: 12.0, freqs: [349.23, 440.00, 523.25], dur: 5.4 },
            { time: 17.8, freqs: [261.63, 329.63, 392.00], dur: 4.6 },
        ]
    },
    
    // 🎵 曲目4：《风之谷》风格 - 自由、飞翔
    {
        name: "风之谷",
        melody: [
            { type: 'note', freq: 659.25, dur: 1.0 },   { type: 'note', freq: 880.00, dur: 1.2 },
            { type: 'note', freq: 987.77, dur: 1.0 },   { type: 'note', freq: 880.00, dur: 0.8 },
            { type: 'note', freq: 783.99, dur: 2.0 },   { type: 'rest', dur: 0.5 },
            { type: 'note', freq: 698.46, dur: 1.0 },   { type: 'note', freq: 783.99, dur: 1.0 },
            { type: 'note', freq: 880.00, dur: 1.5 },   { type: 'note', freq: 1046.50, dur: 1.5 },
            { type: 'note', freq: 987.77, dur: 2.2 },   { type: 'rest', dur: 0.6 },
            { type: 'note', freq: 880.00, dur: 1.0 },   { type: 'note', freq: 783.99, dur: 1.0 },
            { type: 'note', freq: 659.25, dur: 1.6 },   { type: 'note', freq: 587.33, dur: 1.0 },
            { type: 'note', freq: 523.25, dur: 2.8 },   { type: 'rest', dur: 0.8 },
        ],
        chords: [
            { time: 0, freqs: [220.00, 329.63, 440.00], dur: 6.5 },
            { time: 7.0, freqs: [349.23, 440.00, 523.25], dur: 6.8 },
            { time: 14.2, freqs: [261.63, 329.63, 392.00], dur: 4.6 },
            { time: 19.2, freqs: [293.66, 440.00, 587.33], dur: 4.6 },
        ]
    },
    
    // 🎵 曲目5：《魔女宅急便》风格 - 活泼、可爱
    {
        name: "魔女宅急便",
        melody: [
            { type: 'note', freq: 523.25, dur: 0.8 },   { type: 'note', freq: 587.33, dur: 0.8 },
            { type: 'note', freq: 659.25, dur: 1.0 },   { type: 'note', freq: 783.99, dur: 1.2 },
            { type: 'note', freq: 659.25, dur: 0.8 },   { type: 'note', freq: 587.33, dur: 1.6 },
            { type: 'rest', dur: 0.4 },
            { type: 'note', freq: 659.25, dur: 0.8 },   { type: 'note', freq: 783.99, dur: 0.8 },
            { type: 'note', freq: 880.00, dur: 1.2 },   { type: 'note', freq: 987.77, dur: 1.0 },
            { type: 'note', freq: 880.00, dur: 2.0 },   { type: 'rest', dur: 0.6 },
            { type: 'note', freq: 783.99, dur: 1.0 },   { type: 'note', freq: 698.46, dur: 1.0 },
            { type: 'note', freq: 659.25, dur: 1.2 },   { type: 'note', freq: 587.33, dur: 0.8 },
            { type: 'note', freq: 523.25, dur: 2.4 },   { type: 'rest', dur: 0.8 },
        ],
        chords: [
            { time: 0, freqs: [261.63, 329.63, 392.00], dur: 6.6 },
            { time: 7.0, freqs: [220.00, 329.63, 440.00], dur: 5.6 },
            { time: 13.0, freqs: [349.23, 440.00, 523.25], dur: 4.8 },
            { time: 18.2, freqs: [261.63, 329.63, 392.00], dur: 4.4 },
        ]
    }
];

// 随机选择一首音乐
let selectedMusic = musicLibrary[Math.floor(Math.random() * musicLibrary.length)];
console.log('🎵 正在播放:', selectedMusic.name);

// 创建合成背景音乐（使用 Web Audio API）
function createBackgroundMusic() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        
        // 创建抒情钢琴音色
        const createTone = (frequency, duration, startTime, volume = 0.06) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            // 添加滤波器让音色更柔和温暖
            const filter = audioContext.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 1800;
            filter.Q.value = 0.8;
            
            oscillator.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'triangle';
            
            // 抒情的音量包络线 - 缓慢渐入渐出
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.2);
            gainNode.gain.exponentialRampToValueAtTime(volume * 0.6, startTime + duration * 0.8);
            gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        };
        
        // 创建和弦 - 为旋律增添深度
        const createChord = (frequencies, duration, startTime) => {
            frequencies.forEach(freq => {
                createTone(freq, duration, startTime, 0.03);
            });
        };
        
        // 播放循环音乐 - 使用随机选择的音乐
        const playLoop = () => {
            if (!isMusicPlaying) return;
            
            const currentTime = audioContext.currentTime;
            const melody = selectedMusic.melody;
            const chords = selectedMusic.chords;
            
            let time = 0;
            // 播放主旋律
            melody.forEach(note => {
                if (note.type === 'note') {
                    createTone(note.freq, note.dur, currentTime + time, 0.09);
                }
                time += note.dur;
            });
            
            // 播放和弦伴奏
            chords.forEach(chord => {
                createChord(chord.freqs, chord.dur, currentTime + chord.time);
            });
            
            setTimeout(playLoop, time * 1000 + 800); // 留出呼吸空间
        };
        
        return {
            start: () => {
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }
                isMusicPlaying = true;
                playLoop();
            },
            stop: () => {
                isMusicPlaying = false;
            }
        };
    } catch (e) {
        console.log('Web Audio API not supported');
        return null;
    }
}

// 创建翻页音效
function playPageFlipSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
        console.log('Audio playback not available');
    }
}

// 音乐控制器
let musicPlayer = null;
let usingExternalMusic = false;

// 检查是否有外部音乐文件
function hasExternalMusic() {
    return bgMusic.querySelector('source') !== null;
}

// 初始化音乐控制
function initMusicControl() {
    usingExternalMusic = hasExternalMusic();
    
    if (usingExternalMusic) {
        // 使用外部音乐文件
        bgMusic.volume = 0.3; // 设置音量为 30%
        
        if (isMusicEnabled) {
            // 尝试自动播放（某些浏览器可能需要用户交互）
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicControl.classList.add('playing');
                    musicIcon.textContent = '🎵';
                    isMusicPlaying = true;
                }).catch(error => {
                    console.log('自动播放被阻止，等待用户交互:', error);
                    // 添加一次性点击事件来启动音乐
                    document.body.addEventListener('click', function startMusic() {
                        bgMusic.play();
                        musicControl.classList.add('playing');
                        musicIcon.textContent = '🎵';
                        isMusicPlaying = true;
                    }, { once: true });
                });
            }
        } else {
            musicControl.classList.add('muted');
            musicIcon.textContent = '🔇';
        }
    } else {
        // 使用合成音乐
        musicPlayer = createBackgroundMusic();
        
        if (isMusicEnabled && musicPlayer) {
            musicPlayer.start();
            musicControl.classList.add('playing');
            musicIcon.textContent = '🎵';
        } else {
            musicControl.classList.add('muted');
            musicIcon.textContent = '🔇';
        }
    }
}

// 切换音乐播放
function toggleMusic() {
    if (usingExternalMusic) {
        // 使用外部音乐文件
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicControl.classList.add('playing');
                musicControl.classList.remove('muted');
                musicIcon.textContent = '🎵';
                isMusicEnabled = true;
                isMusicPlaying = true;
                localStorage.setItem('musicEnabled', 'true');
                showToast('🎵 背景音乐已开启');
            }).catch(error => {
                console.error('音乐播放失败:', error);
                showToast('⚠️ 音乐播放失败，请重试');
            });
        } else {
            bgMusic.pause();
            musicControl.classList.remove('playing');
            musicControl.classList.add('muted');
            musicIcon.textContent = '🔇';
            isMusicEnabled = false;
            isMusicPlaying = false;
            localStorage.setItem('musicEnabled', 'false');
            showToast('🔇 背景音乐已关闭');
        }
    } else {
        // 使用合成音乐
        if (!musicPlayer) {
            musicPlayer = createBackgroundMusic();
        }
        
        if (isMusicPlaying) {
            musicPlayer.stop();
            musicControl.classList.remove('playing');
            musicControl.classList.add('muted');
            musicIcon.textContent = '🔇';
            isMusicEnabled = false;
            localStorage.setItem('musicEnabled', 'false');
            showToast('🔇 背景音乐已关闭');
        } else {
            musicPlayer.start();
            musicControl.classList.add('playing');
            musicControl.classList.remove('muted');
            musicIcon.textContent = '🎵';
            isMusicEnabled = true;
            localStorage.setItem('musicEnabled', 'true');
            showToast('🎵 背景音乐已开启');
        }
    }
}

// 音乐控制按钮事件
musicControl.addEventListener('click', toggleMusic);

// 页面加载时初始化音乐
setTimeout(() => {
    initMusicControl();
}, 1000);

// ==================== 粒子效果 ====================

// 创建粒子效果
function createParticles() {
    const answerCard = document.querySelector('.answer-card');
    if (!answerCard) return;
    
    // 创建粒子容器
    let particlesContainer = answerCard.querySelector('.particles');
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        answerCard.appendChild(particlesContainer);
    }
    
    // 清除旧粒子
    particlesContainer.innerHTML = '';
    
    // 创建多个粒子
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // 随机位置
            const x = Math.random() * 100;
            const y = 50 + Math.random() * 30;
            particle.style.left = x + '%';
            particle.style.top = y + '%';
            
            // 随机延迟
            particle.style.animationDelay = Math.random() * 0.5 + 's';
            
            particlesContainer.appendChild(particle);
            
            // 3秒后移除
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }, i * 50);
    }
}

// ==================== 增强用户体验 ====================

// 防止多次快速点击
let isAnimating = false;

const originalShowAnswer = showAnswer;
showAnswer = function() {
    if (isAnimating) return;
    isAnimating = true;
    originalShowAnswer();
    setTimeout(() => {
        isAnimating = false;
    }, 1000);
};

// 添加触摸反馈
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// 页面可见性变化时暂停/恢复音乐
document.addEventListener('visibilitychange', () => {
    if (usingExternalMusic) {
        // 外部音乐文件
        if (document.hidden && !bgMusic.paused) {
            bgMusic.pause();
        } else if (!document.hidden && isMusicEnabled && bgMusic.paused) {
            bgMusic.play();
        }
    } else {
        // 合成音乐
        if (document.hidden && isMusicPlaying && musicPlayer) {
            musicPlayer.stop();
        } else if (!document.hidden && isMusicEnabled && musicPlayer) {
            musicPlayer.start();
        }
    }
});

// ==================== 语音朗读功能 ====================

// 语音合成对象
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

// 朗读答案
function speakAnswer(text) {
    // 如果正在朗读，先停止
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    // 检查浏览器支持
    if (!('speechSynthesis' in window)) {
        showToast('⚠️ 您的浏览器不支持语音功能');
        return;
    }
    
    // 创建语音实例
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // 设置语音参数
    currentUtterance.lang = 'zh-CN'; // 中文
    currentUtterance.rate = 0.9; // 语速（0.1-10，1为正常）
    currentUtterance.pitch = 1.1; // 音调（0-2，1为正常）
    currentUtterance.volume = 1.0; // 音量（0-1）
    
    // 尝试使用中文语音
    const voices = speechSynthesis.getVoices();
    const chineseVoice = voices.find(voice => 
        voice.lang.includes('zh') || 
        voice.lang.includes('CN') ||
        voice.name.includes('Chinese')
    );
    
    if (chineseVoice) {
        currentUtterance.voice = chineseVoice;
    }
    
    // 朗读开始时的回调
    currentUtterance.onstart = () => {
        speakBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
        speakBtn.querySelector('span').textContent = '🔊 朗读中...';
    };
    
    // 朗读结束时的回调
    currentUtterance.onend = () => {
        speakBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)';
        speakBtn.querySelector('span').textContent = '🔊 朗读答案';
    };
    
    // 朗读错误时的回调
    currentUtterance.onerror = (event) => {
        console.error('语音朗读错误:', event);
        speakBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%)';
        speakBtn.querySelector('span').textContent = '🔊 朗读答案';
        if (event.error !== 'canceled') {
            showToast('⚠️ 语音朗读失败，请重试');
        }
    };
    
    // 开始朗读
    speechSynthesis.speak(currentUtterance);
    showToast('🔊 开始朗读答案');
}

// 停止朗读
function stopSpeaking() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
}

// 页面切换时停止朗读
const originalShowPage = showPage;
showPage = function(page) {
    stopSpeaking();
    originalShowPage(page);
};

// 键盘快捷键：S键朗读答案
document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyS' && answerPage.classList.contains('active')) {
        e.preventDefault();
        speakAnswer(currentAnswer);
    }
});

// ==================== 书本3D鼠标跟踪效果 ====================

// 获取书本封面元素
const bookCover = document.querySelector('.book-cover');
const bookContainer = document.querySelector('.book-container');

// 鼠标移动事件处理
function handleMouseMove(e) {
    // 只在欢迎页面启用效果
    if (!welcomePage.classList.contains('active')) {
        return;
    }
    
    // 获取容器的位置和尺寸
    const rect = bookContainer.getBoundingClientRect();
    
    // 计算鼠标相对于容器中心的位置（-1 到 1 之间）
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // 设置旋转角度（限制在合理范围内）
    const rotateY = x * 20; // 水平旋转，最多 ±20度
    const rotateX = -y * 20; // 垂直旋转，最多 ±20度
    
    // 应用3D变换
    bookCover.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
    `;
    
    // 添加动态阴影，增强3D效果
    const shadowX = x * 30;
    const shadowY = y * 30;
    bookCover.style.boxShadow = `
        ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.8),
        0 0 40px rgba(90, 40, 150, 0.4),
        inset 2px 0 8px rgba(0, 0, 0, 0.5),
        inset -2px 0 8px rgba(0, 0, 0, 0.5),
        inset 0 2px 15px rgba(255, 255, 255, 0.1)
    `;
}

// 鼠标离开事件处理 - 恢复原状
function handleMouseLeave() {
    bookCover.style.transform = '';
    bookCover.style.boxShadow = '';
}

// 添加事件监听
bookContainer.addEventListener('mousemove', handleMouseMove);
bookContainer.addEventListener('mouseleave', handleMouseLeave);

// 触摸设备支持（移动端）
bookContainer.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
        const touch = e.touches[0];
        handleMouseMove({
            clientX: touch.clientX,
            clientY: touch.clientY
        });
    }
});

bookContainer.addEventListener('touchend', handleMouseLeave);

