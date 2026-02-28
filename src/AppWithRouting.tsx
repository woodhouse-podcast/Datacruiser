import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import GlobeExperimentPage from './GlobeExperimentPage'

function AppWithRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/globe-experiment" element={<GlobeExperimentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppWithRouting
