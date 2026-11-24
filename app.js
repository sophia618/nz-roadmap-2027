const tripDays = [
  {
    date: "2/7",
    day: "D1",
    weekday: "周日",
    title: "北京出发",
    city: "BEIJING · IN FLIGHT",
    summary: "索乘 CA687 从北京飞往奥克兰；彭已于 2/6 从多伦多出发，经温哥华转机。",
    stay: "夜宿航班",
    items: [
      {
        time: "16:00-17:15",
        title: "北京机场晚餐",
        copy: "办理托运和出境后，在首都机场吃一顿正餐，避免登机后太晚进食。"
      },
      {
        time: "18:30",
        title: "CA687 北京 → 奥克兰",
        copy: "从北京首都机场起飞。建议至少提前 3 小时到达机场，办理国际航班和托运行李；机上另有餐食。",
        links: [{ label: "北京首都机场", query: "Beijing Capital International Airport" }]
      },
      {
        time: "跨日期线",
        title: "飞往南半球",
        copy: "航班预计 2 月 8 日新西兰当地时间中午抵达奥克兰。机上注意补水与休息。"
      },
      {
        time: "2/6 18:55",
        title: "彭从多伦多出发",
        copy: "彭乘 Air Canada 经温哥华转机，预计 2 月 8 日 11:00 抵达奥克兰，全程约 22 小时 5 分。"
      }
    ]
  },
  {
    date: "2/8",
    day: "D2",
    weekday: "周一",
    title: "奥克兰会合与德文港日落",
    city: "AUCKLAND",
    summary: "彭 11:00、索 12:00 抵达。机场会合后先到酒店放下行李，下午去德文港，傍晚登上 Mount Victoria 看日落和马里奥蘑菇。",
    stay: "住宿待选 · 见住宿安排",
    items: [
      {
        time: "11:00",
        title: "彭抵达奥克兰",
        copy: "Air Canada 经温哥华抵达后完成入境和行李清关，在国际到达大厅等待索。",
        links: [{ label: "奥克兰机场", query: "Auckland Airport" }]
      },
      {
        time: "12:00",
        title: "索抵达奥克兰",
        copy: "CA687 抵达后完成入境，与彭在国际到达大厅会合，再一起前往酒店。"
      },
      {
        time: "12:15-13:00",
        title: "奥克兰机场午餐",
        copy: "拿齐行李后在机场先吃简餐，再前往酒店，避免入住和休整期间错过午餐。"
      },
      {
        time: "13:00-13:45",
        title: "机场 → 市区酒店",
        copy: "打车或提前预订接机，目前待定。两人共两件大行李，建议比较大车型接机与现场出租车的价格和等待时间。"
      },
      {
        time: "13:45-15:15",
        title: "酒店入住与休整",
        copy: "办理入住、洗澡和短暂补觉。若房间尚未准备好，先寄存行李，15:15 前出发。"
      },
      {
        time: "15:30 左右",
        title: "前往 Downtown 渡轮码头",
        copy: "从酒店去 Downtown Terminal，目标搭乘约 16:15 的渡轮。近期码头可能临时改到 Pier 4，出发前复核当天码头和班次。"
      },
      {
        time: "16:30-17:45",
        title: "德文港小镇与海滩",
        copy: "下船后逛主街和 Devonport Beach。渡轮可直接刷 Visa、Apple Pay 等感应卡，进站和出站都要刷。",
        links: [
          { label: "Devonport", query: "Devonport Auckland" },
          { label: "Devonport Beach", query: "Devonport Beach Auckland" }
        ]
      },
      {
        time: "17:45-18:45",
        title: "德文港晚餐",
        copy: "在镇上简单吃晚餐，为傍晚上山和回程保留体力。"
      },
      {
        time: "18:45-19:15",
        title: "登 Mount Victoria",
        copy: "沿 Victoria Road 直走，穿过 Kerr Street 到登山口，登顶约 15-25 分钟。穿好走的鞋，并带防风外套。",
        links: [{ label: "Mount Victoria", query: "Mount Victoria Devonport Auckland" }]
      },
      {
        time: "19:15-20:45",
        title: "马里奥蘑菇、日落与蓝调时刻",
        copy: "山顶草坪有马里奥蘑菇装置，可俯瞰 Sky Tower 和海湾。2 月日落约 20:30，具体时间当天复核；体力不足可省略日落，提前回市区。"
      },
      {
        time: "21:15 左右",
        title: "渡轮返回市区",
        copy: "从德文港坐渡轮回 Downtown，约 12 分钟，再回酒店休息。"
      }
    ]
  },
  {
    date: "2/9",
    day: "D3",
    weekday: "周二",
    title: "奥克兰海鲜、短逛与午后飞皇后镇",
    city: "AUCKLAND · QUEENSTOWN",
    summary: "早上退房寄存行李，去 Fish Market 吃海鲜并完成市区短逛，目标午后飞皇后镇，傍晚在湖边购物和晚餐。",
    stay: "住宿待选 · 见住宿安排",
    items: [
      {
        time: "09:00",
        title: "早餐、退房与寄存行李",
        copy: "退房后把大件行李寄存在酒店，轻装去 Fish Market；当天航班目标为 14:30 左右，具体班次待出票。"
      },
      {
        time: "09:30-10:40",
        title: "Auckland Fish Market",
        copy: "重点吃三文鱼、生蚝和鳌虾。先确认各摊位营业时间，热门海鲜可能售完。",
        links: [{ label: "Auckland Fish Market", query: "Auckland Fish Market" }]
      },
      {
        time: "10:55-12:15",
        title: "市区短逛",
        copy: "控制在 Commercial Bay 与 Britomart 一小片区域，不要为了赶店影响去机场；",
        bullets: [
          {
            name: "Kitty",
            detail: "The Kitty Shop，131 Quay Street；Sanrio 官方门店，限定库存以当天为准",
            query: "The Kitty Shop 131 Quay Street Auckland"
          },
          {
            name: "MECCA",
            detail: "Commercial Bay，7 Queen Street；大型美妆集合店",
            query: "MECCA Commercial Bay Auckland"
          },
          {
            name: "Icebreaker",
            detail: "Commercial Bay Level 1，7/21 Queen Street",
            query: "Icebreaker Commercial Bay Auckland"
          }
        ],
        links: [
          { label: "购物区域地图", query: "Queen Street Commercial Bay Auckland" }
        ]
      },
      {
        time: "12:15-12:35",
        title: "返回酒店取行李",
        copy: "取回大件行李，确认护照、钱包和充电设备，前往机场。"
      },
      {
        time: "12:35-13:25",
        title: "前往机场与简餐",
        copy: "打车去奥克兰机场，办理国内段值机和托运后吃简单午餐。"
      },
      {
        time: "14:30 左右",
        title: "奥克兰 → 皇后镇",
        copy: "Air New Zealand 具体航班待出票，航程约 1 小时 35 分。抵达后打车去酒店。",
        links: [{ label: "皇后镇机场", query: "Queenstown Airport" }]
      },
      {
        time: "16:30-18:15",
        title: "皇后镇湖边与户外店",
        copy: "入住后沿 Lake Wakatipu 走到镇中心，补上 Patagonia、Helly Hansen 和 Outside Sports 的短逛。",
        bullets: [
          {
            name: "Patagonia Queenstown",
            detail: "49 Beach Street；Patagonia 新西兰官方门店",
            query: "Patagonia Queenstown 49 Beach Street"
          },
          {
            name: "Helly Hansen Queenstown",
            detail: "5 Beach Street；技术户外服装与装备",
            query: "Helly Hansen Queenstown 5 Beach Street"
          },
          {
            name: "Arc'teryx",
            detail: "可去 Outside Sports Queenstown，9 Shotover Street 查看集合柜",
            query: "Outside Sports Queenstown 9 Shotover Street"
          }
        ]
      },
      {
        time: "18:30-19:45",
        title: "皇后镇晚餐",
        copy: "在镇中心吃晚餐，早点回酒店，为第二天瓦纳卡保留体力。"
      }
    ]
  },
  {
    date: "2/10",
    day: "D4",
    weekday: "周三",
    title: "瓦纳卡湖滨慢游与皮划艇",
    city: "QUEENSTOWN · WANAKA",
    summary: "08:10 去瓦纳卡，按湖滨、Station Park、孤独的树、午餐、皮划艇和购物顺序慢逛，16:15 返回。",
    stay: "住宿待选 · 见住宿安排",
    items: [
      {
        time: "07:20-07:50",
        title: "早餐与咖啡",
        copy: "提前吃早餐，07:50 前到 InterCity 上车点，并带一瓶水。"
      },
      {
        time: "08:10-09:56",
        title: "InterCity：皇后镇 → 瓦纳卡",
        copy: "NZD 80，票价为不可退。以订票页最终上车地点为准，当天不携带大件行李。",
        links: [{ label: "InterCity 购票", url: "https://www.intercity.co.nz/book-a-trip/bookreturn" }]
      },
      {
        time: "09:56-10:15",
        title: "抵达与确认返程点",
        copy: "在 Lakefront Bus Stop（100 Ardmore St，公厕旁停车场）下车，先确认 SkyDrive 16:15 的上车位置和洗手间。"
      },
      {
        time: "10:15-10:45",
        title: "湖边咖啡与早午餐",
        copy: "首选 Federal Diner；如果排队超过约 20 分钟，改去 The Good Spot，不为排队压缩后面的湖边时间。",
        links: [
          { label: "Federal Diner", query: "Federal Diner Wanaka" },
          { label: "The Good Spot", query: "The Good Spot Wanaka" }
        ]
      },
      {
        time: "10:45-12:10",
        title: "湖滨 → Station Park → 孤独的树",
        copy: "沿湖向西慢走，先看 Wanaka Station Park 的超大树冠，再到湖中的孤独的树。单程约 20 分钟，留足拍照和湖边发呆时间。",
        links: [
          { label: "Wanaka Station Park", query: "Wanaka Station Park" },
          { label: "That Wanaka Tree", query: "That Wanaka Tree" }
        ]
      },
      {
        time: "12:15-13:15",
        title: "湖景午餐",
        copy: "返回湖边吃 Water Bar；更想吃披萨就选 Francesca。两人点两道共享即可，避免正午吃得太撑影响皮划艇。",
        links: [
          { label: "Water Bar", query: "Water Bar Wanaka" },
          { label: "Francesca", query: "Francesca Wanaka" }
        ]
      },
      {
        time: "13:15-14:30",
        title: "皮划艇或湖边发呆",
        copy: "风浪小就租 1 小时单人/双人皮划艇，约 NZD 20-30；风大或不想下水，就买杯饮料在湖边休息。手机装防水袋，穿快干衣。"
      },
      {
        time: "14:30-15:25",
        title: "Ardmore St 小店与冰淇淋",
        copy: "逛湖边小店和户外店，最后去 Black Peak 吃冰淇淋；桃子和斐济果口味可优先尝试，但以当天口味为准。",
        links: [
          { label: "Ardmore St 商圈", query: "Ardmore Street Wanaka" },
          { label: "Black Peak Gelato", query: "Black Peak Gelato Wanaka" }
        ]
      },
      {
        time: "15:25-15:50",
        title: "返回 Lakefront Bus Stop",
        copy: "提前约 25 分钟回到 100 Ardmore St，使用洗手间、补防晒并确认 SkyDrive 车辆位置。"
      },
      {
        time: "16:15-17:40",
        title: "SkyDrive：瓦纳卡 → 皇后镇",
        copy: "16:15 发车，预计 17:40 到皇后镇。可在发车前 1 小时，也就是 15:15 前修改预订。它与去程 InterCity 分开承运，不互为联程保障。",
        links: [{ label: "SkyDrive 订票", url: "https://www.skydrive.co.nz/queenstown/" }]
      },
      {
        time: "18:30-19:30",
        title: "皇后镇晚餐",
        copy: "回皇后镇后吃晚餐，早点休息。"
      }
    ]
  },
  {
    date: "2/11",
    day: "D5",
    weekday: "周四",
    title: "米尔福德峡湾一日团，返程方案待定",
    city: "QUEENSTOWN · MILFORD SOUND",
    summary: "从皇后镇出发进入峡湾国家公园并乘游船；大巴往返或大巴进飞机回尚未定，官网与携程价格同步比较。",
    stay: "住宿待选 · 见住宿安排",
    items: [
      {
        time: "06:00-06:20",
        title: "早餐外带",
        copy: "提前准备面包、水果或咖啡，在接车出发前解决早餐。"
      },
      {
        time: "06:30 左右",
        title: "皇后镇集合出发",
        copy: "具体接送时间以运营方通知为准。大件行李留在酒店，只带小背包。"
      },
      {
        time: "途中",
        title: "前往米尔福德峡湾",
        copy: "单程车程约 5 小时，沿途安排观景和短停。"
      },
      {
        time: "12:30 左右",
        title: "午餐",
        copy: "按一日团安排用午餐，或提前带三明治和零食。峡湾区域选择有限，不建议临时再找餐厅。"
      },
      {
        time: "下午",
        title: "米尔福德峡湾游船",
        copy: "从水面观看峭壁、瀑布和峡湾地貌。天气变化快，防水外套比雨伞更实用。",
        links: [{ label: "Milford Sound", query: "Milford Sound New Zealand" }]
      },
      {
        time: "返程方案",
        title: "四个套餐待比较",
        copy: "先不锁定，重点比较价格、取消规则和飞机停飞后的改大巴保障。",
        bullets: [
          {
            name: "RealNZ 官网｜大巴往返 + 游船",
            detail: "NZD 319/人起，出发前 24 小时可改退"
          },
          {
            name: "RealNZ 官网｜大巴进 + 游船 + 飞机回",
            detail: "NZD 319 + 585 = NZD 904/人，飞机受天气影响"
          },
          {
            name: "携程 2/11｜大巴进出 + 游船",
            detail: "¥1,142/人，待核对取消条款与是否含餐"
          },
          {
            name: "携程 2/11｜套餐 F 车去飞回",
            detail: "¥3,560/人，待核对实际承运方与停飞保障"
          }
        ],
        links: [
          { label: "RealNZ 官网", url: "https://www.realnz.com/en/experiences/day-cruises/milford-sound-day-trip-from-queenstown/" },
          { label: "携程 2/11 套餐", url: "https://m.ctrip.com/webapp/taro/pages/tnt/detail/product-detail/index?productId=89148644" }
        ]
      },
      {
        time: "19:30 左右",
        title: "大巴方案：返回皇后镇",
        copy: "只有选择大巴返程时预计约 19:30 到达，全天约 12-13 小时。若选飞机回程，以实际航班到达时间为准。"
      },
      {
        time: "19:45-20:30",
        title: "皇后镇晚餐",
        copy: "按实际返程时间在皇后镇吃一顿热食，之后洗澡休息，不再安排购物或夜间活动。"
      }
    ]
  },
  {
    date: "2/12",
    day: "D6",
    weekday: "周五",
    title: "皇后镇北上蒂卡波",
    city: "QUEENSTOWN · LAKE TEKAPO",
    summary: "乘 InterCity 到蒂卡波，下午湖边散步并住 Haka House Lake Tekapo；为保证第二天 08:00 Tekapo Shuttle，当晚早点休息。",
    stay: "Haka House Lake Tekapo · 已付款",
    items: [
      {
        time: "06:30-06:50",
        title: "早餐外带",
        copy: "退房前解决早餐，并准备巴士上的水和零食。"
      },
      {
        time: "07:00",
        title: "退房与前往集合点",
        copy: "大件行李随巴士移动，随身保留证件、药物和保暖衣物。"
      },
      {
        time: "08:05-12:05",
        title: "InterCity：皇后镇 → 蒂卡波",
        copy: "InterCity 计划班次，约 4 小时；上车点和行李规则以出票信息为准。"
      },
      {
        time: "12:15-13:15",
        title: "蒂卡波午餐与入住",
        copy: "抵达后先去 Haka House Lake Tekapo 办理入住或寄存行李，再在镇上吃午餐。"
      },
      {
        time: "13:30-15:30",
        title: "好牧羊人教堂与湖边",
        copy: "慢慢走到湖边看教堂和奶蓝色湖水，不安排额外徒步，为夜间观星保留体力。",
        links: [{ label: "好牧羊人教堂", query: "Church of the Good Shepherd Lake Tekapo" }]
      },
      {
        time: "18:00-19:00",
        title: "蒂卡波晚餐",
        copy: "在镇上吃正式晚餐，之后回酒店准备观星保暖衣物。"
      },
      {
        time: "21:00 之后",
        title: "早点休息",
        copy: "2/12 常规晚间观星已满，也不参加 2/13 凌晨场；保留体力给 08:00 Tekapo Shuttle 和 Hooker Valley。观星改在 2/13 晚间另排。"
      }
    ]
  },
  {
    date: "2/13",
    day: "D7",
    weekday: "周六",
    title: "Tekapo Shuttle 当天往返，走 Hooker Valley",
    city: "LAKE TEKAPO · AORAKI / MOUNT COOK",
    summary: "乘 08:00 Tekapo Shuttle 当天往返库克山，走 Hooker Valley；15:00 返回蒂卡波续住，晚上可参加 Crater 英文观星。",
    stay: "Haka House Lake Tekapo · 2/13 续住待确认 / 蒂卡波其他酒店",
    items: [
      {
        time: "07:00-07:30",
        title: "早餐",
        copy: "在 Haka House 吃完早餐，大件行李继续寄存在酒店；当天只带小背包。"
      },
      {
        time: "07:30-07:50",
        title: "前往蒂卡波集合点",
        copy: "前往 Tekapo Shuttle 集合点，确认当天为往返行程，15:00 从库克山返回蒂卡波。"
      },
      {
        time: "08:00-09:20",
        title: "Tekapo Shuttle：蒂卡波 → 库克山",
        copy: "沿普卡基湖进入库克山国家公园，途中会安排观景点短停。",
        links: [{ label: "Tekapo Shuttle", query: "Tekapo Shuttle Lake Tekapo Mount Cook" }]
      },
      {
        time: "09:50-10:10",
        title: "前往 White Horse Hill",
        copy: "从 Hermitage 前往 White Horse Hill。提前与 Tekapo Shuttle 确认送往步道口的时间。"
      },
      {
        time: "10:10-13:30",
        title: "Hooker Valley Track",
        copy: "往返约 10 公里、约 3-3.5 小时，经过三座吊桥到 Hooker Lake。上午出发更从容，也要根据风力和云量随时折返。",
        links: [{ label: "Hooker Valley Track", query: "Hooker Valley Track Mount Cook" }]
      },
      {
        time: "13:30-14:30",
        title: "库克山午餐",
        copy: "在 Hermitage 吃午餐并换干爽衣物，14:45 前回到 Tekapo Shuttle 集合点。"
      },
      {
        time: "15:00-16:20",
        title: "Tekapo Shuttle：库克山 → 蒂卡波",
        copy: "返回蒂卡波后回酒店取行李并办理续住；若 Haka House 2/13 无房，则转住蒂卡波其他酒店。"
      },
      {
        time: "17:45-19:00",
        title: "蒂卡波晚餐",
        copy: "吃完晚餐后回酒店休息，为晚上可选的观星和第二天早起保留体力。"
      },
      {
        time: "22:30-23:45",
        title: "Dark Sky 观星：Crater 优先",
        copy: "按本次日期，Crater 22:30 英文场有可订时段；Summit 2/13 只剩凌晨 00:45 / 02:00 一带，接 08:00 Shuttle 太累。",
        bullets: [
          {
            name: "Crater Experience｜更适合这次",
            detail: "优点：同样位于国际暗夜保护区内，NZD 139、75 分钟、离基地仅 5 分钟车程、含接驳、14 英寸望远镜、对体力要求低；缺点：不在约翰山山顶，没有专业天文台穹顶，深度略弱"
          },
          {
            name: "Summit Experience｜体验更强但不建议这次",
            detail: "优点：位于国际暗夜保护区核心的约翰山山顶，同时可进入专业天文台并使用 16 英寸望远镜；1 小时 45 分、含极寒外套，仪式感最强；缺点：NZD 239、需要少量暗夜上坡、2/13 只剩凌晨场，会明显压缩睡眠"
          }
        ],
        links: [
          { label: "Crater 余位", url: "https://book.darkskyproject.co.nz/activity/selection?filter=prodgroup-DSPCRAT&workingDate=2027-02-13" },
          { label: "Summit 介绍", url: "https://www.darkskyproject.co.nz/experiences/the-summit-experience/" }
        ]
      }
    ]
  },
  {
    date: "2/14",
    day: "D8",
    weekday: "周日",
    title: "The Adventurer 冰川直升机徒步，下午到基督城",
    city: "AORAKI / MOUNT COOK · CHRISTCHURCH",
    summary: "06:20 从蒂卡波包车去库克山机场，08:25 前办理 The Adventurer check-in；14:00 乘 GL72，约 19:00 到基督城。",
    stay: "住宿待选 · 基督城",
    items: [
      {
        time: "05:45-06:15",
        title: "早餐、退房与整理装备",
        copy: "穿 3-4 层保暖衣物，带墨镜、手套、相机、饮用水和少量零食；退房时两件大行李箱一起带走。"
      },
      {
        time: "06:20-07:55",
        title: "包车：蒂卡波 → 库克山机场",
        copy: "提前预约能保管两件大行李的包车，约 1 小时 30 分直达 Aoraki Mt Cook Airport；行李留在车上，活动结束后再送往 Hermitage。"
      },
      {
        time: "07:55-08:25",
        title: "机场 check-in",
        copy: "08:25 前完成 The Adventurer check-in；贵重物品随身，大件行李继续由包车保管。"
      },
      {
        time: "08:45-11:45",
        title: "The Adventurer 直升机冰川徒步",
        copy: "直升机进入塔斯曼冰川，冰上活动最多约 2 小时，全程最多约 3 小时。运营方提供靴子、冰爪、登山杖、防水外套和背包。",
        links: [{ label: "The Adventurer", url: "https://www.mtcookguides.co.nz/experiences/the-adventurer/" }]
      },
      {
        time: "11:45-12:10",
        title: "机场 → Hermitage",
        copy: "飞行结束后由包车直接送到 Hermitage，大件行李随车。若活动因天气延迟，立即联系 GL72 或准备继续包车。"
      },
      {
        time: "12:10-13:30",
        title: "Hermitage 午餐与候车",
        copy: "在 Hermitage 午餐；如果活动提前结束，可以先在酒店休息。13:40 前到 Aoraki Lobby 候车。"
      },
      {
        time: "14:00-19:00",
        title: "GL72：库克山 → 基督城",
        copy: "New Zealand Rail / GreatSights 观光巴士，提供酒店送达。沿途经过普卡基湖、蒂卡波和坎特伯雷平原。",
        links: [{ label: "GL72 班次", query: "Mount Cook to Christchurch GL72" }]
      },
      {
        time: "19:00-20:00",
        title: "入住基督城",
        copy: "巴士在 Bus Interchange 附近落客，也可确认酒店送达。办理入住后不要安排需要长途移动的晚餐。"
      }
    ]
  },
  {
    date: "2/15",
    day: "D9",
    weekday: "周一",
    title: "基督城往返凯库拉，出海观鲸",
    city: "CHRISTCHURCH · KAIKOURA",
    summary: "早起乘 InterCity 去凯库拉，参加 Whale Watch 出海，傍晚返回基督城；即使停航也不改变当晚住宿。",
    stay: "住宿待选 · 基督城连住",
    items: [
      {
        time: "06:30-07:15",
        title: "早餐",
        copy: "早餐要更早结束，为 07:30 的凯库拉巴士留时间；当天只带小背包，大件行李留在基督城酒店。"
      },
      {
        time: "07:30-10:20",
        title: "基督城 → 凯库拉",
        copy: "乘 InterCity 前往凯库拉，抵达后直接去观鲸集合点。班次需在出票时再次核对。",
        links: [{ label: "Christchurch Bus Interchange", query: "Christchurch Bus Interchange" }]
      },
      {
        time: "10:30-11:00",
        title: "观鲸集合与简餐",
        copy: "先到 Whale Watch Kaikoura 完成 check-in，再吃小份午餐或外带，避免空腹出海。"
      },
      {
        time: "11:15-14:15",
        title: "凯库拉出海观鲸",
        copy: "海上活动受天气影响。结束后保留缓冲，不安排其他远距离景点。",
        links: [{ label: "Whale Watch Kaikoura", query: "Whale Watch Kaikoura" }]
      },
      {
        time: "14:15-15:45",
        title: "凯库拉半岛与午餐",
        copy: "出海结束后在镇上午餐，视体力走一段 Kaikoura Peninsula 步道。若停航，则把这一段时间延长，但仍按原计划返回。",
        links: [{ label: "Kaikoura Peninsula", query: "Kaikoura Peninsula Walkway" }]
      },
      {
        time: "16:35-19:35",
        title: "凯库拉 → 基督城",
        copy: "乘下午巴士返回基督城，晚上住基督城。"
      },
      {
        time: "20:00-21:00",
        title: "基督城晚餐",
        copy: "回酒店前在基督城吃晚餐，第二天不用再从外地赶机场。"
      }
    ]
  },
  {
    date: "2/16",
    day: "D10",
    weekday: "周二",
    title: "基督城机场返程",
    city: "CHRISTCHURCH · AUCKLAND",
    summary: "已从凯库拉提前一晚回到基督城。彭乘 UA731 + UA8292 经旧金山回多伦多；索乘 NZ550 接 CA784 经奥克兰回北京。",
    stay: "返程途中",
    items: [
      {
        time: "06:30-07:00",
        title: "早餐",
        copy: "在酒店吃早餐并检查护照、托运行李和两段航班的登机文件。"
      },
      {
        time: "11:15-11:45",
        title: "基督城酒店 → 机场",
        copy: "从基督城酒店直接去机场。索需办理 NZ550，彭需办理 UA731，两人都要预留国际与国内航段的值机时间。"
      },
      {
        time: "11:45-13:15",
        title: "基督城机场午餐",
        copy: "两人都在机场先吃午餐，再分别办理登机手续；彭可以先出发，索的 NZ550 在 14:20 起飞。"
      },
      {
        time: "14:20-15:45",
        title: "索：NZ550 基督城 → 奥克兰",
        copy: "已出票。抵达奥克兰后前往国际航站楼；若两段机票分开出票，先取行李再重新办理 CA784 托运。"
      },
      {
        time: "14:15",
        title: "彭：UA731 + UA8292 基督城 → 旧金山 → 多伦多",
        copy: "已出票。UA731 14:15 起飞，经旧金山转 UA8292，预计多伦多当地时间 16:08 抵达；第二段为代码共享，实际承运方与行李直挂以电子票为准。"
      },
      {
        time: "20:30",
        title: "CA784：奥克兰 → 北京",
        copy: "索乘 CA784 直飞北京。NZ550 15:45 抵达奥克兰，距离 CA784 起飞有 4 小时 45 分，仍需确认航站楼转换与行李处理方式。"
      }
    ]
  },
  {
    date: "2/17",
    day: "D11",
    weekday: "周三",
    title: "抵达国内",
    city: "BEIJING · TORONTO",
    summary: "索清晨抵达北京；彭已在前一天下午抵达多伦多。",
    stay: "行程结束",
    items: [
      {
        time: "04:55",
        title: "索抵达北京",
        copy: "CA784 抵达北京首都机场，机上供应早餐。落地后预留入境和提取行李时间。",
        links: [{ label: "北京首都机场", query: "Beijing Capital International Airport" }]
      },
      {
        time: "2/16 16:08",
        title: "彭抵达多伦多",
        copy: "UA8292 经旧金山抵达多伦多皮尔逊机场；代码共享航段以实际承运方通知为准。",
        links: [{ label: "多伦多皮尔逊机场", query: "Toronto Pearson International Airport" }]
      }
    ]
  }
];

