import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Toggle } from '../components/ui/toggle'
import { QuestSection } from '../components/QuestSection'
import type { SortKey } from '../components/QuestSection'
import { useAsync } from '../hooks/useAsync'
import { getManifest, getSiteStats } from '../lib/data'
import { QUEST_TYPE_ORDER } from '../lib/questType'

export const RegionPage = () => {
  const { regionKey } = useParams()
  const region = regionKey ? decodeURIComponent(regionKey) : ''
  const { data: manifest } = useAsync(getManifest, [])
  const { data: stats } = useAsync(getSiteStats, [])
  const [sortKey, setSortKey] = useState<SortKey>('chapter')
  const [showHidden, setShowHidden] = useState(false)
  const [onlyCutscenes, setOnlyCutscenes] = useState(false)
  const [onlySubtitles, setOnlySubtitles] = useState(false)

  useEffect(() => {
    document.title = `${region} · 地区任务 · OnlineQuest`
  }, [region])

  const filtered = useMemo(() => {
    return (
      manifest?.filter((quest) => {
        if (quest.region !== region) return false
        if (!showHidden && quest.hidden) return false
        if (onlyCutscenes && !quest.hasCutscenes) return false
        if (onlySubtitles && !quest.hasVideoSubtitles) return false
        return true
      }) ?? []
    )
  }, [manifest, region, showHidden, onlyCutscenes, onlySubtitles])

  const statsEntry = stats?.byRegion?.[region]

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{region} · 地区任务</h1>
          <p className="text-sm text-muted-foreground">分类型浏览该地区所有剧情</p>
        </div>
        <Badge variant="outline">{filtered.length} 个任务</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>地区统计</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">任务总数</p>
            <p className="text-lg font-semibold">{statsEntry?.totalQuests ?? '--'}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">对话句数</p>
            <p className="text-lg font-semibold">{statsEntry?.dialogLines ?? '--'}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">旁白句数</p>
            <p className="text-lg font-semibold">{statsEntry?.narrationLines ?? '--'}</p>
          </div>
          <div className="rounded-xl border border-border p-4">
            <p className="text-xs text-muted-foreground">过场数量</p>
            <p className="text-lg font-semibold">{statsEntry?.cutscenes ?? '--'}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>浏览设置</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Toggle pressed={showHidden} onClick={() => setShowHidden((prev) => !prev)}>
            显示隐藏任务
          </Toggle>
          <Toggle pressed={onlyCutscenes} onClick={() => setOnlyCutscenes((prev) => !prev)}>
            仅过场
          </Toggle>
          <Toggle pressed={onlySubtitles} onClick={() => setOnlySubtitles((prev) => !prev)}>
            仅字幕
          </Toggle>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">排序</span>
            {(['chapter', 'level', 'id', 'title'] as SortKey[]).map((key) => (
              <Toggle key={key} pressed={sortKey === key} onClick={() => setSortKey(key)}>
                {key === 'chapter' && '章节'}
                {key === 'level' && '推荐等级'}
                {key === 'id' && 'ID'}
                {key === 'title' && '标题'}
              </Toggle>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {QUEST_TYPE_ORDER.map((type) => {
          const quests = filtered.filter((quest) => quest.questType === type)
          if (!quests.length) return null
          return <QuestSection key={type} questType={type} quests={quests} sortKey={sortKey} />
        })}
      </div>
    </div>
  )
}
