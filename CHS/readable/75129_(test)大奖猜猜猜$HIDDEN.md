# 75129 (test)大奖猜猜猜$HIDDEN

(test)大奖猜猜猜$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **任务奖励**：
  - 冒险阅历×250，原石×30，摩拉×20000，大英雄的经验×2，精锻用魔矿×3

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7512901

(test)涂了某一个石块$HIDDEN

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
      "PPFLKMOMKAI": "Q7512901"
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
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 2：子任务 7512902

(test)涂完石块后对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512902,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
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
      "21744"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512902

**起点节点 `751290201`**


**马穆勒：**哎呀，这位异邦来的客人！

**马穆勒：**真是所谓来得早不如来得巧啊，我今天才刚把这个摊子支起来，你们就来到这儿啦。

**马穆勒：**嘿，哼哼，运气真是不错！

**旅行者：**你运气是挺好的。

**马穆勒：**不不不，客人，我不是指我的运气好，而是指你们的运气好啊。

**派蒙：**我们的运气好？

**马穆勒：**是啊，可不是人人都有机会参与彩璧山历史悠久的传统挑战项目，「染绘石挑战」！

**马穆勒：**这可是传说中「烟谜主」的英雄，呃…瓦勒豪达肯留下来的试炼，旨在锻炼部族人民的记忆力和对色彩的感知能力。

**派蒙：**「烟谜主」有叫这样名字的英雄吗…

**马穆勒：**部族历史悠远流长，唉，你们这些外地人怎么能全部知道。

**旅行者：**可你不是「烟谜主」的人吧。

**马穆勒：**哎，哎，传承英雄试炼的使命，和我是什么部族的人又有什么关系，六大部族建立都这么多年啦，早该打开隔阂…咳咳。

**马穆勒：**总之，运气好的异邦旅人，不如听听「染绘石挑战」的规则吧，实不相瞒，我准备的奖励之丰厚，真是让我自己都觉得肉痛啊。

**派蒙：**真…真的吗？

**派蒙：**#虽然感觉还是有点可疑，不过我们就听听看吧…怎么样，{NICKNAME}？

**分支 1：**

  **旅行者：**我说不听你也会听的吧…

  **派蒙：**冒险家就不该放过任何一个拿奖励的机会嘛！

  **马穆勒：**那就让我这个英雄瓦勒肯的传人来跟你们介绍规则吧…

  **派蒙：**怎么感觉名字都不太一样了…

  **马穆勒：**不一样吗？一样吧。唉你们这些外地人就是记不清那些古老伟大英雄的名字，但这些都不重要，总之，规则是这样的…

  **马穆勒：**挑战开始的时候，我身边的暝视龙兄弟会在空台子上创造颜色不同的染色石块，不过很快，那些石块就会消失…

  **马穆勒：**而你们要做的，就是在各个台子前，对应的石块上，<color=#00E1FFFF>用蕴色幻写灵染上相应的颜色</color>，只要相同，即可通过关卡。

  **马穆勒：**其实是个考验记忆的游戏，怎么样，很简单吧。

  **旅行者：**听上去倒不是很难…

  **派蒙：**而且，我们有两个人呢，只不过记一些颜色…

  **马穆勒：**是啊是啊，哎呀，今天真是你们的幸运日，不过是我钱包的不幸运日咯。

  **马穆勒：**那么，如果要参加的话，一次五百摩拉，敬请参与。

  **派蒙：**什么，居然还要摩拉？

  **马穆勒：**这位小客人有所不知，一代一代传承纳塔英雄的试炼，本身也需要很多的开销…此间辛苦不足为外人道。

  **马穆勒：**更何况，比起最终的奖励来说，五百摩拉可真是少之又少，哎，更像是一个门槛，为了考察想要经历试炼的人诚心与否…

  **派蒙：**好吧好吧，唔…

  **派蒙：**#报名费我包了，{NICKNAME}，你可一定要赢啊！

  **马穆勒：**好好，那，两位，现在就开始吗？

**分支 2：**

  **旅行者：**那就让我看看是什么幸运事件…

  **派蒙：**嘿嘿，幸运事件这个词听上去真让人心潮澎湃。

  ↩ 合流到节点 `751290220`



#### 对话 7512944

**起点节点 `751294438`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！激动人心的「染绘石挑战」又迎来了新的挑战者！开始挑战吧！



#### 对话 7512945

**起点节点 `751294536`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。




### 步骤 4：子任务 7512904

