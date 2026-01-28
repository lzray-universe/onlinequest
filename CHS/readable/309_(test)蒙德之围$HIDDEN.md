# 309 (test)蒙德之围$HIDDEN


---
## 任务信息

- **任务类型**：AQ
- **所属章节**：捕风的异乡人
- **所属地区**：蒙德
- **推荐等级**：0
- **前置主任务**：358
- **后接主任务**：311, 481, 20030, 20601, 20740, 21001, 40043, 70102, 70106, 70123, 70127, 70128, 70141, 70650, 71005, 71006, 71011, 71019, 71022, 71046, 71055, 71063, 71077, 71078, 71093, 71102, 73049, 73052, 73084, 73106, 73189, 73191, 73210, 73211, 73216, 73221, 73222, 73235, 73238, 73270, 73276, 73278, 73291, 73292, 73293, 73300, 73304, 73322, 73335, 73337, 73342, 73343, 73349, 74000, 74001, 74012, 74014, 74015, 74018, 74019, 74020, 74021, 74022, 74025, 74053, 74054, 74057, 74060, 74072, 74073, 74074, 74075, 74081, 74082, 74083, 74084, 74091, 74093, 74104, 74110, 74144, 74147, 74148, 74159, 74164, 74169, 74178, 74180

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 30901

(test)协助安柏、凯亚、丽莎攻略地城$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1001,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_DUNGEON",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_DUNGEON",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1003,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_DUNGEON",
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
- Cutscene `30901`（video）
  - videoName: `ChangeWeather.usm`
  - fadeIn/fadeOut: 1.0/1.0


#### 对话 30911

**起点节点 `3091101`**


**商店顾客：**好大的风啊——



#### 对话 30912

**起点节点 `3091201`**


**莎拉：**要被吹走了——



#### 对话 30913

**起点节点 `3091301`**


**安娜：**什么鬼天气——



#### 对话 30914

**起点节点 `3091401`**


**玛格丽特：**好大的风啊——



#### 对话 30915

**起点节点 `3091501`**


**玛乔丽：**要被吹走了——



#### 对话 30916

**起点节点 `3091601`**


**商店顾客：**什么鬼天气——




### 步骤 2：子任务 30903

(test)离开神庙$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
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


### 步骤 3：子任务 30904

(test)蒙德天气变化cs$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        30904,
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
        "7",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_OPEN_STATE"
    },
    {
      "LNHLPKELCAL": [
        "8",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_OPEN_STATE"
    },
    {
      "LNHLPKELCAL": [
        "10001",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133004919,2"
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
