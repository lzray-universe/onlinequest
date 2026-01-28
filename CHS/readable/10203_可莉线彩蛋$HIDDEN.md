# 10203 可莉线彩蛋$HIDDEN

自由对话$HIDDEN


---
## 任务信息

- **任务类型**：LQ
- **前置主任务**：10202

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 1020301

(test)与琴谈话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1020301,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ENTER_MY_WORLD",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "1006"
    ],
    "NOCCOBOFKHP": 1004,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 1020301

**起点节点 `102030101`**


**琴：**呼…可莉这孩子，其实是我们西风骑士团的「火花骑士」。

**派蒙：**什么？竟然连可莉都是骑士吗！

**分支 1：**

  **旅行者：**那么，可不可以给派蒙也…

  **派蒙：**没错，派蒙不甘心！

  **派蒙：**话说回来，称号是「火花骑士」，也难怪可莉的宝物会是那种东西吧。

  **琴：**嗯，虽然平时没有少给骑士团添麻烦，但骑士们还是很关心她。

  **琴：**说起她的来历，其实…

  **琴：**总之，以后你会对她有更多了解的。

  **琴：**#到时也请你对她多关照些了，{NICKNAME}。

**分支 2：**

  **旅行者：**而且听上去比「荣誉骑士」还强？

  ↩ 合流到节点 `102030105`



#### 对话 1020303

**起点节点 `102030301`**


**琴：**#到时也请你对她多关照些了，{NICKNAME}。




### 步骤 2：子任务 1020302

(test)自由对话可莉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1020302,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ENTER_MY_WORLD",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1020302,
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_FINISH",
    "LNHLPKELCAL": [
      "10092"
    ],
    "NOCCOBOFKHP": 1004,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 1020302

**起点节点 `102030201`**


**禁闭室：**呜…下次我会更小心的。

**禁闭室：**下一次，我会安全地完成一场伟大的冒险！

**禁闭室：**我听说「冒险家协会」也有一套冒险的守则，是不是应该去拜托他们呢…

**派蒙：**唉，要是这段话被塞琉斯会长听见了…

**派蒙：**他一定会去拜托琴团长，继续加长可莉的禁闭时间吧…


