import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CiAssist from './pages/CiAssist'
import Poems from './pages/Poems.jsx'
import PoemPage from './pages/PoemPage'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/tools" element={<CiAssist />} />
      <Route path="/poems" element={<Poems />} />
      <Route path="/poems/:title" element={<PoemPage />} />
    </Routes>
  )
}

export default App