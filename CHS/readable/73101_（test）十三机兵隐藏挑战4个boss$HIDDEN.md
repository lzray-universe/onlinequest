# 73101 （test）十三机兵隐藏挑战4个boss$HIDDEN

（test）打4个等级的boss$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：73077

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7310109

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GAME_TIME_TICK",
      "PPFLKMOMKAI": "0,24"
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


### 步骤 2：子任务 7310101

（test）与兰那罗对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310102,
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


#### 对话 7310101

**起点节点 `731010101`**


**兰提沙：**#啊呀，那菈{NICKNAME}，怎么样，你也要来试试看在梦中与「大方方铁块」进行战斗吗？

**兰提沙：**我们要一层层解开我们对「大方方铁块」使用的兰迦拉梨，最后，跟不受兰迦拉梨压制的「大方方铁块」战斗…

**兰提沙：**所以，这次兰提沙不会帮你压制「大方方铁块」，不过没关系，兰沙陀，兰耶多和兰沙诃还会帮忙，要试试吗？



#### 对话 7310102

**起点节点 `731010201`**


**旅行者：**没问题。

**兰提沙：**那就开始吧！



#### 对话 7310103

**起点节点 `731010301`**


**旅行者：**稍等，我做点准备。

**兰提沙：**#啊呀，那菈{NICKNAME}准备好了，就跟兰提沙说…



#### 对话 7310113

**起点节点 `731011301`**


**兰耶多：**#是那菈{NICKNAME}！如你所见，我们在进行挑战「大方方铁块」的修炼…

**兰耶多：**#我们想要一层层解开兰迦拉梨，和逐渐变强的「大方方铁块」战斗，如果那菈{NICKNAME}也想加入的话，就和兰提沙说吧！



#### 对话 7310114

**起点节点 `731011401`**


**兰沙陀：**逐渐积累，潺潺溪流也变成宽广大河…所以，要一点一点挑战更强的「大方方铁块」…

**兰沙陀：**#那菈{NICKNAME}也要进行挑战的修炼吗，那就先从兰提沙那儿开始吧…



#### 对话 7310115

**起点节点 `731011501`**


**兰沙诃：**…自己的力量，才是真正的力量。




### 步骤 3：子任务 7310102

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301176,
        176002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310102_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "0",
        "1",
        "7310102"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 4：子任务 7310103

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310105,
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


#### 对话 7310104

**起点节点 `731010401`**


**兰耶多：**#那菈{NICKNAME}，和故事里那菈法留纳一样英勇！

**兰耶多：**这次，我和兰提沙不会帮你压制「大方方铁块」，更接近故事里的「大方方铁块」了，不过没关系，兰沙陀和兰沙诃会帮你的！

**兰耶多：**#怎么样，那菈{NICKNAME}，可以吗？



#### 对话 7310105

**起点节点 `731010501`**


**旅行者：**没问题。

**兰耶多：**#嗯，如果是那菈{NICKNAME}的话，肯定可以的！



#### 对话 7310106

**起点节点 `731010601`**


**旅行者：**我先做点准备。

**兰耶多：**嗯…想挑战的时候，和我说！



#### 对话 7310116

**起点节点 `731011601`**


**兰沙陀：**#那菈{NICKNAME}，真像不断向前奔腾的河流…不要停下，去兰耶多那里，挑战更厉害的「大方方铁块」吧。



#### 对话 7310117

**起点节点 `731011701`**


**兰沙诃：**那菈，修炼，要找兰耶多…




### 步骤 5：子任务 7310104

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301178,
        178003
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310104_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "1",
        "1",
        "7310104"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 6：子任务 7310105

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310108,
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


#### 对话 7310107

**起点节点 `731010701`**


**兰沙陀：**#嗯…不断磨炼，即如水滴也能穿透石心，那菈{NICKNAME}，你也要来进行修炼了吗…

**兰沙陀：**不过，我，兰提沙，兰耶多，这次都不会压制「大方方铁块」的力量，虽然只是梦境中幻想之物，但也非常可怕，要试试吗？



#### 对话 7310108

**起点节点 `731010801`**


**旅行者：**开始吧。

**兰沙陀：**请一定要小心。



