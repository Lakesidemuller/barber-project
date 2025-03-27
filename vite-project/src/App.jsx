import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Services from './Pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
