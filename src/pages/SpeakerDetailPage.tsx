import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useAsync } from '../hooks/useAsync'
import { getManifest } from '../lib/data'
import { QUEST_TYPE_LABELS } from '../lib/questType'

export const SpeakerDetailPage = () => {
  const { speakerId } = useParams()
  const id = Number(speakerId)
  const { data: manifest } = useAsync(getManifest, [])

  useEffect(() => {
    document.title = `角色 ${speakerId} · OnlineQuest`
  }, [speakerId])

  const quests = useMemo(() => {
    if (!manifest) return []
    return manifest.filter((quest) =>
      quest.topSpeakers.some((speaker) => speaker.speakerId === id)
    )
  }, [manifest, id])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof quests>()
    quests.forEach((quest) => {
      const key = `${quest.region} / ${quest.questType}`
      const list = map.get(key) ?? []
      list.push(quest)
      map.set(key, list)
    })
    return Array.from(map.entries())
  }, [quests])

  const speakerName = quests[0]?.topSpeakers.find((speaker) => speaker.speakerId === id)?.speakerName

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{speakerName ?? '未知角色'}</h1>
        <p className="text-sm text-muted-foreground">角色 ID：{speakerId}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>出现任务</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {grouped.map(([group, items]) => (
            <div key={group} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{group}</p>
                <Badge variant="secondary">{items.length} 个任务</Badge>
              </div>
              <div className="grid gap-2">
                {items.map((quest) => (
                  <Link
                    key={quest.id}
                    to={`/quest/${quest.id}?speakerId=${speakerId}`}
                    className="rounded-xl border border-border px-4 py-3 text-sm hover:bg-muted"
                  >
                    <p className="font-medium">{quest.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {quest.region} · {QUEST_TYPE_LABELS[quest.questType]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
