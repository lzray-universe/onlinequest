# 75039 (test)小恐龙手办-拯救晕倒侏儒$HIDDEN

(test)父任务起始block$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75000
- **后接主任务**：75064

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7503921

（test）判断是否见过马尼飞科$HIDDEN

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
      "PPFLKMOMKAI": "Q7503921"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503902,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7509801,
        3
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
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


#### 对话 7503901

**起点节点 `750390101`**


**马尼菲科：**你好，黑暗，我的老朋友…

**派蒙：**呜哇…是一个…说话像大人的小孩子，好奇怪！

**派蒙：**欸？等等，这不是「了不起的马尼菲科」吗！

**分支 1：**

  **旅行者：**马…马什么了？

  **马尼菲科：**马…马尼菲科，了不起的马尼菲科！

  **马尼菲科：**呃…我知道我现在的样子有那么一点点落魄，但请给我点水，救救我。

  **马尼菲科：**水…请给我水…谢谢…

  **派蒙：**哇…这家伙又变回半死不活的样子了…我们救救他吧？

**分支 2：**

  **旅行者：**一点也不像是「了不起」的样子呢…

  **派蒙：**变得像小鱼干一样了，真可怜。

  **马尼菲科：**喂！有点身为人类的同理心好吗！

  ↩ 合流到节点 `750390119`

**分支 3：**

  **旅行者：**你好，我是黑暗，你的老朋友。

  **派蒙：**什么…？

  **马尼菲科：**哈！对，就是那首歌！我也喜欢那个！

  **马尼菲科：**啊…西梅翁和卡本克尔兄弟，怎么也听不倦…说起来，我上一个工作还是因为他们丢的。所以我才会到这里来，冒这该死的险…

  **马尼菲科：**呃…不过那就是后话啦，嘿嘿。现在要紧的是，给我整点水喝，好吗？

  **马尼菲科：**毕竟，嗯，嘿嘿…就是，呵呵，真不好意思，我要渴死了，嘿嘿…

  **派蒙：**性命关天的事，你傻笑个什么劲啦！

  **马尼菲科：**不知道，回光返照吧。

  **派蒙：**哦…啊？！

  ↩ 合流到节点 `750390119`



#### 对话 7503902

**起点节点 `750390201`**


**马尼菲科：**你好，黑暗，我的老朋友…

**派蒙：**呜哇…是一个…说话像大人的小孩子，好奇怪！

**马尼菲科：**喂，你的父母没有教过你尊重我这样的人吗？要知道，小小的人也能做出大大的事来！

**马尼菲科：**事实上，许多大大的事，正是由像我这样小小的人所成就的…

**派蒙：**他还有胡子！噫…看起来有点恶心…

**马尼菲科：**至少不要拿胡子羞辱我！

**分支 1：**

  **旅行者：**你好，我是黑暗，你的老朋友。

  **马尼菲科：**呃…不，你不用这样配合我，我的意思是我…我快死了。

  **分支 1：**

    **旅行者：**哦。

    **派蒙：**变得像小鱼干一样了呢…真可怜。

    **#{REALNAME[ID(2)|SHOWHOST(true)]}：**呜呜…

    **马尼菲科：**喂，你们身为人类的同理心哪里去了！

    **马尼菲科：**给我水！我要渴死了，难道你们看不出来吗！

  **分支 2：**

    **旅行者：**你需要什么？

    **马尼菲科：**啊，太好了…我在这里困了三天，终于听到了一句人话…！

    **马尼菲科：**我要两份九号餐，一份大九号，一份六号餐多加酱，一份七号餐，两份四十五号，其中一份加芝士，再来一杯大枫达。

    **派蒙：**好的，你还需要什么吗？

    **#{REALNAME[ID(2)|SHOWHOST(true)]}：**唔，嗷？

    **马尼菲科：**还需要什么？还需要什么！我需要水！我要渴死了，你们难道第一眼看不出来吗！

**分支 2：**

  **旅行者：**请你振作点，我们该怎么帮助你？

  **马尼菲科：**水…请给我水…谢谢…




