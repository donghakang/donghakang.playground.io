import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/about'
import MainPage from './pages/main'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
