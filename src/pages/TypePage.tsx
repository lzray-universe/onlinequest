import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Toggle } from '../components/ui/toggle'
import { QuestSection, SortKey } from '../components/QuestSection'
import { useAsync } from '../hooks/useAsync'
import { getManifest } from '../lib/data'
import { QUEST_TYPE_LABELS } from '../lib/questType'
import type { QuestTypeCode } from '../types/quest'

export const TypePage = () => {
  const { questType } = useParams()
  const type = (questType ?? 'WQ') as QuestTypeCode
  const { data: manifest } = useAsync(getManifest, [])
  const [sortKey, setSortKey] = useState<SortKey>('chapter')
  const [showHidden, setShowHidden] = useState(false)
  const [onlyCutscenes, setOnlyCutscenes] = useState(false)
  const [onlySubtitles, setOnlySubtitles] = useState(false)

  useEffect(() => {
    document.title = `${QUEST_TYPE_LABELS[type]} · OnlineQuest`
  }, [type])

  const filtered = useMemo(() => {
    return (
      manifest?.filter((quest) => {
        if (quest.questType !== type) return false
        if (!showHidden && quest.hidden) return false
        if (onlyCutscenes && !quest.hasCutscenes) return false
        if (onlySubtitles && !quest.hasVideoSubtitles) return false
        return true
      }) ?? []
    )
  }, [manifest, type, showHidden, onlyCutscenes, onlySubtitles])

  const regions = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    filtered.forEach((quest) => {
      const list = map.get(quest.region) ?? []
      list.push(quest)
      map.set(quest.region, list)
    })
    return Array.from(map.entries())
  }, [filtered])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{QUEST_TYPE_LABELS[type]} · 任务</h1>
          <p className="text-sm text-muted-foreground">按地区进一步浏览任务</p>
        </div>
        <Badge variant="outline">{filtered.length} 个任务</Badge>
      </div>

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
        {regions.map(([region, quests]) => (
          <div key={region} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{region}</h2>
                <p className="text-sm text-muted-foreground">{quests.length} 个任务</p>
              </div>
              <Badge variant="secondary">{region}</Badge>
            </div>
            <QuestSection questType={type} quests={quests} sortKey={sortKey} />
          </div>
        ))}
      </div>
    </div>
  )
}
