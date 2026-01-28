# 71129 (test)王山厅重复挑战$HIDDEN

(test)王山厅重复挑战$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：71109

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7112901

与中间机关交互选择挑战$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7112901,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7112901,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_NOT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
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


#### 对话 7112901

**起点节点 `711290101`**


**碑铭：**「…天其难谌，臻而见眷者罕。命其靡常，盛而未衰者鲜…获目于天，犹有径路所穷之时，况复天目未及者…」

**碑铭：**「…遗此碑宇，且问来许。行至绝处，自当何如？」

**旅行者：**（离开。）



#### 对话 7112902

**起点节点 `711290201`**


**碑铭：**「…天其难谌，臻而见眷者罕。命其靡常，盛而未衰者鲜…获目于天，犹有径路所穷之时，况复天目未及者…」

**碑铭：**「…遗此碑宇，且问来许。行至绝处，自当何如？」

**分支 1：**

  **旅行者：**（碑铭似乎隐隐露出了剑的纹样…）

**分支 2：**

  **旅行者：**（离开。）



#### 对话 7112903

**起点节点 `711290301`**


**碑铭：**「…天其难谌，臻而见眷者罕。命其靡常，盛而未衰者鲜…获目于天，犹有径路所穷之时，况复天目未及者…」

**碑铭：**「…遗此碑宇，且问来许。行至绝处，自当何如？」

**分支 1：**

  **旅行者：**（碑铭似乎隐隐露出了枪的纹样…）

**分支 2：**

  **旅行者：**（离开。）



#### 对话 7112904

**起点节点 `711290401`**


**碑铭：**「…天其难谌，臻而见眷者罕。命其靡常，盛而未衰者鲜…获目于天，犹有径路所穷之时，况复天目未及者…」

**碑铭：**「…遗此碑宇，且问来许。行至绝处，自当何如？」

**分支 1：**

  **旅行者：**（碑铭似乎隐隐露出了枪的纹样…）

**分支 2：**

  **旅行者：**（碑铭似乎隐隐露出了剑的纹样…）

**分支 3：**

  **旅行者：**（离开。）




### 步骤 2：子任务 7112902

进行身法挑战$HIDDEN

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
      "PPFLKMOMKAI": "7112902_success"
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
      "PPFLKMOMKAI": "7112902_fail"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7112901"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "133115210"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
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


### 步骤 3：子任务 7112903

进行战斗挑战$HIDDEN

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
      "PPFLKMOMKAI": "7112903_success"
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
      "PPFLKMOMKAI": "7112903_fail"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7112901"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "133115211"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
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


### 步骤 4：子任务 7112904

刷平台状态$HIDDEN

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
