import React from 'react'
import one from "../assets/instra1.jpg.webp"
import two from "../assets/instra2.jpg.webp"
import three from "../assets/instra3.jpg.webp"
import four from "../assets/instra4.jpg.webp"
import five from "../assets/instra5.jpg.webp"
import six from "../assets/instra6.jpg.webp"
function MidSection() {
  return (
    <main className='flex flex-col bg-white py-[90px] gap-10'>
        <div className='flex flex-col gap-6 items-center'>
            <hr className='w-16 h-1.5 border bg-red-600 border-red-600 '/>
            <h1 className='text-4xl font-bold'>GALLERY</h1>
        </div>
        <div className='flex flex-wrap gap-5 pl-36'>
            <img src={one} alt="" className='w-[27%]'/>
            <img src={two} alt="" className='w-[27%]'/>
            <img src={three} alt="" className='w-[27%]'/>
            <img src={four} alt="" className='w-[27%]'/>
            <img src={five} alt="" className='w-[27%]'/>
            <img src={six} alt="" className='w-[27%]'/>
        </div>

    </main>
  )
}

export default MidSection