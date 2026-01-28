# 40005 海内有明霄$UNRELEASED

从凯亚的线人那里，你了解到那是跨境黑道组织「盗宝团」的联络符号。事情的真相似乎没有先前猜测得那么可怕。盗宝团的璃月分部，刚才接到了一封匿名信。在魈的威名威慑之下，盗宝团将那封信交给了你。信的主人要求盗宝团高层与他在璃月某处密会，有大事相商。再次地，在魈的威名威慑之下，真正的盗宝团成员同意让你假扮高层，前往信中地址，在约定的时间与匿名信主会面…$UNRELEASED


---
## 任务信息

- **任务类型**：EQ
- **所属章节**：海灯节 第五天
- **推荐等级**：0
- **前置主任务**：40004
- **后接主任务**：1005, 1006

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 4000500

(test)派蒙开车台词（隐藏）$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000500,
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
      "Q40005Player"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 2：子任务 4000501

前往约好的地点，与信主碰头$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1163,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TRIGGER_FIRE",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "1001",
        "10020"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INACTIVE_ACTIVITY_COND_STATE"
    },
    {
      "LNHLPKELCAL": [
        "1001",
        "10021"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40005Player"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

**过场动画：**
- Cutscene `4000501`（video）
  - videoName: `Cs_EQHDJ005_HaiDengJie_Boy.usm`
  - videoNameOther: `Cs_EQHDJ005_HaiDengJie_Girl.usm`
  - 字幕（primary）：`subtitles/Cs_EQHDJ005_HaiDengJie_Boy_CHS.srt`
  - 字幕（other）：`subtitles/Cs_EQHDJ005_HaiDengJie_Girl_CHS.srt`
  - fadeIn/fadeOut: 0.5/0.5

（此步骤无对话）


### 步骤 3：子任务 4000502

前往约好的地点，与信主碰头$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000502,
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
        "3",
        "301001006,1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
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
      "10205"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 4000502

**起点节点 `400050201`**


**？？？：**两位就是来自盗宝团的朋友么？我明明已经在密信中说自己会乔装，也请两位尽情乔装…

**？？？：**而今这位朋友却以本来面目现身，实在坦荡，在下佩服。

**派蒙：**哼哼。我们和你这种藏头露尾的人不一样，我们可没有做过不戴上面具就不敢出现的亏心事啊！

**派蒙：**喂——！

**分支 1：**

  **旅行者：**是他说尽情乔装…

  **？？？：**你们，不是盗宝团的人！你们是什么人？

**分支 2：**

  **旅行者：**其实我觉得这样还蛮帅的…

  ↩ 合流到节点 `400050207`




### 步骤 4：子任务 4000503

击败可疑人士$UNRELEASED

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
      "PPFLKMOMKAI": "301001006"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "301001006,2"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40005Player",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 4000504

(test)与可疑人对话（隐藏）$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000504,
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
        "10021"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INACTIVE_ACTIVITY_COND_STATE"
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


#### 对话 4000504

**起点节点 `400050401`**


**派蒙：**快把你的阴谋诡计招了！$UNRELEASED

**？？？：**我招我招！$UNRELEASED

**派蒙：**不招的话，就尝尝我…欸！招得这么快吗？$UNRELEASED

**？？？：**其实我…是向往「盗宝团」威名的新手盗贼。$UNRELEASED

**派蒙：**新手盗贼？！$UNRELEASED

**？？？：**像我这样初出茅庐，又孤身一人的新手…盗宝团就是我心中的圣地…$UNRELEASED

**派蒙：**等一下…$UNRELEASED

**？？？：**所以我想要干出一桩大买卖，去纳投名状…$UNRELEASED

**派蒙：**等一下！完全搞不明白！ $UNRELEASED

**派蒙：**这和我想象的，凶残又邪恶的纵火黑手，完全不一样！$UNRELEASED

**？？？：**纵火，什么纵火？$UNRELEASED

**派蒙：**你一直在易燃物堆放的地方晃荡，难道不是为了纵火吗？$UNRELEASED

**？？？：**啊啊，你说那里啊。我只是在那里踩点。$UNRELEASED

**？？？：**我的计划和那些建筑材料没有关系。$UNRELEASED

**派蒙：**没有关系？！$UNRELEASED

**？？？：**我是为了…偷走那块二十年一遇的巨大「浮生石」！$UNRELEASED

**？？？：**我的计划是，趁着夜色砍断一半锁链，就这样让它往海的方向飘——$UNRELEASED

**派蒙：**哦哦。$UNRELEASED

**？？？：**再想办法让它沉到云来海的浅水湾里，这样就是完美犯罪了！$UNRELEASED

**派蒙：**不完美的地方太多了！比如你要怎么把浮空的浮生石沉到水里啊？$UNRELEASED

**？？？：**我也在思考这个问题，所以一直没动手嘛。$UNRELEASED

**派蒙：**这人真的脑子不清楚啊！$UNRELEASED

**派蒙：**#好了，{NICKNAME}，给他一个教训吧。$UNRELEASED

**派蒙：**那么，我们去和夜叉小哥复命吧。$UNRELEASED




### 步骤 6：子任务 4000505

前往约定地点，与魈对话$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        4000505,
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


#### 对话 4000505

**起点节点 `400050501`**


**魈：**原来事情是这样。人类的行为总是愚蠢得如此随机…不过，我无所谓。$UNRELEASED

**魈：**好了。你们把我喊到能看见「明霄灯」的地方来，究竟是为了什么？$UNRELEASED

**分支 1：**

  **旅行者：**当然是为了「明霄灯」。$UNRELEASED

  **派蒙：**明明海灯节纪念的英雄里也包括你…为什么你却不想去看灯呢？$UNRELEASED

  **魈：**我无法靠近人群。那些，无忧无虑的人。$UNRELEASED

  **魈：**苦行与杀戮的日子，我已经过得太久…已经成为习惯…$UNRELEASED

  **魈：**这个话题就到这里吧。$UNRELEASED

  **魈：**再见了。$UNRELEASED

  **魈：**……$UNRELEASED

  **魈：**不过，如果你在璃月遇到了鬼神之难，就直呼我名吧。$UNRELEASED

  **魈：**不论是你，还是璃月。所有的灯火，所有祈求平安的愿望，我都已经听到了。$UNRELEASED

  **旅行者：**那么，新年快乐。$UNRELEASED

  **派蒙：**新年快乐！$UNRELEASED

**分支 2：**

  **旅行者：**当然是为了海灯节。$UNRELEASED

  ↩ 合流到节点 `400050505`




### 步骤 7：子任务 4000506

回璃月港，见证海灯节最后一日$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1164,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TRIGGER_FIRE",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "301001009"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "Q40005Target1"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）
