# 75188 (test)农田抓小突角龙$HIDDEN

(test)农田抓小突角龙$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7518802

(test)和NPC进行一段对话说明情况$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7518802,
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
        "133517034"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
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
      "6430"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7518802

**起点节点 `751880201`**


**帕卡林：**那边的，对，没错，就是你！

**帕卡林：**看你走路带风，跑得飞快，应该挺有力气的，像是经常锻炼的人。

**帕卡林：**是我们「沃陆之邦」的勇士吗？还是说你来自其他部族？

**分支 1：**

  **旅行者：**我是路过的冒险家。

  **帕卡林：**这样啊，有点可惜了。唉，也是，正缺人的时候突然就碰上个帮忙的，这种好事也就是梦里才有。

  **旅行者：**怎么了？

  **帕卡林：**是这样的，你也看见了，我这里不是有片农场嘛。

  **帕卡林：**这个农场一直是我一个人打理，但这阵子挺不巧的…

  **帕卡林：**前几天，我去跟部族里的勇士角力，弄伤了背…是，我知道这件事挺蠢的。

  **帕卡林：**结果，我现在既不能帮我爸爸开垦新田，也没法打理自己的农场，说实话，连走路都痛。

  **帕卡林：**正想雇个人帮几天忙，恰好碰上你。

  **帕卡林：**可惜你只是路过，种地得天天下田，你要是一会儿来一会儿不来，我这片田就荒废了。

  **帕卡林：**但我现在也没力气跑大老远去部族里找人，唉，除了养的几只小突角龙，眼前也没什么人能帮忙了。

  **帕卡林：**几只小捣蛋鬼这几天也不听话，三只全都赖在田里，都不肯到我脚边来。

  **帕卡林：**这样吧，我能不能请你帮个小忙，替我把它们带回来，我真是不方便走路。

  **旅行者：**没问题。

  **帕卡林：**那就太好了，它们平时都还听话，经常陪我在田里忙活，只是这两天不知道怎么回事…

  **帕卡林：**你招呼它们一声，我家的三只小龙大概自己就会回来了。

**分支 2：**

  **旅行者：**我不是纳塔人。

  ↩ 合流到节点 `751880206`




### 步骤 2：子任务 7518803

(test)开始游玩抓小突角龙$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7518802,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_GLOBAL_VAR_EQUAL",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "[3_10848:-2481.449,257.759,10375.050]",
      "50"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7518801

**起点节点 `751880101`**


**帕卡林：**请你帮个忙，去田里找找我家<color=#00E1FFFF>三只小龙</color>，让它们回我脚边来吧。




### 步骤 3：子任务 7518804

(test)全抓住了之后再去和NPC对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7518804,
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
        "133517034"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "7518801",
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "6430"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7518804

**起点节点 `751880401`**


**帕卡林：**这三个小家伙都回来了，应该都是你的功劳。

**帕卡林：**路过的勇士，谢谢你这份好心。

**帕卡林：**我这背还是疼，但至少有小龙在边上，有它们陪着，感觉舒坦多了。

**帕卡林：**我也不是很富裕，但一点报酬还是出得起，这些东西请你拿着吧。


