# OnlineQuest · 剧情任务浏览站

OnlineQuest 是一个用于浏览剧情任务（quests）的单页应用，支持按地区/类型浏览、全文搜索、任务详情与沉浸式阅读模式。项目采用 **React 18 + TypeScript + Vite + TailwindCSS + shadcn/ui**，可直接部署到 GitHub Pages。

## ✨ 功能亮点

- **按地区/类型分组浏览**（地区页、类型页、全部任务页）
- **任务详情全内容**：元信息、步骤 flow、对话、旁白、奖励、可读剧情 Markdown、过场与字幕、原始 JSON
- **阅读模式**：沉浸式排版，支持字体/行距/主题调整，记住阅读位置
- **快速搜索与筛选**：Web Worker 索引，不卡主线程
- **深链分享**：过滤条件与任务链接均可直接分享

## 📦 数据结构

将解压后的数据包放在项目根目录的 `CHS/` 下：

```
CHS/
  quests/
  readable/
  subtitles/
  meta/
```

构建时会自动生成以下文件，并复制必要资源到 `public/data/`：

```
public/data/
  manifest.json
  indexes.json
  site_stats.json
  quests/
  readable/
  subtitles/
  meta/
```

## 🚀 本地运行

```bash
npm install
npm run build:data
npm run dev
```

## 🧱 构建 & 部署

```bash
npm run build
```

### GitHub Pages

> **必须使用 HashRouter**（已集成），避免刷新 404。

- 如果仓库名为 `<REPO_NAME>`，请设置 `VITE_BASE="/<REPO_NAME>/"`。
- 在 GitHub Actions 中可注入 `VITE_BASE`，或手动运行：

```bash
VITE_BASE="/<REPO_NAME>/" npm run build
```

## 🧩 技术栈

- React 18 + TypeScript
- Vite
- TailwindCSS
- shadcn/ui + lucide-react
- framer-motion
- React Router (HashRouter)
- react-markdown + remark-gfm
- @tanstack/react-virtual

## 📄 License

MIT
