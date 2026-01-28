# 75080 (test)小恐龙花田后续$HIDDEN

(test)第二天刷出燃素大王花$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75036

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7508001

(test)小恐龙花田完成$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        75036,
        1
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TIME_VAR_PASS_DAY",
      "PPFLKMOMKAI": "1"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133504216,2"
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

（此步骤无对话）


### 步骤 2：子任务 7508002

(test)在小恐龙花田对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7508001,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7508002,
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
        "133504216"
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


#### 对话 7508001

**起点节点 `750800101`**


**派蒙：**哇，好漂亮的花…

**分支 1：**

  **旅行者：**怎么有些眼熟？

  **派蒙：**啊！是当时注入燃素的种子，没想到原来是烬芯花的种子，难怪之前没有发芽，一定是因为燃素不够。

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**呀！

  **派蒙：**#{REALNAME[ID(2)|SHOWHOST(true)]}，这是你种下的花哦，没想到那枚种子不但没有死，还好好地开放了！

  **旅行者：**居然不是骗骗花…

  **派蒙：**别惦记你的骗骗花啦。

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**呀…呀！

  **派蒙：**#嘿嘿，{REALNAME[ID(2)|SHOWHOST(true)]}好开心呢。

  **派蒙：**你呀！你也一定要像种子那样长大，要变成了不起的龙哦！

**分支 2：**

  **旅行者：**#是{REALNAME[ID(2)|SHOWHOST(true)]}种下的种子…？

  ↩ 合流到节点 `750800104`



#### 对话 7508002

**起点节点 `750800201`**


**派蒙：**哇，好漂亮的花…

**分支 1：**

  **旅行者：**怎么有些眼熟？

  **派蒙：**啊…原来是那个时候埋下的啊。

  **派蒙：**#嘿嘿，就像当时种下的种子已经变成漂亮的烬芯花那样，{REALNAME[ID(2)|SHOWHOST(true)]}也成为了不起的大龙了。

  **派蒙：**不知道它现在又在哪里，在干什么呢…

**分支 2：**

  **旅行者：**#是当时{REALNAME[ID(2)|SHOWHOST(true)]}种下的种子…？

  ↩ 合流到节点 `750800204`


