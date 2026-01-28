# 2022 （test）逃离主岛处理$HIDDEN


---
## 任务信息

- **任务类型**：AQ
- **前置主任务**：2008

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 202201

（test）逃离主岛处理$HIDDEN

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
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_ANY_TALK",
      "PPFLKMOMKAI": "202201,202202,202203,202204"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        202201,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ADD_QUEST_PROGRESS",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        202101,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        202102,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
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


#### 对话 202201

**起点节点 `20220101`**


**巡逻足轻：**站住！奉命缉拿通缉人员！

**巡逻足轻：**糟糕，快避一避吧！



#### 对话 202202

**起点节点 `20220201`**


**巡逻足轻：**你是通缉令上那个人！不许动！

**巡逻足轻：**唔哇，快跑！



#### 对话 202203

**起点节点 `20220301`**


**巡逻足轻：**站住！奉命缉拿通缉人员！

**巡逻足轻：**糟糕，快避一避吧！



#### 对话 202204

**起点节点 `20220401`**


**巡逻足轻：**你是通缉令上那个人！不许动！

**巡逻足轻：**唔哇，快跑！




### 步骤 2：子任务 202202

（test）逃离主岛处理$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        202202,
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
        "202201"
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
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 3：子任务 202203

（test）逃离主岛处理$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        202203,
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


#### 对话 4011161

（此对话无可映射文本或无节点）

#### 对话 4011162

（此对话无可映射文本或无节点）

#### 对话 4011163

（此对话无可映射文本或无节点）

#### 对话 4011164

（此对话无可映射文本或无节点）

#### 对话 7053203

（此对话无可映射文本或无节点）

#### 对话 7053204

（此对话无可映射文本或无节点）

#### 对话 7053205

（此对话无可映射文本或无节点）

#### 对话 7053206

（此对话无可映射文本或无节点）

#### 对话 7053207

（此对话无可映射文本或无节点）

#### 对话 7053208

（此对话无可映射文本或无节点）

#### 对话 7053212

（此对话无可映射文本或无节点）

#### 对话 7053213

（此对话无可映射文本或无节点）

#### 对话 7053214

（此对话无可映射文本或无节点）

#### 对话 7053215

（此对话无可映射文本或无节点）

#### 对话 7053216

（此对话无可映射文本或无节点）

#### 对话 7053217

（此对话无可映射文本或无节点）

#### 对话 7053218

（此对话无可映射文本或无节点）

#### 对话 7053219

（此对话无可映射文本或无节点）

#### 对话 7053222

（此对话无可映射文本或无节点）

#### 对话 7053223

（此对话无可映射文本或无节点）

#### 对话 7053224

（此对话无可映射文本或无节点）

#### 对话 7053225

（此对话无可映射文本或无节点）

#### 对话 7053226

（此对话无可映射文本或无节点）

#### 对话 7053227

（此对话无可映射文本或无节点）

#### 对话 7053228

（此对话无可映射文本或无节点）

#### 对话 7053229

（此对话无可映射文本或无节点）

#### 对话 7053232

（此对话无可映射文本或无节点）

#### 对话 7053233

（此对话无可映射文本或无节点）

#### 对话 7053234

（此对话无可映射文本或无节点）

#### 对话 7053235

（此对话无可映射文本或无节点）

#### 对话 7053236

（此对话无可映射文本或无节点）

#### 对话 7053237

（此对话无可映射文本或无节点）

#### 对话 7053238

（此对话无可映射文本或无节点）

#### 对话 7053239

（此对话无可映射文本或无节点）

#### 对话 7053240

（此对话无可映射文本或无节点）

#### 对话 7053241

（此对话无可映射文本或无节点）

#### 对话 7053242

（此对话无可映射文本或无节点）

#### 对话 7053243

（此对话无可映射文本或无节点）

#### 对话 7053244

（此对话无可映射文本或无节点）
