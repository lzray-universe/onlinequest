# 76048 (test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7604801

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604802,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604803,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604804,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604810,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604805,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604806,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604807,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604808,
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


#### 对话 7604801

**起点节点 `760480101`**


**旅行者：**我来帮忙！

**利乌芭：**好呀！你需要在很短的时间内同时击中这些显像机关…别担心，它们会帮我收集流体冲击力相关的数据。

**利乌芭：**嗯…至于它们的排列方式，就交给你来选了。




### 步骤 2：子任务 7604802

在2秒内击中在场所有显像机关$HIDDEN

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
      "PPFLKMOMKAI": "7604805"
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
      "PPFLKMOMKAI": "7604801"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        30
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_360700045:1638.093,228.140,9466.353]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "133607196",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
    },
    {
      "LNHLPKELCAL": [
        "7604801"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133607195"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "7604801",
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
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 3：子任务 7604803

在2秒内击中在场所有显像机关$HIDDEN

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
      "PPFLKMOMKAI": "7604805"
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
      "PPFLKMOMKAI": "7604801"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        30
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_360700045:1638.093,228.140,9466.353]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "133607197",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
    },
    {
      "LNHLPKELCAL": [
        "7604801"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133607195"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "7604802",
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
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 4：子任务 7604804

在2秒内击中在场所有显像机关$HIDDEN

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
      "PPFLKMOMKAI": "7604805"
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
      "PPFLKMOMKAI": "7604801"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        30
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_360700045:1638.093,228.140,9466.353]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "133607198",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
    },
    {
      "LNHLPKELCAL": [
        "7604801"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133607195"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "7604803",
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
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 7604806

在2秒内击中在场所有显像机关$HIDDEN

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
      "PPFLKMOMKAI": "7604805"
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
      "PPFLKMOMKAI": "7604801"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        30
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_360700045:1638.093,228.140,9466.353]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "133607085",
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
    },
    {
      "LNHLPKELCAL": [
        "7604801"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133607195"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "7604804",
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

（此步骤无对话）


### 步骤 6：子任务 7604805

(test)废弃$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7604805,
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


---
## 未归类对话


#### 对话 7604802

**起点节点 `760480201`**


**旅行者：**稳固的阵列。

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604803

**起点节点 `760480301`**


**旅行者：**光辉的阵列。

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604804

**起点节点 `760480401`**


**旅行者：**希望的阵列。

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604805

**起点节点 `760480501`**


**旅行者：**<color=#FFCC33FF>稳固的阵列。</color>

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604806

**起点节点 `760480601`**


**旅行者：**<color=#FFCC33FF>光辉的阵列。</color>

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604807

**起点节点 `760480701`**


**旅行者：**<color=#FFCC33FF>希望的阵列。</color>

**利乌芭：**好呀好呀，就这么办吧！



#### 对话 7604808

**起点节点 `760480801`**


**旅行者：**<color=#FFCC33FF>（向她描述了蒙德城门口的鸽子…）</color>

**利乌芭：**鸽子吗…虽然不知道你和这些鸽子有什么恩怨，不过我来试试看！



#### 对话 7604810

**起点节点 `760481001`**


**旅行者：**（向她描述了蒙德城门口的鸽子…）

**利乌芭：**鸽子吗…虽然不知道你和这些鸽子有什么恩怨，不过我来试试看！


