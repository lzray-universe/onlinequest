# 72272 食莲者后续源一郎$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：72239
- **任务奖励**：
  - 摩拉×80000，刺身拼盘×5

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7227201

（test）跟荣一郎说话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7227201,
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
        7227101,
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


#### 对话 7227201

**起点节点 `722720102`**


**旅行者：**我有宝物想要出售。

**御舆源一郎：**欸？其实小店已经有了固定的进货渠道，平时也没有收购散货的业务...

**御舆源一郎：**不过看你的样子…似乎是个了不起的东西？

**御舆源一郎：**既然如此…不如先给我看看吧？

**[黑屏]** 将龙骨花凝珠的故事告诉了御舆源一郎。

**御舆源一郎：**唔…

**御舆源一郎：**坦白说…虽然这个故事很神奇…但是好像也稍微神奇过头了些…

**御舆源一郎：**这种东西，已经有些超出我的理解能力了。

**御舆源一郎：**请别见笑，毕竟我也只是会做些手工艺品的家伙…

**御舆源一郎：**这样吧，80000摩拉，最多再加5份刺身拼盘，这种料理可不便宜。

**御舆源一郎：**这个价格你接受的话，我就买下这件宝物。

**分支 1：**

  **旅行者：**你会拿它做什么？

  **御舆源一郎：**我还说不清楚，得再仔细琢磨一下这个东西。

  **御舆源一郎：**如果情况好的话，说不定可以加工成一种特别的根付，这样应该能多卖点价钱。

  ↩ 合流到节点 `722720111`

**分支 2：**

  **旅行者：**公道的价格，成交。

  **御舆源一郎：**那么这些摩拉请收好。我得去好好研究研究这个。

**分支 3：**

  **旅行者：**我再考虑一下。

  **御舆源一郎：**嗯…刚好我也可以再想想。

  **御舆源一郎：**如果你考虑好了，可以再来找我。



#### 对话 7227202

**起点节点 `722720201`**


**旅行者：**关于龙骨花凝珠。

**御舆源一郎：**是决定要把龙骨花凝珠卖给我了吗?

**御舆源一郎：**还是之前说好的价格，80000摩拉加5份刺身拼盘。

**分支 1：**

  **旅行者：**就决定卖给你了。

  **御舆源一郎：**那么这些摩拉请收好。我得去好好研究研究这个。

**分支 2：**

  **旅行者：**我还要再考虑一下。

  **御舆源一郎：**嗯…刚好我也可以再想想。

  **御舆源一郎：**如果你考虑好了，可以再来找我。


