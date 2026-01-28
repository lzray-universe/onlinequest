# 75113 (test)牧龙场赛跑$HIDDEN

(test)牧龙场赛跑$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75046

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7511301

(test)与牧龙人对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7511301,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "7511301finish"
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
      "6423"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7511301

**起点节点 `751130101`**


**乌鲁班巴：**好心的勇士，我的小龙全都安然无恙，多亏有你帮忙！

**乌鲁班巴：**像你这种又善良又有勇气的人，我乌鲁班巴愿意无偿帮助你进行「勇士挑战」训练！

**分支 1：**

  **旅行者：**现在开始吧！

**分支 2：**

  **旅行者：**让我稍做准备...




### 步骤 2：子任务 7511302

(test)完成挑战$HIDDEN

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
      "PPFLKMOMKAI": "7511302finish"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7511301,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_GLOBAL_VAR_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "7511302fail"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "7511302finish"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7511301,
        1
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_GLOBAL_VAR_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
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
      "[3_10659:-2414.682,219.929,9752.246]",
      "0"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7511301

**起点节点 `751130101`**


**乌鲁班巴：**好心的勇士，我的小龙全都安然无恙，多亏有你帮忙！

**乌鲁班巴：**像你这种又善良又有勇气的人，我乌鲁班巴愿意无偿帮助你进行「勇士挑战」训练！

**分支 1：**

  **旅行者：**现在开始吧！

**分支 2：**

  **旅行者：**让我稍做准备...



#### 对话 7511302

**起点节点 `751130201`**


**乌鲁班巴：**一旦决定了，不要多想，使劲往前冲就好！




### 步骤 3：子任务 7511303

(test)完成最高难度奖励$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7511304,
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
        "7511301",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "7511301"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133515099"
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
    "LNHLPKELCAL": [
      "6423"
    ],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7511304

**起点节点 `751130401`**


**乌鲁班巴：**啊，我倒是没想到你能冲出这么好的成绩，是我小看人了。

**乌鲁班巴：**精心准备好的挑战奖品被半路杀出来的陌生人轻松拿走，这种事…

**乌鲁班巴：**简直就像织物里说的英雄故事！

**乌鲁班巴：**说不定将来你也会成为被写进织物里的英雄，嗯…很有可能！

**乌鲁班巴：**英雄，要不要一起来留个影？将来有一天，说不定我还能拿这张画片出去吹吹牛。


