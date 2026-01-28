import { useEffect, useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpen,
  Clipboard,
  FileJson,
  MessageCircle,
  PlayCircle,
  ScrollText,
  Star,
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { useAsync } from '../hooks/useAsync'
import { getManifest, getQuestData, getReadableMarkdown, getSubtitleText } from '../lib/data'
import { QUEST_TYPE_COLORS } from '../lib/questType'
import { addRecent, getFavorites, toggleFavorite } from '../lib/storage'
import { parseSrt } from '../lib/srt'
import { formatNumber, getAssetUrl } from '../lib/utils'
import type { ManifestQuest } from '../types/quest'

const renderJson = (value: unknown) => JSON.stringify(value, null, 2)

export const QuestDetailPage = () => {
  const { id } = useParams()
  const questId = Number(id)
  const { data: manifest } = useAsync(getManifest, [])
  const { data: quest } = useAsync(() => getQuestData(questId), [questId])
  const questMeta = manifest?.find((item) => item.id === questId)
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('readable')
  const [favorites, setFavorites] = useState(() => getFavorites())
  const [dialogFilter, setDialogFilter] = useState('')
  const [dialogSearch, setDialogSearch] = useState('')

  const { data: readable } = useAsync(
    () => (questMeta?.readablePath ? getReadableMarkdown(questMeta.readablePath) : Promise.resolve('')),
    [questMeta?.readablePath]
  )

  useEffect(() => {
    if (questMeta?.title) {
      document.title = `${questMeta.title} · OnlineQuest`
    }
    if (questId) {
      addRecent(questId)
    }
  }, [questMeta?.title, questId])

  const dialogEntries = useMemo(() => {
    const entries: Array<{
      subQuestId: number
      order: number
      dialog: { speakerName?: string | null; text: string; roleType?: string; speakerId?: number | null }
    }> = []

    quest?.flow?.forEach((flow) => {
      flow.talks?.forEach((talk) => {
        talk.dialogs?.forEach((dialog) => {
          entries.push({
            subQuestId: flow.subQuestId,
            order: flow.order,
            dialog,
          })
        })
      })
    })

    return entries
  }, [quest])

  const speakers = useMemo(() => {
    const names = new Set<string>()
    dialogEntries.forEach((entry) => {
      const name = entry.dialog.speakerName
      if (name) names.add(name)
    })
    return Array.from(names)
  }, [dialogEntries])

  const filteredDialogs = dialogEntries.filter((entry) => {
    if (dialogFilter && entry.dialog.speakerName !== dialogFilter) return false
    if (dialogSearch && !entry.dialog.text.includes(dialogSearch)) return false
    return true
  })

  const highlightSpeakerId = searchParams.get('speakerId')

  const linkedQuests = useMemo(() => {
    if (!manifest || !questMeta) return { pre: [], next: [] }
    const byId = new Map(manifest.map((item) => [item.id, item]))
    const pre = questMeta.preMainQuestIds.map((qid) => byId.get(qid)).filter(Boolean) as ManifestQuest[]
    const next = questMeta.nextMainQuestIds.map((qid) => byId.get(qid)).filter(Boolean) as ManifestQuest[]
    return { pre, next }
  }, [manifest, questMeta])

  const isFavorite = favorites.includes(questId)

  const copyJson = async (payload: unknown) => {
    await navigator.clipboard.writeText(renderJson(payload))
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link to="/quests" className="flex items-center gap-2 text-sm">
            <ArrowLeft className="h-4 w-4" /> 返回任务列表
          </Link>
          <h1 className="mt-2 text-3xl font-semibold">{questMeta?.title ?? `任务 ${questId}`}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{questMeta?.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {questMeta && (
            <Badge className={QUEST_TYPE_COLORS[questMeta.questType]}>
              {questMeta.questTypeLabel} · {questMeta.questType}
            </Badge>
          )}
          {questMeta?.hidden && <Badge variant="secondary">隐藏任务</Badge>}
          <Button variant={isFavorite ? 'default' : 'outline'} onClick={() => setFavorites(toggleFavorite(questId))}>
            <Star className="h-4 w-4" /> {isFavorite ? '已收藏' : '收藏'}
          </Button>
          <Button asChild variant="outline">
            <Link to={`/quest/${questId}/reader`}>
              <BookOpen className="h-4 w-4" /> 阅读模式
            </Link>
          </Button>
        </div>
      </div>

      {questMeta && (
        <div className="text-sm text-muted-foreground">
          <Link to={`/region/${encodeURIComponent(questMeta.region)}`}>{questMeta.region}</Link>
          <span className="mx-2">/</span>
          <Link to={`/type/${questMeta.questType}`}>{questMeta.questTypeLabel}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{questMeta.title}</span>
        </div>
      )}

      <Card>
        <CardContent className="grid gap-4 pt-6 md:grid-cols-6">
          <div>
            <p className="text-xs text-muted-foreground">地区</p>
            <p className="text-sm font-semibold">{questMeta?.region ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">章节</p>
            <p className="text-sm font-semibold">{questMeta?.chapterTitle ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">推荐等级</p>
            <p className="text-sm font-semibold">{questMeta?.recommendLevel ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">对话句数</p>
            <p className="text-sm font-semibold">{formatNumber(questMeta?.dialogCount ?? 0)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">需求等级</p>
            <p className="text-sm font-semibold">{questMeta?.needPlayerLevel ?? '--'}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">过场</p>
            <p className="text-sm font-semibold">{questMeta?.hasCutscenes ? '有' : '无'}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>前置任务</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {linkedQuests.pre.length === 0 && (
              <p className="text-sm text-muted-foreground">无前置任务</p>
            )}
            {linkedQuests.pre.map((questItem) => (
              <Link
                key={questItem.id}
                to={`/quest/${questItem.id}`}
                className="block rounded-xl border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                {questItem.title}
              </Link>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>后续任务</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {linkedQuests.next.length === 0 && (
              <p className="text-sm text-muted-foreground">无后续任务</p>
            )}
            {linkedQuests.next.map((questItem) => (
              <Link
                key={questItem.id}
                to={`/quest/${questItem.id}`}
                className="block rounded-xl border border-border px-4 py-2 text-sm hover:bg-muted"
              >
                {questItem.title}
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <Tabs>
        <TabsList>
          {[
            { id: 'readable', label: '可读剧情', icon: ScrollText },
            { id: 'dialogs', label: '对话', icon: MessageCircle },
            { id: 'flow', label: '步骤', icon: BookOpen },
            { id: 'narration', label: '旁白', icon: MessageCircle },
            { id: 'cutscenes', label: '过场', icon: PlayCircle },
            { id: 'rewards', label: '奖励', icon: Star },
            { id: 'raw', label: '原始 JSON', icon: FileJson },
          ].map((tab) => (
            <TabsTrigger key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
              <tab.icon className="h-4 w-4" /> {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {activeTab === 'readable' && (
          <TabsContent>
            <Card>
              <CardContent className="prose-quest max-w-none p-6">
                {readable ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {readable}
                  </ReactMarkdown>
                ) : (
                  <p className="text-sm text-muted-foreground">暂无可读剧情文件</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'dialogs' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>对话浏览</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <ToggleButton
                    label="全部角色"
                    active={!dialogFilter}
                    onClick={() => setDialogFilter('')}
                  />
                  {speakers.map((speaker) => (
                    <ToggleButton
                      key={speaker}
                      label={speaker}
                      active={dialogFilter === speaker}
                      onClick={() => setDialogFilter(speaker)}
                    />
                  ))}
                </div>
                <Input
                  placeholder="搜索当前任务对话"
                  value={dialogSearch}
                  onChange={(event) => setDialogSearch(event.target.value)}
                />
                <div className="space-y-4">
                  {filteredDialogs.length === 0 && (
                    <p className="text-sm text-muted-foreground">没有匹配的对话</p>
                  )}
                  {filteredDialogs.map((entry, index) => {
                    const highlight =
                      highlightSpeakerId && String(entry.dialog.speakerId) === highlightSpeakerId
                    return (
                      <div
                        key={`${entry.subQuestId}-${entry.order}-${index}`}
                        className={`rounded-xl border border-border p-4 ${highlight ? 'bg-primary/10' : ''}`}
                      >
                        <p className="text-xs text-muted-foreground">
                          子任务 {entry.subQuestId} · 步骤 {entry.order}
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                          {entry.dialog.speakerName ?? '未知角色'}
                        </p>
                        <p className="mt-1 text-sm text-foreground/90">{entry.dialog.text}</p>
                      </div>
                    )
                  })}
                </div>
                {quest?.unmappedTalks?.length ? (
                  <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4">
                    <p className="text-sm font-semibold">未映射对话</p>
                    <pre className="mt-2 overflow-auto text-xs">{renderJson(quest.unmappedTalks)}</pre>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'flow' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>步骤 Flow</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quest?.flow?.map((flow) => (
                  <div key={flow.subQuestId} className="rounded-xl border border-border p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold">子任务 {flow.subQuestId}</p>
                      <Badge variant={flow.isHidden ? 'secondary' : 'outline'}>
                        {flow.isHidden ? '隐藏步骤' : '公开步骤'}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Step {flow.order}: {flow.stepDescription}
                    </p>
                    {flow.conditions && (
                      <details className="mt-2">
                        <summary className="cursor-pointer text-sm font-medium">条件详情</summary>
                        <pre className="mt-2 overflow-auto rounded-lg bg-muted p-3 text-xs">
                          {renderJson(flow.conditions)}
                        </pre>
                      </details>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'narration' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>旁白 Narration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quest?.questNarration?.length ? (
                  quest.questNarration.map((line, index) => (
                    <div key={index} className="rounded-xl border border-border p-4">
                      <p className="text-xs text-muted-foreground">{line.speakerName ?? '旁白'}</p>
                      <p className="mt-1 text-sm">{line.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">暂无旁白数据</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'cutscenes' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>过场 Cutscenes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quest?.cutscenes?.length ? (
                  quest.cutscenes.map((scene, index) => (
                    <CutsceneCard key={index} scene={scene} index={index} />
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">暂无过场数据</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'rewards' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>奖励</CardTitle>
              </CardHeader>
              <CardContent>
                {quest?.meta?.rewards ? (
                  <pre className="rounded-xl bg-muted p-4 text-xs">
                    {renderJson(quest.meta.rewards)}
                  </pre>
                ) : (
                  <p className="text-sm text-muted-foreground">暂无奖励信息</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {activeTab === 'raw' && (
          <TabsContent>
            <Card>
              <CardHeader>
                <CardTitle>原始 JSON</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" onClick={() => copyJson(quest)}>
                  <Clipboard className="h-4 w-4" /> 复制任务 JSON
                </Button>
                <pre className="rounded-xl bg-muted p-4 text-xs">
                  {renderJson(quest)}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}

const ToggleButton = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <Button variant={active ? 'default' : 'outline'} size="sm" onClick={onClick}>
    {label}
  </Button>
)

const CutsceneCard = ({ scene, index }: { scene: any; index: number }) => {
  const subtitlePath = scene.subtitleCHS?.primary || scene.subtitleCHS?.other
  const { data: subtitleText } = useAsync(
    () => (subtitlePath ? getSubtitleText(subtitlePath) : Promise.resolve('')),
    [subtitlePath]
  )
  const srtEntries = subtitleText ? parseSrt(subtitleText).slice(0, 10) : []

  return (
    <div className="rounded-xl border border-border p-4">
      <p className="text-sm font-semibold">{scene.kind ?? 'cutscene'} · {scene.cutsceneId ?? index}</p>
      <pre className="mt-2 overflow-auto rounded-lg bg-muted p-3 text-xs">{renderJson(scene)}</pre>
      {subtitlePath && (
        <div className="mt-3 space-y-2">
          <a
            href={getAssetUrl(`data/subtitles/${subtitlePath}`)}
            className="text-sm"
            target="_blank"
            rel="noreferrer"
          >
            下载字幕
          </a>
          {srtEntries.length > 0 && (
            <div className="space-y-2">
              {srtEntries.map((entry) => (
                <div key={entry.id} className="rounded-lg border border-border p-2 text-xs">
                  <p className="text-muted-foreground">
                    {entry.start} → {entry.end}
                  </p>
                  <p className="mt-1">{entry.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
