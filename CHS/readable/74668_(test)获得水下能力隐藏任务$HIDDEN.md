# 74668 (test)获得水下能力隐藏任务$HIDDEN

(test)获得水下能力隐藏任务$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：311
- **后接主任务**：4002

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7466802

(test)解锁任意七天神像$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        770
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_UNLOCK_TRANS_POINT",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        771
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_UNLOCK_TRANS_POINT",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        772
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_UNLOCK_TRANS_POINT",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_UNLOCK_ANY_TRANS_POINT",
      "PPFLKMOMKAI": "814,815,922,923,1121"
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


### 步骤 2：子任务 7466801

(test)与派蒙对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7466801,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7466801,
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
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_IS_DIVEABLE"
    },
    {
      "LNHLPKELCAL": [
        "7466801",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
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


#### 对话 7466801

**起点节点 `746680101`**


**派蒙：**咦，刚才七天神像是不是突然很夸张地亮了一下…

**派蒙：**好奇怪，以前发生过这样的事吗？

**分支 1：**

  **旅行者：**七天神像发光很正常吧。

  **派蒙：**#{NICKNAME}，没有觉得不舒服吧…

  **分支 1：**

    **旅行者：**吔，水、水在对我说话…

    **派蒙：**最好是能说啦！还有心情开玩笑，看来没什么问题嘛。

    **派蒙：**不过，确实在那阵光亮起来之后，周围的空气也变得稍微湿乎乎了一些，说不定也是刚才冒出的水元素力的功劳。

    **派蒙：**哼哼，听说在枫丹，如果能运用好元素力，就能够在水下畅游，说不定还能捡到掉在水里的宝藏呢。

    **派蒙：**打捞宝藏的工作，就交给你了，我…我就负责在岸上为你放风！

    **分支 1：**

      **旅行者：**一个人下水，好寂寞…

      **派蒙：**呜，但是、但是水里很可怕嘛！

      **派蒙：**说不定一个不小心，就会被卷入水流里，晕头转向，怎么都飞不起来。

      **派蒙：**就像在蒙德遇到你之前那样…

      **旅行者：**那我再把你钓上来好啦！

      **派蒙：**…真的吗，那、那也不是不可以和你一起到水里去。哼，你可得说话算话哦。

    **分支 2：**

      **旅行者：**可以出点力了派蒙！

      ↩ 合流到节点 `746680117`

  **分支 2：**

    **旅行者：**哇！感觉可以用鳃呼吸！

    **派蒙：**好啊，你先长个鳃出来看看吧。哼，看起来精神不错嘛，害我白担心了一小会儿。

    ↩ 合流到节点 `746680112`

**分支 2：**

  **旅行者：**好像冒出了水？

  **派蒙：**不愧是水神的国度呢，连七天神像都会冒出水来…才怪啦，刚才那个光亮怎么想都不是正常反应。

  ↩ 合流到节点 `746680107`


