import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getAssetUrl = (path: string) => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('zh-CN').format(value)
}

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}
