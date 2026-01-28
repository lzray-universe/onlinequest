import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Copy, Moon, Sun, Type } from 'lucide-react'
import { QuestMarkdownWithConditions } from '../components/QuestConditionDetails'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { useAsync } from '../hooks/useAsync'
import { getManifest, getQuestData, getReadableMarkdown } from '../lib/data'
import { getReaderPosition, setReaderPosition } from '../lib/storage'
import { clamp } from '../lib/utils'

export const QuestReaderPage = () => {
  const { id } = useParams()
  const questId = Number(id)
  const { data: manifest } = useAsync(getManifest, [])
  const { data: quest } = useAsync(() => getQuestData(questId), [questId])
  const questMeta = manifest?.find((item) => item.id === questId)
  const [fontSize, setFontSize] = useState(16)
  const [lineHeight, setLineHeight] = useState(1.8)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (questMeta?.title) {
      document.title = `${questMeta.title} · 阅读模式 · OnlineQuest`
    }
  }, [questMeta?.title])

  const { data: readable } = useAsync(
    () => (questMeta?.readablePath ? getReadableMarkdown(questMeta.readablePath) : Promise.resolve('')),
    [questMeta?.readablePath]
  )

  useEffect(() => {
    const position = getReaderPosition(questId)
    window.scrollTo({ top: position })
    const handler = () => setReaderPosition(questId, window.scrollY)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [questId])

  const combinedText = useMemo(() => {
    const parts: string[] = []
    if (readable) parts.push(readable)
    quest?.flow?.forEach((flow) => {
      flow.talks?.forEach((talk) => {
        talk.dialogs?.forEach((dialog) => {
          parts.push(`${dialog.speakerName ?? '未知角色'}：${dialog.text}`)
        })
      })
    })
    quest?.questNarration?.forEach((line) => {
      parts.push(`[旁白] ${line.text}`)
    })
    return parts.join('\n')
  }, [readable, quest])

  const copyText = async (asMarkdown: boolean) => {
    const output = asMarkdown ? combinedText : combinedText.replace(/\n+/g, '\n')
    await navigator.clipboard.writeText(output)
  }

  const renderReadableWithConditions = () => {
    if (!readable) return null
    return <QuestMarkdownWithConditions markdown={readable} />
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="sticky top-0 z-30 border-b border-border bg-background/90 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <div>
            <Link to={`/quest/${questId}`} className="flex items-center gap-2 text-sm">
              <ArrowLeft className="h-4 w-4" /> 返回任务详情
            </Link>
            <h1 className="mt-2 text-xl font-semibold">{questMeta?.title ?? `任务 ${questId}`}</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />} 主题
            </Button>
            <Button variant="outline" size="sm" onClick={() => copyText(false)}>
              <Copy className="h-4 w-4" /> 复制纯文本
            </Button>
            <Button variant="outline" size="sm" onClick={() => copyText(true)}>
              <Copy className="h-4 w-4" /> 复制 Markdown
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-4 flex max-w-4xl flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Type className="h-4 w-4" /> 字号
            <Input
              type="number"
              value={fontSize}
              onChange={(event) => setFontSize(clamp(Number(event.target.value), 14, 24))}
              className="w-20"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            行距
            <Input
              type="number"
              step="0.1"
              value={lineHeight}
              onChange={(event) => setLineHeight(clamp(Number(event.target.value), 1.4, 2.4))}
              className="w-20"
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl space-y-6 px-4 py-10">
        <Card className="p-6">
          <div style={{ fontSize, lineHeight }} className="prose-quest">
            {readable ? renderReadableWithConditions() : <p className="text-sm text-muted-foreground">暂无可读剧情</p>}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold">对话与旁白</h2>
          <div className="mt-4 space-y-3">
            {quest?.flow?.map((flow) => (
              <div key={flow.subQuestId} className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  子任务 {flow.subQuestId} · Step {flow.order}
                </p>
                {flow.talks?.map((talk) =>
                  talk.dialogs?.map((dialog, index) => (
                    <div key={index} className="rounded-xl border border-border p-4">
                      <p className="text-sm font-semibold">{dialog.speakerName ?? '未知角色'}</p>
                      <p className="mt-1 text-sm text-foreground/90">{dialog.text}</p>
                    </div>
                  ))
                )}
              </div>
            ))}
            {quest?.questNarration?.map((line, index) => (
              <div key={index} className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-sm font-semibold">旁白</p>
                <p className="mt-1 text-sm text-foreground/90">{line.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