#### 对话 7310109

**起点节点 `731010901`**


**旅行者：**稍等，我做点准备。

**兰沙陀：**面对强敌，确实需要做好准备…准备就绪，再开始战斗吧…



#### 对话 7310118

**起点节点 `731011801`**


**兰沙诃：**让兰沙陀解开兰迦拉梨，「大方方铁块」更厉害…

**兰沙诃：**但我会帮那菈…




### 步骤 7：子任务 7310106

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301179,
        179002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310106_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "2",
        "1",
        "7310106"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 8：子任务 7310107

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310111,
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


#### 对话 7310110

**起点节点 `731011001`**


**兰沙诃：**#…那菈{NICKNAME}。

**兰沙诃：**…我们不帮你压制「大方方铁块」，只依靠自己，可以吗？



#### 对话 7310111

**起点节点 `731011101`**


**旅行者：**没问题的！

**兰沙诃：**…嗯，小心。



#### 对话 7310112

**起点节点 `731011201`**


**旅行者：**稍等，我做点准备。

**兰沙诃：**嗯，我等那菈。




### 步骤 9：子任务 7310108

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301180,
        180003
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310108_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "1",
        "7310108"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 10：子任务 7310110

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GAME_TIME_TICK",
      "PPFLKMOMKAI": "0,24"
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


### 步骤 11：子任务 7310111

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310120,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310123,
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


#### 对话 7310119

**起点节点 `731011901`**


**兰提沙：**#欸嘿嘿，没有兰提沙的帮助，那菈{NICKNAME}也打倒了「大方方铁块」，真厉害！

**兰提沙：**#那菈{NICKNAME}可以试试更强的「大方方铁块」，兰提沙觉得，那菈{NICKNAME}一定没问题的…

**兰提沙：**#还是说，那菈{NICKNAME}要再次试试只解开一层兰迦拉梨的「大方方铁块」？



#### 对话 7310120

**起点节点 `731012001`**


**旅行者：**可以。

**兰提沙：**啊呀，那就开始吧！



#### 对话 7310121

**起点节点 `731012101`**


**旅行者：**暂时不用了。

**兰提沙：**#嗯，要是那菈{NICKNAME}想要与只解开一层兰迦拉梨的「大方方铁块」战斗，就来找兰提沙吧…



#### 对话 7310122

**起点节点 `731012201`**


**兰提沙：**#…啊呀，那菈{NICKNAME}，没有关系，只要不断尝试和修炼，总能成功的。

**兰提沙：**再试试，和只解开一层兰迦拉梨压制的「大方方铁块」战斗吧！



#### 对话 7310123

**起点节点 `731012301`**


**旅行者：**再挑战一次。

**兰提沙：**#那就开始吧，相信那菈{NICKNAME}能成功的！



#### 对话 7310124

**起点节点 `731012401`**


**旅行者：**下次再说吧…

**兰提沙：**#要是那菈{NICKNAME}想要再挑战的话，就和兰提沙说哦…




### 步骤 12：子任务 7310112

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301181,
        181002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310112_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ANY_MANUAL_TRANSPORT",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7310110"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "0",
        "1",
        "73101"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 13：子任务 7310113

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310126,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310129,
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


#### 对话 7310125

**起点节点 `731012501`**


**兰耶多：**#那菈{NICKNAME}，果然好厉害。如果是那菈{NICKNAME}的话，故事里那么强的「大方方铁块」肯定也能打倒！

**兰耶多：**#如果那菈{NICKNAME}，想再和解开两层兰迦拉梨的「大方方铁块」战斗，可以来找我啦。

**兰耶多：**要再战斗一次吗？



#### 对话 7310126

**起点节点 `731012601`**


**旅行者：**再来一次！

**兰耶多：**#真好，又可以看到那菈{NICKNAME}战斗的样子了！



#### 对话 7310127

**起点节点 `731012701`**


**旅行者：**暂时不用了。

**兰耶多：**嗯，想再来一次的时候，和我说！



#### 对话 7310128

**起点节点 `731012801`**


**兰耶多：**#解开了两层兰迦拉梨的「大方方铁块」果然很厉害，但是那菈{NICKNAME}更厉害，一定能够打倒「大方方铁块」的。

