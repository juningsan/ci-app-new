import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CiAssist from './pages/CiAssist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tools" element={<CiAssist />} />
    </Routes>
  )
}

export default App