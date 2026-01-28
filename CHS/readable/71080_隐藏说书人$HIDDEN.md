# 71080 隐藏说书人$HIDDEN

隐藏说书人$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：71044
- **任务奖励**：
  - 塔列辛的诗稿×1

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7108001

隐藏判断任务存在$HIDDEN

**任务条件：**

```json
{
  "finishCond": [],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 2：子任务 7108002

上层封印解除$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108012,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108012",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108012

**起点节点 `710800607`**


**旅行者：**讲述有关如何解除「七星阵法」的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**哦哦…「就这样，就这样…在忠诚的仆人…」不对不对…！

**塔列辛：**#「…在忠诚的友伴指引下，{NICKNAME}打通了前往矿坑的道路…！」

**派蒙：**哇…这样不太好吧，我们毕竟没有经过人家允许就…

**塔列辛：**欸~不用担心！英雄不为常人所为之事，不循常人所拘之道！大家不会在意这点小小问题的！




### 步骤 3：子任务 7108003

解开黑雾$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108013,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108012",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108013

**起点节点 `710800613`**


**旅行者：**讲述有关黑雾与深渊怪物的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**哇…这个很好！这个很好！请让我记录下来！

**塔列辛：**「…深黑的雾气如雪崩压至，倏而离析，来自深渊的两位使徒消失不见，正如来时一般…」




### 步骤 4：子任务 7108004

大碎片完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108014,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108012",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108014

**起点节点 `710800617`**


**旅行者：**讲述有关巨渊深处湛蓝晶石的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**「…天与水的颜色重又在晶石表面流动，紫红色的溃斑就此褪去…」

**塔列辛：**#「…古老遗迹中的构装巨兽，其头上正挨了{NICKNAME}的铁拳，昏昏沉沉之时…利箭救星顷刻而至！」

**塔列辛：**「…那相助旅者的神秘客消失无踪，再看蛇行的构装巨兽，却已被晶石砸得七零八落…」




### 步骤 5：子任务 7108005

大蘑菇任务完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108015,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108012",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108015

**起点节点 `710800622`**


**旅行者：**讲述有关岩洞中巨大荧光菌类的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**有趣…这个实在令人意想不到呀…请容我好好构思一下再开口吧。

**塔列辛：**「…虽是高可参天的巨蘑，面临黑暗侵袭之时，亦是难以自救的弱者…」

**塔列辛：**#「…{NICKNAME}应呼唤而来，为其净化土地，排忧解难…」




### 步骤 6：子任务 7108006

黑蛇骑士完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108016,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108013",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108016

**起点节点 `710800629`**


**旅行者：**讲述有关九位黑蛇骑士的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**这个好呀，这个好！「…于是，命运的旅人言道：『漫说一个一个接踵而至，就是九个一同攻来，一并击破又有何难？』…」

**旅行者：**唔…也没有这么夸张就是了…

**塔列辛：**没关系的…请容我现编…不，编纂一下九位剑士的家世…




### 步骤 7：子任务 7108007

双子线完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108017,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108013",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108017

**起点节点 `710800634`**


**旅行者：**讲述追寻血亲的进展…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**有趣，有趣…被遗忘的古国，不被认同的牺牲…落于愚昧的不公惩罚…十分宏大的主题，十分宏大的故事呀…

**塔列辛：**而这样的故事，乃是你冒险途中所经历的事件，与你的目标也息息相关…

**塔列辛：**谢谢你让我知道这些，我会记录下来的。但我暂时不会编撰成诗…因为这只是属于你的史诗的小小碎片而已。

**塔列辛：**我不会以有限的才能亵渎你的故事…但请你完成自己的旅途后，一定要讲与我听。

**塔列辛：**我有预感，待到那一天，我将有幸听到最为伟大的英雄史诗…出自你自己的口舌与双脚。




### 步骤 8：子任务 7108008

愚人众任务完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108018,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "71080",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    },
    {
      "LNHLPKELCAL": [
        "7108013",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ADD_QUEST_PROGRESS"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108018

**起点节点 `710800641`**


**旅行者：**讲述有关陷入困境的愚人众的故事…

**[黑屏]** 你为塔列辛讲述了此前的经历…

**塔列辛：**哈哈，这个故事很有意思呀！「…『日暮途穷的苦涩今日，竟被大敌所搭救！』安东上士如是叹息…」

**塔列辛：**「今日暂时的友人，难保来日会不会重新为敌！」




### 步骤 9：子任务 7108013

人物故事判断$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 3,
      "LNHLPKELCAL": [
        7108013,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ADD_QUEST_PROGRESS",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108011

**起点节点 `710800627`**


**旅行者：**讲述关于所见所闻之人与物的故事。

**塔列辛：**还请您知无不言，我洗耳恭听。




### 步骤 10：子任务 7108012

层岩故事判断$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 4,
      "LNHLPKELCAL": [
        7108012,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ADD_QUEST_PROGRESS",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108010

**起点节点 `710800605`**


**旅行者：**讲述关于层岩巨渊本身的故事。

**塔列辛：**好的，请你讲述吧！




### 步骤 11：子任务 7108009

回滚隔离点$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 7,
      "LNHLPKELCAL": [
        71080,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ADD_QUEST_PROGRESS",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INIT_TIME_VAR"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108001

**起点节点 `710800101`**


**塔列辛：**#哈，你好！是收服了东风之龙、拯救我家乡的大英雄{NICKNAME}呀！



#### 对话 7108002

**起点节点 `710800201`**


**塔列辛：**#你来了，{NICKNAME}，直面「愚人众」执行官，从海魔面前拯救了璃月的英雄！



#### 对话 7108003

**起点节点 `710800301`**


**塔列辛：**#啊啊，是在遥远晨雾中的雷霆之国兴云吐雾的大人物！{NICKNAME}，请到这来，请到这来！



#### 对话 7108004

**起点节点 `710800401`**


**塔列辛：**#你好呀！你好呀！{NICKNAME}！曾徒步登上龙脊雪山的大冒险家！



#### 对话 7108005

**起点节点 `710800501`**


**塔列辛：**#你好啊！令「愚人众」执行官在异国俯首败伏的旅人！{NICKNAME}！



#### 对话 7108008

**起点节点 `710800601`**


**塔列辛：**虽然有点唐突…但不知可否请向英雄讨教故事一二，以便我编纂成诗歌，传唱后世？

**分支 1：**

  **旅行者：**如果只是讲故事的话…

  **塔列辛：**您能够答应的话就太好了！我在此洗耳恭听！

**分支 2：**

  **旅行者：**我可有得是故事。

  ↩ 合流到节点 `710800604`




### 步骤 12：子任务 7108014

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108009,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 13：子任务 7108010

计时经过1天$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        71080,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TIME_VAR_PASS_DAY",
      "PPFLKMOMKAI": "1"
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 14：子任务 7108011

与塔列辛对话获得诗篇$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108007,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_NONE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_NONE",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7108007

**起点节点 `710800701`**


**塔列辛：**感谢你帮我完成这部史诗，对了，这份手稿是我的谢礼。请收下吧。

**塔列辛：**呼…这是史诗的初稿，承载了我情感与抱负。我今天将它交付与你，作为一点小小的回报。




---
## 未归类对话


#### 对话 7108009

**起点节点 `710800645`**


**旅行者：**再见。

**塔列辛：**#愿你平安。非常感谢您能停留，流誉七国的大英雄{NICKNAME}！


