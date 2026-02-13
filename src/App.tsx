import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ComponentShowcase } from './pages/ComponentShowcase'
import { CalendarPage } from './pages/CalendarPage'
import { SearchPage } from './pages/SearchPage'
import { SportPage } from './pages/SportPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sport/futebol" element={<SportPage sport="futebol" />} />
        <Route path="/sport/basquete" element={<SportPage sport="basquete" />} />
        <Route path="/sport/futebol-americano" element={<SportPage sport="futebol-americano" />} />
        <Route path="/sport/automobilismo" element={<SportPage sport="automobilismo" />} />
        <Route path="/sport/beisebol" element={<SportPage sport="beisebol" />} />
        <Route path="/sport/hoquei" element={<SportPage sport="hoquei" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
