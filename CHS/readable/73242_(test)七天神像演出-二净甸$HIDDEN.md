# 73242 (test)七天神像演出-二净甸$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：3001

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7324201

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


### 步骤 2：子任务 7324202

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        625
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_UNLOCK_TRANS_POINT",
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


#### 对话 7324201

**起点节点 `732420101`**


**派蒙：**欸…？刚刚那是…

**派蒙：**#{NICKNAME}，你看到了吗？

**分支 1：**

  **旅行者：**你在说什么啊。

  **派蒙：**就是那些，圆圆的、像植物一样的小东西！一下子就不见了！

  **分支 1：**

    **旅行者：**我看见了。

    **派蒙：**总之，之后有机会可以打听一下，那是什么…

  **分支 2：**

    **旅行者：**卷心菜？

    **派蒙：**才不是啦！看起来像小动物、小精灵一样的东西…

    ↩ 合流到节点 `732420111`

  **分支 3：**

    **旅行者：**派蒙，你累了。

    **派蒙：**才不是啦！看起来像小动物、小精灵一样的东西…

    **派蒙：**不要用这种怜悯的眼光看我啦！不是幻觉！

    ↩ 合流到节点 `732420111`

**分支 2：**

  **旅行者：**我看见了。

  **派蒙：**对吧？圆圆的、像植物一样的小东西！一下子就不见了！

  **派蒙：**之后有机会，找人打听一下吧…

**分支 3：**

  **旅行者：**那些是什么东西…

  **派蒙：**对吧？圆圆的、像植物一样的小东西！一下子就不见了！

  **派蒙：**之后有机会，找人打听一下吧…




### 步骤 3：子任务 7324203

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7324201,
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
        "73101",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
    },
    {
      "LNHLPKELCAL": [
        "300107",
        "1"
      ],
      "PAINLIBBLDK": "QUEST_EXEC_SET_QUEST_GLOBAL_VAR"
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


#### 对话 7324201

**起点节点 `732420101`**


**派蒙：**欸…？刚刚那是…

**派蒙：**#{NICKNAME}，你看到了吗？

**分支 1：**

  **旅行者：**你在说什么啊。

  **派蒙：**就是那些，圆圆的、像植物一样的小东西！一下子就不见了！

  **分支 1：**

    **旅行者：**我看见了。

    **派蒙：**总之，之后有机会可以打听一下，那是什么…

  **分支 2：**

    **旅行者：**卷心菜？

    **派蒙：**才不是啦！看起来像小动物、小精灵一样的东西…

    ↩ 合流到节点 `732420111`

  **分支 3：**

    **旅行者：**派蒙，你累了。

    **派蒙：**才不是啦！看起来像小动物、小精灵一样的东西…

    **派蒙：**不要用这种怜悯的眼光看我啦！不是幻觉！

    ↩ 合流到节点 `732420111`

**分支 2：**

  **旅行者：**我看见了。

  **派蒙：**对吧？圆圆的、像植物一样的小东西！一下子就不见了！

  **派蒙：**之后有机会，找人打听一下吧…

**分支 3：**

  **旅行者：**那些是什么东西…

  **派蒙：**对吧？圆圆的、像植物一样的小东西！一下子就不见了！

  **派蒙：**之后有机会，找人打听一下吧…


