import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { DashboardPage } from './pages/DashboardPage'
import { RegionPage } from './pages/RegionPage'
import { TypePage } from './pages/TypePage'
import { QuestsPage } from './pages/QuestsPage'
import { QuestDetailPage } from './pages/QuestDetailPage'
import { QuestReaderPage } from './pages/QuestReaderPage'
import { SpeakersPage } from './pages/SpeakersPage'
import { SpeakerDetailPage } from './pages/SpeakerDetailPage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'

const App = () => {
  return (
    <Routes>
      <Route path="/quest/:id/reader" element={<QuestReaderPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/region/:regionKey" element={<RegionPage />} />
        <Route path="/type/:questType" element={<TypePage />} />
        <Route path="/quests" element={<QuestsPage />} />
        <Route path="/quest/:id" element={<QuestDetailPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/speakers/:speakerId" element={<SpeakerDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
