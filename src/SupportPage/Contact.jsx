import React from 'react'
import { Link } from 'react-router-dom'
import Discord from '../assets/discord.svg'

function Contact() {
  return (
    <section className='flex flex-col px-40'>
      <div className='flex flex-col items-center gap-10 h-56 mx-auto rounded-lg pt-5 w-[990px] border'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold w-80'>Not finding what you're looking for?</h1>
          <p>Something about the product</p>
        </div>
        <button type="submit" className='bg-blue-700 text-white w-[300px] h-12 rounded-2xl'>CONTACT</button>
      </div>

      <div className='flex justify-between items-center'>
        <div className='leading-[50px]'>
          <h1 className='text-5xl font-bold'>Talk to our group in Disscord</h1>
          <p className='font-medium'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        
          <Link to='' className='text-blue-700 font-medium'>Get together with our group to chat</Link>
        </div>
        <img src={Discord} alt="" />
      </div>
    </section>
  )
}

export default Contact