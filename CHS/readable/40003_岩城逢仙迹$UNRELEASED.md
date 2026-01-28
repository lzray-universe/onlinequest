# 40003 岩城逢仙迹$UNRELEASED

在码头上，大量堆放着建灯所用的易燃材料。而在成堆的材料之间，你见到了形影鬼祟的可疑人士。可疑人士不愿被打扰，呵斥着要你离开。你与派蒙望向木、纸、油……堆积的景象，心中升起了不好的预感。于是你前往璃月总务司，向千岩军的守卫报告了情况。不知他们处理得怎么样了？事关重大，你决定再去打听一番。$UNRELEASED


---
## 任务信息

- **任务类型**：EQ
- **所属章节**：海灯节 第三天
- **推荐等级**：0
- **前置主任务**：40002
- **后接主任务**：40004

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 4000301

(test)派蒙开车台词（隐藏）$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000301,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
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


### 步骤 2：子任务 4000302

前往总务司，与嘉义对话$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000302,
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
        "1001",
        "10019"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ACTIVE_ACTIVITY_COND_STATE"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "2056"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 4000302

**起点节点 `400030201`**


**嘉义：**你们…哦，对了，是昨天来提醒险情的二位。$UNRELEASED

**嘉义：**唉…实不相瞒，海灯节期间，总务司事务繁杂，暂时抽不出人手来排查。$UNRELEASED

**派蒙：**欸？怎么这样——$UNRELEASED

**嘉义：**真对不住，难得你们这么热心提供情报…容我想想…也许…$UNRELEASED

**嘉义：**也许，我们有一个小队能帮上忙。他们手上的任务，今天只剩最后一个了。$UNRELEASED

**嘉义：**他们在归离原清剿怪物，如果你们能联系上他们的话…$UNRELEASED




### 步骤 3：子任务 4000305

前去寻找千岩军$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000305,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40003Target1",
      "40"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 4：子任务 4000303

清剿丘丘人与路障$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "3010010021"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "3010010022"
    }
  ],
  "triggerCond": [],
  "execActions": [],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40003Target1",
      "40"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 4000304

