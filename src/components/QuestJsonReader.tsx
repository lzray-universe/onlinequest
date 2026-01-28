import { useMemo, useState, type CSSProperties } from 'react'
import { buildTalkRenderSegments, type DialogueLine } from '../lib/talkGraph'
import type { ManifestQuest, QuestData } from '../types/quest'
import { cn, formatNumber } from '../lib/utils'
import { QuestConditionDetails } from './QuestConditionDetails'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type QuestJsonReaderProps = {
  quest?: QuestData
  questMeta?: ManifestQuest
  className?: string
  contentClassName?: string
  style?: CSSProperties
}

type CutsceneData = {
  cutsceneId?: number | string
  kind?: string
  resPath?: string
  fadeInDuration?: number
  fadeOutDuration?: number
  [key: string]: unknown
}

const getCutsceneId = (scene: CutsceneData) => {
  const id = Number(scene.cutsceneId)
  return Number.isFinite(id) ? id : undefined
}

type FlowStep = NonNullable<QuestData['flow']>[number]
type TalkData = NonNullable<FlowStep['talks']>[number]

const matchCutscenesForFlow = (
  flow: FlowStep,
  questCutscenes: CutsceneData[]
) => {
  if ((flow as { cutscenes?: CutsceneData[] }).cutscenes?.length) {
    return (flow as { cutscenes?: CutsceneData[] }).cutscenes ?? []
  }
  const talkIds = new Set((flow.talkIds ?? []).map((id) => Number(id)))
  return questCutscenes.filter((scene) => {
    const sceneId = getCutsceneId(scene)
    if (!sceneId) return false
    return sceneId === flow.subQuestId || talkIds.has(sceneId)
  })
}

const renderLine = (line: DialogueLine) => (
  <div className="rounded-xl border border-border bg-background px-4 py-3">
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span>{line.speakerName ?? '未知角色'}</span>
      {line.roleType && <Badge variant="outline">{line.roleType}</Badge>}
      <span className="text-muted-foreground/60">节点 {line.nodeId}</span>
    </div>
    <p className="mt-2 text-sm text-foreground/90">{line.text}</p>
  </div>
)

const BranchDialogueGroup = ({
  options,
  joinNodeId,
}: {
  options: Array<{ label: string; lines: DialogueLine[] }>
  joinNodeId?: number
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4 rounded-xl border border-border bg-muted/20 p-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <Button
            key={`${option.label}-${index}`}
            variant={selectedIndex === index ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedIndex(index)}
          >
            {option.label || `分支 ${index + 1}`}
          </Button>
        ))}
      </div>
      <div className="space-y-3">
        {options[selectedIndex]?.lines.length ? (
          options[selectedIndex].lines.map((line) => <div key={line.nodeId}>{renderLine(line)}</div>)
        ) : (
          <p className="text-sm text-muted-foreground">该分支没有可展示的对话。</p>
        )}
      </div>
      {!joinNodeId && (
        <p className="text-xs text-muted-foreground">未检测到合流点，主线展示在此停止。</p>
      )}
    </div>
  )
}

const TalkRenderer = ({ talk }: { talk: TalkData }) => {
  const segments = useMemo(() => buildTalkRenderSegments(talk), [talk])

  return (
    <div className="space-y-3">
      {segments.map((segment, index) => {
        if (segment.type === 'line') {
          return <div key={`${segment.line.nodeId}-${index}`}>{renderLine(segment.line)}</div>
        }
        return (
          <BranchDialogueGroup
            key={`branch-${index}`}
            options={segment.options}
            joinNodeId={segment.joinNodeId}
          />
        )
      })}
      {segments.length === 0 && (
        <p className="text-sm text-muted-foreground">此对话没有可显示的节点。</p>
      )}
    </div>
  )
}

