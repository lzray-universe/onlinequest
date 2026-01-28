# 75124 (test)（test）拍照企鹅$HIDDEN

(test)（test）帮助摄影师让企鹅飞起来$HIDDEN


---
## 任务信息

- **任务类型**：WQ
- **前置主任务**：75000

---
## 剧情流程（按子任务顺序）


### 步骤 1：子任务 7512401

(test)（test）与发愁的摄影师聊聊$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512401,
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
      "21732"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512401

**起点节点 `751240101`**


**容韦勒：**唉，又跑出去了，我看看，在游泳圈里的不是只剩下一只了嘛…这下可怎么办…

**容韦勒：**这要套到什么时候去啊…

**派蒙：**哦，居然有人在这里拍画片…是在拍浮流鸟吗？

**派蒙：**浮流鸟确实很可爱呢…

**分支 1：**

  **旅行者：**嗯，晃晃悠悠的…

  **派蒙：**对，走起路来晃晃悠悠的感觉十分可爱。而且，胀起身子，变成球，浮在水上时的样子，让人看着就觉得很开心。

  **容韦勒：**这位有着漂亮银色光泽秀发的小小女士说得对啊！创造出浮流鸟这一生物的创造者应该受到此世所有的赞美…

  **容韦勒：**真是了不起，啊，抱歉，我还没有自我介绍，我是浮流鸟摄影爱好者，叫我容韦勒就好。

  **派蒙：**#嗯，我叫派蒙，这位是{NICKNAME}…不过，这里有这么多浮流鸟，容韦勒你为什么还唉声叹气的啊？

  **容韦勒：**此事说来话长…不过就容我容韦勒长话短说吧，浮流鸟的摄影爱好者有很多，大家都希望拍出更有趣的照片…

  **容韦勒：**而我在前几天诞生了个天才的想法——那就是让镜头中的所有浮流鸟套在游泳圈里！

  **分支 1：**

    **旅行者：**有什么意义吗？

    **容韦勒：**当然了，意义就在于没有意义，明明自己能够漂浮在水面上的浮流鸟，却仍然套着游泳圈…

    **容韦勒：**就如同用摩拉赚取摩拉那般虚无！

    **派蒙：**浮流鸟身上背负的东西也太多了吧…

    **容韦勒：**这就是所谓的超现实拍摄，要从留影之内找到更深的意义…啊，但，遇到了麻烦的情况。

    **容韦勒：**现实中的浮流鸟果然还是不会套着泳圈的…所以根本就拍不到这样的画面…

    **旅行者：**毕竟是「超现实」拍摄呢…

    **派蒙：**#不过，听上去好像只要用游泳圈把所有的浮流鸟圈住就好？{NICKNAME}，同为浮流鸟爱好者，我们来帮忙吧！

    **分支 1：**

      **旅行者：**呼呼，浮流鸟爱好者应当互帮互助！

      **派蒙：**说得对！

      **容韦勒：**真的吗？你们愿意帮忙吗？

      **派蒙：**嘿嘿，只要事后你把好看的画片给我们几张就好！

      **容韦勒：**那、那就拜托你们两位了！

    **分支 2：**

      **旅行者：**虽然我比较喜欢飞鼯啦…

      **派蒙：**这里就不要再说这种扫兴的话！

      ↩ 合流到节点 `751240129`

  **分支 2：**

    **旅行者：**正常人确实想不到…

    **容韦勒：**浮流鸟明明自己能够漂浮在水面上，却仍然套着游泳圈。就能在画面中形成一种意义的过度堆叠。

    **容韦勒：**这其实展现了一类「过度使用」和「浪费」的主题…

    ↩ 合流到节点 `751240120`

**分支 2：**

  **旅行者：**其实我比较喜欢飞鼯啦…

  **派蒙：**飞鼯当然也很可爱，但是，「飞鼯比浮流鸟可爱」，你能够在这些游来游去的浮流鸟们面前说出这么残忍的话吗！

  ↩ 合流到节点 `751240109`




### 步骤 2：子任务 7512402

(test)lua通知block$HIDDEN

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
      "PPFLKMOMKAI": "Q7512402"
    },
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        133509041,
        41078
      ],
      "PAINLIBBLDK": "QUEST_CONTENT_GADGET_STATE_CHANGE",
      "PPFLKMOMKAI": "201"
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
      "[3_10329:-1656.479,200.000,10066.700]",
      "15"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_LOCATION"
  }
}
```


#### 对话 7512404

**起点节点 `751240401`**


**容韦勒：**我一定会及时按下快门的，赌上我浮流鸟摄影爱好者之名…哈哈，虽然感觉这个名头听上去抵不上什么赌资。



#### 对话 7512405

**起点节点 `751240501`**


**容韦勒：**只要让画面中的每只浮流鸟都套上游泳圈就行了…




### 步骤 3：子任务 7512403

(test)（test）与摄影师对话$HIDDEN

**任务条件：**

```json
{
  "finishCond": [
    {
      "BFGALAINLMD": 0,
      "LNHLPKELCAL": [
        7512403,
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
        "133509041"
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
      "21732"
    ],
    "NOCCOBOFKHP": 3,
    "OFEBJNGBEPL": "QUEST_GUIDE_AUTO_NONE",
    "PAINLIBBLDK": "QUEST_GUIDE_NPC"
  }
}
```


#### 对话 7512403

**起点节点 `751240301`**


**容韦勒：**哎呀，正是好时机…

**容韦勒：**我忙了那么久都没有完成的画面，在两位的帮助下居然这么快就能够拍摄完毕…

**容韦勒：**啊，浮流鸟，晃晃的滚滚的身子在游泳圈内…真是让人感动到落泪啊…

**旅行者：**真的能那么感动吗…

**容韦勒：**对于旁人来说无法理解，甚至觉得荒谬的东西，对于我们来说却是这段人生的追求…

**容韦勒：**不过我相信，如果我能拍出更多浮流鸟可爱的画片，最终，喜欢浮流鸟的人一定会越来越多的！

**派蒙：**我也完全相信这样的未来！

**容韦勒：**啊，多谢你们的帮忙，哎，这些就给你们作为答谢吧，还请务必收下呀…




---
## 未归类对话


#### 对话 7512407

**起点节点 `751240701`**


**[黑屏]** 似乎有浮流鸟飘走了…\n只能等待它们回来，重新套圈了…


