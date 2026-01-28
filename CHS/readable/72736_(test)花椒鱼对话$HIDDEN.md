# 72736 (test)花椒鱼对话$HIDDEN

(test)花椒鱼对话$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7273601

(test)任务npc对话block$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7273601,
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
        "133209116"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REGISTER_DYNAMIC_GROUP"
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
      "13019"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7273601

**起点节点 `727360101`**


**「花角玉将」：**难能可贵，难能可贵！

**「花角玉将」：**真没想到，荒泷派居然能打败这么多斗虫强者。看来你们对斗虫也有着独特的理解…

**「花角玉将」：**我收回之前的成见。接下来，我会将你们当成值得尊敬的对手，全力和你们比试一场！

**派蒙：**放牛的，到你这个老大登场的时候啦！

**派蒙：**可别把之前的话当真！

**分支 1：**

  **旅行者：**出阵吧，「真剑斗虫大鬼王」！

  **荒泷一斗：**哈哈哈哈哈哈哈，那是当然了！最后对决，也一定会是我赢！

  **荒泷一斗：**虽然不知道你到底是怎么指导部下的，但结果已经没有悬念了，是本大爷的荒泷派更胜一筹！

  **荒泷一斗：**准备接招吧！「花角玉将」！

**分支 2：**

  **旅行者：**大激斗，鬼王对玉将！

  ↩ 合流到节点 `727360108`




### 步骤 2：子任务 7273602

（test）挑战花椒鱼酱$HIDDEN

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
      "PPFLKMOMKAI": "7273701"
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
      "PPFLKMOMKAI": "7273702"
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

（此步骤无对话）


### 步骤 3：子任务 7273603

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7273602,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7273101,
        2
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7273101,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133209116"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REGISTER_DYNAMIC_GROUP"
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


#### 对话 7273602

**起点节点 `727360201`**


**「花角玉将」：**原来如此，原来如此啊…再打一场吧，我一定能看透你斗虫的门道。

**「花角玉将」：**比试的胜负似乎已经没那么重要了，我们就斗个爽快，如何？

**「花角玉将」：**难得有这么合拍的对手，短短几分钟就结束，未免也太不尽兴了？

**荒泷一斗：**哈！来就来！

**荒泷一斗：**不过…看穿本大爷斗虫的秘技？你可别痴心妄想啊！

**荒泷一斗：**如果你肯承认，是我斗虫的本领更强，无论斗多少场，我都会奉陪到底！

**派蒙：**唔，放牛的和「花角玉将」还是热血沸腾呢，就让他们继续斗虫吧，斗到他们完全满足！


