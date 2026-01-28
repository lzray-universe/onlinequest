# 72225 (test)神殿栖木$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72167

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7222501

(test)阿瑠说话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222501,
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
        "133223495"
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


#### 对话 7222501

**起点节点 `722250101`**


**阿久：**好疼…

**阿瑠：**#{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}、派蒙！你们来得正好…

**旅行者：**发生什么事了？

**阿久：**脚崴着了…

**阿瑠：**阿久哥又受伤了，能请你们供奉栖木吗？

**分支 1：**

  **旅行者：**这样的发展也不是没猜到…

  **派蒙：**没问题，那就交给我们吧！

  **阿瑠：**太感谢了！

  **派蒙：**对了，阿瑠你不是也对「元素」很敏感吗？

  **派蒙：**为什么你不自己去供奉栖木呢？

  **阿瑠：**唔…以前我也在祭典里做过各种各样的事情，但最后的结果好像不太好。

  **分支 1：**

    **旅行者：**为什么？

    **阿瑠：**我也不知道…

    **派蒙：**真没办法，那栖木就交给我们吧。

  **分支 2：**

    **旅行者：**那就交给我吧。

    ↩ 合流到节点 `722250117`

  **分支 3：**

    **旅行者：**受伤的人就交给你了。

    ↩ 合流到节点 `722250117`

**分支 2：**

  **旅行者：**交给我吧。

  ↩ 合流到节点 `722250109`



#### 对话 7222502

**起点节点 `722250201`**


**阿瑠：**供奉栖木的事情，就拜托啦。

**阿瑠：**我在这里陪着阿久哥。




### 步骤 2：子任务 7222506

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
      "PPFLKMOMKAI": "7222506_finish"
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


### 步骤 3：子任务 7222507

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222507,
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
- Cutscene `7222507`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeActive03`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 4：子任务 7222502

(test)栖木供奉$HIDDEN

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
      "PPFLKMOMKAI": "7222502_finish"
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
        "3110",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_WEATHER_GADGET"
    },
    {
      "LNHLPKELCAL": [
        "3314",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_WEATHER_GADGET"
    },
    {
      "LNHLPKELCAL": [
        "3414",
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

（此步骤无对话）


### 步骤 5：子任务 7222503

(test)cs树叶生长$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222503,
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
        "133223123"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "3",
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
- Cutscene `7222503`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish04`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 6：子任务 7222504

(test)地图雾散开$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222503,
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
- Cutscene `7222503`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish04`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5

（此步骤无对话）


### 步骤 7：子任务 7222505

(test)阿瑠自动进对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7222503,
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
- Cutscene `7222503`（timeline）
  - resPath: `ART/Cutscene/Cs_HG_WQ_TreeFinish04`
  - castListPath: `Cs_CastList_Q308`
  - fadeIn/fadeOut: 0.5/1.5


#### 对话 7222503

**起点节点 `722250301`**


**阿瑠：**栖木焕发生机了！

**阿久：**供奉栖木，总算是完成了呢。真不容易。

**派蒙：**哼哼，我们可是处理这种问题的专家。

**旅行者：**和「导光仪式」差不多。

**派蒙：**为了处理一件事，需要解决分散在三个地点的三个问题…

**派蒙：**总感觉，和你一起，总会遇到这种事情。

**阿瑠：**虽然别的事情我不是很明白，但大人中有这样的说法…

**阿瑠：**就是「万事皆三」喔。

**派蒙：**万事皆三…是什么意思？

**阿瑠：**嗯…大概就是，任何事情都要经历三次以后，才能迎来结果吧？

**阿瑠：**比如说，吉兆要发生三次，好运才会真正降临。然后，如果凶兆发生了三次，那一定会发生坏事。

**阿瑠：**做事情的时候，也会遇到三次困难，第四次才会成功。

**派蒙：**但是，那样的话，不应该是「万事皆四」吗？

**阿瑠：**也是呢！派蒙的数学真好！

**派蒙：**哼哼，那当然了。

**分支 1：**

  **旅行者：**重点是数学？

  **派蒙：**话说回来，阿久的伤没问题吗？

  **阿瑠：**不用担心哦。阿久哥总是这样。

  **阿久：**真是难堪…希望不会影响祭典。

  **阿久：**不然的话，就太对不起阿瑠了。

  **阿瑠：**怎么会呢。阿久哥一直都对我很好。

  **阿久：**……

  **阿瑠：**#{NICKNAME}{PLAYERAVATAR#SEXPRO[INFO_MALE_PRONOUN_BROTHER|INFO_FEMALE_PRONOUN_SISTERA]}、派蒙，你们先走吧。

  **阿瑠：**我陪阿久哥多坐一会。然后，再为供奉收尾。

**分支 2：**

  **旅行者：**阿久受的伤…

  ↩ 合流到节点 `722250319`



#### 对话 7222506

**起点节点 `722250601`**


**阿久：**真是难堪…希望不会影响祭典。

**阿久：**不然的话，就太对不起阿瑠了。

**阿瑠：**怎么会呢。阿久哥一直都对我很好。


