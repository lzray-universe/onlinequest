# 75185 (test)火山黑蛋大师$HIDDEN

(test)火山黑蛋大师$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75000
- **任务奖励**：
  - 食谱：乌乌黑蛋×1，美味的乌乌黑蛋×3，乌乌黑蛋×5，奇怪的乌乌黑蛋×10

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7518501

(test)火山黑蛋大师$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7518505,
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
        "133518011"
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
      "6345"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7518501

**起点节点 `751850101`**


**伦图：**远道而来的异邦旅人，你们好啊！你们可曾听闻过我们沃陆之邦的特产美食——乌乌黑蛋？



#### 对话 7518502

**起点节点 `751850201`**


**伦图：**现在只需要完成一个小小的「火山蛋挑战」——将那边的地热喷口打破，取出里面的乌乌黑蛋，就能品尝到新鲜出炉的美味了！



#### 对话 7518503

**起点节点 `751850301`**


**旅行者：**乌乌黑蛋是什么？

**伦图：**说到乌乌黑蛋，那可是只有我们火山地区才能创造的美食啊。

**伦图：**将鸟蛋放在地热喷口上，利用火山喷出的气态燃素进行烤制，等到火候正好的时刻取出，就能得到一枚完美的乌乌黑蛋。

**伦图：**不过，要是不小心烤焦了，味道就会变得相当……不同寻常。



#### 对话 7518505

**起点节点 `751850501`**


**旅行者：**我来试试！



#### 对话 7518506

**起点节点 `751850601`**


**旅行者：**还有别的事情要做。

**伦图：**好吧，等有时间了，别忘了来尝试啊！




### 步骤 2：子任务 7518503

(test)开启挑战$HIDDEN

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
      "PPFLKMOMKAI": "7518503finish"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133518011,
        11144
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
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
      "PPFLKMOMKAI": "7518503fail"
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
    "KNMAMMFJAOB": "QUEST_GUIDE_STYLE_POINT",
    "LNHLPKELCAL": [
      "[3_10860:-3202.813,200.000,10897.860,0.000,43.316,0.000]",
      "30"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```

（此步骤无对话）


### 步骤 3：子任务 7518502

(test)子任务描述Test$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7518504,
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


#### 对话 7518504

**起点节点 `751850401`**


**伦图：**两位真是好身手啊，咻咻咻地几下就完成了挑战。

**伦图：**让我看看——哦哦，这个黝黑的色泽和浓厚的气味，真是让人胃口大开啊。快趁热品尝吧！

**伦图：**这份食谱你们也拿着，以后如果还想品尝乌乌黑蛋，可以自己动手烹饪看看哦。



#### 对话 7518507

**起点节点 `751850701`**


**伦图：**是你们啊，身手矫健的异邦旅人。怎么样，有尝试自己动手制作乌乌黑蛋吗？

**分支 1：**

  **旅行者：**尝试过了，吃完浑身有力！

  **伦图：**对吧，对吧，这可是蕴含了火山精华的美味啊。

  **伦图：**据说每天都吃的话，能让身体变得越来越健壮呢！

**分支 2：**

  **旅行者：**烤过头了，吃完差点晕过去。

  **伦图：**哈哈哈，那个味道很让人印象深刻吧？

  **伦图：**我倒是觉得吃习惯之后，也没那么难以下咽啦。

**分支 3：**

  **旅行者：**还没有，下次试试。

  **伦图：**没问题，愿你旅途一切顺利！


