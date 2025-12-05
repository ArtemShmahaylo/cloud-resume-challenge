import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/stylesheets/style.css'

import Nav from './components/Nav'
import LanguageSwitcher from './components/LanguageSwitcher'

import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'

function App() {
  const [lang, setLang] = useState('en')
  const [count, setCount] = useState(0) // пока не используем, но оставляем как у Эндрю

  return (
    <>
      {/* Меню навигации — показывается на всех страницах */}
      <Nav />

      {/* Переключатель языка — тоже на всех страницах */}
      <LanguageSwitcher lang={lang} setLang={setLang} />

      {/* Здесь мы говорим: какую страницу показывать при каком URL */}
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/resume" element={<Resume lang={lang} />} />
        <Route path="/projects" element={<Projects lang={lang} />} />
        <Route path="/contact" element={<Contacts lang={lang} />} />
      </Routes>
    </>
  )
}

export default App
