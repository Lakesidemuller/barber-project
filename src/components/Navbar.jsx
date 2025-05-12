import React, { useState } from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  
  const [display, setDisplay] = useState(false)
  return (
    <nav className='flex items-center justify-between px-16 h-[80px] fixed w-full top-0 left-0 bg-white z-50'>
        <h1>CALIFORNIA</h1>

        <ul className={`flex w-[230px] md:w-[600px] md:static fixed flex-col md:flex-row top-[85px] items-center gap-y-4 shadow-2xl md:shadow-none py-6 rounded-lg -translate-x-1/2 md:translate-x-0 md:py-0 bg-white justify-between transition-all delay-150 duration-150 ease-in-out ${display ? 'left-1/2' : 'left-[-100%]' }`}>
            <li><Link to="">ALL PRODUCTS</Link></li>
            <li><Link to="">SOLUTIONS</Link></li>
            <li><Link to="">ABOUT</Link></li>
            <li><Link to="/support">SUPPORT</Link></li>
        </ul>

        <div className='flex gap-3'>
            <i><CiSearch /></i>
            <i><CiShoppingCart /></i>
            <i className="md:hidden block" onClick={() => {
              setDisplay(prev => !prev)
            }}><FaBars /></i>
        </div>
    </nav>
  )
}

export default Navbar