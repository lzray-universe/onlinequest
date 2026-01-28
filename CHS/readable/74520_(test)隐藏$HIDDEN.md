# 74520 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：396

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7452001

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
      "PPFLKMOMKAI": "7452001"
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


#### 对话 7452001

**起点节点 `745200101`**


**优菈：**怎么样？要是拍得不好看…我可是会要求你拍到我满意为止的哦。



#### 对话 7452004

**起点节点 `745200401`**


**优菈：**#是你啊，{NICKNAME}，没想到能在这种地方遇到你。

**分支 1：**

  **旅行者：**好久不见了，优菈。

  **优菈：**算是例行巡视。不过，对我而言，更像是保持战斗状态的必要活动。

  **优菈：**最近蒙德相对太平，值得游击小队全体出动的威胁几乎没有。队里的大家…精神上确实放松了不少。

  **旅行者：**劳逸结合也是好事嘛。

  **优菈：**话虽如此，但我作为队长，必须要时刻保持自己的战斗力。

  **优菈：**毕竟，敌人的剑可不会因为和平而变得迟钝。

  **优菈：**所以，我习惯在巡视的间隙，找个僻静的地方练习剑术，确保姿态不会生疏。

  **分支 1：**

    **旅行者：**时机正好…

    **优菈：**哦？倒是有趣的请求。

    **优菈：**不过，我的动作很快，你的留影机跟得上吗？

    **分支 1：**

      **旅行者：**按照你平时的速度就好了！

      **优菈：**好。既然你这么有自信，那我也要全力以赴了。

      **优菈：**看好了，浪花卷起的时刻可是转瞬即逝的。

    **分支 2：**

      **旅行者：**我的镜头会尽力跟上你的！

      ↩ 合流到节点 `745200416`

  **分支 2：**

    **旅行者：**请让我为你留影！

    ↩ 合流到节点 `745200412`

**分支 2：**

  **旅行者：**你是在这里执勤吗？

  ↩ 合流到节点 `745200404`




### 步骤 2：子任务 7452002

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7452001,
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
      "PPFLKMOMKAI": "7452002"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        10
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_14707:1382.959,322.652,-1190.026]"
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


#### 对话 7452002

**起点节点 `745200201`**


**旅行者：**我们继续留影吧！



#### 对话 7452003

**起点节点 `745200301`**


**旅行者：**请稍等，我再构思一下。


