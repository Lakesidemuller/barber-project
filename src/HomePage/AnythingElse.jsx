import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

function AnythingElse() {
  return (
    <section className='flex flex-col items-center h-[300px] gap-4 bg-white px-2 gap-y-7'>
        <h1 className='md:w-[550px] text-center text-[40px] leading-8 font-bold h-12'>Looking for anything else?</h1>

        <div className='relative mx-auto w-fit'>
            <i className='absolute left-5 top-4 text-3xl'><CiSearch /></i>
            <input type="text" placeholder='Search Keyword' className='h-14 w-full md:w-[650px] rounded-full border border-blue-400 bg-inherit outline-none placeholder-black pl-14' />
        </div>

        <div className="flex flex-wrap gap-1 md:w-[650px] justify-center">
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Iphone</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Charger</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Gift</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Google Pixel 3</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Keyboard</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>13 Pro Max</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Iphone 12</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Laptop</Link>
            <Link to="" className='block border border-gray-400 rounded-3xl py-2 px-5 '>Mobile</Link>
        </div>
    </section>
  )
}

export default AnythingElse