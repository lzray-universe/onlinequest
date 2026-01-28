# 74189 (test)涌泉窟大炮开门$HIDDEN

(test)涌泉窟大炮开门$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7418901

(test)玩家点击操作台$HIDDEN

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
      "PPFLKMOMKAI": "Q7418901"
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

（此步骤无对话）


### 步骤 2：子任务 7418905

(test)与女仆对话1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7418905,
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
        "133412072"
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


#### 对话 7418905

**起点节点 `741890501`**


**佩尔曼雅：**稍等，客人。你想要知道一个有关宝藏的「秘密」吗？

**旅行者：**什么秘密？

**佩尔曼雅：**宝藏。和打开宝藏门的钥匙…怎么样？客人，你对此有兴趣吗？

**分支 1：**

  **旅行者：**你别又要我去打倒魔物…

  **佩尔曼雅：**怎么会呢？我们酒馆从来不差遣客人，至少…我们不会差遣客人。

  **佩尔曼雅：**您看见我身边的这门「舰炮」，和这门炮所正对着的那堆碎石了吗？

  **佩尔曼雅：**只要启动这门炮，用炮弹轰开石头，碎石后的宝藏就归您了。

  **旅行者：**这大炮的名字谁取的…

  **佩尔曼雅：**是掌舵人取的。这门炮也是他不知道从什么地方捞起来的。

  **分支 1：**

    **旅行者：**直接说，这门炮缺什么零件？

    **佩尔曼雅：**您误会了，这门炮的一切零件都是完好且完整的，能源也十分充沛，我每天都在维护它。

    **佩尔曼雅：**但是，在启动这门炮之前，我想要请您回答几个「问题」。

    **佩尔曼雅：**…老实说，这是掌舵人的要求。他说，这样能为造访酒馆的客人找些事干，从而让他们把酒喝得慢一些，在酒馆里也停留得更久一些。

    **旅行者：**我不知道，但你问吧。

    **佩尔曼雅：**第一个问题是，在我们「锈舵」酒馆之内，有几张桌子？

    **佩尔曼雅：**第二个问题是，我们「锈舵」酒馆，有几位工作人员？

    **佩尔曼雅：**第三个问题是，有什么东西，是我们「锈舵」酒馆不供应的？

    **佩尔曼雅：**总之，只要回答对了这三个问题，您就可以启动这门炮，轰开碎石，取得宝物了。

    **旅行者：**我取走宝物，之后呢？

    **佩尔曼雅：**…之后，我就会在一个合适的时候，再将某个合适的宝物放在山洞里，再用碎石填上洞口。

    **佩尔曼雅：**然后，等待着下一位客人来启动「舰炮」，并取得宝物。

    **分支 1：**

      **旅行者：**辛苦了。

      **佩尔曼雅：**好了，请您去寻找那几个问题的答案吧，我就在这里等着您。

    **分支 2：**

      **旅行者：**你的老板也太无良了！

      **佩尔曼雅：**我不否认您的说法。但我现在还没有找到能够将炮口对准掌舵人，又不被他发现的方法。

      **佩尔曼雅：**而且，贸然开炮会伤到酒馆里的其他客人，做这种事不符合我的道德观念。

      ↩ 合流到节点 `741890528`

  **分支 2：**

    **旅行者：**直接说，这门炮缺什么能源？

    ↩ 合流到节点 `741890513`

**分支 2：**

  **旅行者：**你不会又要让我找什么吧…

  ↩ 合流到节点 `741890506`




### 步骤 3：子任务 7418902

(test)与女仆对话开始解密$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7418902,
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
        "133402680"
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


#### 对话 7418904

**起点节点 `741890401`**


**佩尔曼雅：**您找到问题的答案了吗？容我提醒您一下问题本身。

**佩尔曼雅：**第一个问题是，在我们「锈舵」酒馆之内，有几张桌子？

**佩尔曼雅：**第二个问题是，我们「锈舵」酒馆，有几位工作人员？

**佩尔曼雅：**第三个问题是，有什么东西，是我们「锈舵」酒馆不供应的？

**佩尔曼雅：**您准备好回答问题了吗？

**分支 1：**

  **旅行者：**准备好了。

  **佩尔曼雅：**那我们就开始吧。首先是第一个问题。在我们「锈舵」酒馆之内，有几张桌子？

  **分支 1：**

    **旅行者：**三张。

    **佩尔曼雅：**您答对了，离启动大炮又近了一步。

    **佩尔曼雅：**第二个问题是，我们「锈舵」酒馆，有几位工作人员？

    **分支 1：**

      **旅行者：**一个。

      **佩尔曼雅：**很遗憾，您答错了…要再试一次吗？

      **分支 1：**

        **旅行者：**再来一次。

        ↩ 合流到节点 `741890409`

      **分支 2：**

        **旅行者：**我再想想…

        **佩尔曼雅：**那就请您去寻找那几个问题的答案吧，我就在这里等着您。

    **分支 2：**

      **旅行者：**三个。

      **佩尔曼雅：**您答对了，离启动大炮又近了一步。

      **佩尔曼雅：**第三个问题是，有什么东西，是我们「锈舵」酒馆不供应的？

      **分支 1：**

        **旅行者：**奶酪。

        ↩ 合流到节点 `741890425`

      **分支 2：**

        **旅行者：**海露花。

        **佩尔曼雅：**全部答对了，恭喜您，可以去启动大炮了。

        **佩尔曼雅：**稍等，我先去旁边捂住耳朵。

      **分支 3：**

        **旅行者：**牛奶。

        ↩ 合流到节点 `741890425`

    **分支 3：**

      **旅行者：**我就是工作人员。

      ↩ 合流到节点 `741890425`

  **分支 2：**

    **旅行者：**两张。

    ↩ 合流到节点 `741890425`

  **分支 3：**

    **旅行者：**没有桌子。

    ↩ 合流到节点 `741890425`

**分支 2：**

  **旅行者：**还要再想想…

  **佩尔曼雅：**那就请您去寻找那几个问题的答案吧，我就在这里等着您。




### 步骤 4：子任务 7418903

(test)解谜成功对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7418904,
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
    "EMAIGPLHEJH": "QUEST_GUIDE_LAYER_SCENE",
    "GGJOHCAJAPP": 0,
    "HFNCMGLBNGO": "",
    "IDLNFDCEJLG": "QUEST_GUIDE_AREA_STYLE_DEFAULT",
    "KCFINIEBBBG": 0,
    "KEDGDANLBHP": "",
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "1011"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7418903

**起点节点 `741890301`**


**佩尔曼雅：**全部答对了，恭喜您，可以去启动大炮了。

**佩尔曼雅：**稍等，我先去旁边捂住耳朵。




### 步骤 5：子任务 7418904

(test)击碎山石$HIDDEN

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
      "PPFLKMOMKAI": "Q7418904"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "1063"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNHIDE_SCENE_POINT"
    },
    {
      "LNHLPKELCAL": [
        "3380201",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_MAP_LAYER_UNLOCK_STATE"
    },
    {
      "LNHLPKELCAL": [
        "3380202",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_MAP_LAYER_UNLOCK_STATE"
    },
    {
      "LNHLPKELCAL": [
        "3380203",
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
    "LNHLPKELCAL": [
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）
