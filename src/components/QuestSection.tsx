import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { ManifestQuest, QuestTypeCode } from '../types/quest'
import { QuestCard } from './QuestCard'
import { QUEST_TYPE_LABELS } from '../lib/questType'
import { Button } from './ui/button'

export type SortKey = 'chapter' | 'level' | 'id' | 'title'

export const QuestSection = ({
  quests,
  questType,
  defaultOpen = true,
  sortKey,
}: {
  quests: ManifestQuest[]
  questType: QuestTypeCode
  defaultOpen?: boolean
  sortKey: SortKey
}) => {
  const [open, setOpen] = useState(defaultOpen)

  const sorted = useMemo(() => {
    const next = [...quests]
    switch (sortKey) {
      case 'chapter':
        return next.sort((a, b) => a.chapterNum - b.chapterNum)
      case 'level':
        return next.sort((a, b) => a.recommendLevel - b.recommendLevel)
      case 'title':
        return next.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
      default:
        return next.sort((a, b) => a.id - b.id)
    }
  }, [quests, sortKey])

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{QUEST_TYPE_LABELS[questType]}</h2>
          <p className="text-sm text-muted-foreground">{quests.length} 个任务</p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setOpen((prev) => !prev)}>
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          {open ? '收起' : '展开'}
        </Button>
      </div>
      {open && (
        <div className="grid gap-4">
          {sorted.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
        </div>
      )}
    </section>
  )
}
