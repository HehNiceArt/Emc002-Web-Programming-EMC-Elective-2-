/*Author: Andrei Dominic B. Quirante*/
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardPage from './pages/CardPage';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import CounterPage from './pages/CounterPage';
import NotFound from './components/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Card' element={<CardPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Counter' element={<CounterPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
