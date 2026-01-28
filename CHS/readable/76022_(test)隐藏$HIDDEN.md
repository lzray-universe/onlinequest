# 76022 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：76102

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7602201

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7602201,
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "[3_11454:2268.500,200.400,9326.700,0.000,4.700,0.000]",
      "20"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7602201

**起点节点 `760220101`**


**愤怒的武士：**无用的挣扎只会流血…把你的摩拉留下！

**佩科：**救命！救命啊！

**派蒙：**呜哇…我们得去救救他！




### 步骤 2：子任务 7602204

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7602202,
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "[3_12118:2260.900,200.700,9289.500,0.000,302.580,0.000]",
      "20"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7602202

**起点节点 `760220201`**


**派蒙：**喂！大块头！你在做什么！快停下！

**愤怒的武士：**摩拉…不对，不对！害死阿紫的家伙…受死吧！

**派蒙：**#哇啊啊！{NICKNAME}，小心！




### 步骤 4：子任务 7602202

(test)隐藏$HIDDEN

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
      "PPFLKMOMKAI": "7602202"
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
      "[3_12128:2256.600,200.100,9292.600,0.000,121.850,0.000]",
      "15"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 7602203

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7602203,
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
        "7602201",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133607237,2"
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
      "21935"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7602203

**起点节点 `760220301`**


**佩科：**哎呀呀，感谢两位的救命之恩，我是游商佩科，之后两位若有机会关照我的生意，一定给两位最实惠的折扣！

**佩科：**说起来今天真是倒霉，竟让我碰见这传说中的人物。

**派蒙：**传说中的人物？那家伙很有名吗？

**佩科：**恶名的话是有的。我也是听别的同行说的…当时他们也被吓得不行，说是再也不走这条路线了，我也是不信邪…

**派蒙：**那你还真是胆大。

**佩科：**我们做游商的，什么没碰见过？而且，我们有时候坐在一起，讲讲自己的故事的时候，也总容易「夸大事实」…

**佩科：**说偏了…他叫「权八」，听说是在稻妻犯了什么事，逃亡来了偏乡，对了，还带着他的相好。

**旅行者：**所以刚刚他提到的「阿紫」就是…？

**派蒙：**#对哦！刚刚那个怪人和{NICKNAME}打架的时候就念叨着这个名字呢，奇奇怪怪的。

**佩科：**从前就不走正路的人，哪怕到了新的地方，想要金盆洗手也没那么容易吧。没个正经营生，最后只有重蹈覆辙。

**佩科：**如果他就自己一个人的话，这么个活法倒也无所谓，但刀口舔血，谁知道会得罪什么人。

**佩科：**听说他那相好也是因此才丧命…反正，自从那之后，他就疯疯癫癫的啦！

**派蒙：**唉…大块头抢劫摩拉是可恶，但一想到他变成现在的样子，又觉得有那么一点点可怜啦…

**分支 1：**

  **旅行者：**所以派蒙千万不要为了摩拉…

  **派蒙：**喂！重点根本不是这个啦！

  **佩科：**好啦，我就不继续耽误两位的时间了，这份谢礼先请两位收下吧。

**分支 2：**

  **旅行者：**如果有一天派蒙被抢劫了…

  **派蒙：**#哼哼，那我身边不是还有你嘛！我的摩拉，{NICKNAME}守护！

  ↩ 合流到节点 `760220318`


