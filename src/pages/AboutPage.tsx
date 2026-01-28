import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useAsync } from '../hooks/useAsync'
import { getBuildInfo, getSiteStats } from '../lib/data'

export const AboutPage = () => {
  const { data: buildInfo } = useAsync(() => getBuildInfo('build_info.json'), [])
  const { data: buildInfoEnriched } = useAsync(() => getBuildInfo('build_info_enriched.json'), [])
  const { data: stats } = useAsync(getSiteStats, [])

  useEffect(() => {
    document.title = '关于 · OnlineQuest'
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">关于与数据版本</h1>
        <p className="text-sm text-muted-foreground">数据来源与构建信息</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>站点生成信息</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">生成时间：{stats?.generatedAt ?? '--'}</p>
          <p className="text-sm">任务总数：{stats?.totalQuests ?? '--'}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>build_info.json</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="rounded-xl bg-muted p-4 text-xs">
            {buildInfo ? JSON.stringify(buildInfo, null, 2) : '加载中...'}
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>build_info_enriched.json</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="rounded-xl bg-muted p-4 text-xs">
            {buildInfoEnriched ? JSON.stringify(buildInfoEnriched, null, 2) : '加载中...'}
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
