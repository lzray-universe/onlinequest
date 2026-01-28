import { useEffect, useMemo, useState } from 'react'

const DEFAULT_FONT_STACK =
  "'HYWenHei', 'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif"
const ORIGINAL_FONT_STACK =
  "'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif"
const SERIF_FONT_STACK = "'Noto Serif SC', 'Songti SC', serif"
const MONO_FONT_STACK =
  "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

const FONT_CHOICES = [
  { id: 'hywenhei', label: 'HYWenHei（默认）', value: DEFAULT_FONT_STACK },
  { id: 'original', label: '原始默认（Inter / Noto Sans SC）', value: ORIGINAL_FONT_STACK },
  { id: 'serif', label: '衬线 Serif', value: SERIF_FONT_STACK },
  { id: 'mono', label: '等宽 Mono', value: MONO_FONT_STACK },
  { id: 'custom', label: '自定义', value: '' },
]

const FONT_CHOICE_KEY = 'oq-font-choice'
const FONT_CUSTOM_KEY = 'oq-font-custom'

export const FontSelector = () => {
  const [choice, setChoice] = useState('hywenhei')
  const [customFont, setCustomFont] = useState('')

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(FONT_CHOICE_KEY)
    const storedCustom = window.localStorage.getItem(FONT_CUSTOM_KEY)
    if (storedChoice) {
      setChoice(storedChoice)
    }
    if (storedCustom) {
      setCustomFont(storedCustom)
    }
  }, [])

  const resolvedFont = useMemo(() => {
    const choiceEntry = FONT_CHOICES.find((item) => item.id === choice)
    if (choice === 'custom') {
      return customFont.trim() || DEFAULT_FONT_STACK
    }
    return choiceEntry?.value ?? DEFAULT_FONT_STACK
  }, [choice, customFont])

  useEffect(() => {
    document.documentElement.style.setProperty('--font-body', resolvedFont)
    window.localStorage.setItem(FONT_CHOICE_KEY, choice)
    if (choice === 'custom') {
      window.localStorage.setItem(FONT_CUSTOM_KEY, customFont)
    }
  }, [choice, customFont, resolvedFont])

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <label htmlFor="font-choice" className="hidden sm:block">
        字体
      </label>
      <select
        id="font-choice"
        value={choice}
        onChange={(event) => setChoice(event.target.value)}
        className="h-9 rounded-lg border border-border bg-background px-2 text-xs text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {FONT_CHOICES.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      {choice === 'custom' && (
        <input
          aria-label="自定义字体"
          value={customFont}
          onChange={(event) => setCustomFont(event.target.value)}
          placeholder="例如：'LXGW WenKai', serif"
          className="h-9 w-44 rounded-lg border border-border bg-background px-2 text-xs text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      )}
    </div>
  )
}
