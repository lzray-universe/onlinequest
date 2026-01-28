# 74523 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：396

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7452301

(test)隐藏$HIDDEN

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
      "PPFLKMOMKAI": "7452301"
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


#### 对话 7452301

**起点节点 `745230101`**


**枫原万叶：**如何？风中的诗意，是否也传入了你的留影机之中？



#### 对话 7452304

**起点节点 `745230401`**


**枫原万叶：**这风中…带来了海潮的咸味，远方商船的木香，还有…故人的气息。

**枫原万叶：**#{NICKNAME}，别来无恙。

**分支 1：**

  **旅行者：**万叶，好久不见。

  **枫原万叶：**「南十字」船队在稻妻停靠补给。难得故地重游，便想四处走走，多看一眼故乡的景色，多听一听这里的风声。

  **枫原万叶：**离岛的风，总是比别处更喧闹些，混杂着离别与重逢，希望与迷惘…是个能听到许多故事的地方。

  **分支 1：**

    **旅行者：**能让我为你留影吗？

    **枫原万叶：**呵呵，万物皆有其形，风亦然。只是风的形貌，只在叶落、浪起、或是旅人衣袂飘举的一瞬才得以窥见。

    **枫原万叶：**希望借由我的身影，能让你捕捉到那一瞬即逝的「风之形」。

    **分支 1：**

      **旅行者：**那我要开始了。

      **枫原万叶：**那么，就请你来采集属于此刻的诗篇吧。

    **分支 2：**

      **旅行者：**请像刚才那样，感受风就好。

      ↩ 合流到节点 `745230413`

  **分支 2：**

    **旅行者：**我也想记录此刻的风。

    ↩ 合流到节点 `745230409`

**分支 2：**

  **旅行者：**你怎么会在这里？

  ↩ 合流到节点 `745230405`




### 步骤 2：子任务 7452302

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7452301,
        4
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
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
      "PPFLKMOMKAI": "7452302"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        10
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_14710:-2448.033,246.763,-3895.892]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_IS_GAME_TIME_LOCKED_V2"
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


---
## 未归类对话


#### 对话 7452302

**起点节点 `745230201`**


**旅行者：**我们继续留影吧！



#### 对话 7452303

**起点节点 `745230301`**


**旅行者：**请稍等，我再构思一下。


