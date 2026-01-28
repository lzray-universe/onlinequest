import { useEffect, useMemo, useState, type ComponentProps } from 'react'
import ReactMarkdown, { type Components, type ExtraProps } from 'react-markdown'
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

type BranchOption = {
  label: string
  content: string
}

type MarkdownSection =
  | { type: 'md'; content: string }
  | { type: 'branch'; options: BranchOption[] }

const branchHeadingRegex = /^###\s*(分支|选择|选项)：\s*(.+)\s*$/
const branchBoldRegex = /^\*\*(分支|选择|选项)：\s*(.+?)\*\*\s*$/
const branchStrongRegex = /^<strong>(分支|选择|选项)：<\/strong>\s*(.+)\s*$/
const headingRegex = /^#{1,6}\s+/

const getBranchLabel = (line: string) => {
  const headingMatch = line.match(branchHeadingRegex)
  if (headingMatch) return headingMatch[2]?.trim() ?? ''

  const boldMatch = line.match(branchBoldRegex)
  if (boldMatch) return boldMatch[2]?.trim() ?? ''

  const strongMatch = line.match(branchStrongRegex)
  if (strongMatch) return strongMatch[2]?.trim() ?? ''

  return null
}

const parseMarkdownWithBranches = (markdown: string): MarkdownSection[] => {
  const lines = markdown.split('\n')
  const sections: MarkdownSection[] = []
  let normalBuffer: string[] = []
  let branchOptions: Array<{ label: string; contentLines: string[]; titleLine: string }> | null =
    null
  let currentBranchIndex = -1

  const flushNormal = () => {
    if (normalBuffer.length > 0) {
      sections.push({ type: 'md', content: normalBuffer.join('\n') })
      normalBuffer = []
    }
  }

  const finalizeBranchGroup = () => {
    if (!branchOptions) return
    if (branchOptions.length >= 2) {
      sections.push({
        type: 'branch',
        options: branchOptions.map((option) => ({
          label: option.label,
          content: option.contentLines.join('\n').trim(),
        })),
      })
    } else if (branchOptions.length === 1) {
      const option = branchOptions[0]
      const content = [option.titleLine, ...option.contentLines].join('\n')
      sections.push({ type: 'md', content })
    }
    branchOptions = null
    currentBranchIndex = -1
  }

  lines.forEach((line) => {
    const label = getBranchLabel(line)
    const isHeadingLine = headingRegex.test(line)

    if (label) {
      flushNormal()
      if (!branchOptions) branchOptions = []
      branchOptions.push({ label, contentLines: [], titleLine: line })
      currentBranchIndex = branchOptions.length - 1
      return
    }

    if (branchOptions && currentBranchIndex >= 0) {
      if (isHeadingLine) {
        finalizeBranchGroup()
        normalBuffer.push(line)
        return
      }
      branchOptions[currentBranchIndex]?.contentLines.push(line)
      return
    }

    normalBuffer.push(line)
  })

  flushNormal()
  finalizeBranchGroup()

  return sections
}

type MarkdownCodeProps = ComponentProps<'code'> & ExtraProps & { inline?: boolean }

const markdownComponents: Components = {
  code(props) {
    const { className, children, ...rest } = props
    const inline = (props as MarkdownCodeProps).inline
    if (inline) {
      return (
        <code className={className} {...rest}>
          {children}
        </code>
      )
    }

    const isJson = (className ?? '').includes('language-json')
    if (!isJson) {
      return (
        <pre className="overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed">
          <code className={className} {...rest}>
            {children}
          </code>
        </pre>
      )
    }

    return (
      <details className="rounded-lg border border-border bg-muted/40 p-3">
        <summary className="cursor-pointer text-xs font-semibold text-muted-foreground">
          展开 JSON
        </summary>
        <pre className="mt-3 overflow-auto rounded-lg bg-muted p-3 text-xs leading-relaxed">
          <code className={className} {...rest}>
            {children}
          </code>
        </pre>
      </details>
    )
  },
}

type BranchGroupProps = {
  options: BranchOption[]
}

const BranchGroup = ({ options }: BranchGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4 rounded-xl border border-border bg-muted/20 p-4">
      <div className="flex flex-wrap gap-3">
        {options.map((option, index) => {
          const isSelected = index === selectedIndex
          return (
            <label
              key={`${option.label}-${index}`}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2 py-1 text-sm ${
                isSelected ? 'bg-muted font-semibold text-foreground' : 'text-muted-foreground'
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => setSelectedIndex(index)}
                className="h-3 w-3 rounded border-border"
              />
              {option.label}
            </label>
          )
        })}
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>
        {options[selectedIndex]?.content ?? ''}
      </ReactMarkdown>
    </div>
  )
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

const conditionRegex =
  /(?:\*\*任务条件：\*\*|<strong>任务条件：<\/strong>)[\s\S]*?```json\s*([\s\S]*?)```/g

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

  const renderMarkdownWithBranches = (content: string) => {
    const sections = parseMarkdownWithBranches(content)
    return sections.map((section, index) => {
      if (section.type === 'branch') {
        return <BranchGroup key={`branch-${index}`} options={section.options} />
      }

      return (
        <ReactMarkdown
          key={`md-${index}`}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={markdownComponents}
        >
          {section.content}
        </ReactMarkdown>
      )
    })
  }

  if (parts.length === 0) {
    return <div className="space-y-3">{renderMarkdownWithBranches(markdown)}</div>
  }

  return (
    <div className="space-y-3">
      {parts.map((part) => (
        <div key={part.id} className="space-y-3">
          {part.content && <div className="space-y-3">{renderMarkdownWithBranches(part.content)}</div>}
          {part.json && <QuestConditionBlock json={part.json} />}
        </div>
      ))}
    </div>
  )
}
