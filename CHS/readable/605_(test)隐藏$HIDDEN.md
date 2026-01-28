# 605 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：AQ
- **前置主任务**：601

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 60505

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        60102,
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

（此步骤无对话）


### 步骤 2：子任务 60501

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        60501,
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
        "20260",
        "220260002,2"
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


#### 对话 60501

**起点节点 `6051101`**


**砂糖：**#阿贝多先生！{NICKNAME}！

**阿贝多：**情况应该还好吧。

**砂糖：**嗯！刚才有一些怪物冲进了城内，不过我跟迪卢克老爷和凯亚先生一起击退了他们。

（缺失节点 `6051104`）



**起点节点 `6059901`**


**[黑屏]** 不久之前…




### 步骤 3：子任务 60502

(test)隐藏$HIDDEN

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
      "PPFLKMOMKAI": "Q60502_Finish"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        20260,
        65
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[20260_111:2238.000,233.230,-928.100]"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
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


### 步骤 4：子任务 60503

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        60502,
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
        20260,
        65
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[20260_111:2238.000,233.230,-928.100]"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "20260",
        "220260002,1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
    },
    {
      "LNHLPKELCAL": [],
      "PAINLIBBLDK": "QUEST_EXEC_UNLOCK_MIRROR_AVATAR_TEAM"
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


#### 对话 60502

**起点节点 `6050201`**


**凯亚：**两位辛苦了，防御得非常完美。

**迪卢克：**接下来这里交给我们就行。

**劳伦斯：**凯亚队长，斯万他…

**斯万：**喂！我没事。倒是你的小腿…

**凯亚：**斯万，劳伦斯，都到西风教会接受治疗吧，别勉强。我们会接手这一带。

**斯万：**可是，迪卢克老爷也…您不是早就已经离开骑士团了吗？

**迪卢克：**是啊，但也不是只有骑士团的人才能看守这扇大门。

**凯亚：**老爷一向很热心，哎，你就别管了。市民愿意做些什么，那就让他做呗，也没什么不好，不是吗？

**斯万：**…我明白了。非常抱歉，我衷心感谢您能支援我们！

**劳伦斯：**我们会尽快回来，多谢二位！

（缺失节点 `6050211`）



**起点节点 `6051104`**


**砂糖：**趁现在有空，我打算做些药剂分发给附近的战士，应该能够帮上些忙！

**阿贝多：**稳妥的判断，辛苦你了。

**阿贝多：**注意安全。虽然我不觉得会有这种情况，但如果出现你无法应对的情况，立刻撤离到安全地区。不用担心阵线问题。

**砂糖：**是，我明白了！




### 步骤 5：子任务 60504

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        60102,
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


#### 对话 60503

**起点节点 `6050202`**


**迪卢克：**接下来这里交给我们就行。

**劳伦斯：**凯亚队长，斯万他…

**斯万：**喂！我没事。倒是你的小腿…

**凯亚：**斯万，劳伦斯，都到西风教会接受治疗吧，别勉强。我们会接手这一带。

**斯万：**可是，迪卢克老爷也…您不是早就已经离开骑士团了吗？

**迪卢克：**是啊，但也不是只有骑士团的人才能看守这扇大门。

**凯亚：**老爷一向很热心，哎，你就别管了。市民愿意做些什么，那就让他做呗，也没什么不好，不是吗？

**斯万：**…我明白了。非常抱歉，我衷心感谢您能支援我们！

**劳伦斯：**我们会尽快回来，多谢二位！

**[黑屏]** (test)时间回到现在...



#### 对话 60511

**起点节点 `6051101`**


**砂糖：**#阿贝多先生！{NICKNAME}！

**阿贝多：**情况应该还好吧。

**砂糖：**嗯！刚才有一些怪物冲进了城内，不过我跟迪卢克老爷和凯亚先生一起击退了他们。

**砂糖：**趁现在有空，我打算做些药剂分发给附近的战士，应该能够帮上些忙！

**阿贝多：**稳妥的判断，辛苦你了。

**阿贝多：**注意安全。虽然我不觉得会有这种情况，但如果出现你无法应对的情况，立刻撤离到安全地区。不用担心阵线问题。

**砂糖：**是，我明白了！


