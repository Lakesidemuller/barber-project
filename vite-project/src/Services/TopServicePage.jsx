import React from 'react'
import serviceimg from "../assets/hero2.jpg.webp"

function TopServicePage() {
  return (
    <main className='mb-28'>
        <div className='flex justify-between h-[400px] bg-black'>
            <div className='flex items-center mx-auto'>
                <h1 className=' text-white font-bold text-6xl'>Services</h1>
            </div>

            <div className='w-[60%]'>
                <img src={serviceimg} alt="" className='h-full'/>
            </div>
        </div>
    </main>
  )
}

export default TopServicePage