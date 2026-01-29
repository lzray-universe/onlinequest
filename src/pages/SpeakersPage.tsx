import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useAsync } from '../hooks/useAsync'
import { getSpeakersIndex } from '../lib/data'
import { formatNumber } from '../lib/utils'

export const SpeakersPage = () => {
  const { data: speakersIndex, error } = useAsync(getSpeakersIndex, [])
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.title = '角色统计 · OnlineQuest'
  }, [])

  const speakers = useMemo(() => {
    const list = speakersIndex?.speakers ?? []
    if (!query) return list
    return list.filter((speaker) => speaker.name.includes(query))
  }, [speakersIndex, query])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">全站角色统计</h1>
        <p className="text-sm text-muted-foreground">角色台词数排行与出现分布</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-4 w-4" /> 搜索角色
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="输入角色名" value={query} onChange={(event) => setQuery(event.target.value)} />
        </CardContent>
      </Card>

      {error ? (
        <Card>
          <CardContent className="py-6 text-sm text-destructive">
            角色数据加载失败，请稍后重试。
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-4">
        {speakers.map((speaker) => (
          <Link
            key={speaker.id}
            to={`/speakers/${speaker.id}`}
            className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-4 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{speaker.name}</p>
                <p className="text-xs text-muted-foreground">ID: {speaker.id}</p>
              </div>
            </div>
            <p className="text-sm font-semibold">{formatNumber(speaker.count)} 句</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
