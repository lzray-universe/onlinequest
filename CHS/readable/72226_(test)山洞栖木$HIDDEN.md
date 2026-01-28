# 72226 (test)山洞栖木$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72167

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7222601

(test)阿瑠自动对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222601,
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
        "133223496"
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


#### 对话 7222601

**起点节点 `722260101`**


**阿瑠：**又见面了！

**阿瑠：**这里的栖木也拜托你们了。

**派蒙：**没问题！



#### 对话 7222602

**起点节点 `722260201`**


**阿瑠：**这里的栖木也拜托你们了。




### 步骤 2：子任务 7222606

（test）共鸣$HIDDEN

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
      "PPFLKMOMKAI": "7222606_finish"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3180101",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_MAP_LAYER_UNLOCK_STATE"
    },
    {
      "LNHLPKELCAL": [
        "3180102",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_MAP_LAYER_UNLOCK_STATE"
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


### 步骤 3：子任务 7222607

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222607,
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

**过场动画：**
- Cutscene `7222607`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeActive02`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 4：子任务 7222602

(test)完成栖木供奉$HIDDEN

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
      "PPFLKMOMKAI": "7222602_finish"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "72167",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INC_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "3111",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_WEATHER_GADGET"
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


#### 对话 7222603

**起点节点 `722260301`**


**阿瑠：**#谢谢你们，{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}、派蒙！

**阿瑠：**栖木的状态很好，这回的祭典一定会很顺利的！

**分支 1：**

  **旅行者：**轻轻松松。

  **派蒙：**#哼哼。再怎么说，我和{NICKNAME}也是见识过很多东西的。

  **阿瑠：**#这么说来，{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}，你们是从哪里来的呀？

  **阿瑠：**之前也有听来的人说过「稻妻」、「鸣神岛」之类的地方，你们也是稻妻人吗？

  **分支 1：**

    **旅行者：**相对而言的话…

    **派蒙：**我们确实是从鸣神岛来的呢…啊！

    **派蒙：**我都快忘了我们是来找木簧笛的了！

    **派蒙：**的确呢…

    **阿瑠：**……

    **阿瑠：**好厉害！还可以爬到龙的头上！

    **分支 1：**

      **旅行者：**虽然爬起来一点也不舒服就是了。

      **阿瑠：**好厉害呀…

      **派蒙：**世界很大的哦。

      **阿瑠：**没想到「雾海」外面还有这么多地方、这么多人。如果有一天能出去，去看看这些地方就好了。

      **阿瑠：**别人总说，只要离开雾气，灵魂就会迷失。因为有雾气，所以外面的黑暗才不会侵入鹤观。

      **阿瑠：**不过，我认识了很多外面来的人哦。所以我知道，寂海里其实也是有人住的。

      **旅行者：**有机会一起去看看吧。

      **阿瑠：**嗯。那就说好了喔。

      **阿瑠：**#{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}，你们先走吧。

      **派蒙：**等祭典结束以后，我们就一起到鹤观以外的地方看看吧！

      **阿瑠：**嗯！

    **分支 2：**

      **旅行者：**还好啦。

      ↩ 合流到节点 `722260317`

  **分支 2：**

    ↩ 合流到节点 `722260312`

**分支 2：**

  **旅行者：**非常可怕。

  ↩ 合流到节点 `722260305`



**起点节点 `722260311`**


**旅行者：**我们是从很远很远的地方来的…

↩ 合流到节点 `722260312`




### 步骤 5：子任务 7222603

(test)cs$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222603,
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
        "133223122"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "4",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_CHANGE_MAP_AREA_STATE"
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

**过场动画：**
- Cutscene `7222603`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish03`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 6：子任务 7222604

(test)地图雾$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222603,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
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

**过场动画：**
- Cutscene `7222603`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish03`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 7：子任务 7222605

(test)阿瑠对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222603,
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

**过场动画：**
- Cutscene `7222603`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish03`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5


#### 对话 7222603

**起点节点 `722260301`**


**阿瑠：**#谢谢你们，{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}、派蒙！

**阿瑠：**栖木的状态很好，这回的祭典一定会很顺利的！

**分支 1：**

  **旅行者：**轻轻松松。

  **派蒙：**#哼哼。再怎么说，我和{NICKNAME}也是见识过很多东西的。

  **阿瑠：**#这么说来，{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}，你们是从哪里来的呀？

  **阿瑠：**之前也有听来的人说过「稻妻」、「鸣神岛」之类的地方，你们也是稻妻人吗？

  **分支 1：**

    **旅行者：**相对而言的话…

    **派蒙：**我们确实是从鸣神岛来的呢…啊！

    **派蒙：**我都快忘了我们是来找木簧笛的了！

    **派蒙：**的确呢…

    **阿瑠：**……

    **阿瑠：**好厉害！还可以爬到龙的头上！

    **分支 1：**

      **旅行者：**虽然爬起来一点也不舒服就是了。

      **阿瑠：**好厉害呀…

      **派蒙：**世界很大的哦。

      **阿瑠：**没想到「雾海」外面还有这么多地方、这么多人。如果有一天能出去，去看看这些地方就好了。

      **阿瑠：**别人总说，只要离开雾气，灵魂就会迷失。因为有雾气，所以外面的黑暗才不会侵入鹤观。

      **阿瑠：**不过，我认识了很多外面来的人哦。所以我知道，寂海里其实也是有人住的。

      **旅行者：**有机会一起去看看吧。

      **阿瑠：**嗯。那就说好了喔。

      **阿瑠：**#{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}，你们先走吧。

      **派蒙：**等祭典结束以后，我们就一起到鹤观以外的地方看看吧！

      **阿瑠：**嗯！

    **分支 2：**

      **旅行者：**还好啦。

      ↩ 合流到节点 `722260317`

  **分支 2：**

    ↩ 合流到节点 `722260312`

**分支 2：**

  **旅行者：**非常可怕。

  ↩ 合流到节点 `722260305`



**起点节点 `722260311`**


**旅行者：**我们是从很远很远的地方来的…

↩ 合流到节点 `722260312`



#### 对话 7222606

**起点节点 `722260601`**


**阿瑠：**我也想爬到龙的头上去…


