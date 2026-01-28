# 75215 (test)伊安珊训练营$HIDDEN

(test)伊安珊训练营$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75000
- **后接主任务**：75220
- **任务奖励**：
  - 沃陆果饮×1

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7521501

(test)完成玩法$HIDDEN

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
      "PPFLKMOMKAI": "7521501finish"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "[3_11011:-2214.771,159.858,9303.904,0.000,323.769,0.000]",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7521501

**起点节点 `752150101`**


**科里：**怎么了，你也对力量训练营有兴趣吗？

**科里：**器械可以随意试用，但看你细胳膊细腿的，可别把自己弄伤了。

**分支 1：**

  **旅行者：**我每天运动量可大了。

  **科里：**真的吗？在和我吹牛之前，不如先和旁边的大方块较较劲吧。

  **科里：**<color=#00E1FFFF>攻击</color>或者<color=#00E1FFFF>撞击</color>大方块，根据力量的大小就能得到不同的分数。让我看看你有多大能耐。

**分支 2：**

  **旅行者：**我能一拳打飞丘丘人。

  ↩ 合流到节点 `752150105`



#### 对话 7521503

**起点节点 `752150301`**


**科里：**招揽新人其实不难，问题在于训练一段时间之后，就有不少人找借口请假，或者干脆不来了。

**科里：**教练为了提高大家的积极性，想了很多办法，那个方块挑战就是其中一项。

**科里：**结果有些人为了提高分数，一个劲地往大方块上面撞，最后搞得鼻青脸肿的，请假的人更多了…



#### 对话 7521504

**起点节点 `752150401`**


**科里：**攻击或者撞击大方块，根据力量的大小就能得到不同的分数。还是说这就打算放弃了？



#### 对话 7521505

（此对话无可映射文本或无节点）


### 步骤 2：子任务 7521502

(test)与科里对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7521502,
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
        "7521501",
        "3"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
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
      "6375"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7521502

**起点节点 `752150201`**


**科里：**不会吧，你居然把大方块撞碎了一角？

**科里：**上一位能有这种力气的人还是瓦雷莎前辈…看来你和她一样，都是天赋型选手啊！

**分支 1：**

  **旅行者：**还是有点费劲的。

  **科里：**真是人不可貌相啊，有机会的话真想请你来当教练。

  **科里：**对了，这瓶沃陆果饮据说能提升运动效果，学员们都爱喝，你也拿去尝尝吧。

**分支 2：**

  **旅行者：**这种程度的话，轻轻松松。

  ↩ 合流到节点 `752150205`



#### 对话 7521506

**起点节点 `752150601`**


**科里：**好长时间没见到这么厉害的新人了，真是令人惊叹！


