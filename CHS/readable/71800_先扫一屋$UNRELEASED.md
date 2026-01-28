# 71800 先扫一屋$UNRELEASED

萍姥姥想要再仔细打扫一下自己的壶。她正在为此寻找愿意帮忙的人…$UNRELEASED


---
## 任务信息

- **任务类型**：WQ
- **任务奖励**：
  - 冒险阅历×100，摩拉×50000，大英雄的经验×5，琉璃百合×2

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7180001

与萍姥姥对话$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7180005,
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
      "2093"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 2：子任务 7180002

触碰萍姥姥的壶$UNRELEASED

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7180004,
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
      "Q101402Pot"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7180002

**起点节点 `718000201`**


**萍姥姥：**唔…这壶里是不是还有积水…$UNRELEASED

**萍姥姥：**这样可不好泡茶啊…$UNRELEASED



#### 对话 7180004

**起点节点 `718000401`**


**触碰壶面：**看向壶口$UNRELEASED

**触碰壶面：**进入大壶啦$UNRELEASED




### 步骤 3：子任务 7180003

(test)壶外-进入壶中天$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1104,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FAIL_DUNGEON",
      "PPFLKMOMKAI": ""
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 4：子任务 7180004

(test)壶内-到达壶中天最上层$UNRELEASED$HIDDEN

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
      "PPFLKMOMKAI": "7180004"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1104,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FAIL_DUNGEON",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "1053",
        "201053016"
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
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 7180005

(test)壶内-退出前的开车$UNRELEASED$HIDDEN

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
      "PPFLKMOMKAI": "7180005"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1104,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FAIL_DUNGEON",
      "PPFLKMOMKAI": ""
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 6：子任务 7180007

(test)壶内-地城失败$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        7180003,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "7180007"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        1104,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FAIL_DUNGEON",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7180002",
        "191"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
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


### 步骤 7：子任务 7180006

与萍姥姥对话$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7180003,
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
      "2093"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7180003

**起点节点 `718000301`**


**萍姥姥：**哎呀，还真的荡出来了…$UNRELEASED

**分支 1：**

  **旅行者：**婆婆，我衣服都湿透了…$UNRELEASED

  **萍姥姥：**对不住啊孩子们，是我考虑少了，唉，我还以为没蓄多少水呢。$UNRELEASED

  **萍姥姥：**不过，这壶大体上应该也弄干净了，剩下的那些边边角角，就慢慢打扫吧。$UNRELEASED

  **派蒙：**婆婆，您是把整条碧水河的水都装进去了吗…$UNRELEASED

  **萍姥姥：**你这孩子，怎么可能，这城里的人还得用水呢…我就只装了半条河的水而已。$UNRELEASED

  **萍姥姥：**好了孩子们，这次让你们遭罪了。这些东西拿着，辛苦你们啦。$UNRELEASED

  **萍姥姥：**对了，我还得找个时间，把这壶里的水倒回河里去…$UNRELEASED

**分支 2：**

  **旅行者：**里面应该也打扫干净了。$UNRELEASED

  **萍姥姥：**唔，但还有些边边角角，得进去细致打扫啊。$UNRELEASED

  ↩ 合流到节点 `718000307`


