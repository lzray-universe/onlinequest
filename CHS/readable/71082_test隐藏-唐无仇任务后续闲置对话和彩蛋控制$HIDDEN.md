# 71082 test隐藏-唐无仇任务后续闲置对话和彩蛋控制$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：71063

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7108201

test隐藏-在完成唐无仇任务后，控制唐无仇的闲置对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GAME_TIME_TICK",
      "PPFLKMOMKAI": "0,24"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7105707,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7105708,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7105709,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133106616,2"
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


#### 对话 7108201

**起点节点 `710820101`**


**自称「唐无仇」者：**嗯？怎么了，难道你又被老臭的挖宝玩法坑了？

**自称「唐无仇」者：**我都说了，他那个挖宝，<color=#00E1FFFF>越是好东西，周围炸药桶就越多。东西越差，周围就越安全。</color>

**自称「唐无仇」者：**这次记住了吧。




### 步骤 2：子任务 7108202

test隐藏-老何唐无仇历史性会晤$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7108202,
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
        "71082",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133106616"
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


#### 对话 7108202

**起点节点 `710820201`**


**老何：**你这盗宝团余孽，呼呼…要不是我最近没能吃蘑菇，全身不得劲…

**老何：**我早就把你打得生活不能自理了！

**自称「唐无仇」者：**你这老贼，上来指着我种的琉璃…我种的清心，说是蘑菇，摘了就往嘴里送！

**自称「唐无仇」者：**咳咳…哪有，哪有这样的道理。

**派蒙：**啊，老何，大侠，你们怎么打起来了？

**老何：**我、我在寻找蘑菇肉，蘑菇肉。但是他们不让我再下矿，所以我就找到这里来了。

**老何：**我好不容易发现这里种着蘑菇啊，刚伸手，这人就打过来了！

**自称「唐无仇」者：**#他竟敢冒犯我古华派传人的修炼之地，这花除了我，还有英雄{NICKNAME}…

**派蒙：**还有英雄派蒙。

**自称「唐无仇」者：**还有英雄派蒙，除了我们三位之外，岂能容他人染指。

**老何：**盗宝团余孽！

**自称「唐无仇」者：**老贼！

**派蒙：**好了好了，老何，唐无仇已经金盆洗手，不干盗宝团的事啦，而且他种的是花，也不是蘑菇。

**老何：**嗯？是嘛…

**派蒙：**你仔细看，这不是清心嘛…

**老何：**欸，好像还真的是清心啊，看来头还是有点晕…

**派蒙：**还有唐无仇，你还想着要开什么琉璃百合大花园嘛。

**自称「唐无仇」者：**哎呀，在这里，要有一大片琉璃百合大花园，不也是一番美景嘛…

**派蒙：**不要再打了。

**老何：**唉，没有蘑菇，走了走了。

**自称「唐无仇」者：**这闹事的老头终于走了，这下我终于可以认真研究研究种花的事…


