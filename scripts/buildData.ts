import { promises as fs } from 'node:fs'
import path from 'node:path'

const REGION_KEYWORDS = [
  '蒙德',
  '璃月',
  '稻妻',
  '须弥',
  '枫丹',
  '纳塔',
  '挪德卡莱',
]

const QUEST_TYPE_LABELS: Record<string, string> = {
  WQ: '世界任务',
  AQ: '魔神任务',
  LQ: '传说任务',
  IQ: '间章任务',
  EQ: '活动任务',
}

type QuestMeta = {
  questType?: string
  cityName?: string
  showType?: string
  chapterTitle?: string
  chapterNum?: number
  recommendLevel?: number
  needPlayerLevel?: number
  preMainQuestIds?: number[]
  nextMainQuestIds?: number[]
  rewards?: unknown
}

type QuestTalk = {
  dialogs?: Array<{ text?: string }>
}

type QuestFlow = {
  talks?: QuestTalk[]
}

type Quest = {
  mainQuestId?: number
  title?: string
  description?: string
  meta?: QuestMeta
  flow?: QuestFlow[]
  questNarration?: Array<{ text?: string }>
  cutscenes?: Array<{ kind?: string; subtitleCHS?: { primary?: string; other?: string } }>
  speakerCounts?: Array<{ roleType?: string; speakerId?: number; speakerName?: string; count?: number }>
}

const slug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u4e00-\u9fa5-]/g, '')

const detectRegion = (meta: QuestMeta | undefined, title = '', description = '') => {
  if (meta?.cityName && meta.cityName.trim()) {
    return meta.cityName.trim()
  }
  const chapterTitle = meta?.chapterTitle ?? ''
  const haystack = `${chapterTitle} ${title} ${description}`
  const found = REGION_KEYWORDS.find((region) => haystack.includes(region))
  return found ?? '未分类'
}

const summarizeRewards = (rewards: unknown) => {
  if (!rewards) return ''
  if (Array.isArray(rewards)) {
    return rewards
      .map((reward) => {
        if (typeof reward === 'string') return reward
        if (typeof reward === 'number') return reward.toString()
        if (reward && typeof reward === 'object') {
          const entries = Object.entries(reward as Record<string, unknown>)
          return entries
            .map(([key, value]) => `${key}:${String(value)}`)
            .join(' ')
        }
        return ''
      })
      .filter(Boolean)
      .join(' / ')
  }
  if (typeof rewards === 'object') {
    const entries = Object.entries(rewards as Record<string, unknown>)
    return entries
      .map(([key, value]) => `${key}:${String(value)}`)
      .join(' / ')
  }
  return String(rewards)
}

const readJson = async (filePath: string) => {
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content) as Quest
}

const ensureDir = async (dir: string) => {
  await fs.mkdir(dir, { recursive: true })
}

const copyDir = async (from: string, to: string) => {
  await ensureDir(to)
  await fs.cp(from, to, { recursive: true })
}