(test)接取到猜猜猜任务$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512944,
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
        "133509399,2"
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


#### 对话 7512902

**起点节点 `751290201`**


**马穆勒：**哎呀，这位异邦来的客人！

**马穆勒：**真是所谓来得早不如来得巧啊，我今天才刚把这个摊子支起来，你们就来到这儿啦。

**马穆勒：**嘿，哼哼，运气真是不错！

**旅行者：**你运气是挺好的。

**马穆勒：**不不不，客人，我不是指我的运气好，而是指你们的运气好啊。

**派蒙：**我们的运气好？

**马穆勒：**是啊，可不是人人都有机会参与彩璧山历史悠久的传统挑战项目，「染绘石挑战」！

**马穆勒：**这可是传说中「烟谜主」的英雄，呃…瓦勒豪达肯留下来的试炼，旨在锻炼部族人民的记忆力和对色彩的感知能力。

**派蒙：**「烟谜主」有叫这样名字的英雄吗…

**马穆勒：**部族历史悠远流长，唉，你们这些外地人怎么能全部知道。

**旅行者：**可你不是「烟谜主」的人吧。

**马穆勒：**哎，哎，传承英雄试炼的使命，和我是什么部族的人又有什么关系，六大部族建立都这么多年啦，早该打开隔阂…咳咳。

**马穆勒：**总之，运气好的异邦旅人，不如听听「染绘石挑战」的规则吧，实不相瞒，我准备的奖励之丰厚，真是让我自己都觉得肉痛啊。

**派蒙：**真…真的吗？

**派蒙：**#虽然感觉还是有点可疑，不过我们就听听看吧…怎么样，{NICKNAME}？

**分支 1：**

  **旅行者：**我说不听你也会听的吧…

  **派蒙：**冒险家就不该放过任何一个拿奖励的机会嘛！

  **马穆勒：**那就让我这个英雄瓦勒肯的传人来跟你们介绍规则吧…

  **派蒙：**怎么感觉名字都不太一样了…

  **马穆勒：**不一样吗？一样吧。唉你们这些外地人就是记不清那些古老伟大英雄的名字，但这些都不重要，总之，规则是这样的…

  **马穆勒：**挑战开始的时候，我身边的暝视龙兄弟会在空台子上创造颜色不同的染色石块，不过很快，那些石块就会消失…

  **马穆勒：**而你们要做的，就是在各个台子前，对应的石块上，<color=#00E1FFFF>用蕴色幻写灵染上相应的颜色</color>，只要相同，即可通过关卡。

  **马穆勒：**其实是个考验记忆的游戏，怎么样，很简单吧。

  **旅行者：**听上去倒不是很难…

  **派蒙：**而且，我们有两个人呢，只不过记一些颜色…

  **马穆勒：**是啊是啊，哎呀，今天真是你们的幸运日，不过是我钱包的不幸运日咯。

  **马穆勒：**那么，如果要参加的话，一次五百摩拉，敬请参与。

  **派蒙：**什么，居然还要摩拉？

  **马穆勒：**这位小客人有所不知，一代一代传承纳塔英雄的试炼，本身也需要很多的开销…此间辛苦不足为外人道。

  **马穆勒：**更何况，比起最终的奖励来说，五百摩拉可真是少之又少，哎，更像是一个门槛，为了考察想要经历试炼的人诚心与否…

  **派蒙：**好吧好吧，唔…

  **派蒙：**#报名费我包了，{NICKNAME}，你可一定要赢啊！

  **马穆勒：**好好，那，两位，现在就开始吗？

**分支 2：**

  **旅行者：**那就让我看看是什么幸运事件…

  **派蒙：**嘿嘿，幸运事件这个词听上去真让人心潮澎湃。

  ↩ 合流到节点 `751290220`



#### 对话 7512944

**起点节点 `751294438`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！激动人心的「染绘石挑战」又迎来了新的挑战者！开始挑战吧！



#### 对话 7512945

**起点节点 `751294536`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。




### 步骤 5：子任务 7512905

(test)赢下全部奖励$HIDDEN

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
      "PPFLKMOMKAI": "Q7512905"
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
      "[3_9978:-1811.273,144.089,9587.890]",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7512905

**起点节点 `751290505`**


**旅行者：**完成了！

**马穆勒：**好，让我们看看结果如何！



#### 对话 7512907

**起点节点 `751290701`**


**马穆勒：**怎么样，客人，要进行「染绘石挑战」吗？还是说，您想再了解一下规则？