const weatherCities = [
  { id: "auckland", cn: "奥克兰", en: "Auckland", lat: -36.8485, lon: 174.7633 },
  { id: "christchurch", cn: "基督城", en: "Christchurch", lat: -43.5321, lon: 172.6362 },
  { id: "kaikoura", cn: "凯库拉", en: "Kaikoura", lat: -42.4008, lon: 173.6814 },
  { id: "tekapo", cn: "蒂卡波", en: "Lake Tekapo", lat: -44.0043, lon: 170.482 },
  { id: "mtcook", cn: "库克山", en: "Mount Cook", lat: -43.734, lon: 170.095 },
  { id: "queenstown", cn: "皇后镇", en: "Queenstown", lat: -45.0312, lon: 168.6626 },
  { id: "wanaka", cn: "瓦纳卡", en: "Wanaka", lat: -44.7032, lon: 169.1321 },
  { id: "milford", cn: "米尔福德峡湾", en: "Milford Sound", lat: -44.6414, lon: 167.8974 }
];

const weatherCacheKey = "nz2027:weather:v2";
const checklistStorageKey = "nz2027:checklist:v1";
const countdownTarget = Date.parse("2027-02-07T18:30:00+08:00");

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  const panels = document.querySelectorAll(".transport-panel");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.tab;
      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        const active = panel.id === `panel-${selected}`;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });
}

