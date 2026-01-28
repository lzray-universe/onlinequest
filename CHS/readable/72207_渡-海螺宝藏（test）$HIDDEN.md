# 72207 渡-海螺宝藏（test）$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72173

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7220706

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7220705,
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


### 步骤 2：子任务 7220701

在海边捡到一个带有藏宝图的海螺（test）$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101576,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101577,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101578,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101579,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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


### 步骤 3：子任务 7220702

跟鬼魂对话（test）$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7220701,
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


#### 对话 7220701

**起点节点 `722070101`**


**岻伽：**还不够呢…还不够哟…

**岻伽：**哥哥留给我的宝藏，都在海螺里哟…

**岻伽：**海螺呀海螺，散落得到处都是呢…到处都是呢…

**岻伽：**是哥哥的宝藏哟…我还不能离开呢…

**分支 1：**

  **旅行者：**宝藏…？

  **岻伽：**哥哥去了雾海以外的地方，祭司大人很生气…他说哥哥的灵再也回不来了…

  **岻伽：**但哥哥说：「那里有好看的花，有珍珠的海…爸爸也在那里划着船，带着小妹妹招手呢…」

  **岻伽：**哥哥留下了他的宝藏，就没有再回来…

**分支 2：**

  **旅行者：**关于你的哥哥…

  ↩ 合流到节点 `722070107`



#### 对话 7220702

**起点节点 `722070201`**


**岻伽：**不行哟，我还不能离开呢…一定要找到哥哥的宝藏才行哟…




### 步骤 4：子任务 7220703

找到所有藏宝图碎片（test）$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101576,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101577,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101578,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101579,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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


#### 对话 7220702

**起点节点 `722070201`**


**岻伽：**不行哟，我还不能离开呢…一定要找到哥哥的宝藏才行哟…



#### 对话 7220703

**起点节点 `722070301`**


**岻伽：**哈哈…原来哥哥的宝藏在这里呀…谢谢你。

**岻伽：**虽然没办法一起去梦的土地了…但我一定会化成点点的光，回来寻找你的…

**岻伽：**在陌生的地方游荡的灵，也会做梦吗…




### 步骤 5：子任务 7220704

找到npc对话（test）$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7220703,
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
        "101576",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "101577",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "101578",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "101579",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
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


#### 对话 7220703

**起点节点 `722070301`**


**岻伽：**哈哈…原来哥哥的宝藏在这里呀…谢谢你。

**岻伽：**虽然没办法一起去梦的土地了…但我一定会化成点点的光，回来寻找你的…

**岻伽：**在陌生的地方游荡的灵，也会做梦吗…




### 步骤 6：子任务 7220705

去挖宝（test）$HIDDEN

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
      "PPFLKMOMKAI": "7220705_finish"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "72207",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "72174",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INC_QUEST_GLOBAL_VAR"
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

（此步骤无对话）
