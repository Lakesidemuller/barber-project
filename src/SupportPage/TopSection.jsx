import React from 'react'
import SupportImg from "../assets/Support_Image.png"

function TopSection() {
  return (
    <section className='pt-20'>

       
      <div className='relative flex flex-col items-center justify-center h-[380px] text-center'>
            
        <img src={SupportImg} alt="" className='absolute z-[-1] h-[100%] brightness-75'/>
            
        <div className='flex flex-col gap-4 w-[45%]'>

          <h1 className='text-6xl font-bold text-white'>We are here to help</h1>
          <p className='text-white font-medium'>Click the question below to view details</p>

        </div>
      </div>

      <div className='pt-10 pl-16'>
        <h1 className='text-2xl font-bold'>Common stuff</h1>
        <p>Something about a thing that is interesting</p>
      </div>

    </section>
  )
}

export default TopSection