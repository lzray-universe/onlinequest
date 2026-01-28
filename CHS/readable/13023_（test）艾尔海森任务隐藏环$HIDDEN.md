# 13023 （test）艾尔海森任务隐藏环$HIDDEN


---
## 任务信息

- **任务类型**：LQ
- **前置主任务**：13022

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 1302304

（test）闲置对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1079,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE",
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


#### 对话 1302301

**起点节点 `130230101`**


**卡维：**西拉杰这个名字，我都没印象了。你们那届还有这种人？

**艾尔海森：**不是什么让人印象深刻的人，不记得也很正常。

**卡维：**教令院就是喜欢给人施加压力，还动不动给人扣上天才奇才之类的帽子，这点我一直很难欣赏。

**卡维：**不过就算是这样，教令院也不能交给你来领导。

**卡维：**应该说，我很高兴你还有最基本的自我认知。院里那些人如果没疯，就该明白与其让你当贤者还不如让我来。

**艾尔海森：**然后让人知道你的贤者生涯就像那幅挂画一样摇摇欲坠？

**卡维：**你这个马上就要辞职的家伙在说什么呢？过几天就又去管档案了，人生跌回谷底啊。

**艾尔海森：**但院里发给我的津贴应该不会减。

**卡维：**凭什么？！凭什么啊！！

**艾尔海森：**也不用像做建筑设计的人那样，累死累活只为博取委托人一个微笑。

**卡维：**你…你…

**卡维：**今天就不该好心帮你打扫客厅！我自己还有设计图纸没画完呢。

**艾尔海森：**记得补交你欠的房租。我打算拿那笔钱添置一些家具。

**卡维：**什…你是想气死我吗？你买的那些摆件一个比一个没有美感，放块干巴巴的木雕在家里有什么意思？

**艾尔海森：**谁让我经济自由呢。

**卡维：**我说，总拿自己的优势跟别人比也是一种逃避吧？去掉庸俗的金钱，在更有价值的地方比一比。

**艾尔海森：**很难想到有什么是你占上风的。你自己能想到吗？

**卡维：**艺术性不是吗！都说了你根本不懂室内装潢，不许乱买那些家具，除非带我一起去！

**艾尔海森：**带你去还得请你喝酒是吗？

**卡维：**当然啦。

**艾尔海森：**可我为什么要这样做？这只会构成另一种形式的借款而已，你过不了多久就得还我钱。

**卡维：**你也可以做一个善良的好人，不向我讨债，不是吗？

**艾尔海森：**假装自己没有负债，就像假装自己没有住在别人家里一样可笑。其他人迟早会知道的。

**卡维：**#说到这个，今天来的家伙应该不会说出去吧？记得叫{M#他}{F#她}们帮我保密。

**艾尔海森：**我倒觉得你早就暴露了，没必要费心掩饰。凭你那几杯倒的酒量，去几次酒馆自然就把秘密全说出去了。

**卡维：**不会吧？…不对，应该不会吧…




### 步骤 8：子任务 1302303

（test）判定玩家进入艾尔海森家$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1079,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ENTER_ROOM",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        100
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "Q1302217_Q1302218_N1053"
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


### 步骤 9：子任务 1302302

废弃$HIDDEN

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
      "PAINLIBBLDK": "QUEST_CONTENT_ENTER_MY_WORLD_SCENE",
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


### 步骤 99：子任务 1302301

废弃$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1079,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE",
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
