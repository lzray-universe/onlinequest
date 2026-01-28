import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Filter, Search } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Toggle } from '../components/ui/toggle'
import { QuestCard } from '../components/QuestCard'
import { useAsync } from '../hooks/useAsync'
import { getIndexes, getManifest } from '../lib/data'
import { QUEST_TYPE_LABELS, QUEST_TYPE_ORDER } from '../lib/questType'
import type { ManifestQuest, QuestTypeCode } from '../types/quest'

const useSearchWorker = (manifest: ManifestQuest[] | null) => {
  const [results, setResults] = useState<number[]>([])
  const workerRef = useRef<Worker | null>(null)

  useEffect(() => {
    if (!manifest) return
    const worker = new Worker(new URL('../workers/searchWorker.ts', import.meta.url), {
      type: 'module',
    })
    workerRef.current = worker
    worker.postMessage({ type: 'index', payload: manifest })
    worker.onmessage = (event) => {
      if (event.data.type === 'results') {
        setResults(event.data.payload as number[])
      }
    }
    return () => worker.terminate()
  }, [manifest])

  const query = useCallback((value: string) => {
    workerRef.current?.postMessage({ type: 'query', payload: { query: value } })
  }, [])

  return { results, query }
}

const parseList = (value: string | null) => (value ? value.split(',').filter(Boolean) : [])

export const QuestsPage = () => {
  const { data: manifest } = useAsync(getManifest, [])
  const { data: indexes } = useAsync(getIndexes, [])
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchText, setSearchText] = useState(searchParams.get('q') ?? '')
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    document.title = '全部任务 · OnlineQuest'
  }, [])

  const { results, query } = useSearchWorker(manifest ?? null)

  useEffect(() => {
    query(searchText)
  }, [query, searchText])

  const selectedRegions = parseList(searchParams.get('regions'))
  const selectedTypes = parseList(searchParams.get('types')) as QuestTypeCode[]
  const showHidden = searchParams.get('hidden') === '1'
  const filterCutscene = searchParams.get('cutscene') === '1'
  const filterSubtitle = searchParams.get('subtitle') === '1'
  const favoritesOnly = searchParams.get('favorites') === '1'
  const chapterQuery = searchParams.get('chapter') ?? ''
  const levelMin = Number(searchParams.get('levelMin') || '0')
  const levelMax = Number(searchParams.get('levelMax') || '0')

  const filtered = useMemo(() => {
    if (!manifest) return []
    const favorites = favoritesOnly
      ? new Set(JSON.parse(localStorage.getItem('onlinequest_favorites') || '[]') as number[])
      : null

    return manifest.filter((quest) => {
      if (selectedRegions.length && !selectedRegions.includes(quest.region)) return false
      if (selectedTypes.length && !selectedTypes.includes(quest.questType)) return false
      if (!showHidden && quest.hidden) return false
      if (filterCutscene && !quest.hasCutscenes) return false
      if (filterSubtitle && !quest.hasVideoSubtitles) return false
      if (favorites && !favorites.has(quest.id)) return false
      if (chapterQuery && !quest.chapterTitle.includes(chapterQuery)) return false
      if (levelMin && quest.recommendLevel < levelMin) return false
      if (levelMax && quest.recommendLevel > levelMax) return false
      if (searchText) {
        if (!results.length) return false
        if (!results.includes(quest.id)) return false
      }
      return true
    })
  }, [
    manifest,
    selectedRegions,
    selectedTypes,
    showHidden,
    filterCutscene,
    filterSubtitle,
    favoritesOnly,
    searchText,
    results,
    chapterQuery,
    levelMin,
    levelMax,
  ])

  const parentRef = useRef<HTMLDivElement | null>(null)
  const rowVirtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 200,
    overscan: 8,
  })

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams)
    if (!value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  const toggleMulti = (key: string, value: string) => {
    const current = new Set(parseList(searchParams.get(key)))
    if (current.has(value)) {
      current.delete(value)
    } else {
      current.add(value)
    }
    updateParam(key, Array.from(current).join(','))
  }

  const toggleBoolean = (key: string) => {
    updateParam(key, searchParams.get(key) === '1' ? null : '1')
  }

  useEffect(() => {
    if (searchText) {
      updateParam('q', searchText)
    } else {
      updateParam('q', null)
    }
  }, [searchText])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">全部任务</h1>
          <p className="text-sm text-muted-foreground">快速筛选与搜索所有任务</p>
        </div>
        <Button variant="outline" onClick={() => setShowFilters((prev) => !prev)}>
          <Filter className="h-4 w-4" /> {showFilters ? '收起筛选' : '展开筛选'}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-4 w-4" /> 关键词搜索
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="搜索任务标题、描述、角色名"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        </CardContent>
      </Card>

      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle>筛选条件</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">地区</p>
              <div className="flex flex-wrap gap-2">
                {indexes &&
                  Object.keys(indexes.counts.regions).map((region) => (
                    <Toggle
                      key={region}
                      pressed={selectedRegions.includes(region)}
                      onClick={() => toggleMulti('regions', region)}
                    >
                      {region}
                    </Toggle>
                  ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">类型</p>
              <div className="flex flex-wrap gap-2">
                {QUEST_TYPE_ORDER.map((type) => (
                  <Toggle
                    key={type}
                    pressed={selectedTypes.includes(type)}
                    onClick={() => toggleMulti('types', type)}
                  >
                    {QUEST_TYPE_LABELS[type]}
                  </Toggle>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">高级筛选</p>
              <div className="flex flex-wrap gap-2">
                <Toggle pressed={showHidden} onClick={() => toggleBoolean('hidden')}>
                  显示隐藏任务
                </Toggle>
                <Toggle pressed={filterCutscene} onClick={() => toggleBoolean('cutscene')}>
                  仅过场任务
                </Toggle>
                <Toggle pressed={filterSubtitle} onClick={() => toggleBoolean('subtitle')}>
                  仅带字幕
                </Toggle>
                <Toggle pressed={favoritesOnly} onClick={() => toggleBoolean('favorites')}>
                  仅收藏
                </Toggle>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">章节 / 等级</p>
              <div className="flex flex-wrap gap-2">
                <Input
                  placeholder="章节关键字"
                  value={chapterQuery}
                  onChange={(event) => updateParam('chapter', event.target.value || null)}
                />
                <Input
                  type="number"
                  placeholder="推荐等级 ≥"
                  value={levelMin || ''}
                  onChange={(event) => updateParam('levelMin', event.target.value || null)}
                  className="w-32"
                />
                <Input
                  type="number"
                  placeholder="推荐等级 ≤"
                  value={levelMax || ''}
                  onChange={(event) => updateParam('levelMax', event.target.value || null)}
                  className="w-32"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-sm text-muted-foreground">
        共找到 {filtered.length} 个任务
      </div>

      <div
        ref={parentRef}
        className="h-[70vh] overflow-auto rounded-2xl border border-border bg-card p-4 scrollbar-thin"
      >
        <div
          style={{
            height: rowVirtualizer.getTotalSize(),
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const quest = filtered[virtualRow.index]
            return (
              <div
                key={quest.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <div className="pb-4">
                  <QuestCard quest={quest} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
