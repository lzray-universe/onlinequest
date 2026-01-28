import { useEffect, useState } from 'react'

export const useAsync = <T>(factory: () => Promise<T>, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    factory()
      .then((result) => {
        if (mounted) setData(result)
      })
      .catch((err) => {
        if (mounted) setError(err as Error)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, deps)

  return { data, error, loading }
}
