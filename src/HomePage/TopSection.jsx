import React from 'react'
import iphone from '../assets/iphoneimg.png'
import { Link } from 'react-router-dom'

function TopSection() {
  return (
    <section className='pt-[100px] bg-slate-50 px-14'>
        <div className="flex flex-col md:flex-row items-center bg-gray-300 px-14 rounded-2xl pt-5">
            <div className='text-center md:text-left'>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8">The new phones are here take a look.</h1>
                <p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum labore sapiente quas asperiores ipsa commodi ab ex quae expedita dolorem.</p>

                <Link to="" className="border text-lg border-black py-3 px-12 rounded-3xl block mx-auto md:mx-0 w-fit">Explore</Link>
            </div>
            <img src={iphone} alt="" />
        </div>
    </section>
  )
}

export default TopSection