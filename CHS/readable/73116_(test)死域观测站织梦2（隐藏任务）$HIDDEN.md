# 73116 (test)死域观测站织梦2（隐藏任务）$HIDDEN

(test)死域观测站织梦2$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7311601

监测看见兰那罗$HIDDEN

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
      "PPFLKMOMKAI": "hiddenlnl_73116"
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


### 步骤 2：子任务 7311602

和兰那罗对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7311602,
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
        "133302254,2"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
    },
    {
      "LNHLPKELCAL": [
        "73100",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "20757"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7311602

**起点节点 `731160201`**


**淘气的兰那罗：**啊，被发现了…

**淘气的兰那罗：**唔…是不是该去找其他兰那罗学习一下捉迷藏的技巧？找兰难世还是兰梨娄好呢？




### 步骤 3：子任务 7311603

监测看见黑烟1$HIDDEN

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
      "PPFLKMOMKAI": "smokeObserved1_73116"
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


### 步骤 4：子任务 7311604

打黑烟1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133302255,
        255002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133302253"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
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


### 步骤 5：子任务 7311605

监测看见黑烟2$HIDDEN

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
      "PPFLKMOMKAI": "smokeObserved2_73116"
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


### 步骤 6：子任务 7311606

打黑烟2$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133302256,
        256002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133302253"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
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


### 步骤 7：子任务 7311607

增加任务进度$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7311602,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7311604,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7311606,
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


### 步骤 8：子任务 7311608

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7311607,
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