**兰耶多：**要再试试看吗…



#### 对话 7310129

**起点节点 `731012901`**


**旅行者：**再挑战一次。

**兰耶多：**好呀好呀，这次一定能行的！



#### 对话 7310130

**起点节点 `731013001`**


**旅行者：**下次再说吧…

**兰耶多：**#嗯，那菈{NICKNAME}不要气馁，那菈{NICKNAME}已经很厉害了…




### 步骤 14：子任务 7310114

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301182,
        182002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310114_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ANY_MANUAL_TRANSPORT",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7310110"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "1",
        "1",
        "73101"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 15：子任务 7310115

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310132,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310135,
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


#### 对话 7310131

**起点节点 `731013101`**


**兰沙陀：**#那菈{NICKNAME}，就像吹散瘴气与迷雾的风，即使是最厉害的「大方方铁块」，也未必是你的对手。

**兰沙陀：**但兰迦拉梨全部解开的「大方方铁块」，非常可怕…

**兰沙陀：**如果没做好准备，不如再与解开三层兰迦拉梨的「大方方铁块」进行战斗，积累经验…

**兰沙陀：**要再与解开三层兰迦拉梨的「大方方铁块」战斗吗…



#### 对话 7310132

**起点节点 `731013201`**


**旅行者：**再战斗一次。

**兰沙陀：**好的，请小心…



#### 对话 7310133

**起点节点 `731013301`**


**旅行者：**暂时不用了…

**兰沙陀：**嗯…如有需要，不必顾虑，请跟我说。



#### 对话 7310134

**起点节点 `731013401`**


**兰沙陀：**#解开三层兰迦拉梨的「大方方铁块」，已与故事里的「大方方铁块」相差无几，那菈{NICKNAME}不必沮丧。

**兰沙陀：**#只要反复修炼，对于那菈{NICKNAME}来说，「大方方铁块」也必不是难题…再试一次吧…

**兰沙陀：**要再与解开三层兰迦拉梨的「大方方铁块」战斗吗…



#### 对话 7310135

**起点节点 `731013501`**


**旅行者：**再挑战一次。

**兰沙陀：**#嗯，那菈{NICKNAME}勇气可嘉。



#### 对话 7310136

**起点节点 `731013601`**


**旅行者：**下次再说…

**兰沙陀：**#嗯，我们会一直在这里修炼，那菈{NICKNAME}若想挑战，也可随时继续…




### 步骤 16：子任务 7310116

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301183,
        183002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310116_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ANY_MANUAL_TRANSPORT",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7310110"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "2",
        "1",
        "73101"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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


### 步骤 17：子任务 7310117

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310138,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7310141,
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


#### 对话 7310137

**起点节点 `731013701`**


**兰沙诃：**#那菈{NICKNAME}，了不起。

**兰沙诃：**没有兰迦拉梨的「大方方铁块」，打倒了…

**兰沙诃：**嗯…没有兰迦拉梨的「大方方铁块」，要再挑战吗？



#### 对话 7310138

**起点节点 `731013801`**


**旅行者：**再战斗一次。

**兰沙诃：**…嗯！开始了！



#### 对话 7310139

**起点节点 `731013901`**


**旅行者：**暂时不用了。

**兰沙诃：**#嗯，那菈{NICKNAME}，很厉害，完成了修炼。



#### 对话 7310140

**起点节点 `731014001`**


**兰沙诃：**没有兰迦拉梨的「大方方铁块」，最厉害…很难打倒…

**兰沙诃：**#那菈{NICKNAME}，再试试？



#### 对话 7310141

**起点节点 `731014101`**


**旅行者：**再挑战一次。

**兰沙诃：**#嗯，那菈{NICKNAME}，小心。



#### 对话 7310142

**起点节点 `731014201`**


**旅行者：**下次再说…

**兰沙诃：**#…那菈{NICKNAME}，加油。




### 步骤 18：子任务 7310118

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133301184,
        184002
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
    },
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "wq7310118_fin"
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_TEAM_DEAD",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        0,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_ANY_MANUAL_TRANSPORT",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7310110"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "1",
        "73101"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_VAR"
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
