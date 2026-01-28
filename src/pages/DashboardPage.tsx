import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Compass,
  History,
  Map as MapIcon,
  MessageCircle,
  Sparkles,
  Star,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useAsync } from '../hooks/useAsync'
import { getIndexes, getManifest, getSiteStats } from '../lib/data'
import { formatNumber } from '../lib/utils'
import { QUEST_TYPE_LABELS, QUEST_TYPE_ORDER } from '../lib/questType'
import { getFavorites, getRecent } from '../lib/storage'

export const DashboardPage = () => {
  const { data: indexes } = useAsync(getIndexes, [])
  const { data: stats } = useAsync(getSiteStats, [])
  const { data: manifest } = useAsync(getManifest, [])

  useEffect(() => {
    document.title = '首页 · OnlineQuest'
  }, [])

  const recent = useMemo(() => getRecent(), [])
  const favorites = useMemo(() => getFavorites(), [])

  const lookup = useMemo(() => {
    const map = new Map<number, string>()
    manifest?.forEach((quest) => map.set(quest.id, quest.title))
    return map
  }, [manifest])

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> 任务总览
            </CardTitle>
            <CardDescription>覆盖全部剧情任务的统计摘要</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between text-sm">
              <span>任务总数</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.totalQuests) : '--'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>隐藏任务</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.hiddenQuests) : '--'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>对话句数</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.dialogLines) : '--'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>旁白句数</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.narrationLines) : '--'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>过场数量</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.cutscenes) : '--'}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>带字幕过场</span>
              <span className="text-lg font-semibold">
                {stats ? formatNumber(stats.cutscenesWithSubtitles) : '--'}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" /> 快捷入口
            </CardTitle>
            <CardDescription>按地区或类型探索剧情内容</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">地区</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {indexes &&
                  Object.entries(indexes.counts.regions).map(([region, count]) => (
                    <Link
                      key={region}
                      to={`/region/${encodeURIComponent(region)}`}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium hover:bg-muted"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapIcon className="h-4 w-4 text-primary" /> {region}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatNumber(count)}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground">类型</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {indexes &&
                  QUEST_TYPE_ORDER.map((type) => (
                    <Link
                      key={type}
                      to={`/type/${type}`}
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium hover:bg-muted"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Compass className="h-4 w-4 text-primary" /> {QUEST_TYPE_LABELS[type]}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatNumber(indexes.counts.types[type] ?? 0)}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" /> 最近浏览
            </CardTitle>
            <CardDescription>从上次查看的位置继续</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recent.length === 0 && (
              <p className="text-sm text-muted-foreground">暂无浏览记录</p>
            )}
            {recent.map((id) => (
              <Link
                key={id}
                to={`/quest/${id}`}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm hover:bg-muted"
              >
                <span className="font-medium">{lookup.get(id) ?? `任务 ${id}`}</span>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" /> 我的收藏
            </CardTitle>
            <CardDescription>快速访问你标记的剧情任务</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {favorites.length === 0 && (
              <p className="text-sm text-muted-foreground">尚未收藏任务</p>
            )}
            {favorites.map((id) => (
              <Link
                key={id}
                to={`/quest/${id}`}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm hover:bg-muted"
              >
                <span className="font-medium">{lookup.get(id) ?? `任务 ${id}`}</span>
                <Star className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
