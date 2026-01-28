# 72104 神社占卜二阶段（test）$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72112
- **后接主任务**：72113, 72195

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7210425

（test）假扮巫女神社创生$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_VAR_EQUAL",
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


### 步骤 2：子任务 7210415

（test）检测第一阶段完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210415,
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


#### 对话 7210435

**起点节点 `721043501`**


**玄冬林檎：**那个人，什么时候才会来呢…

**旅行者：**玄冬小姐…

**玄冬林檎：**啊呀，您终于来…咳，您好！您今天也要来解签吗？



#### 对话 7210436

**起点节点 `721043601`**


**玄冬林檎：**您好。



#### 对话 7210437

**起点节点 `721043701`**


**玄冬林檎：**#{NICKNAME}，今天也要来解签吗？




### 步骤 3：子任务 7210419

（test）特殊交付1后加载group$HIDDEN

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
      "PPFLKMOMKAI": "133213190"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INC_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100808",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
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


### 步骤 4：子任务 7210420

（test）特殊交付2后加载group$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7219502,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INC_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100809",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
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


### 步骤 5：子任务 7210421

（test）特殊交付3后加载group$HIDDEN

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
      "PPFLKMOMKAI": "133212196"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_INC_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100810",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
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


### 步骤 6：子任务 7210422

（test）判定三环暗杀都完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_VAR_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "72104",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_CLEAR_TIME_VAR"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133220571,2"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
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


### 步骤 7：子任务 7210423

（test）判定说过特殊分支1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210438,
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

（此步骤无对话）


### 步骤 8：子任务 7210416

（test）特殊交付talk1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210416,
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
        "100789,100790,100791,100792,100793,100794,100795,100796,100797"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_ALL_SPECIFIC_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "100908,100909,100910,100911,100912,100913,100914,100798,100799,100800,100801,100802,100803,100804,100805,100806,100868,100869,100870,100871,100872,100873,100874"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_ALL_SPECIFIC_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "1",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


#### 对话 7210416

**起点节点 `721041601`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**好的，请您收好「御神签」。




### 步骤 9：子任务 7210417

（test）特殊交付talk2$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210417,
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
        "1",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100789,100790,100791,100792,100793,100794,100795,100796,100797,100908,100909,100910,100911,100912,100913,100914,100805,100806,100798,100799,100800,100801,100802,100803,100804,100868,100869,100870,100871,100872,100873,100874"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_ALL_SPECIFIC_PACK_ITEM"
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


#### 对话 7210417

**起点节点 `721041701`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**我明白了，请您收好「御神签」。

**玄冬林檎：**之前的任务，您完成得很好。还请您继续精进。




### 步骤 10：子任务 7210418

（test）特殊交付talk3$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210418,
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
        "1",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100789,100790,100791,100792,100793,100794,100795,100796,100797,100908,100909,100910,100911,100912,100913,100914,100798,100799,100800,100801,100802,100803,100804,100805,100806,100868,100869,100870,100871,100872,100873,100874"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_ALL_SPECIFIC_PACK_ITEM"
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


#### 对话 7210418

**起点节点 `721041801`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**我明白了，请您收好「御神签」。

**玄冬林檎：**上次也辛苦您了，我翘首期盼您完成这次的任务。




### 步骤 11：子任务 7210435

（test）暗号对话1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210419,
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


#### 对话 7210416

**起点节点 `721041601`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**好的，请您收好「御神签」。



#### 对话 7210435

**起点节点 `721043501`**


**玄冬林檎：**那个人，什么时候才会来呢…

**旅行者：**玄冬小姐…

**玄冬林檎：**啊呀，您终于来…咳，您好！您今天也要来解签吗？



#### 对话 7210438

**起点节点 `721043801`**


**旅行者：**玄冬小姐今天心情很好？

**玄冬林檎：**嗯？有什么问题吗？

**旅行者：**感觉和平时的气场不太一样…

**玄冬林檎：**欸，是这样吗？我会注意的！

**玄冬林檎：**可能是因为今天我抽到了「大吉」的签吧，感觉心情很好呢！也很想把这份心情跟您分享。

**玄冬林檎：**不过，对于某些人来说的「大吉」，对另一些人来说却可能意味着「大凶」。

**玄冬林檎：**那些抽到「大凶」的人…会有什么样的「御签挂」等着他们呢？

**玄冬林檎：**运势真是很值得玩味呢！再见。




### 步骤 12：子任务 7210436

（test）暗号对话2$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210420,
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


#### 对话 7210417

**起点节点 `721041701`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**我明白了，请您收好「御神签」。

**玄冬林檎：**之前的任务，您完成得很好。还请您继续精进。



#### 对话 7210436

**起点节点 `721043601`**


**玄冬林檎：**您好。



#### 对话 7210439

**起点节点 `721043901`**


**旅行者：**玄冬小姐今天有什么事吗？

**玄冬林檎：**我…啊？欸？您问我吗？

**玄冬林檎：**嗯嗯嗯…最近我比较忙！但如果您、您愿意的话，我看看安排…

**分支 1：**

  **旅行者：**你会错意了…

  **玄冬林檎：**噢。是这样啊，还以为今天总算能…

**分支 2：**

  **旅行者：**只是觉得你有点心不在焉…

  ↩ 合流到节点 `721043906`




### 步骤 13：子任务 7210437

（test）暗号对话3$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210421,
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


#### 对话 7210418

**起点节点 `721041801`**


**旅行者：**（交付竹签）「胧夜正中」。

**玄冬林檎：**「云雾不清」。