const build = async () => {
  const root = process.cwd()
  const dataRoot = path.join(root, 'CHS')
  const questsDir = path.join(dataRoot, 'quests')
  const readableDir = path.join(dataRoot, 'readable')
  const subtitlesDir = path.join(dataRoot, 'subtitles')
  const metaDir = path.join(dataRoot, 'meta')
  const publicDir = path.join(root, 'public', 'data')

  await ensureDir(publicDir)

  const readableFiles = await fs.readdir(readableDir).catch(() => [])
  const readableMap = new Map<number, string>()
  for (const file of readableFiles) {
    const match = file.match(/^(\d+)(?:_|\.md)/)
    if (!match) continue
    const id = Number(match[1])
    if (!Number.isNaN(id) && !readableMap.has(id)) {
      readableMap.set(id, `readable/${file}`)
    }
  }

  const questFiles = (await fs.readdir(questsDir)).filter((file) => file.endsWith('.json'))

  const manifest: Array<Record<string, unknown>> = []
  const byRegion: Record<string, Record<string, number[]>> = {}
  const byType: Record<string, Record<string, number[]>> = {}

  const siteStats = {
    generatedAt: new Date().toISOString(),
    totalQuests: 0,
    hiddenQuests: 0,
    dialogLines: 0,
    narrationLines: 0,
    cutscenes: 0,
    cutscenesWithSubtitles: 0,
    speakerTotals: {} as Record<string, { speakerId: number; speakerName: string; count: number }>,
    byRegion: {} as Record<
      string,
      {
        totalQuests: number
        dialogLines: number
        narrationLines: number
        cutscenes: number
        cutscenesWithSubtitles: number
      }
    >,
    byType: {} as Record<
      string,
      {
        totalQuests: number
        dialogLines: number
        narrationLines: number
        cutscenes: number
        cutscenesWithSubtitles: number
      }
    >,
  }

  const ensureStatsEntry = (bucket: Record<string, any>, key: string) => {
    if (!bucket[key]) {
      bucket[key] = {
        totalQuests: 0,
        dialogLines: 0,
        narrationLines: 0,
        cutscenes: 0,
        cutscenesWithSubtitles: 0,
      }
    }
    return bucket[key]
  }

  for (const file of questFiles) {
    const filePath = path.join(questsDir, file)
    const quest = await readJson(filePath)
    const id = quest.mainQuestId ?? Number(file.replace('.json', ''))
    const title = quest.title ?? ''
    const description = quest.description ?? ''
    const meta = quest.meta ?? {}
    const region = detectRegion(meta, title, description)
    const questType = meta.questType ?? 'WQ'
    const showType = meta.showType ?? 'QUEST_SHOW'
    const hidden = showType === 'QUEST_HIDDEN' || title.includes('$HIDDEN')
    const chapterTitle = meta.chapterTitle ?? ''
    const chapterNum = meta.chapterNum ?? 0
    const recommendLevel = meta.recommendLevel ?? 0
    const needPlayerLevel = meta.needPlayerLevel ?? 0
    const preMainQuestIds = meta.preMainQuestIds ?? []
    const nextMainQuestIds = meta.nextMainQuestIds ?? []

    const talks = quest.flow ?? []
    let dialogCount = 0
    for (const flow of talks) {
      for (const talk of flow.talks ?? []) {
        dialogCount += talk.dialogs?.length ?? 0
      }
    }

    const narrationCount = quest.questNarration?.length ?? 0
    const cutscenes = quest.cutscenes ?? []
    const hasCutscenes = cutscenes.length > 0
    const hasVideoSubtitles = cutscenes.some(
      (scene) =>
        scene.kind === 'video' &&
        Boolean(scene.subtitleCHS?.primary || scene.subtitleCHS?.other)
    )

    const speakerCounts = quest.speakerCounts ?? []
    const topSpeakers = speakerCounts
      .slice()
      .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      .slice(0, 5)

    manifest.push({
      id,
      title,
      description,
      questType,
      questTypeLabel: QUEST_TYPE_LABELS[questType] ?? questType,
      region,
      regionKey: slug(region),
      showType,
      hidden,
      chapterTitle,
      chapterNum,
      recommendLevel,
      needPlayerLevel,
      preMainQuestIds,
      nextMainQuestIds,
      hasReadable: true,
      readablePath: readableMap.get(id) ?? '',
      hasCutscenes,
      hasVideoSubtitles,
      talkLineCount: dialogCount,
      dialogCount,
      topSpeakers,
      rewardSummary: summarizeRewards(meta.rewards),
    })

    if (!byRegion[region]) byRegion[region] = {}
    if (!byRegion[region][questType]) byRegion[region][questType] = []
    byRegion[region][questType].push(id)

    if (!byType[questType]) byType[questType] = {}
    if (!byType[questType][region]) byType[questType][region] = []
    byType[questType][region].push(id)

    siteStats.totalQuests += 1
    if (hidden) siteStats.hiddenQuests += 1
    siteStats.dialogLines += dialogCount
    siteStats.narrationLines += narrationCount
    siteStats.cutscenes += cutscenes.length
    siteStats.cutscenesWithSubtitles += hasVideoSubtitles ? 1 : 0

    const regionStats = ensureStatsEntry(siteStats.byRegion, region)
    regionStats.totalQuests += 1
    regionStats.dialogLines += dialogCount
    regionStats.narrationLines += narrationCount
    regionStats.cutscenes += cutscenes.length
    regionStats.cutscenesWithSubtitles += hasVideoSubtitles ? 1 : 0

    const typeStats = ensureStatsEntry(siteStats.byType, questType)
    typeStats.totalQuests += 1
    typeStats.dialogLines += dialogCount
    typeStats.narrationLines += narrationCount
    typeStats.cutscenes += cutscenes.length
    typeStats.cutscenesWithSubtitles += hasVideoSubtitles ? 1 : 0

    for (const speaker of speakerCounts) {
      if (!speaker.speakerId) continue
      const key = String(speaker.speakerId)
      const existing = siteStats.speakerTotals[key]
      const count = speaker.count ?? 0
      if (!existing) {
        siteStats.speakerTotals[key] = {
          speakerId: speaker.speakerId,
          speakerName: speaker.speakerName ?? '未知角色',
          count,
        }
      } else {
        existing.count += count
      }
    }
  }

  const indexes = {
    byRegion,
    byType,
    counts: {
      total: siteStats.totalQuests,
      hidden: siteStats.hiddenQuests,
      regions: Object.fromEntries(
        Object.entries(byRegion).map(([region, types]) => [
          region,
          Object.values(types).reduce((sum, ids) => sum + ids.length, 0),
        ])
      ),
      types: Object.fromEntries(
        Object.entries(byType).map(([type, regions]) => [
          type,
          Object.values(regions).reduce((sum, ids) => sum + ids.length, 0),
        ])
      ),
    },
  }

  await fs.writeFile(
    path.join(publicDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
    'utf-8'
  )
  await fs.writeFile(
    path.join(publicDir, 'indexes.json'),
    JSON.stringify(indexes, null, 2),
    'utf-8'
  )
  await fs.writeFile(
    path.join(publicDir, 'site_stats.json'),
    JSON.stringify(siteStats, null, 2),
    'utf-8'
  )

  await copyDir(questsDir, path.join(publicDir, 'quests'))
  await copyDir(readableDir, path.join(publicDir, 'readable'))
  await copyDir(subtitlesDir, path.join(publicDir, 'subtitles'))
  await copyDir(metaDir, path.join(publicDir, 'meta'))

  console.log(`Manifest generated: ${manifest.length} quests`)
}

build().catch((error) => {
  console.error('Failed to build data', error)
  process.exit(1)
})
