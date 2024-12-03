import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePages'
import CounterPage from './pages/CounterPage'
import NotFound from './pages/NotFound'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/Counter' element={<CounterPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
