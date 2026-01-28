# 72271 食莲者后续琳琅$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72239
- **任务奖励**：
  - 摩拉×80000，丰年有余×5

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7227101

（test）跟琳琅对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7227101,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7224301,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7227201,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "100945"
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


#### 对话 7227101

**起点节点 `722710102`**


**旅行者：**我有宝物想要出售。

**琳琅：**您又找到了什么稀奇东西？请让我看看。

**[黑屏]** 将龙骨花凝珠的故事告诉了琳琅。

**琳琅：**听您所说，这可是一件了不得的古物啊。

**琳琅：**只是我入手察看一番，并没有感觉到特别明显的异样，或许需要长期使用才行…

**琳琅：**依我之见，您所听来的神妙效用，可能有些夸大了，又或者...说不定只是失败者的托辞呢…

**琳琅：**哈哈，您不用在意，我只是随口一说，您听听便好。

**琳琅：**在我们古董行当里，这种事情倒十分常见。

**琳琅：**另外，您似乎没有对它密封保存，粗粗看去，它的表面似乎已经有了一些耗损。

**琳琅：**这样一来，价格又要小打一点折扣。

**琳琅：**您看，80000摩拉如何？除此之外，再加5份特色料理丰年有余。

**琳琅：**我相信这是一个不错的价格。

**分支 1：**

  **旅行者：**你会拿它做什么？

  **琳琅：**其实跟它的功效相比，我倒觉得它背后的那段故事更有价值。

  **琳琅：**我猜港里的说书人、戏班子，或者玉京台上的贵人们都会对它有兴趣。

  **琳琅：**就算只摆在本店的柜台上展示，也能算上一件珍稀的古董了。

  ↩ 合流到节点 `722710111`

**分支 2：**

  **旅行者：**公道的价格，成交。

  **琳琅：**您可真爽快，这些摩拉请收好。

  **琳琅：**往后要是还有类似的宝贝，敝店随时恭候您的光临。

**分支 3：**

  **旅行者：**我再考虑一下。

  **琳琅：**嗯，对于这种珍奇宝物，货比三家…啊不是，价比三家也是应该的。

  **琳琅：**如果您考虑好了，可以再来找我。



#### 对话 7227102

**起点节点 `722710201`**


**旅行者：**关于龙骨花凝珠。

**琳琅：**那么，您考虑的如何了？

**琳琅：**敝店愿意以80000摩拉加5份丰年有余来收购。

**分支 1：**

  **旅行者：**就决定卖给你了。

  **琳琅：**谢您惠顾，这些摩拉请收好。

  **琳琅：**往后要是还有类似的宝贝，敝店随时恭候您的光临。

**分支 2：**

  **旅行者：**我还要再考虑一下。

  **琳琅：**嗯，对于这种珍奇宝物，价比三家也是应该的。

  **琳琅：**如果您考虑好了，可以再来找我。