export const QuestJsonReader = ({
  quest,
  questMeta,
  className,
  contentClassName,
  style,
}: QuestJsonReaderProps) => {
  const flows = useMemo(() => {
    return [...(quest?.flow ?? [])].sort((a, b) => a.order - b.order)
  }, [quest?.flow])

  const meta = quest?.meta ?? {}
  const rewards = Array.isArray(meta.rewards) ? meta.rewards : []
  const rewardItems = rewards.flatMap((reward: any) => reward.items ?? [])
  const questCutscenes = (quest?.cutscenes ?? []) as CutsceneData[]

  if (!quest) {
    return <p className="text-sm text-muted-foreground">暂无任务数据</p>
  }

  return (
    <div className={cn('space-y-8', className)} style={style}>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">
          {quest.mainQuestId} {quest.title}
        </h1>
        <p className="text-base text-muted-foreground">{quest.description}</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>任务信息</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs text-muted-foreground">任务类型</p>
            <p className="text-sm font-semibold">{meta.questType ?? questMeta?.questType ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">所属章节</p>
            <p className="text-sm font-semibold">{meta.chapterTitle ?? questMeta?.chapterTitle ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">所属地区</p>
            <p className="text-sm font-semibold">{meta.cityName ?? questMeta?.region ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">推荐等级</p>
            <p className="text-sm font-semibold">{meta.recommendLevel ?? questMeta?.recommendLevel ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">需求等级</p>
            <p className="text-sm font-semibold">{meta.needPlayerLevel ?? questMeta?.needPlayerLevel ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">主线 ID</p>
            <p className="text-sm font-semibold">{quest.mainQuestId}</p>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xs text-muted-foreground">前置主任务</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(meta.preMainQuestIds ?? questMeta?.preMainQuestIds ?? []).length ? (
                (meta.preMainQuestIds ?? questMeta?.preMainQuestIds ?? []).map((id: number) => (
                  <Badge key={`pre-${id}`} variant="secondary">
                    {id}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">无</span>
              )}
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xs text-muted-foreground">后接主任务</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(meta.nextMainQuestIds ?? questMeta?.nextMainQuestIds ?? []).length ? (
                (meta.nextMainQuestIds ?? questMeta?.nextMainQuestIds ?? []).map((id: number) => (
                  <Badge key={`next-${id}`} variant="secondary">
                    {id}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">无</span>
              )}
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xs text-muted-foreground">任务奖励</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {rewardItems.length ? (
                rewardItems.map((item: any) => (
                  <Badge key={`${item.itemId}-${item.name}`} variant="outline">
                    {item.name} × {formatNumber(item.count ?? 0)}
                  </Badge>
                ))
              ) : (
                <span className="text-sm text-muted-foreground">暂无奖励</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <section className={cn('space-y-6', contentClassName)}>
        <h2 className="text-xl font-semibold">剧情流程</h2>
        {flows.length === 0 && <p className="text-sm text-muted-foreground">暂无流程数据</p>}
        {flows.map((flow) => {
          const cutscenes = matchCutscenesForFlow(flow, questCutscenes)
          return (
            <Card key={flow.subQuestId}>
              <CardHeader>
                <CardTitle>
                  步骤 {flow.order}：子任务 {flow.subQuestId}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{flow.stepDescription}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <details className="rounded-lg border border-border bg-muted/40 p-3">
                  <summary className="cursor-pointer text-xs font-semibold text-muted-foreground">
                    展开任务条件
                  </summary>
                  <div className="mt-3">
                    <QuestConditionDetails data={flow.conditions ?? {}} />
                  </div>
                </details>

                {cutscenes.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">过场动画</p>
                    <div className="space-y-2">
                      {cutscenes.map((scene, index) => (
                        <div
                          key={String(scene.cutsceneId ?? scene.resPath ?? index)}
                          className="rounded-xl border border-border bg-background p-4 text-sm"
                        >
                          <p className="font-semibold">
                            {scene.kind ?? 'cutscene'} · {scene.cutsceneId ?? '未知编号'}
                          </p>
                          {scene.resPath && (
                            <p className="mt-1 text-xs text-muted-foreground">{scene.resPath}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-sm font-semibold">对话</p>
                  {flow.talks?.length ? (
                    flow.talks.map((talk) => (
                      <div key={talk.talkId} className="space-y-3 rounded-xl border border-border p-4">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline">Talk {talk.talkId}</Badge>
                          {talk.talkConfig?.initDialog && (
                            <span>起点节点 {talk.talkConfig.initDialog}</span>
                          )}
                        </div>
                        <TalkRenderer talk={talk} />
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">（此步骤无对话）</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {quest.questNarration?.length ? (
        <Card>
          <CardHeader>
            <CardTitle>旁白</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quest.questNarration.map((line, index) => (
              <div key={index} className="rounded-xl border border-border bg-muted/20 p-4 text-sm">
                <p className="text-xs text-muted-foreground">{line.speakerName ?? '旁白'}</p>
                <p className="mt-2">{line.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}
