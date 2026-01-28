# 71126 (test)猫狗鸬$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：71102

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7112601

（test）猫狗鸬鹚对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7112603,
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


#### 对话 7112601

**起点节点 `711260101`**


**大桔：**咪呜…

**旅行者：**（触碰盘子。）

**大桔：**咪呜…



#### 对话 7112602

**起点节点 `711260201`**


**大黑：**嗷呜…

**旅行者：**抚摸

**大黑：**咕噜咕噜…

**大黑：**（这条狗的头上似乎有一块猫爪留下的痕迹…）



#### 对话 7112603

**起点节点 `711260302`**


**旅行者：**你嘴里的鱼是？

**[黑屏]** 听到你质疑鱼的来路，大盗当场变得暴躁了起来。

**[黑屏]** 它张开了翅膀，向你和派蒙发起了冲锋，并与你们扭打在了一起。

**[黑屏]** 经过一番苦战，你们终于占了上风。

**大盗：**？！

**旅行者：**知道我的厉害了吧！




### 步骤 2：子任务 7112602

（test）放回鱼$HIDDEN

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
      "PPFLKMOMKAI": "q7112602"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133114059,
        59004
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
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


#### 对话 7112601

**起点节点 `711260101`**


**大桔：**咪呜…

**旅行者：**（触碰盘子。）

**大桔：**咪呜…



#### 对话 7112602

**起点节点 `711260201`**


**大黑：**嗷呜…

**旅行者：**抚摸

**大黑：**咕噜咕噜…

**大黑：**（这条狗的头上似乎有一块猫爪留下的痕迹…）



#### 对话 7112604

**起点节点 `711260401`**


**大盗：**嗷噜噜噜…

**旅行者：**哼！坏东西！

**大盗：**嘎！嘎！嘎！




### 步骤 3：子任务 7112603

（test）跟猫找宝箱$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7112603,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133114088"
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


#### 对话 7112602

**起点节点 `711260201`**


**大黑：**嗷呜…

**旅行者：**抚摸

**大黑：**咕噜咕噜…

**大黑：**（这条狗的头上似乎有一块猫爪留下的痕迹…）



#### 对话 7112604

**起点节点 `711260401`**


**大盗：**嗷噜噜噜…

**旅行者：**哼！坏东西！

**大盗：**嘎！嘎！嘎！




### 步骤 4：子任务 7112604

（test）出区域完成剧情回常驻$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7112604,
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


#### 对话 7112602

**起点节点 `711260201`**


**大黑：**嗷呜…

**旅行者：**抚摸

**大黑：**咕噜咕噜…

**大黑：**（这条狗的头上似乎有一块猫爪留下的痕迹…）



#### 对话 7112604

**起点节点 `711260401`**


**大盗：**嗷噜噜噜…

**旅行者：**哼！坏东西！

**大盗：**嘎！嘎！嘎！