### 步骤 2：子任务 7503901

(test)隐藏踩圈$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503901,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133509098"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133509018,1"
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
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 3：子任务 7503902

(test)与晕倒的画家对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503902,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503901,
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
        "133509186"
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
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7503901

**起点节点 `750390101`**


**马尼菲科：**你好，黑暗，我的老朋友…

**派蒙：**呜哇…是一个…说话像大人的小孩子，好奇怪！

**派蒙：**欸？等等，这不是「了不起的马尼菲科」吗！

**分支 1：**

  **旅行者：**马…马什么了？

  **马尼菲科：**马…马尼菲科，了不起的马尼菲科！

  **马尼菲科：**呃…我知道我现在的样子有那么一点点落魄，但请给我点水，救救我。

  **马尼菲科：**水…请给我水…谢谢…

  **派蒙：**哇…这家伙又变回半死不活的样子了…我们救救他吧？

**分支 2：**

  **旅行者：**一点也不像是「了不起」的样子呢…

  **派蒙：**变得像小鱼干一样了，真可怜。

  **马尼菲科：**喂！有点身为人类的同理心好吗！

  ↩ 合流到节点 `750390119`

**分支 3：**

  **旅行者：**你好，我是黑暗，你的老朋友。

  **派蒙：**什么…？

  **马尼菲科：**哈！对，就是那首歌！我也喜欢那个！

  **马尼菲科：**啊…西梅翁和卡本克尔兄弟，怎么也听不倦…说起来，我上一个工作还是因为他们丢的。所以我才会到这里来，冒这该死的险…

  **马尼菲科：**呃…不过那就是后话啦，嘿嘿。现在要紧的是，给我整点水喝，好吗？

  **马尼菲科：**毕竟，嗯，嘿嘿…就是，呵呵，真不好意思，我要渴死了，嘿嘿…

  **派蒙：**性命关天的事，你傻笑个什么劲啦！

  **马尼菲科：**不知道，回光返照吧。

  **派蒙：**哦…啊？！

  ↩ 合流到节点 `750390119`



#### 对话 7503902

**起点节点 `750390201`**


**马尼菲科：**你好，黑暗，我的老朋友…

**派蒙：**呜哇…是一个…说话像大人的小孩子，好奇怪！

**马尼菲科：**喂，你的父母没有教过你尊重我这样的人吗？要知道，小小的人也能做出大大的事来！

**马尼菲科：**事实上，许多大大的事，正是由像我这样小小的人所成就的…

**派蒙：**他还有胡子！噫…看起来有点恶心…

**马尼菲科：**至少不要拿胡子羞辱我！

**分支 1：**

  **旅行者：**你好，我是黑暗，你的老朋友。

  **马尼菲科：**呃…不，你不用这样配合我，我的意思是我…我快死了。

  **分支 1：**

    **旅行者：**哦。

    **派蒙：**变得像小鱼干一样了呢…真可怜。

    **#{REALNAME[ID(2)|SHOWHOST(true)]}：**呜呜…

    **马尼菲科：**喂，你们身为人类的同理心哪里去了！

    **马尼菲科：**给我水！我要渴死了，难道你们看不出来吗！

  **分支 2：**

    **旅行者：**你需要什么？

    **马尼菲科：**啊，太好了…我在这里困了三天，终于听到了一句人话…！

    **马尼菲科：**我要两份九号餐，一份大九号，一份六号餐多加酱，一份七号餐，两份四十五号，其中一份加芝士，再来一杯大枫达。

    **派蒙：**好的，你还需要什么吗？

    **#{REALNAME[ID(2)|SHOWHOST(true)]}：**唔，嗷？

    **马尼菲科：**还需要什么？还需要什么！我需要水！我要渴死了，你们难道第一眼看不出来吗！

**分支 2：**

  **旅行者：**请你振作点，我们该怎么帮助你？

  **马尼菲科：**水…请给我水…谢谢…




### 步骤 4：子任务 7503919