**玄冬林檎：**我明白了，请您收好「御神签」。

**玄冬林檎：**上次也辛苦您了，我翘首期盼您完成这次的任务。



#### 对话 7210437

**起点节点 `721043701`**


**玄冬林檎：**#{NICKNAME}，今天也要来解签吗？



#### 对话 7210440

**起点节点 `721044001`**


**旅行者：**你怎么知道我的名字？

**玄冬林檎：**欸？之前你说过吧。

**旅行者：**有吗？

**玄冬林檎：**#当然有啊，应、应该有的吧。{NICKNAME}，是个好名字呢！




### 步骤 14：子任务 7210424

（test）回滚执行$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        72104,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TIME_VAR_PASS_DAY",
      "PPFLKMOMKAI": "1"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7210424"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "1",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "2",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "72100",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "100789,100790,100791,100792,100793,100794,100795,100796,100797,100908,100909,100910,100911,100912,100913,100914,100798,100799,100800,100801,100802,100803,100804,100805,100806,100868,100869,100870,100871,100872,100873,100874"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_ALL_SPECIFIC_PACK_ITEM"
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


### 步骤 15：子任务 7210401

（test）竹签·大吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210401,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100789",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 16：子任务 7210402

（test）竹签·大吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210402,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100790",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 17：子任务 7210403

（test）竹签·大吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210403,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100791",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 18：子任务 7210404

（test）竹签·大吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210404,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100792",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 19：子任务 7210405

（test）竹签·中吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210405,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100793",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 20：子任务 7210406

（test）竹签·中吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210406,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100794",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 21：子任务 7210407

（test）竹签·吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210407,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100795",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 22：子任务 7210426

（test）竹签·吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210426,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100796",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 23：子任务 7210427

（test）竹签·吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210427,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100797",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 24：子任务 7210428

（test）竹签·末吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210428,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100908",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 25：子任务 7210429

（test）竹签·末吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210429,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100909",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 26：子任务 7210430

（test）竹签·末吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210430,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100910",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 27：子任务 7210431

（test）竹签·末吉$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210431,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100911",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 28：子任务 7210432

（test）竹签·凶$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210432,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100912",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 29：子任务 7210433

（test）竹签·凶$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210433,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100913",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 30：子任务 7210434

（test）竹签·大凶$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210434,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100914",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_DEL_PACK_ITEM"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 31：子任务 7210408

（test）凶签绘马交付·凶1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210408,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
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


### 步骤 32：子任务 7210409

（test）凶签绘马交付·凶2$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210409,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
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


### 步骤 33：子任务 7210410

（test）凶签绘马交付·大凶$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210410,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
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


### 步骤 34：子任务 7210411

(test)回滚隔离$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210411,
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

（此步骤无对话）


### 步骤 35：子任务 7210412

(test)废弃$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        2,
        2
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_VAR_EQUAL",
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


### 步骤 36：子任务 7210413

(test)废弃$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210413,
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

（此步骤无对话）


### 步骤 37：子任务 7210414

(test)废弃$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7210414,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_ITEM_GIVING",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "2",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
    },
    {
      "LNHLPKELCAL": [
        "1",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


#### 对话 7210401

**起点节点 `721040101`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210402

**起点节点 `721040201`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210403

**起点节点 `721040301`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210404

**起点节点 `721040401`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210405

**起点节点 `721040501`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210406

**起点节点 `721040601`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210407

**起点节点 `721040701`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210408

**起点节点 `721040801`**


**「御签挂」：**（如果抽到了「凶」和「大凶」，结在这里就可以逢凶化吉。）

**分支 1：**

  **旅行者：**挂起来吧。

**分支 2：**

  **旅行者：**我没什么所谓。

  **「御签挂」：**（…）



#### 对话 7210409

**起点节点 `721040901`**


**「御签挂」：**（如果抽到了「凶」和「大凶」，结在这里就可以逢凶化吉。）

**分支 1：**

  **旅行者：**挂起来吧。

**分支 2：**

  **旅行者：**我没什么所谓。

  **「御签挂」：**（…）



#### 对话 7210410

**起点节点 `721041001`**


**「御签挂」：**（如果抽到了「凶」和「大凶」，结在这里就可以逢凶化吉。）

**分支 1：**

  **旅行者：**挂起来吧。

**分支 2：**

  **旅行者：**我没什么所谓。

  **「御签挂」：**（…）



#### 对话 7210411

**起点节点 `721041101`**


**「御签挂」：**(test)要把纸签系在绘马上吗？



#### 对话 7210412

**起点节点 `721041201`**


**「御签挂」：**(test)要把纸签系在绘马上吗？



#### 对话 7210413

**起点节点 `721041301`**


**「御签挂」：**(test)要把纸签系在绘马上吗？



#### 对话 7210414

**起点节点 `721041401`**


**「御签挂」：**(test)要把纸签系在绘马上吗？



#### 对话 7210415

**起点节点 `721041501`**


**玄冬林檎：**（test）你好。你要求签？

**玄冬林檎：**（test）别忘了，一天只能求一次签。



#### 对话 7210426

**起点节点 `721042601`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210427

**起点节点 `721042701`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210428

**起点节点 `721042801`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210429

**起点节点 `721042901`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210430

**起点节点 `721043001`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210431

**起点节点 `721043101`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210432

**起点节点 `721043201`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210433

**起点节点 `721043301`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。



#### 对话 7210434

**起点节点 `721043401`**


**旅行者：**我要解签…

**玄冬林檎：**好的，请将竹签给我吧。


