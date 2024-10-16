import React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './index.css'

// Pages
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

// Extra Pages
import NotFound from './pages/NotFound.jsx'
import UnderConstruction from './pages/UnderConstruction.jsx'

// Components
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Nav />
      <div className="px-page max-sm:px-page relative overflow-hidden max-w-svw">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project/:id' element={<UnderConstruction />}/>
          <Route path='/about-me' element={<UnderConstruction />}/>
          <Route path='/donate' element={<UnderConstruction />}/>
          <Route path='/comparer' element={<UnderConstruction />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
)