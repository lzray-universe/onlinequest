import { useEffect, useMemo, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Compass,
  Home,
  Info,
  Menu,
  Search,
  Star,
  User,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { FontSelector } from './FontSelector'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { label: '首页', icon: Home, to: '/' },
  { label: '全部任务', icon: Search, to: '/quests' },
  { label: '地区浏览', icon: Compass, to: '/region/%E8%92%99%E5%BE%B7' },
  { label: '类型浏览', icon: BookOpen, to: '/type/WQ' },
  { label: '角色统计', icon: User, to: '/speakers' },
  { label: '收藏', icon: Star, to: '/quests?favorites=1' },
  { label: '关于', icon: Info, to: '/about' },
]

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname, location.search])

  const currentLabel = useMemo(() => {
    return navItems.find((item) => location.pathname.startsWith(item.to.split('?')[0]))?.label
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen((prev) => !prev)}
              aria-label="打开侧边栏"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">OnlineQuest</p>
                <p className="text-lg font-semibold">原神剧情任务浏览站</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-sm text-muted-foreground lg:block">
              {currentLabel ?? '任务世界'}
            </div>
            <FontSelector />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-background/95 p-6 backdrop-blur transition-transform lg:static lg:translate-x-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          )}
        >
          <nav className="mt-20 flex flex-col gap-2 lg:mt-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname.startsWith(item.to.split('?')[0])
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="mt-10 rounded-2xl border border-border bg-card p-4 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">提示</p>
            <p className="mt-2">
              使用顶部搜索与过滤条件，快速定位任务并深链分享。
            </p>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 px-4 py-8 lg:px-10">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children ?? <Outlet />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
