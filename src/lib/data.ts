import type { IndexesData, ManifestQuest, QuestData, SiteStats } from '../types/quest'
import { getAssetUrl } from './utils'

const cache = new Map<string, any>()

const fetchJson = async <T>(path: string): Promise<T> => {
  if (cache.has(path)) return cache.get(path) as T
  const response = await fetch(getAssetUrl(path))
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`)
  }
  const data = (await response.json()) as T
  cache.set(path, data)
  return data
}

const fetchText = async (path: string) => {
  if (cache.has(path)) return cache.get(path) as string
  const response = await fetch(getAssetUrl(path))
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`)
  }
  const data = await response.text()
  cache.set(path, data)
  return data
}

export const getManifest = () => fetchJson<ManifestQuest[]>('data/manifest.json')
export const getIndexes = () => fetchJson<IndexesData>('data/indexes.json')
export const getSiteStats = () => fetchJson<SiteStats>('data/site_stats.json')
export const getQuestData = (id: number) => fetchJson<QuestData>(`data/quests/${id}.json`)
const formatReadableMarkdown = (content: string) =>
  content.replace(/\*\*([^*\n]+?)：\*\*/g, '<strong>$1：</strong>')

export const getReadableMarkdown = async (path: string) => {
  const content = await fetchText(`data/${path}`)
  return formatReadableMarkdown(content)
}
export const getBuildInfo = (name: string) => fetchJson<Record<string, any>>(`data/meta/${name}`)
export const getSubtitleText = (path: string) => fetchText(`data/subtitles/${path}`)
export const getSpeakerIndex = () =>
  fetchJson<Record<string, number[]>>('data/speaker_index.json')