与千岩军小队对话$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000304,
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
        "1001",
        "10019"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INACTIVE_ACTIVITY_COND_STATE"
    }
  ],
  "guide": {
    "BEALNDJFMMC": "QUEST_GUIDE_IN_SCENE_STYLE_NONE",
    "BJKFMDGPIBN": "QUEST_GUIDE_INDICATOR_STYLE_NONE",
    "CCLPMCLNLBJ": "NONE",
    "CJHEDKCIHPA": 0,
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "242801"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 4000304

**起点节点 `400030401`**


**星火：**好了，这里的怪物痕迹已经调查完毕，该收工了——嗯？$UNRELEASED

**星火：**你们是什么人？$UNRELEASED

**派蒙：**是嘉义让我们来找你的，他说…$UNRELEASED

**星火：**原来如此。$UNRELEASED

**星火：**感谢你们对总务司工作的支持，这件事我们记下了，很快就会提上日程。$UNRELEASED

**星火：**那么，我们在璃月港有缘再见吧，热心的旅行者。$UNRELEASED

**派蒙：**#{NICKNAME}，你有没有觉得…$UNRELEASED

**分支 1：**

  **旅行者：**总务司的态度不太上心。$UNRELEASED

  **派蒙：**派蒙我也这么认为！$UNRELEASED

  **派蒙：**本地人估计习惯了那些好吃的。$UNRELEASED

  **派蒙：**但流落荒野、在最惨的时候只能吃奇怪蘑菇维持生活的旅行者…$UNRELEASED

  **派蒙：**对你来说，海灯节，意，义，非，凡！$UNRELEASED

  **派蒙：**所以我们再去昨天目击的地点看看吧。$UNRELEASED

  **派蒙：**听巡捕大爷说，罪犯都喜欢回案发地点看看。罪犯的心理就是这样。$UNRELEASED

  **旅行者：**还没「案发」呢…$UNRELEASED

  **派蒙：**所以说要抓紧时间啊，如果易燃品被人动了手脚，那案发的时候一切就都晚了！$UNRELEASED

**分支 2：**

  **旅行者：**还是需要我们来解决问题。$UNRELEASED

  **派蒙：**我也这么认为！$UNRELEASED

  **派蒙：**根据我们四处冒险的经验，这件事还是负责到底比较好。$UNRELEASED

  ↩ 合流到节点 `400030416`




### 步骤 6：子任务 4000306

回「案发地点」看看$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1158,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TRIGGER_FIRE",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40002Target1"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 7：子任务 4000307

(test)与派蒙对话（隐藏）$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000307,
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


#### 对话 4000307

**起点节点 `400030701`**


**派蒙：**果然，那个是！

**分支 1：**

  **旅行者：**要追上去吗？

  **派蒙：**等一等，似乎还有人——

**分支 2：**

  **旅行者：**追上去吧。

  ↩ 合流到节点 `400030704`




### 步骤 8：子任务 4000308

(test)去案犯现场再看看$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1161,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TRIGGER_FIRE",
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


### 步骤 9：子任务 4000309

与未知人士对话$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000309,
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "10204"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 4000309

**起点节点 `400030901`**


**派蒙：**……$UNRELEASED

**魈：**……$UNRELEASED

**派蒙：**#{NICKNAME}，怎么办，这个人看起来很难沟通的样子。$UNRELEASED

**派蒙：**呜啊。感、感觉，并不是善人…$UNRELEASED

**魈：**不要只依靠感觉，就对「善恶」随口评说。$UNRELEASED

**魈：**不过，我确实是恶鬼。我是斩杀妖物、魔障的护法夜叉，魈。$UNRELEASED

**派蒙：**护法夜叉…！$UNRELEASED

**分支 1：**

  **旅行者：**这个名词前两天好像听过。$UNRELEASED

  **派蒙：**对、对了…之前有听璃月的人说过…夜叉也是守护璃月的仙人…$UNRELEASED

  **派蒙：**暗中镇守人类的世界，为不知情的凡人斩妖除魔…$UNRELEASED

  **派蒙：**一般意义上，这不就是叫做善人吗！$UNRELEASED

  **魈：**…不。夜叉的「护法」，并不出于对人类的善意。$UNRELEASED

  **派蒙：**呜…明明海灯节的主题，就是纪念英雄。$UNRELEASED

  **派蒙：**历史上护佑璃月的那些英雄，难得有一个活到现在的，却对纪念自己的节日不领情呢。$UNRELEASED

  **魈：**……$UNRELEASED

  **派蒙：**魈先生…呃，魈上仙…？为什么你刚才不直接制伏那个可疑的家伙呢？$UNRELEASED

  **魈：**本以为是妖物作祟，我才过来看看。$UNRELEASED

  **魈：**如果在仙与魔的世界，有什么东西失去桎梏，那就是我的责任。$UNRELEASED

  **魈：**但这次的威胁来自人类的世界——你们的世界，所以这是你的责任，人类旅者。$UNRELEASED

  **魈：**必要时…也希望你自觉一些，下手果断。$UNRELEASED

  **魈：**不要让斩妖之枪的枪缨，沾染凡间之血。$UNRELEASED

  **派蒙：**这个是——$UNRELEASED

  **魈：**是那人留下的符号。$UNRELEASED

  **旅行者：**派蒙认识吗？$UNRELEASED

  **派蒙：**并没有什么印象呢。$UNRELEASED

  **魈：**那就努力向我展示，你们能做到哪一步吧。$UNRELEASED

  **魈：**如果换我来，导向的结局多少会有「红色海灯节」的可能性。$UNRELEASED

  **旅行者：**颜色还挺喜庆的。$UNRELEASED

  **派蒙：**听着好吓人！$UNRELEASED

  （缺失节点 `400030932`）

**分支 2：**

  **旅行者：**派蒙知道「夜叉」吗？$UNRELEASED

  ↩ 合流到节点 `400030910`



**起点节点 `400030931`**


**派蒙：**呜哇，你先别这么冲动。等我们先问明白这个符号的来历再说吧。


