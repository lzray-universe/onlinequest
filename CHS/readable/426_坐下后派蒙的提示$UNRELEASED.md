# 426 坐下后派蒙的提示$UNRELEASED


---
## 任务信息

- **任务类型**：WQ

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 42601

(test)坐下来$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        42601,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
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

（此步骤无对话）


### 步骤 2：子任务 42602

(test)站起来$UNRELEASED$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        42602,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        42602,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_NOT_FINISH_PLOT",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "42601"
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


#### 对话 42601

**起点节点 `4260101`**


**派蒙：**坐下来休息一会吧，接下来有什么计划呢？$UNRELEASED

**分支 1：**

  **旅行者：**想做任务$UNRELEASED

  **派蒙：**这个简单，点开左上角的叹号图标，就能看到现在已经接取的任务啦。$UNRELEASED

  **派蒙：**任务有难度等级，等级差太多的话，会很棘手呢。$UNRELEASED

  **派蒙：**还有啥想了解的吗$UNRELEASED

  **分支 1：**

    ↩ 合流到节点 `4260102`

  **分支 2：**

    **旅行者：**想四处逛逛$UNRELEASED

    **派蒙：**不同的区域也有对应的难度等级$UNRELEASED

    **派蒙：**挑战适合难度的区域，才能最有效的提升实力吧$UNRELEASED

    **派蒙：**冒险家协会的艾尔菲，对提瓦特大陆可以说了如指掌$UNRELEASED

    **派蒙：**她就在蒙德城进门的商业街上，去问问她有没有适合的探索区域吧。$UNRELEASED

    ↩ 合流到节点 `4260117`

  **分支 3：**

    **旅行者：**想要变强$UNRELEASED

    **派蒙：**唔，那可离不开趁手的武器和珍贵的圣遗物$UNRELEASED

    **派蒙：**听说地下城里有不少好东西，就是比较凶险$UNRELEASED

    **派蒙：**当然也可以去蒙德城的商业街上购买，如果预算允许的话$UNRELEASED

    **派蒙：**还有，武器和圣遗物也都可以强化和突破$UNRELEASED

    **派蒙：**这些就需要你自己多研究啦$UNRELEASED

    **派蒙：**对了，角色自身的等级也很重要哦$UNRELEASED

    ↩ 合流到节点 `4260117`

  **分支 4：**

    **旅行者：**没啥，你先回去吧~$UNRELEASED

    **派蒙：**嗯嗯~$UNRELEASED

**分支 2：**

  ↩ 合流到节点 `4260105`

**分支 3：**

  ↩ 合流到节点 `4260110`

**分支 4：**

  ↩ 合流到节点 `4260118`


