# 75058 (test)废弃$UNRELEASED$HIDDEN

(test)废弃$UNRELEASED$HIDDEN


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7505801

(test)触碰龙铭刻$UNRELEASED$HIDDEN

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
      "PPFLKMOMKAI": "Q7505801"
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


### 步骤 2：子任务 7505802

(test)关卡对话演出$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7500121,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7505801,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
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


#### 对话 7505801

**起点节点 `750580101`**


**TALK_ROLE_NONE：**(test)台词文本$UNRELEASED



#### 对话 7505802

**起点节点 `750013301`**


**派蒙：**奇怪，为什么那些金色花纹同样都已经飘过去了…在这里的柱子底下却没有出现「镌光铭印」？

**蒂图：**说明这里的「镌光铭印」不仅被挤压出来，还变得不完整了…这下可麻烦了，还得找到分散在他处的「镌光铭印」。

**派蒙：**所以那个分散在其他地方的「镌光铭印」在哪里？

**蒂图：**…我也不知道。

**派蒙：**欸…

**蒂图：**虽然分散，但是毕竟仍然是受到力量的约束，所以应该就在附近才对，或许需要找找…

**#{REALNAME[ID(2)|SHOWHOST(true)]}：**呀，呀！

**派蒙：**#怎么了，你想去那边？现在{NICKNAME}和我们有更重要的事要做，待会儿再陪你玩好不好…

**#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯…呀！呀！

**旅行者：**意思是，铭印在那边吗？

**#{REALNAME[ID(2)|SHOWHOST(true)]}：**呀！

**蒂图：**哎呀，听说就算到了现在，也有龙能够感应「镌光铭印」的力量，以前一直以为是传言，没想到也许是真的？

**蒂图：**#果然{REALNAME[ID(2)|SHOWHOST(true)]}不是一只普通的小嵴锋龙啊。

**派蒙：**原来你还有这种本事呀，哼，不过比起我这个向导，还是有不小的差距的。

**#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯？

**分支 1：**

  **旅行者：**派蒙在嫉妒你哦。

  **派蒙：**哪有，我的心胸可比看上去宽广多了！这、这只是我夸奖的一种方式啦！

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯…嗯？

  **派蒙：**唉，这个小家伙根本没听懂嘛，真是的，如果能再聪明一点就好了…

  **旅行者：**总有它能够听懂的时刻的…

  **蒂图：**是啊，而且部族里负责看顾龙的人们都说，想要和龙达成情感上的互通，是要花上很长很长时间的事。

  **蒂图：**而能跟龙打成一片的秘诀是：耐心与持续不断地交流。不管是人想去理解龙，还是龙想要理解人，都需要…需要很长的时间哦。

  **派蒙：**#是呢…就像刚才我也没有意识到{REALNAME[ID(2)|SHOWHOST(true)]}想要向我们说什么一样呢。

  **派蒙：**#对不起哦，{REALNAME[ID(2)|SHOWHOST(true)]}。

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯，呀！

  **派蒙：**你这倒是应得很快！

  **派蒙：**好啦，那就朝着你刚才想去的地方，去找找看有没有那种金色花纹吧。

**分支 2：**

  **旅行者：**派蒙在夸奖你啦！

  **派蒙：**是夸奖没错，不过一定不能因此骄傲自大…

  ↩ 合流到节点 `750013320`


