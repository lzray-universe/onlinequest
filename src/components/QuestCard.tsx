import { Link } from 'react-router-dom'
import { MessageCircle, PlayCircle, Star } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { QUEST_TYPE_COLORS } from '../lib/questType'
import type { ManifestQuest } from '../types/quest'
import { toggleFavorite, getFavorites } from '../lib/storage'
import { useState } from 'react'

export const QuestCard = ({ quest }: { quest: ManifestQuest }) => {
  const [favorites, setFavorites] = useState(() => getFavorites())
  const isFavorite = favorites.includes(quest.id)

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div>
          <Link to={`/quest/${quest.id}`} className="text-base font-semibold">
            {quest.title}
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">
            {quest.chapterNum || quest.chapterTitle || '未分类章节'} · 推荐等级 {quest.recommendLevel || '--'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={QUEST_TYPE_COLORS[quest.questType]}>
            {quest.questTypeLabel} · {quest.questType}
          </Badge>
          {quest.hidden && <Badge variant="secondary">隐藏</Badge>}
        </div>
      </div>
      <p className="mt-3 max-h-10 overflow-hidden text-sm text-muted-foreground">{quest.description}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" /> {quest.dialogCount} 对话
          </span>
          <span className="flex items-center gap-1">
            <PlayCircle className="h-4 w-4" /> {quest.hasCutscenes ? '含过场' : '无过场'}
          </span>
        </div>
        <Button
          variant={isFavorite ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFavorites(toggleFavorite(quest.id))}
        >
          <Star className="h-4 w-4" />
          {isFavorite ? '已收藏' : '收藏'}
        </Button>
      </div>
    </div>
  )
}
