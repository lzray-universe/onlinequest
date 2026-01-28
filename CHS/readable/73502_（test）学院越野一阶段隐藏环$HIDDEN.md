# 73502 （test）学院越野一阶段隐藏环$HIDDEN

（test）学院越野一阶段隐藏环$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：3013
- **后接主任务**：73503
- **任务奖励**：
  - 冒险阅历×150，摩拉×20000，大英雄的经验×3

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7350201

（test）发现告示牌$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7350201,
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
        "133302264"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "133302433"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
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
      "20834"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7350201

**起点节点 `735020101`**


**调查：**「与白昼交班的白昼，从桥上能看见灯塔匆匆下班的背影。」

**派蒙：**这，这是什么啊…是谜语吗？还是什么谚语之类的…

**派蒙：**与白昼交班的白昼？下，下班的背影…

**卡玛尔：**这不是旅行者吗？你们也对德鲁苏先生的谜语感兴趣吗？

**分支 1：**

  **旅行者：**这真是谜语吗？

  **卡玛尔：**设置这段谜语的人是教令院的一位学者，德鲁苏先生。

  **卡玛尔：**据我所知…那位先生在教令院里也算是一个怪人…

  **卡玛尔：**他最喜欢的就是和人讨论各种各样的谜语，还有研究各种加密方式。

  **卡玛尔：**但他的谜语有的实在是太晦涩难懂了，所以也没多少人愿意和他交流。

  **卡玛尔：**所以，他就想出了这种「有奖解谜」的方式。

  **卡玛尔：**简单来说，这段谜语实际上是在暗示着一个「藏宝地点」。

  **卡玛尔：**只要在正确的时间，用正确的方式，到达正确的地点，就能够获得宝藏。

  **卡玛尔：**德鲁苏先生也给了提示，说是这些「藏宝地点」都在须弥城内。

  **卡玛尔：**但是如你们所见，目前依然还没有一个冒险家能够解开这道谜语。

  **卡玛尔：**如果你们有兴趣的话，也可以试试看。

  **卡玛尔：**但我从个人角度来说，我其实更建议你们去做点正事啦…

**分支 2：**

  **旅行者：**你知道是谁设置的？

  ↩ 合流到节点 `735020107`




### 步骤 2：子任务 7350207

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101957,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101958,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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

（此步骤无对话）


### 步骤 3：子任务 7350208

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101958,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101959,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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

（此步骤无对话）


### 步骤 4：子任务 7350209

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101959,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101960,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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

（此步骤无对话）


### 步骤 5：子任务 7350210

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101960,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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

（此步骤无对话）


### 步骤 6：子任务 7350204

(test)控制学院宝箱开启$HIDDEN

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
      "PPFLKMOMKAI": "735020401"
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


### 步骤 7：子任务 7350205

(test)控制荷花宝箱开启$HIDDEN

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
      "PPFLKMOMKAI": "735020501"
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


### 步骤 8：子任务 7350202

（test）获得全部小信物$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101957,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101958,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101959,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        101960,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_OBTAIN_ITEM",
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
    "LNHLPKELCAL": [
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7350209

**起点节点 `735020901`**


**调查：**「与白昼交班的白昼，从桥上能看见灯塔匆匆下班的背影。」




### 步骤 9：子任务 7350206

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GAME_TIME_TICK",
      "PPFLKMOMKAI": "10,14"
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


#### 对话 7350209

**起点节点 `735020901`**


**调查：**「与白昼交班的白昼，从桥上能看见灯塔匆匆下班的背影。」




### 步骤 10：子任务 7350203

（test）跟最终NPC对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7350203,
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
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GAME_TIME_TICK",
      "PPFLKMOMKAI": "14,10"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "73502",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INIT_TIME_VAR"
    },
    {
      "LNHLPKELCAL": [
        "101957:1,101958:1,101959:1,101960:1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM_BATCH"
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


#### 对话 7350203

**起点节点 `735020301`**


**德鲁苏：**今天也没人来吗…

**旅行者：**这就是「知识殿堂的正门」吗？

**德鲁苏：**没错！这里就是「知识殿堂的正门」，您…看来是解开了我所有的谜语啊。

**德鲁苏：**太好了！我还以为今天也没人能做到这件事呢！再等一会我可就要回去吃午饭了…

**旅行者：**你为什么要写这些谜语？

**德鲁苏：**当然是因为「有趣」啊。

**派蒙：**回答得好快！

**德鲁苏：**除了这个理由之外，你们觉得我又为什么会写下这些谜语呢？

**德鲁苏：**难道你们以为，我就是单纯地在享受刁难人的感觉吗？

**分支 1：**

  **旅行者：**说不定呢…

  **德鲁苏：**哈哈哈，那你们就和教令院里的某些人一样误解我了。

  **德鲁苏：**我之所以写下这些谜语，就是单纯地喜爱解读谜语时的那种思辨感。

  **德鲁苏：**你们现在回过头来看我的谜语，里面总是有一个能够解开谜语的「关键词」。

  **德鲁苏：**只要以这个关键词为突破口不断思考，就一定能解开谜语。

  **德鲁苏：**如果我是单纯地想要刁难人，那我只要抹去一切线索，把这段谜语变成真正的「无解之题」就好了。

  **德鲁苏：**先不说这些了，既然你们解开了我所有的谜语，那这些东西你们就拿着吧。

  **德鲁苏：**这是你们用自己的「思辨」赢来的奖励，可要收好了啊。

**分支 2：**

  **旅行者：**我说不好。

  ↩ 合流到节点 `735020312`



#### 对话 7350209

**起点节点 `735020901`**


**调查：**「与白昼交班的白昼，从桥上能看见灯塔匆匆下班的背影。」