#### 对话 7512913

**起点节点 `751291303`**


**旅行者：**还没完成着色。

**马穆勒：**当然，不过，耗时越久，脑海中颜色印象也会淡去哦…



#### 对话 7512914

**起点节点 `751291409`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！那么，异邦的游者，了不起的客人，这次能够通过考验吗！请吧——！



#### 对话 7512915

**起点节点 `751291501`**


**马穆勒：**之前出现在题目里，那些石块的颜色…究竟是什么样的呢？

**马穆勒：**怎么样，准备好第一关的答案了吗？



#### 对话 7512916

**起点节点 `751291601`**


**马穆勒：**异邦来的客人真是聪慧又敏捷，这简简单单的第一关根本难不倒你们。

**马穆勒：**不过正如你们所见，离最后的奖励还有点距离。

**马穆勒：**怎么样，要继续吗，总之…嘿嘿，参加一次得五百摩拉。

**旅行者：**继续吧，报名费还有很多…

**马穆勒：**嘿嘿，五百摩拉！谢谢惠顾！

**马穆勒：**好好，那么，「染绘石挑战」的第二轮，更加困难的挑战，结局会如何呢？怎么样，现在就开始吗？



#### 对话 7512917

**起点节点 `751291701`**


**马穆勒：**怎么样，客人，要进行「染绘石挑战」的第二轮吗？还是说，您想再了解一下规则？



#### 对话 7512918

**起点节点 `751291801`**


**马穆勒：**哎呀，石头的数量似乎变多了，那些石块的颜色…究竟是什么样的呢？

**马穆勒：**怎么样，准备好第二关的答案了吗？



#### 对话 7512919

**起点节点 `751291901`**


**马穆勒：**需要记忆的颜色增加，但是将石头染上正确颜色的动作却没有一点迟疑！虽然来自异邦，可真是了不得的勇士。

**马穆勒：**哎呀，终于到了这个阶段…只要答对最后一题，通过最后的关卡，啊，最终的试炼，那奖励就是你的了！

**马穆勒：**怎么样，要继续吗！

**旅行者：**这是五百摩拉…

**马穆勒：**正是如此，收到了，五百摩拉！谢谢惠顾！

**马穆勒：**「染绘石挑战」的第三轮，异邦的客人，对战最终的考验，真是让人热血沸腾！怎么样，现在就开始吗？



#### 对话 7512920

**起点节点 `751292001`**


**马穆勒：**怎么样，客人，要进行「染绘石挑战」的第三轮吗？还是说，您想再了解一下规则？



#### 对话 7512921

**起点节点 `751292101`**


**马穆勒：**哈哈，最终的试炼，有的时候，最危险的反而是最接近胜利的时刻呢…

**马穆勒：**怎么样，准备好最后一关的答案了吗？



#### 对话 7512922

**起点节点 `751292207`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。



#### 对话 7512925

**起点节点 `751292505`**


**旅行者：**完成了！

**马穆勒：**好，让我们看看结果如何！



#### 对话 7512927

**起点节点 `751292703`**


**旅行者：**还没完成着色。

**马穆勒：**当然，不过，耗时越久，脑海中颜色印象也会淡去哦…



#### 对话 7512928

**起点节点 `751292809`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！那么，异邦的游者，了不起的客人，这次能够通过考验吗！请吧——！



#### 对话 7512929

**起点节点 `751292907`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。



#### 对话 7512930

**起点节点 `751293005`**


**旅行者：**完成了！

**马穆勒：**好，让我们看看结果如何！



#### 对话 7512931

**起点节点 `751293103`**


**旅行者：**还没完成着色。

**马穆勒：**当然，不过，耗时越久，脑海中颜色印象也会淡去哦…



#### 对话 7512936

**起点节点 `751293608`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！激动人心的「染绘石挑战」又迎来了新的挑战者！开始挑战吧！



#### 对话 7512937

**起点节点 `751293706`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。



#### 对话 7512938

**起点节点 `751293808`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！那么，异邦的游者，了不起的客人，这次能够通过考验吗！请吧——！



#### 对话 7512939

**起点节点 `751293906`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。



#### 对话 7512940

**起点节点 `751294008`**


**旅行者：**现在开始吧。

**马穆勒：**好嘞！真是激动人心啊！那么，异邦的游者，了不起的客人，这次能够通过考验吗！请吧——！



#### 对话 7512941

**起点节点 `751294106`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。



#### 对话 7512947

**起点节点 `751294702`**