function setupCarousel() {
  const carousel = document.querySelector("#destination-carousel");
  document.querySelectorAll("[data-carousel]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = carousel.querySelector(".destination-card");
      const gap = 12;
      const distance = card ? card.getBoundingClientRect().width + gap : 280;
      carousel.scrollBy({
        left: button.dataset.carousel === "next" ? distance : -distance,
        behavior: "smooth"
      });
    });
  });
}

function renderDayTabs(selectedIndex = 0) {
  const tabs = document.querySelector("#day-tabs");
  tabs.innerHTML = "";
  tripDays.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-tab${index === selectedIndex ? " is-active" : ""}`;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === selectedIndex));
    button.setAttribute("aria-controls", "day-detail");
    button.innerHTML = `<strong>${day.date}</strong><small>${day.day}</small>`;
    button.addEventListener("click", () => {
      renderDayTabs(index);
      button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
    tabs.appendChild(button);
  });
  renderDayDetail(selectedIndex);
}

function renderDayDetail(index) {
  const day = tripDays[index];
  const detail = document.querySelector("#day-detail");
  const timeline = day.items
    .map((item) => {
      const links = item.links?.length
        ? `<div class="timeline-links">${item.links
            .map((link) => {
              const href = link.url || mapsUrl(link.query);
              return `<a href="${href}" target="_blank" rel="noopener">${link.label} ↗</a>`;
            })
            .join("")}</div>`
        : "";
      const bullets = item.bullets?.length
        ? `<ul class="timeline-bullets">${item.bullets
            .map((entry) => {
              const shop = typeof entry === "string" ? { name: entry } : entry;
              const name = shop.query
                ? `<a href="${mapsUrl(shop.query)}" target="_blank" rel="noopener">${shop.name}</a>`
                : `<strong>${shop.name}</strong>`;
              const detail = shop.detail ? `<span>${shop.detail}</span>` : "";
              return `<li>${name}${detail}</li>`;
            })
            .join("")}</ul>`
        : "";
      return `
        <div class="timeline-item">
          <div class="timeline-time">${item.time}</div>
          <div class="timeline-content">
            <h4>${item.title}</h4>
            <p>${item.copy}</p>
            ${bullets}
            ${links}
          </div>
        </div>
      `;
    })
    .join("");

  detail.innerHTML = `
    <div class="day-header">
      <div>
        <span class="day-city">${day.city}</span>
        <h3>${day.date} · ${day.title}</h3>
        <p>${day.summary}</p>
      </div>
      <div>
        <span class="day-city">${day.weekday}</span>
        <p>${day.day} · 当地时间</p>
      </div>
    </div>
    <div class="timeline">
      ${timeline}
      <div class="day-stay"><strong>当晚住宿</strong><span>${day.stay}</span></div>
      </div>
    </div>
  `;
}

function weatherLabel(code) {
  if (code === 0) return "晴";
  if ([1, 2].includes(code)) return "少云";
  if (code === 3) return "阴";
  if ([45, 48].includes(code)) return "雾";
  if ([51, 53, 55, 56, 57].includes(code)) return "毛毛雨";
  if ([61, 63, 65, 66, 67].includes(code)) return "雨";
  if ([71, 73, 75, 77].includes(code)) return "雪";
  if ([80, 81, 82].includes(code)) return "阵雨";
  if ([85, 86].includes(code)) return "阵雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天气变化";
}

function readWeatherCache() {
  try {
    const raw = localStorage.getItem(weatherCacheKey);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveWeatherCache(data) {
  try {
    localStorage.setItem(weatherCacheKey, JSON.stringify(data));
  } catch {
    // The page still works if storage is unavailable.
  }
}

function renderWeather(data, stale = false) {
  document.querySelectorAll(".weather-slot[data-weather]").forEach((slot) => {
    const weather = data[slot.dataset.weather];
    slot.classList.toggle("is-error", !weather);

    if (!weather) {
      slot.textContent = "暂时无法获取天气";
      return;
    }

    const observed = weather.time ? weather.time.slice(5, 16).replace("T", " ") : "缓存数据";
    slot.innerHTML = `
      <div class="weather-reading">
        <div class="weather-current">
          <strong>${Math.round(weather.temp)}°</strong>
          <span>${weatherLabel(weather.code)} · 体感 ${Math.round(weather.apparent)}°</span>
        </div>
        <span class="weather-meta">${observed} · 湿度 ${Math.round(weather.humidity)}% · 风速 ${Math.round(weather.wind)} km/h${stale ? " · 上次缓存" : ""}</span>
      </div>
    `;
  });
}

async function loadWeather(force = false) {
  const refresh = document.querySelector("#refresh-weather");
  const cache = readWeatherCache();
  const hasCache = Object.keys(cache).length > 0;

  if (hasCache) renderWeather(cache, true);
  refresh.disabled = true;
  refresh.textContent = "更新中...";

  try {
    const results = await Promise.all(
      weatherCities.map(async (city) => {
        const params = new URLSearchParams({
          latitude: String(city.lat),
          longitude: String(city.lon),
          current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
          timezone: "auto",
          forecast_days: "1"
        });
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);
        try {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
            signal: controller.signal
          });
          if (!response.ok) throw new Error("Weather request failed");
          const json = await response.json();
          return {
            id: city.id,
            weather: {
              time: json.current.time,
              temp: json.current.temperature_2m,
              apparent: json.current.apparent_temperature,
              humidity: json.current.relative_humidity_2m,
              wind: json.current.wind_speed_10m,
              code: json.current.weather_code
            }
          };
        } finally {
          clearTimeout(timeout);
        }
      })
    );

    const nextCache = {};
    results.forEach(({ id, weather }) => {
      if (Number.isFinite(weather.temp)) nextCache[id] = weather;
    });
    if (Object.keys(nextCache).length) {
      saveWeatherCache(nextCache);
      renderWeather(nextCache, false);
    } else {
      throw new Error("No weather data");
    }
  } catch {
    if (!hasCache) renderWeather({}, true);
  } finally {
    refresh.disabled = false;
    refresh.textContent = "刷新天气";
  }
}

function updateCountdown() {
  const now = Date.now();
  const difference = countdownTarget - now;
  const values = [
    ["#cd-days", Math.max(0, Math.floor(difference / 86400000))],
    ["#cd-hours", Math.max(0, Math.floor((difference % 86400000) / 3600000))],
    ["#cd-minutes", Math.max(0, Math.floor((difference % 3600000) / 60000))],
    ["#cd-seconds", Math.max(0, Math.floor((difference % 60000) / 1000))]
  ];

  values.forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = String(value).padStart(2, "0");
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function setupShare() {
  document.querySelector("#share-button").addEventListener("click", async () => {
    const shareData = {
      title: document.title,
      text: "Aotearoa New Zealand · 2027 南岛之旅",
      url: window.location.href
    };

    if (/MicroMessenger/i.test(navigator.userAgent)) {
      showToast("请使用微信右上角菜单分享这份行程。");
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("行程链接已复制。");
    } catch {
      showToast("请复制浏览器地址栏中的链接分享。");
    }
  });
}

function setupChecklist() {
  const checklist = document.querySelector("#trip-checklist");
  const inputs = [...checklist.querySelectorAll('input[type="checkbox"]')];
  const progress = document.querySelector("#checklist-progress");
  const clearButton = document.querySelector("#clear-checklist");

  const readSavedState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(checklistStorageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  };

  const updateProgress = () => {
    const completed = inputs.filter((input) => input.checked).length;
    progress.textContent = `${completed} / ${inputs.length}`;
  };

  const saveState = () => {
    const checked = inputs.filter((input) => input.checked).map((input) => input.dataset.checkId);
    try {
      localStorage.setItem(checklistStorageKey, JSON.stringify(checked));
    } catch {
      // The checklist remains usable when browser storage is unavailable.
    }
    updateProgress();
  };

  const savedState = new Set(readSavedState());
  inputs.forEach((input) => {
    input.checked = savedState.has(input.dataset.checkId);
    input.addEventListener("change", saveState);
  });

  clearButton.addEventListener("click", () => {
    inputs.forEach((input) => {
      input.checked = false;
    });
    saveState();
  });

  updateProgress();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("service-worker.js?v=58").catch(() => {
      // The static page still works without service worker support.
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupCarousel();
  setupChecklist();
  renderDayTabs(0);
  loadWeather();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupShare();
  registerServiceWorker();
  document.querySelector("#refresh-weather").addEventListener("click", () => loadWeather(true));
});
