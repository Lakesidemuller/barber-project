import React from 'react'
import { FaScissors } from "react-icons/fa6"
import styleone from '../assets/h1_hero1.jpg.webp'
import { Link } from 'react-router-dom'


function TopSection() {
  return (
    <section className='flex flex-col md:flex-row bg-black justify-between md:items-center pl-12 md:pl-24'>
      <div className='pt-28 pb-10 md:pb-0'>
        <i className='text-red-600 text-5xl'><FaScissors /></i>
        <h1 className='text-white font-extrabold text-5xl w-72'>WE'RE THE LAST OF BREED.</h1>
        <p className='text-white mt-8 text-2xl'>Achieve your Dream Style </p>
        <div className="w-fit bg-red-600">
        <Link to="" className='text-white transition-colors delay-300 duration-300 hover:text-red-600 mt-10 bg-red- block w-40 text-center h-14 py-4 relative group bg-transparent'><div className="absolute h-full w-0 group-hover:w-full bg-white left-0 top-0 transition-all delay-300 duration-500 ease-in-out "></div><p className='relative z-1'>Book Now</p></Link>
        </div>
        
      </div>

      <img src={styleone} alt="" className='w-3xl' />

    </section>
  )
}

export default TopSection