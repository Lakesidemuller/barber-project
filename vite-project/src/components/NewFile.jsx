import React from 'react'
import beards from "../assets/about1.jpg.webp"
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa"

function 
NewFile() {
  return (
    <section className='flex py-32 px-5 md:px-20 xl:px-16 justify-between items-center flex-wrap gap-y-7'>
        <div className='w-full lg:w-[40%] xl:w-[32%] font-light text-[18px] flex flex-col md:flex-col gap-5'>

            <div className='relative flex gap-3 xl:gap-0 xl:justify-between'>
                <i className='text-red-600 absolute left-4 top-4'><FaCheck /></i>
                <div className='w-[50px] h-[50px] rounded-[50%] bg-red-50'></div>
                <p className='w-full max-w-[400px] lg:w-72'>Be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='relative flex gap-3 xl:gap-0 xl:justify-between'>
                <i className='text-red-600 absolute left-4 top-4'><FaCheck /></i>
                <div className='w-[50px] h-[50px] rounded-[50%] bg-red-50'></div>
                <p className='w-full max-w-[400px] lg:w-72'>Psum available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='relative flex gap-3 xl:gap-0 xl:justify-between'>
                <i className='text-red-600 absolute left-4 top-4'><FaCheck /></i>
                <div className='w-[50px] h-[50px] rounded-[50%] bg-red-50'></div>
                <p className='w-full max-w-[400px] lg:w-72'>Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            <div className='relative flex gap-3 xl:gap-0 xl:justify-between'>
                <i className='text-red-600 absolute left-4 top-4'><FaCheck /></i>
                <div className='w-[50px] h-[50px] rounded-[50%] bg-red-50'></div>
                <p className='w-full max-w-[400px] lg:w-72'>Humour available be the majority have suffered alteration in some form, by injected.</p>
            </div>
        </div>

        <div className='w-full md:w-[40%] lg:w-[48%] xl:w-[32%]'>
            <img src={beards} alt="" />
        </div>

        <div className='flex flex-col mt-7 gap-10 md:w-[45%] lg:w-[400px] xl:w-[32%]'>
            <hr className='w-16 h-1.5 border bg-red-600 border-red-600 '/>
            <h1 className='w-[220px] font-bold text-4xl'>ABOUT OUR STORY</h1>
            <p>There are many variations of passages of Lorem Ipsum available be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
            <Link className='h-14 w-40 font-bold text-xl text-red-600 border-red-600 border-2 hover:bg-red-600 hover:text-white text-center py-3 transition-all delay-150 duration-200 ease-in-out'>Book Now</Link>
        </div>

    </section>
  )
}

export default NewFile