**旅行者：**听听规则？

**马穆勒：**嗯…不管在做什么事之前，了解规则永远是最重要的，哎，客人您听好了，「染绘石挑战」的规则是这样的：

**马穆勒：**挑战开始的时候，我身边的暝视龙兄弟会在空台子上创造颜色不同的染色石块，不过很快，那些石块就会消失…

**马穆勒：**而你们要做的，就是在各个台子前，对应的石块上，<color=#00E1FFFF>用蕴色幻写灵染上相应的颜色</color>，只要相同，即可通过关卡。




### 步骤 6：子任务 7512906

(test)与骗子对话（骗子耍赖）$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512906,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
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
      "21744"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512906

**起点节点 `751290601`**


**马穆勒：**真是可惜啊，异邦的客人，这次只差一点…

**派蒙：**不对不对，我记得明明我们答案就是对的啊！

**马穆勒：**哎呀，回答错误的人都会以为自己回答的答案是正确的，这很正常，最后的试炼和之前的试炼难度确实不太一样…

**马穆勒：**「明明是最后的试炼，可是看上去还是很简单嘛…」

**马穆勒：**这位会飞的小客人，你扪心自问，真的没有这样想过吗…

**派蒙：**啊，嗯…倒确实也有这样的想法啦…

**马穆勒：**所以说呀，这可是英雄的试炼，可没有办法这么简单就能够让你轻易过关呢。

**马穆勒：**不过没关系，就让你们再免费尝试一次吧！

**马穆勒：**这样你就明白了…最终试炼的难度啦！

**派蒙：**真的吗？这次不用摩拉。

**派蒙：**既、既然是免费的，就让我们再试一试吧…

**分支 1：**

  **旅行者：**免费的才是最贵的…

  **派蒙：**倒也不能这么说啦，总之试一试总没错！

  **马穆勒：**那么，最终的试炼，但是第二次，两位，现在要开始吗？

  **旅行者：**现在开始吧。

  **马穆勒：**哼哼，那么，这次就请一定要小心了哦。

**分支 2：**

  **旅行者：**既然是免费的那就…

  **派蒙：**对对，反正都是免费的嘛！

  ↩ 合流到节点 `751290616`




### 步骤 7：子任务 7512907

(test)赢下最后的奖励$HIDDEN

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
      "PPFLKMOMKAI": "Q7512907"
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
      "[3_9978:-1811.273,144.089,9587.890]",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 8：子任务 7512913

(test)灵视龙偷偷说话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512903,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
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


#### 对话 7512903

**起点节点 `751290301`**


**疲惫的暝视龙：**(test)咕咕——

**派蒙：**(test)它好像想说什么的样子

**旅行者：**(test)让人有些在意




### 步骤 9：子任务 7512908

(test)寻找赢下奖励的方法$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512908,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512904,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
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
      "21745"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512904

**起点节点 `751290401`**


**疲惫的暝视龙：**那两个异邦的客人什么时候才能发现，这个试炼就是个骗局…

**疲惫的暝视龙：**唉…唉…都这么多次了，这个叫马穆勒的骗子，利用我骗了好多人…

**疲惫的暝视龙：**可是我的孩子被关在了那里，如果能把它救出来的话…

**旅行者：**门已被打开了…

**疲惫的暝视龙：**是吗…是什么时候，咦，难道是那两位异邦人刚才靠近的时候…

**疲惫的暝视龙：**好，我知道该怎么做了，哼，欺骗他人的骗子，就该受到应有的惩罚！

**疲惫的暝视龙：**哼，继续那个游戏吧，这次我会让那个狡猾的部落骗子一败涂地！



#### 对话 7512908

**起点节点 `751290801`**


**疲惫的暝视龙：**那两个异邦的客人什么时候才能发现，这个试炼就是个骗局…

**疲惫的暝视龙：**唉…唉…都这么多次了，这个叫马穆勒的骗子，利用我骗了好多人…

**疲惫的暝视龙：**可是我的孩子被关在了那里，如果能把它救出来的话…



#### 对话 7512909

**起点节点 `751290901`**


**疲惫的暝视龙：**要小心…这个部族人很狡猾，唉…




### 步骤 10：子任务 7512909

(test)救出小灵视龙$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133509415,
        415010
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
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
      "[3_9979:-1803.880,144.036,9582.383]",
      "20"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7512908

**起点节点 `751290801`**


**疲惫的暝视龙：**那两个异邦的客人什么时候才能发现，这个试炼就是个骗局…