(test)隐藏控制reminder1$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503919,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133509186"
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 5：子任务 7503920

(test)隐藏控制reminder2$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503920,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133509186"
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 6：子任务 7503915

(test)尝试把画家弄醒$HIDDEN

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
      "PPFLKMOMKAI": "Q7503918"
    }
  ],
  "triggerCond": [],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "3",
        "133509186"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7503904

**起点节点 `750390401`**


**#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯…唔？呀，呀！

**马尼菲科：**<color=#00E1FFFF>水…请给我水…</color>谢谢…

**派蒙：**我们还是快看看这个躺在地上的家伙吧！他看起来状态很不妙！




### 步骤 7：子任务 7503916

(test)尝试把画家弄醒-水琥珀$HIDDEN

**任务条件：**

```json
{
  "finishCond": [],
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


### 步骤 8：子任务 7503917

(test)尝试把画家弄醒-水元素攻击$HIDDEN

**任务条件：**

```json
{
  "finishCond": [],
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


### 步骤 9：子任务 7503918

(test)尝试把画家弄醒-灵视龙创生$HIDDEN

**任务条件：**

```json
{
  "finishCond": [],
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


### 步骤 10：子任务 7503903

(test)与醒来的npc对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503918,
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
        "133509016",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNREGISTER_DYNAMIC_GROUP"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "133509186,133509025"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_NOTIFY_GROUP_LUA"
    },
    {
      "LNHLPKELCAL": [
        "3",
        "1469"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_UNLOCK_POINT"
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
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```


#### 对话 7503918

**起点节点 `750391801`**


**[黑屏]** 设法帮助了干渴的路人，你们注意到，浸水之后他的体型仿佛大了一圈。

**马尼菲科：**咳咳…呼…呼…哈哈，原来是暝视龙的小招数…这也是我来这里的原因之一。

**派蒙：**你先顺顺气，多喝点水再说话啦！

**马尼菲科：**咳咳…！我没事的，谢谢你们救了我一命！

**马尼菲科：**马尼菲科·德·拉·马尼菲桑斯，叫我马尼菲科就好。正如你们所见，我出身枫丹贵胄。

**马尼菲科：**我的老朋友们有时叫我「警探」，有时叫我「布鲁图斯」，有时叫我「磁先生」…但你们的话，随便什么称呼都行。

**派蒙：**唔…这么多乱七八糟的名字，听起来好可疑！

**#{REALNAME[ID(2)|SHOWHOST(true)]}：**哼…

**分支 1：**

  **旅行者：**「警探」…？

  **马尼菲科：**我曾经在逐影庭做过几年警探，跟随法兰克·德雷宾警督办过几件大案，后来他升任警司，而我退役了。

  **马尼菲科：**那可真是让人难忘的时光…

  **马尼菲科：**是啊…男孩遇见女孩，男孩失去女孩，女孩寻找男孩，男孩忘记女孩，男孩记起女孩，女孩被千灵节的映影花车碾压了三遍…

  **派蒙：**那种乱七八糟的时光还是不要回顾啦…

  **马尼菲科：**咳咳，总之，从逐影庭退役以后，我无所事事了一段时间，最终决定还是做个摄影家，描摹人与物所固有的生命力…

  **马尼菲科：**所以我来到了这里，纳塔！诸元素生命力最为璀璨惊心的国度！

  **派蒙：**是挺惊心啦…你差点就干死在这里了。

  **马尼菲科：**嘿嘿，实在是不好意思。我是不会忘记你们救我一命的。

  **马尼菲科：**唔…对了，借你们的地图看一下。嗯…我看看接下来我的目的地在哪里来着？

  **马尼菲科：**啊！对了…我的礼貌哪里去了！还不知道你们的名字？

  **旅行者：**#我是{NICKNAME}。

  **派蒙：**#叫我派蒙就好！还有它，它叫{REALNAME[ID(2)|SHOWHOST(true)]}！

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯唔！

  **马尼菲科：**#很好，{NICKNAME}和派蒙，我记住了！

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**嗯？唔？吓——！

  **马尼菲科：**#哈哈，别急别急！还有{REALNAME[ID(2)|SHOWHOST(true)]}！

  **马尼菲科：**希望不久后我们能在旅途中再次相见，说不定下次我又要拜托你们帮忙，又说不定我能帮上你们的忙呢！

  **派蒙：**哇…你要去这么远的地方呀…那小心不要再把自己渴瘪了！

  **马尼菲科：**哈哈，不会的！我们有机会再见咯！

  **[黑屏]** 马尼菲科飞快地打包好行李与饮水，向你们摆手告别。\n不一会儿，他矮小的身影便从你们的视野中消失了。

**分支 2：**

  **旅行者：**「布鲁图斯」…？

  **马尼菲科：**啊，你可能不知道，我曾在逐影庭做过几年警探，那时候是法兰克·德雷宾警督的部下。

  **马尼菲科：**当时我们在公园里看到五个穿托加长袍的家伙在一百多人面前用刀袭击一个老头，于是「砰、砰、砰、砰、砰！」

  **马尼菲科：**我们把他们全放倒了，地上没有一个喘气的。哈，你觉得自己很幸运吗，小贼！

  **派蒙：**哇……

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**哇……

  **马尼菲科：**后来警长告诉我，那是一帮科学院的行政科员，正在排练《雷穆利亚》。

  **派蒙：**欸？！

  **马尼菲科：**所以，「布鲁图斯」！

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**呜嗷？！

  **马尼菲科：**不过反正没什么关系，当时科学院正在裁撤冗员，他们早晚得下岗。

  ↩ 合流到节点 `750391832`

**分支 3：**

  **旅行者：**「磁先生」…？

  **马尼菲科：**当然是说我超凡的人格魅力，每个认识我的人都会不可避免地被我所吸引！

  **派蒙：**噫……！

  **马尼菲科：**以及…所有不起眼的金属小物件、零散摩拉、细小首饰什么的，都会莫名其妙被吸引到我的裤兜里！

  **派蒙：**那应该叫「盗窃癖」！

  **马尼菲科：**没错，那正是我们家族的美德之一！

  **#{REALNAME[ID(2)|SHOWHOST(true)]}：**咿——！

  ↩ 合流到节点 `750391832`




### 步骤 11：子任务 7503904

(test)去往灵视龙拍照点$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503904,
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
      "[3_8540:-1541.844,253.901,9712.229,0.000,180.000,0.000]",
      "20"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 12：子任务 7503905

(test)完成布光$HIDDEN

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
      "PPFLKMOMKAI": "Q7503905"
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
      "[3_8540:-1541.844,253.901,9712.229,0.000,180.000,0.000]",
      "25"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 13：子任务 7503906

(test)布光后对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503906,
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 14：子任务 7503907

(test)翼手龙听导演讲戏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503907,
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 15：子任务 7503908

(test)限时攻击气球$HIDDEN

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
      "PPFLKMOMKAI": "Q7503908"
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
      "PPFLKMOMKAI": "Q7503908fail"
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
    "LNHLPKELCAL": [
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


### 步骤 16：子任务 7503914

(test)翼手龙失败后对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503914,
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_TARGET",
    "LNHLPKELCAL": [
      "21586"
    ],
    "NOCCOBOFKHP": 0,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 17：子任务 7503909

(test)翼手龙完成后对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503909,
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 18：子任务 7503910

(test)钻地龙听导演讲戏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503910,
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 19：子任务 7503911

(test)看看小恐龙在意的东西$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503911,
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
      "21460"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）


### 步骤 20：子任务 7503912

(test)清理燃素尖刺$HIDDEN

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
      "PPFLKMOMKAI": "Q7503912"
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
      "[3_8546:-1077.811,200.454,9652.404,0.000,34.353,0.000]",
      "40"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 21：子任务 7503913

(test)最后对话告别$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7503913,
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
      "21586"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```

（此步骤无对话）
