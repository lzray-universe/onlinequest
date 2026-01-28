import { Link } from 'react-router-dom'
import type { ChapterGroup } from '../lib/chapter'
import { Badge } from './ui/badge'

const buildLink = (chapterId: number, searchParams?: string) => {
  if (!searchParams) return `/chapter/${chapterId}`
  return `/chapter/${chapterId}?${searchParams}`
}

export const ChapterCard = ({
  chapter,
  searchParams,
}: {
  chapter: ChapterGroup
  searchParams?: string
}) => {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <Link to={buildLink(chapter.chapterId, searchParams)} className="text-base font-semibold">
            {chapter.chapterNum || '未分类章节'}
          </Link>
          <p className="mt-1 text-xs text-muted-foreground">
            {chapter.chapterTitle || '章节未命名'}
          </p>
        </div>
        <Badge variant="secondary">{chapter.quests.length} 个任务</Badge>
      </div>
    </div>
  )
}
