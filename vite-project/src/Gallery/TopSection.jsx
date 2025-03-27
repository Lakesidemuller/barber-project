import React from 'react'
import bwshave from "../assets/hero3.jpg.webp"


function TopSection() {
  return (
    <main>
        <div className='flex justify-between h-[350px] bg-black'>
            <div className='flex items-center mx-auto'>
                <h1 className=' text-white font-bold text-6xl'>Gallery</h1>
            </div>
            <div className='w-[60%]'>
                <img src={bwshave} alt="" className='h-full'/>
            </div>
        </div>
    </main>
  )
}

export default TopSection