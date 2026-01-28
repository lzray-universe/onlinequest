# 76504 (test)隐藏$HIDDEN

(test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：76500, 396

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7650401

(test)隐藏$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650401,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7650405,
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


#### 对话 7650401

**起点节点 `765040101`**


**伊涅芙：**#{NICKNAME}，派蒙，你们好。吃了吗？

**派蒙：**伊涅芙？你怎么也跑到屋顶上来啦。难道是…在观察云的形状，计算下雨的概率？

**伊涅芙：**我正在执行一项…意外偏离预定轨道的任务。

**伊涅芙：**原定计划是为爱诺采购她清单上指定的「高精度齿轮」和「特制六角螺丝」。

**伊涅芙：**但在返回工坊的途中，遭遇了一次…不可预见的物资拦截事件。一只鹰隼，以极快的速度，从我的手中叼走了那枚特制螺丝。

**旅行者：**所以你就跑到屋顶上来找鹰隼了？

**伊涅芙：**是的。根据该生物的习性，屋顶是其可能的临时停落点。我正在进行全方位的视觉扫描与声音探测，试图定位目标。

**伊涅芙：**不过，截至目前，并未捕捉到有效踪迹。初步推测，目标已逃离我的追踪范围，或已将「猎物」转移至更隐蔽的巢穴。

**伊涅芙：**后备计划已启动：重新前往指定供应商处，采购一枚同型号螺丝。

**伊涅芙：**话说回来。你们出现在高处，难道也在…追踪某种小动物吗？

**分支 1：**

  **旅行者：**没有没有。

  **派蒙：**对呀对呀，我们本来是想找个视野开阔的地方，拍一拍那夏镇的全景照片，记录下这里繁忙又有活力的样子。

  **派蒙：**想不到竟然会在这里遇上正在「追捕小偷」的伊涅芙！这也是一种超小概率的「偏离轨道的惊喜事件」吧！

  **分支 1：**

    **旅行者：**机会难得…

    **伊涅芙：**可以。请指示我需要配合的站立位置、身体朝向以及推荐的面部表情。

    **伊涅芙：**#我想，我会登上屋顶，然后在这里遇到你们，还能让{NICKNAME}为我拍摄画片，这一系列事件的发生概率，恐怕比那只鹰隼归还螺丝还要低。

    **伊涅芙：**请务必将这难得的「惊喜」时刻，精确地记录下来。

  **分支 2：**

    **旅行者：**可以为你拍摄画片吗？

    ↩ 合流到节点 `765040117`

**分支 2：**

  **旅行者：**我只是在寻找拍摄素材。

  ↩ 合流到节点 `765040113`



#### 对话 7650404

**起点节点 `765040401`**


**伊涅芙：**已经想好怎么拍摄了吗？如果需要，我随时都可以配合。



#### 对话 7650407

**起点节点 `765040701`**


**伊涅芙：**#{NICKNAME}，派蒙，你们好。吃了吗？今天有什么特别的预定安排吗？

**分支 1：**

  **旅行者：**我们正在四处参观。

  **伊涅芙：**了解了。四处走走，用镜头记录见闻，是不错的放松方式。

  **伊涅芙：**不过，我没有在你身上检测到留影机呢。是不是出门的时候太匆忙，把它忘在什么地方了？

**分支 2：**

  **旅行者：**顺便寻找拍摄素材。

  ↩ 合流到节点 `765040704`



#### 对话 7650408

**起点节点 `765040801`**


**伊涅芙：**找到合适的拍摄素材了吗？不必着急，美好的事物总是值得耐心发掘的。

**分支 1：**

  **旅行者：**没问题，我们开始留影吧！

  **伊涅芙：**了解了。不过，我没有在你身上检测到留影机呢。是不是出门的时候太匆忙，把它忘在什么地方了？

**分支 2：**

  **旅行者：**请稍等，我再找找灵感。




### 步骤 2：子任务 7650402

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
      "PPFLKMOMKAI": "wq76504Fin"
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
      "PPFLKMOMKAI": "wq76504Fail"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        3,
        22
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_LEAVE_SCENE_RANGE",
      "PPFLKMOMKAI": "[3_12539:1681.000,260.448,9461.001,0.000,327.944,0.000]"
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7650401"
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


#### 对话 7650405

**起点节点 `765040501`**


**旅行者：**没问题，我们开始留影吧！



#### 对话 7650406

**起点节点 `765040601`**


**旅行者：**请稍等，我再找找灵感。


