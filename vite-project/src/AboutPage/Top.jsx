import React from 'react'
import shavetwo from "../assets/hero1.jpg.webp"

function Top() {
  return (
    <main>

        <div className='flex justify-between h-[400px] bg-black'>
            <div className='flex items-center mx-auto'>
                <h1 className=' text-white font-bold text-6xl'>About Us</h1>
            </div>

            <div className='w-[60%] hidden md:block'>
                <img src={shavetwo} alt="" className='h-full'/>
            </div>
        </div>

    </main>
  )
}

export default Top