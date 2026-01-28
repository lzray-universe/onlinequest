import { useEffect, useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const renderJson = (value: unknown) => JSON.stringify(value, null, 2)

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

type BranchListProps = {
  title: string
  branches: unknown[]
}

const BranchList = ({ title, branches }: BranchListProps) => {
  const [checked, setChecked] = useState(() => branches.map(() => false))

  useEffect(() => {
    setChecked(branches.map(() => false))
  }, [branches])

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-muted-foreground">{title}</p>
      <div className="space-y-2">
        {branches.map((branch, index) => (
          <div key={index} className="rounded-lg border border-border bg-background p-3">
            {branches.length > 1 && (
              <label className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <input
                  type="checkbox"
                  checked={checked[index] ?? false}
                  onChange={() =>
                    setChecked((prev) =>
                      prev.map((value, currentIndex) =>
                        currentIndex === index ? !value : value
                      )
                    )
                  }
                  className="h-3 w-3 rounded border-border"
                />
                选择分支 {index + 1}
              </label>
            )}
            <pre className="overflow-auto text-xs leading-relaxed text-foreground/90">
              {renderJson(branch)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  )
}

type QuestConditionDetailsProps = {
  data: unknown
}

type ConditionSection = {
  key: string
  label: string
  value: unknown
}

type ConditionSectionResult = {
  orderedSections: ConditionSection[]
  extraEntries: Array<[string, unknown]>
}

export const QuestConditionDetails = ({ data }: QuestConditionDetailsProps) => {
  const sections = useMemo<ConditionSectionResult>(() => {
    if (!isRecord(data)) {
      return { orderedSections: [], extraEntries: [] as Array<[string, unknown]> }
    }

    const orderedKeys: Array<[string, string]> = [
      ['finishCond', '完成条件'],
      ['triggerCond', '触发条件'],
      ['execActions', '执行动作'],
      ['guide', '引导信息'],
    ]

    const knownKeys = new Set(orderedKeys.map(([key]) => key))

    const orderedSections: ConditionSection[] = orderedKeys
      .map(([key, label]) => ({
        key,
        label,
        value: data[key],
      }))
      .filter(({ value }) => value !== undefined)

    const extraEntries = Object.entries(data).filter(([key]) => !knownKeys.has(key))

    return { orderedSections, extraEntries }
  }, [data])

  if (!isRecord(data)) {
    return (
      <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed">
        {renderJson(data)}
      </pre>
    )
  }

  const { orderedSections, extraEntries } = sections

  return (
    <div className="space-y-4">
      {orderedSections.map(({ key, label, value }) => {
        if (Array.isArray(value)) {
          if (value.length === 0) return null
          return <BranchList key={key} title={label} branches={value} />
        }

        if (value === null || value === undefined) return null

        return (
          <div key={key} className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">{label}</p>
            <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed">
              {renderJson(value)}
            </pre>
          </div>
        )
      })}
      {extraEntries.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">其他字段</p>
          <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed">
            {renderJson(Object.fromEntries(extraEntries))}
          </pre>
        </div>
      )}
    </div>
  )
}

type QuestConditionBlockProps = {
  json: string
}

export const QuestConditionBlock = ({ json }: QuestConditionBlockProps) => {
  const parsed = useMemo(() => {
    try {
      return JSON.parse(json)
    } catch {
      return json
    }
  }, [json])

  return (
    <details className="rounded-lg border border-border bg-muted/40 p-3">
      <summary className="cursor-pointer text-xs font-semibold text-muted-foreground">
        展开任务条件
      </summary>
      <div className="mt-3">
        <QuestConditionDetails data={parsed} />
      </div>
    </details>
  )
}

type QuestMarkdownWithConditionsProps = {
  markdown: string
}

const conditionRegex = /\*\*任务条件：\*\*[\s\S]*?```json\s*([\s\S]*?)```/g

export const QuestMarkdownWithConditions = ({ markdown }: QuestMarkdownWithConditionsProps) => {
  const parts = useMemo(() => {
    const output: Array<{ id: string; content: string; json?: string }> = []
    let match: RegExpExecArray | null
    let cursor = 0
    conditionRegex.lastIndex = 0

    while ((match = conditionRegex.exec(markdown)) !== null) {
      const [fullMatch, jsonBlock] = match
      const start = match.index
      if (start > cursor) {
        output.push({ id: `${cursor}-${start}`, content: markdown.slice(cursor, start) })
      }
      output.push({
        id: `condition-${start}`,
        content: fullMatch.replace(/```json[\s\S]*```/, '').trim(),
        json: jsonBlock.trim(),
      })
      cursor = start + fullMatch.length
    }

    if (cursor < markdown.length) {
      output.push({ id: `tail-${cursor}`, content: markdown.slice(cursor) })
    }

    return output
  }, [markdown])

  if (parts.length === 0) {
    return (
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown}
      </ReactMarkdown>
    )
  }

  return (
    <div className="space-y-3">
      {parts.map((part) => (
        <div key={part.id} className="space-y-3">
          {part.content && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {part.content}
            </ReactMarkdown>
          )}
          {part.json && <QuestConditionBlock json={part.json} />}
        </div>
      ))}
    </div>
  )
}
