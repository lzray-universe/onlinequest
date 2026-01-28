# 74246 (test)隐藏$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：74228

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7424601

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7424601,
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


### 步骤 2：子任务 7424602

（隐藏）海灯节期间闲置$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7424602,
        0
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_COMPLETE_TALK",
      "PPFLKMOMKAI": ""
    }
  ],
  "triggerCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7424603,
        2
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_QUEST_STATE_EQUAL",
      "PPFLKMOMKAI": ""
    }
  ],
  "execActions": [
    {
      "LNHLPKELCAL": [
        "7424601",
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


#### 对话 7424602

**起点节点 `742460201`**


**丰泰：**得嘞，客人，您要的霄灯零件我都做好了，每一份都单独做了防水。

**丰泰：**每一份都包了五六层油纸，丢到水底泡个七八天都不成问题。

**那维莱特：**辛苦老板了，该付的工本费我也会如数支付。

**丰泰：**哎——客人，不需要这么客气，咱们做生意，主打的就是一个急客人之所急啊。

**丰泰：**对了，您上次买的茶叶，喝得还顺口吗？要不要再看看刚到的沉玉仙茗，刚炒出来不久，可都是上好的货啊！

**那维莱特：**唔，如果有折扣的话…

**派蒙：**等一下！那维莱特——有折扣也要思考！

**旅行者：**上次的你都没喝完！

**那维莱特：**#{NICKNAME}，派蒙？真是巧遇，我正在思考，你们是不是会也来璃月港度海灯节，祝你们海灯节快乐。

**派蒙：**那维莱特刚才是在买霄灯零件么？还特意让老板做了防水措施，难道说这些霄灯是…

**那维莱特：**是的。我打算将这些霄灯送给美露莘们，她们从未见过这种灯具，应该会喜欢的。

**那维莱特：**我还想多买一些霄灯，挂在沫芒宫外面。但我正在苦恼，如果单单只有沫芒宫悬挂霄灯，是否会有些不公平…

**那维莱特：**或许，我应当回到沫芒宫，让复律官们来做一次整体采购，让枫丹廷和梅洛彼得堡里的各处都能挂上霄灯。

**莱欧斯利：**要是让复律官们来采购，那枫丹廷在明年的海灯节时，或许能挂上今年的霄灯。

**莱欧斯利：**而且，还是别在梅洛彼得堡里挂霄灯了，我的最高审判官大人。

**莱欧斯利：**在梅洛彼得堡里，霄灯可飞不高，而且那些罪人们写在霄灯上面的愿望，大部分也不会被实现。

**莱欧斯利：**你知道的，那帮人可许不出什么利国利民的好愿望，咱们还是尽量让霄灯保持正面形象吧。

**希格雯：**而那些可以被许出来的「好愿望」，我也已经帮许愿者放飞了。

**旅行者：**哇，海灯节真热闹。

**莱欧斯利：**噢，对了，祝各位海灯节愉快，我就不一个一个问候了，心意到了就行。

**分支 1：**

  **旅行者：**还是要挨个问候的。

  **派蒙：**喂！为什么到我了要加一个「也」啊。

  **那维莱特：**#呵呵，莱欧斯利先生，希格雯小姐，{NICKNAME}，派蒙，我也祝你们节日愉快。

  **那维莱特：**看来这个好节日，把我们都吸引了过来。

  **莱欧斯利：**#哦唷，气氛烘托得这么热烈，可惜我没有买那种吉语钱包，不然按照璃月习俗，咱们得给{NICKNAME}和派蒙各发一封才行。

  **旅行者：**也可以直接把摩拉给我的…

  **莱欧斯利：**哈哈哈哈哈，行啊，等一下咱们一起去吃一顿好的，就由派蒙带路吧。

  **派蒙：**真的？嘿嘿嘿，那我可要好好点菜了！

  **希格雯：**那维莱特大人，请您也一起去吧。

  **那维莱特：**好的，我很乐意。

  **莱欧斯利：**喔，我突然发现…你这身衣服真不错，新做的？和这里的节日气氛，还有你放松的表情很搭啊。

  **希格雯：**这些缀饰和编织的手法…那维莱特大人，如果我猜的没错，应当是美露莘们的手艺？

  **派蒙：**欸？希格雯这都能看出来？

  **希格雯：**嗯，看这件衣服的版型，应当是芙洛设计的，洛梅肯定也出了不少点子。

  **希格雯：**总而言之，是一件很帅气的衣服，很适合那维莱特大人。

  **那维莱特：**是的。这是各位美露莘送给我的珍贵礼物。

  **[黑屏]** 那维莱特讲述了美露莘们赠送礼物的过程…

  **莱欧斯利：**所以，你打算用霄灯做回礼？

  **那维莱特：**是的。这是礼貌。

  **莱欧斯利：**那美露莘们肯定又要给你回礼了。

  **那维莱特：**是的。我想她们会的。

  **莱欧斯利：**行吧，礼物总归是好东西，要是你的办公室放不下礼物了，可以放到我那边去。

  **莱欧斯利：**护士长应该很擅长保存美露莘的礼物。

  **希格雯：**交给我吧，我会把那些心意都完善地保存起来的。

  **莱欧斯利：**但在那之前，咱们要不然还是先去别的地方逛一逛？

  **莱欧斯利：**璃月风景优美，和枫丹见惯的景色相比，别有一番滋味。

  **莱欧斯利：**这种滋味，倒也不必只局限在好茶之上了。

**分支 2：**

  **旅行者：**希格雯海灯节快乐。

  ↩ 合流到节点 `742460226`

**分支 3：**

  **旅行者：**莱欧斯利海灯节快乐。

  ↩ 合流到节点 `742460226`

**分支 4：**

  **旅行者：**那维莱特海灯节快乐！

  ↩ 合流到节点 `742460226`

**分支 5：**

  **旅行者：**派蒙也海灯节快乐！

  ↩ 合流到节点 `742460226`




### 步骤 3：子任务 7424603

（隐藏）海灯节后闲置$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7424601,
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
        "7424601",
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


#### 对话 7424601

**起点节点 `742460101`**


**丰泰：**得嘞，客人，您要的霄灯零件我都做好了，每一份都单独做了防水。

**丰泰：**每一份都包了五六层油纸，丢到水底泡个七八天都不成问题。

**那维莱特：**辛苦老板了，该付的工本费我也会如数支付。现在不是海灯节，采购这些一定很麻烦吧。

**丰泰：**哎——小问题小问题，不需要这么客气，咱们做生意，主打的就是一个急客人之所急啊。

**丰泰：**对了，您上次买的茶叶，喝得还顺口吗？要不要再看看刚到的沉玉仙茗，刚炒出来不久，可都是上好的货啊！

**那维莱特：**唔，如果有折扣的话…