**疲惫的暝视龙：**唉…唉…都这么多次了，这个叫马穆勒的骗子，利用我骗了好多人…

**疲惫的暝视龙：**可是我的孩子被关在了那里，如果能把它救出来的话…




### 步骤 11：子任务 7512910

(test)和小灵视龙对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512910,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
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
      "21746"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512910

**起点节点 `751291001`**


**被困的幼暝视龙：**(test)和小灵视龙对话




### 步骤 12：子任务 7512903

(test)向灵视龙回报$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512901,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133509415,
        415011
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
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
      "21745"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512901

**起点节点 `751290101`**


**疲惫的暝视龙：**唉，我的孩子啊，被关在那里的孩子…

**疲惫的暝视龙：**可是我的孩子被关在了那里，如果能把它救出来的话…

**旅行者：**门已被打开了…

**疲惫的暝视龙：**咦，难道是刚才两位异邦的客人…啊，真是感谢。

**疲惫的暝视龙：**好，我知道该怎么做了，哼，欺骗他人的骗子，就该受到应有的惩罚！

**疲惫的暝视龙：**哼，继续那个游戏吧，这次我会让那个狡猾的部落骗子一败涂地！




### 步骤 13：子任务 7512911

(test)继续完成猜奖$HIDDEN

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
      "PPFLKMOMKAI": "Q7512911"
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
      "[3_9978:-1811.273,144.089,9587.890]",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7512924

**起点节点 `751292401`**


**马穆勒：**哈哈，最终的试炼，有的时候，最危险的反而是最接近胜利的时刻呢…

**马穆勒：**怎么样，准备好最后一关的答案了吗？



#### 对话 7512926

**起点节点 `751292601`**


**马穆勒：**看似能够立刻得到，却无论如何也都得不到，实在是可惜。

**马穆勒：**但这也是英雄试炼的一部分，怎么样，异邦的客人，要继续进行挑战吗…

**马穆勒：**不过，每次五百摩拉，这可不要忘了。



#### 对话 7512932

**起点节点 `751293203`**


**旅行者：**还没完成着色。

**马穆勒：**当然，不过，耗时越久，脑海中颜色印象也会淡去哦…



#### 对话 7512933

**起点节点 `751293305`**


**旅行者：**完成了！

**马穆勒：**好，让我们看看结果如何！



#### 对话 7512934

**起点节点 `751293406`**


**旅行者：**现在开始吧。

**马穆勒：**哼哼，那么，这次就请一定要小心了哦。



#### 对话 7512935

**起点节点 `751293504`**


**旅行者：**让我准备一下。

**马穆勒：**好的，客人，如果您准备好了，请随时跟我说。




### 步骤 14：子任务 7512912

(test)与部落骗子对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512912,
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
        "133509399,7"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_REFRESH_GROUP_SUITE"
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
      "21744"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512912

**起点节点 `751291201`**


**马穆勒：**可恶，你这只该死的暝视龙，你…你难道不担心你的孩子了吗？

**疲惫的暝视龙：**咕呀——！

**派蒙：**哼，我们刚才就发现有猫腻，已经把小暝视龙救出来啦！

**旅行者：**原来是诈骗的试炼啊…

**马穆勒：**我还以为异邦来的是来了两只肥羊，没想到居然来了两个不知好歹的掀摊子的！

**疲惫的暝视龙：**咕呀——！

**马穆勒：**好好好，我、我错了，我有罪！

**旅行者：**快把钱还来！

**派蒙：**对啊，一次五百摩拉，骗我骗了那么多次！

**马穆勒：**好、好，哎呀两位，这些收好，这样就行了吧。

**疲惫的暝视龙：**咕呀——！

**马穆勒：**哎呀，龙…大哥？大姐？哎，有话好好说！

**马穆勒：**您看您家孩子，我给了它一个安全的环境，还有吃有喝的…您这可就有点恩将仇报了啊！

**派蒙：**到了这个时候你还嘴硬！

**疲惫的暝视龙：**呀！

**马穆勒：**不、不要！

**[黑屏]** 只见暝视龙扇动自己身前的覆羽，冰冷的空气环绕着将小龙拘禁的骗子。\n很快，名为马穆勒的骗子就在龙的利爪下慌忙逃走了…

**[黑屏]** 那之后，暝视龙向你们躬身道谢，然后就带着小暝视龙离开了。

**派蒙：**哼，这家伙，一次一次的骗了我好多摩拉！

**派蒙：**真是活该！


