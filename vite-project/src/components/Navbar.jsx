import React, { useEffect, useState } from 'react'
import { TbMoustache } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


function Navbar() {
  const [display, setDisplay] = useState(false)
  const body = document.querySelector('body')

  const location = useLocation()

  useEffect(() => {
    setDisplay(false)
  }, [location])

  body.addEventListener('click', () => {
    setDisplay(false)
  })

  return (
    <nav className='flex w-full justify-between item-center bg-black h-[75px] text-white pl-6 fixed z-50 top-0 left-0 pr-3 md:pr-0'>
      
      <Link className='flex items-center gap-1.5 w-[150px]'>      
        <i className='text-red-500 right-5 text-6xl'><TbMoustache /></i>
        <h6 className='font-extrabold text-2xl'>NAROSUNDAR</h6>        
      </Link>

      <ul className={`flex w-[280px] md:w-[600px] md:static fixed flex-col md:flex-row top-[85px] justify-between items-center bg-zinc-600 md:bg-transparent font-bold text-xs  ${display ? 'left-1/2 -translate-x-1/2' : '-left-[-100%]'} transition-all delay-300 duration-300 ease-in-out py-6 md:py-0 md:translate-0 gap-y-4`} onClick={(e) => {
        e.stopPropagation()
      }}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <p className='flex h-full bg-red-600 items-center w-52 justify-center'><Link>FREE QUOTE</Link></p>
      </ul>

      <i className='md:hidden block self-center cursor-pointer' onClick={(e) => {
        setDisplay(prev => !prev)
        e.stopPropagation()
      }}><FaBars /></i>
    </nav>
  )
}

export default Navbar