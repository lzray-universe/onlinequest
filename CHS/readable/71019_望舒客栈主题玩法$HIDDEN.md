# 71019 望舒客栈主题玩法$HIDDEN

望舒客栈主题玩法$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：309

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7101901

测试任务隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        7101901,
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
        "133104675"
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
      "1006"
    ],
    "NOCCOBOFKHP": 1004,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7101901

**起点节点 `710190101`**


**派蒙：**你看!



#### 对话 7101902

**起点节点 `710190201`**


**派蒙：**这个大盆子里面，有一大块石头…这应该就是「假山」了吧。

**派蒙：**不过「假山」不一般是放在庭院啦园林啦之类的地方…放在这里又是做什么的呢？

**派蒙：**咦？这座假山的山顶上还放着个奇怪的东西，好像是在标记什么…唔，真让人在意…

**派蒙：**那个，反正我们也在旅行…在璃月的时候，就留意一下和这座假山类似的山吧。

**派蒙：**如果真能有什么发现的话，那就再好不过了。




### 步骤 2：子任务 7101902

派萌跳转$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        7101902,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": "71019_2"
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
      "1006"
    ],
    "NOCCOBOFKHP": 1004,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7101902

**起点节点 `710190201`**


**派蒙：**这个大盆子里面，有一大块石头…这应该就是「假山」了吧。

**派蒙：**不过「假山」不一般是放在庭院啦园林啦之类的地方…放在这里又是做什么的呢？

**派蒙：**咦？这座假山的山顶上还放着个奇怪的东西，好像是在标记什么…唔，真让人在意…

**派蒙：**那个，反正我们也在旅行…在璃月的时候，就留意一下和这座假山类似的山吧。

**派蒙：**如果真能有什么发现的话，那就再好不过了。



#### 对话 7101903

**起点节点 `710190301`**


**观察：**（一盆看起来是用来装饰的假山，假山的山顶上放着一个奇怪的标记。）

**观察：**（在璃月旅行的时候留意一下相似的山，然后再去那座山的山顶上仔细搜索一下吧。也许会有什么意外收获…）




### 步骤 3：子任务 7101903

寻找宝藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 1,
      "LNHLPKELCAL": [
        35801,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LUA_NOTIFY",
      "PPFLKMOMKAI": "71019_2"
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
      "1006"
    ],
    "NOCCOBOFKHP": 1004,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

**过场动画：**
- Cutscene `35801`（timeline）
  - resPath: `ART/Cutscene/Cs_MDAQ025_QinLisa_Convert`
  - castListPath: `Cs_CastList_Q358`
  - fadeIn/fadeOut: 0.0/0.5


#### 对话 7101903

**起点节点 `710190301`**


**观察：**（一盆看起来是用来装饰的假山，假山的山顶上放着一个奇怪的标记。）

**观察：**（在璃月旅行的时候留意一下相似的山，然后再去那座山的山顶上仔细搜索一下吧。也许会有什么意外收获…）


