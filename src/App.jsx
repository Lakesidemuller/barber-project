import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './components/Footer'
import Support from './Pages/Support'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='support' element={<Support />} />
          <Route path='about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
            
    </>
  )
}

export default App
