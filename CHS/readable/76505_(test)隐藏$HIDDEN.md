# 76505 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：76500, 396

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7650501

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650501,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650505,
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
        "0",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_BATCH_SET_QUEST_VAR"
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


#### 对话 7650501

**起点节点 `765050101`**


**瓦雷莎：**#{NICKNAME}和派蒙？真是巧呀！我之前听说你们出发去挪德卡莱了，没想到这么快就能在这里碰上！

**派蒙：**对啊对啊，我还以为我看错了呢！瓦雷莎，你怎么也跑到这么远的地方来啦？难道也是来旅行的吗？

**瓦雷莎：**嘿嘿，差不多吧！我这次是来帮家里的果园采购一批农用机械的。

**瓦雷莎：**爸爸说挪德卡莱这边有些好东西，能让果子长得更好，也能让我省点力气，这样我就有更多的时间睡觉…和健身了。

**瓦雷莎：**来了之后发现，这里有好多纳塔没有的好吃的！这几天除了办正事以外，我几乎所有时间都花在吃吃喝喝上面了！

**瓦雷莎：**不知不觉，马上就要到回程的时间，都有点不舍得了。

**瓦雷莎：**所以呀，我要抓紧最后的机会，再好好逛逛，把没吃过的都尝一遍，没看过的都看个够！

**瓦雷莎：**#你们呢？让我猜猜…我们无敌的大英雄{NICKNAME}，是不是又在这片新的土地上，忙着维护正义呀？

**分支 1：**

  **旅行者：**我们正在四处参观。

  **瓦雷莎：**嘿嘿，我懂我懂！到了新的国家，看什么都新鲜得不得了，简直想把每个有趣的角落，都用留影机「咔擦」一下保存下来！

  **瓦雷莎：**这么说来…哎呀！我应该也把在这里吃过的所有美食都仔仔细细地拍下来才对。

  **瓦雷莎：**这样的话，等我回纳塔，说不定能让阿托力大叔照着画片，尝试把这些美味都给还原出来！

  **旅行者：**瓦雷莎说不定能当美食摄影师呢。

  **瓦雷莎：**嘿嘿，真的吗？美食摄影师啊…听起来就很棒！每天都能和好吃的打交道，还能把它们拍得让人看了就流口水！

  **分支 1：**

    **旅行者：**在拍摄美食之前…

    **瓦雷莎：**欸，要拍我吗？真的可以吗？

    **瓦雷莎：**我、我的头发有没有乱？嘴角没沾到酱汁吧？哎呀，早知道今天会遇到你们，我就把昨天在集市买到的配饰戴上了！

    **分支 1：**

      **旅行者：**你现在这样就很好了！

      **瓦雷莎：**好！那…那就拜托你们了！

    **分支 2：**

      **旅行者：**我想拍下你开心的样子。

      ↩ 合流到节点 `765050122`

  **分支 2：**

    **旅行者：**可以为你拍摄画片吗？

    ↩ 合流到节点 `765050118`

**分支 2：**

  **旅行者：**顺便寻找拍摄素材。

  ↩ 合流到节点 `765050111`



#### 对话 7650504

**起点节点 `765050401`**


**瓦雷莎：**怎么样，有什么拍摄的想法了吗？



#### 对话 7650507

**起点节点 `765050701`**


**瓦雷莎：**#这不是{NICKNAME}和派蒙吗？真是巧呀！我之前听说你们出发去挪德卡莱了，没想到这么快就能在这里碰上！

**分支 1：**

  **旅行者：**我们正在四处参观。

  **瓦雷莎：**嘿嘿，我懂我懂！到了新的国家，看什么都新鲜得不得了，简直想把每个有趣的角落，都用留影机「咔擦」一下保存下来！

  **瓦雷莎：**不过，我没看到你的留影机呢。这样的话，没办法立刻开始拍照吧？

**分支 2：**

  **旅行者：**顺便寻找拍摄素材。

  ↩ 合流到节点 `765050704`



#### 对话 7650508

**起点节点 `765050801`**


**瓦雷莎：**怎么样，找到什么让你忍不住想「咔嚓」一下的拍摄素材了吗？

**分支 1：**

  **旅行者：**没问题，我们开始留影吧！

  **瓦雷莎：**太好了！不过，我没看到你的留影机呢。这样的话，没办法立刻开始拍照吧？

**分支 2：**

  **旅行者：**请稍等，我再找找灵感。




### 步骤 2：子任务 7650502

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
      "PPFLKMOMKAI": "wq76505Fin"
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
      "PPFLKMOMKAI": "wq76505Fail"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        32
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_12962:1480.853,204.000,9396.809,0.000,118.056,0.000]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7650501"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_ROLLBACK_QUEST"
    },
    {
      "LNHLPKELCAL": [],
      "PAINLIBBLDK": "QUEST_EXEC_UNLOCK_MIRROR_AVATAR_TEAM"
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
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NONE"
  }
}
```

（此步骤无对话）


---
## 未归类对话


#### 对话 7650505

**起点节点 `765050501`**


**旅行者：**没问题，我们开始留影吧！



#### 对话 7650506

**起点节点 `765050601`**


**旅行者：**请稍等，我再找找灵感。


