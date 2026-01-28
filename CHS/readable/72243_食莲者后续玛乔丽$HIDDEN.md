# 72243 食莲者后续玛乔丽$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72239
- **任务奖励**：
  - 摩拉×80000，月亮派×5

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7224301

(test)找玛乔丽对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7224301,
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
        7227101,
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


#### 对话 7224301

**起点节点 `722430102`**


**旅行者：**我有宝物想要出售。

**玛乔丽：**出售宝物？真是令人意外。

**玛乔丽：**像您这样强大的冒险家，想要出售的东西一定很罕见吧？

**玛乔丽：**快请让我看看。

**[黑屏]** 将龙骨花凝珠的故事告诉了玛乔丽。

**玛乔丽：**啊，这不是就像是吟游诗人的故事里说的忘忧果吗？

**玛乔丽：**居然真的有这种东西存在吗…原来它叫龙骨花凝珠。

**玛乔丽：**如果它的效果真的和您所说的一样，我愿意花80000摩拉加一些特色料理买下它。

**玛乔丽：**嗯…80000摩拉加上5个月亮派，您觉得怎么样？

**分支 1：**

  **旅行者：**你会拿它做什么？

  **玛乔丽：**嘻嘻，多么独特的宝物呀。

  **玛乔丽：**童话一般的神奇功效，我相信那些炼金术士们不会吝惜自己的钱包。

  ↩ 合流到节点 `722430110`

**分支 2：**

  **旅行者：**公道的价格，成交。

  **玛乔丽：**那我就收下这件宝物了，多谢惠顾。

  **玛乔丽：**对了，通常来说，这种凝珠类的物品会在风中缓慢挥发。

  **玛乔丽：**所以，最好将它覆上隔膜或者放进容器密封起来，这样成色会更好。

  **玛乔丽：**这是一点附送您的小技巧，希望对您的冒险有帮助。

  **玛乔丽：**如果今后您又找到了类似的宝物，别忘了，这儿有您忠实的买家。

**分支 3：**

  **旅行者：**我再考虑一下。

  **玛乔丽：**哈哈，没问题，但是我相信我的价格是最合适的。

  **玛乔丽：**如果您考虑好了，可以再来找我。



#### 对话 7224302

**起点节点 `722430201`**


**旅行者：**关于龙骨花凝珠。

**玛乔丽：**怎么样？是不是我的价格最合适了，嘻嘻。

**玛乔丽：**如果卖给我的话，我出的价格是80000摩拉加5个月亮派，还不差吧?

**分支 1：**

  **旅行者：**就决定卖给你了。

  **玛乔丽：**那我就收下这件宝物了，多谢惠顾。

  **玛乔丽：**对了，通常来说，这种凝珠类的物品会在风中缓慢挥发。

  **玛乔丽：**所以，最好将它覆上隔膜或者放进容器密封起来，这样成色会更好。

  **玛乔丽：**这是一点附送您的小技巧，希望对您的冒险有帮助。

  **玛乔丽：**如果今后您又找到了类似的宝物，别忘了，这里有你忠实的买家。

**分支 2：**

  **旅行者：**我还要再考虑一下。

  **玛乔丽：**哈哈，您还真是谨慎。但是我相信我的价格是最合适的。

  **玛乔丽：**如果您考虑好了，可以再来找我。




### 步骤 2：子任务 7224302

(test)找玛乔丽买卖

**任务条件：**

```json
{
  "finishCond": [],
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
