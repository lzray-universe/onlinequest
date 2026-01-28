# 72202 渡-看守人（test）$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72173

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7220201

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7220201,
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


#### 对话 7220201

**起点节点 `722020101`**


**知世：**雷鸟大人…抛弃了我吗…

**分支 1：**

  **旅行者：**你好？

  **知世：**雷鸟大人…请您不要动怒…

  **知世：**我会尽我之力，阅读您的旨意，阅读您的教谕…但是…但是…

  **知世：**但是…为什么您在拒绝我…为什么…呜呜…呜呜呜…

  **知世：**为什么…我无法深入您的迷雾…

  **分支 1：**

    **旅行者：**阅读…你在说什么呀？

    **知世：**您留下的雷石…我会再想办法的…银璨璨的船来了，我的时间不多了…

    **旅行者：**雷石…那是什么？

    **知世：**逢岳之野的雷石…只有操使雷电的人才能够让它们活起来…只有在迷雾中寻觅通路的人，才能找到它们…

    **知世：**如雷鸟伫立…如雷鸟展翼…

  **分支 2：**

    **旅行者：**迷雾…不是已经消散了吗？

    ↩ 合流到节点 `722020109`

**分支 2：**

  **旅行者：**需要帮忙吗？

  ↩ 合流到节点 `722020104`



#### 对话 7220203

**起点节点 `722020301`**


**知世：**我的时间不多了…




### 步骤 2：子任务 7220202

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
      "PPFLKMOMKAI": "7220202_finish"
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


#### 对话 7220202

**起点节点 `722020201`**


**知世：**啊…雷鸟大人…您原谅我了吗…？



#### 对话 7220203

**起点节点 `722020301`**


**知世：**我的时间不多了…




### 步骤 3：子任务 7220203

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7220202,
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
        "72202",
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
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133223482,2"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
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


#### 对话 7220202

**起点节点 `722020201`**


**知世：**啊…雷鸟大人…您原谅我了吗…？


