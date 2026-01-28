import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
    <h1 className="text-3xl font-semibold">页面未找到</h1>
    <p className="text-sm text-muted-foreground">请检查链接或返回首页。</p>
    <Button asChild>
      <Link to="/">返回首页</Link>
    </Button>
  </div>
)
