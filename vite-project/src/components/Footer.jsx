import React from 'react'
import { MdCall, MdOutlineCopyright } from "react-icons/md"
import { TbMoustache } from "react-icons/tb"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa"


function Footer() {
  return (
    <footer className='flex md:flex-row flex-col bg-black text-white px-14 justify-between py-16 mt-32'>
      
      <div className='flex flex-col gap-2'>
        <i className='text-red-500 text-4xl'><MdCall /></i>
        <h1 className='text-xl font-bold'>CONTACT INFO</h1>
        <p>913-473-7000</p>
      <p>contact@cakeshop.com</p>
      </div>

      <div className='w-[350px] text-center flex flex-col items-center gap-12'>
        <div className='flex flex-col items-center'>
          <i className='text-red-500 text-8xl'><TbMoustache /></i>
          <h1 className='text-2xl font-bold leading-2'>NAROSUNDAR</h1>
        </div>
        <p className='w-[250px] text-gray-400 font-light'>There are many variations of passages of Loremn Ipsum availble to the majority</p>
        <div className='flex gap-16 text-2xl'>
          <i><FaFacebook /></i>
          <i><FaInstagram /></i>
          <i><FaLinkedinIn /> </i>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <i className='text-red-500 text-4xl'><FaLocationArrow /></i>
        <h1 className='text-xl font-bold'>CONTACT INFO</h1>
        <p>913-473-7000</p>
        <p>contact@cakeshop.com</p>
      </div>
    </footer>
  )
}

export default Footer