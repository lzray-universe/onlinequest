# 76501 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：76500, 396

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7650101

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650101,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650105,
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
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_BATCH_SET_QUEST_VAR"
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
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7650101

**起点节点 `765010101`**


**菈乌玛：**#是你们啊，{NICKNAME}和派蒙。林间的飞鸟刚刚就在谈论你们的到来。今日前来，可是有什么要事，或是…需要我稍作指引？

**分支 1：**

  **旅行者：**我们正在四处参观。

  **菈乌玛：**这里深受月华浸润，无论是植被还是栖息于此的生灵，都与外界不尽相同。

  **菈乌玛：**的确是个能留下许多珍贵画片的地方。

  **菈乌玛：**二位请随意徜徉，若有任何好奇之处，随时可以问我，我会尽我所能解答。

  **分支 1：**

    **旅行者：**这里的气氛非常宁静呢。

    **菈乌玛：**是的，这里是我的静思之地，也是我与万物低语、交流的所在。

    **菈乌玛：**仅仅是站在这里，心神就会归于安宁。

    **派蒙：**哇，听起来好有诗意啊！

    **分支 1：**

      **旅行者：**其实，我有一个小小的请求…

      **派蒙：**是啊，菈乌玛小姐站在这里，和这里的景色浑然一体，简直美得像一幅画！用留影机拍下来一定特别好看！

      **菈乌玛：**为我…留下画片么？这倒是新奇的体验。若你们认为此刻的宁静，以及我的身影，值得被你们的镜头记录，我很乐意。

      **菈乌玛：**能成为你们旅途中一段美好的回忆，也是我的荣幸。

      **菈乌玛：**那么，我该如何配合呢？是需要我望向某个方向，还是保持自然的姿态便可？

      **分支 1：**

        **旅行者：**像平时一样就可以了。

        **菈乌玛：**好的，那接下来就交给你了。愿你能捕捉到那瞬息的灵感之光。

      **分支 2：**

        **旅行者：**我会努力捕捉最动人的一刻。

        ↩ 合流到节点 `765010120`

    **分支 2：**

      **旅行者：**我们希望能为你拍摄画片。

      ↩ 合流到节点 `765010114`

  **分支 2：**

    **旅行者：**菈乌玛平时都会待在这附近吗？

    ↩ 合流到节点 `765010109`

**分支 2：**

  **旅行者：**顺便寻找拍摄素材。

  ↩ 合流到节点 `765010104`



#### 对话 7650104

**起点节点 `765010401`**


**菈乌玛：**那么，你准备好了吗？如果时机合适，我们随时可以开始。



#### 对话 7650107

**起点节点 `765010701`**


**菈乌玛：**#是你们啊，{NICKNAME}和派蒙。林间的飞鸟刚刚就在谈论你们的到来。今日前来，可是有什么要事，或是…需要我稍作指引？

**分支 1：**

  **旅行者：**我们正在四处参观。

  **菈乌玛：**嗯，请随意地感受和记录吧。

  **菈乌玛：**不过，我似乎没看到你带着留影机？若无此物，再美的构思，也难以转化为可供回味的画片呢。

**分支 2：**

  **旅行者：**顺便寻找拍摄素材。

  ↩ 合流到节点 `765010704`



#### 对话 7650108

**起点节点 `765010801`**


**菈乌玛：**感觉如何？有找到你心中想要的拍摄素材吗？

**分支 1：**

  **旅行者：**没问题，我们开始留影吧！

  **菈乌玛：**这很好。不过，我似乎没看到你带着留影机？若无此物，再美的构思，也难以转化为可供回味的画片呢。

**分支 2：**

  **旅行者：**请稍等，我再构思一下角度。




### 步骤 2：子任务 7650102

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
      "PPFLKMOMKAI": "wq76501Fin"
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
      "PPFLKMOMKAI": "wq76501Fail"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        37
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_12537:1775.000,206.000,10542.000,0.000,229.714,0.000]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [],
      "PAINLIBBLDK": "QUEST_EXEC_UNLOCK_MIRROR_AVATAR_TEAM"
    },
    {
      "LNHLPKELCAL": [
        "7650101"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
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
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


---
## 未归类对话


#### 对话 7650105

**起点节点 `765010501`**


**旅行者：**准备好了，我们开始留影吧！



#### 对话 7650106

**起点节点 `765010601`**


**旅行者：**请稍等，我再构思一下角度。


