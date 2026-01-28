# 75194 (test)父任务 1$HIDDEN

(test)父任务 1$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75000

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7519405

(test)隐藏任务,用于接一个默认对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7519409,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "7519401"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "0"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_EXIT_VEHICLE"
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


#### 对话 7519409

**起点节点 `751940901`**


**库蕾玛娜：**这可怎么办，已经没钱雇帮工了…而且，火山那边经费也不够用了，得想个办法…




### 步骤 2：子任务 7519401

(test)靠近,自动触发和NPC对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7519401,
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
        "133515117"
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
      "6459"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7519401

**起点节点 `751940101`**


**库蕾玛娜：**等一下，等一下，这是商品，不买别碰啊！欸…你，对黄头发那位，就是你，别着急走，让我再看看你。

**库蕾玛娜：**唔——果然如此，有如太阳般耀眼的头发，有如夜神之国般深邃的双目…我估计，不，我笃定，你将来会成为不得了的人物。

**库蕾玛娜：**来来来，我这里有一组奇妙的玉饰，里面蕴含着各种各样不同的旋律，正巧配得上你这样的大英雄！

**库蕾玛娜：**不过，这可是无价之宝。一般人来买，我起码开价一千多万摩拉。但我看你与这些玉饰有缘，就给你打个一折，如何？

**派蒙：**哇，一折！那岂不是大甩卖嘛！等等…那不还要一百多万摩拉嘛！这也太贵了吧！

**库蕾玛娜：**哎呀，没办法。这已经是成本价了，毕竟我们这种小商小贩也不容易嘛…

**分支 1：**

  **旅行者：**经费可不应该这么挣哦。

  **库蕾玛娜：**原来您都听到了啊。啊哈哈，你看我这喜欢自言自语的毛病啊…

  **库蕾玛娜：**唉——既然都被发现了，我就实话实说了。这玉帛是我捡来的，也确实不值这个价格。

  **库蕾玛娜：**但我也没办法，如您所听到的，我们很缺经费，缺到连雇佣人回收水上浮标数据的辛苦费都凑不出来。

  **派蒙：**那就不回收了嘛，总比骗人好吧！

  **库蕾玛娜：**不行啊…对于别的组织来说，缺经费无非就是不活动了，但我们的组织还肩负着观察火山的志愿任务。

  **库蕾玛娜：**我们投放浮标也是为了通过收集水温等数据，来检测火山的活动情况。

  **库蕾玛娜：**眼下火山的活动越来越活跃，浮标的回收也必须加紧，不然可能会出大问题。

  **库蕾玛娜：**要不是我受过伤，根本破坏不了浮标，更不要提回收里面的数据…

  **派蒙：**#{NICKNAME}，你说我们要不帮帮她吧？毕竟火山的事情，跟大家的安危有关，我们总不能视而不见吧…

  **库蕾玛娜：**真、真的？如果你们愿意帮我的话，这些玉帛我就免费送你们了！就当成你们的报酬，如何？

  **分支 1：**

    **旅行者：**不是说有一百万吗…

    **库蕾玛娜：**你放心，虽然没有特别多，但除了玉帛之外，一定还会有额外的报酬的。

    **派蒙：**嘿嘿，只要玉帛也足够啦！毕竟这次是为了在火山旁边的大家嘛！总而言之，你就放心交给我们吧。

    **分支 1：**

      **旅行者：**现在就开始吧。

    **分支 2：**

      **旅行者：**需要准备一下。

      **库蕾玛娜：**嗯嗯，我这边随时都可以开始。

  **分支 2：**

    **旅行者：**啊…原来只有玉帛呀？

    ↩ 合流到节点 `751940121`

**分支 2：**

  **旅行者：**什么帮工值一百万摩拉啊？

  ↩ 合流到节点 `751940109`




### 步骤 3：子任务 7519402

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        1
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_VAR_EQUAL",
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
      "6459"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7519406

**起点节点 `751940601`**


**库蕾玛娜：**如何，准备好了吗？



#### 对话 7519407

**起点节点 `751940701`**


**旅行者：**那就来试试吧。



#### 对话 7519408

**起点节点 `751940801`**


**旅行者：**等会再说。

**库蕾玛娜：**嗯嗯，我这边随时都可以开始。




### 步骤 4：子任务 7519403

(test)挑战期间$HIDDEN

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
      "PPFLKMOMKAI": "7519403finish"
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
      "PPFLKMOMKAI": "7519403fail"
    }
  ],
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
      "06Walk01",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 7519404

(test)挑战胜利表演$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7519404,
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
        "133515117"
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
      "6459"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7519404

**起点节点 `751940401`**


**库蕾玛娜：**呼…太好了，从结果上来看，火山的情况并没有预想中的那么糟，这下大家能睡个好觉了…

**库蕾玛娜：**这还得多谢你们，要不是你们不计前嫌出手相助，想来这件事也不会这么顺利。

**库蕾玛娜：**请你们务必收下这份报酬，这算是我个人的赔罪和感谢！

**旅行者：**嘿嘿，既然你这么说，那我们就恭敬不如从命啦！

**旅行者：**你接下来准备怎么办…

**库蕾玛娜：**我手里还有一些积压的货物，只要运作一番经费自然就有啦。

**库蕾玛娜：**哈哈，当然啦，这次没有什么紧急情况，所以会诚信经商的，你们放心好啦。



#### 对话 7519405

**起点节点 `751940501`**


**库蕾玛娜：**一十、二十…卖了这么多钱，最近的经费应该是足够了…

**分支 1：**

  **旅行者：**不再多挣点了？

  **库蕾玛娜：**哈哈，不挣啦，见好就收！要不是你不计较我的小心思，帮了我一把，我恐怕早就因为那几块玉惹上大麻烦啦。

  **库蕾玛娜：**再说了，每天只盯着钱很没意思的，对我而言挣钱只是爱好，观察火山才是生活。

  **库蕾玛娜：**钱没了可以再挣，可万一因为我们这帮人的疏忽，导致对火山喷发没有预警，那可就得不偿失了…

  **旅行者：**「话事处」不给你们经费吗？

  **库蕾玛娜：**我们没去申请。毕竟，平时的各种事务已经足够让「话事处」和首领们焦头烂额了，怎么能这个时候再去给他们增添负担呢？

  **库蕾玛娜：**而我和我的旅伴就不一样了。平时，我们这群人也是一边各处旅行一边赚旅费的，早就习惯了这种生活了。

  **库蕾玛娜：**在旅行中顺便观察一下火山也不是什么难事，就像你们经常顺手帮助一些有困难的人一样，轻轻松松啦！

**分支 2：**

  **旅行者：**再见。

  **库蕾玛娜：**慢走慢走，嘿嘿，有缘再见啊！


