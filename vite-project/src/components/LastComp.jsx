import React from 'react'
import services1 from '../assets/services1.svg'
import services2 from '../assets/services2.svg'
import services3 from '../assets/services3.svg'


function LastComp() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-8 lg:justify-center bg-gray-900 py-24 px-4 md:px-10 lg:px-20">
        <div className='rounded-2xl pt-14 flex flex-col border w-full sm:w-[46%] md:w-[280px] h-[350px] items-center relative group'>
            <div className="bg-white absolute w-full h-0 group-hover:h-full bottom-0 left-0 delay-300 duration-500 transition-all ease-in-out rounded-2xl"></div>
            <div className="static z-10 flex flex-col items-center h-full w-full gap-3">
                <img src={services1} alt="" />
                <h1 className='text-white group-hover:text-black transition-colors delay-300 duration-300 ease-in-out text-2xl'>Stylish hair cut</h1>
                <p className='w-[170px] text-center text-slate-400'>Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
        </div>

        <div className='rounded-2xl flex flex-col border w-full sm:w-[46%] md:w-[280px] h-[350px] items-center relative group pt-14'>
            <div className="rounded-2xl bg-white absolute w-full h-0 group-hover:h-full bottom-0 left-0 delay-300 duration-500 transition-all ease-in-out"></div>
            <div className="static z-10 flex flex-col items-center h-full w-full gap-3">
                <img src={services2} alt="" />
                <h1 className='text-white group-hover:text-black transition-colors delay-300 duration-300 ease-in-out text-2xl'>Cut & hair style</h1>
                <p className='w-[170px] text-center text-slate-400'>Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
            
        </div>

        <div className='rounded-2xl flex flex-col border w-full sm:w-[46%] md:w-[280px] h-[380px] items-center relative group pt-14'>
            <div className="rounded-2xl bg-white absolute w-full h-0 group-hover:h-full bottom-0 left-0 delay-300 duration-500 transition-all ease-in-out"></div>
            <div className="static z-10 flex flex-col items-center h-full w-full gap-5">
                <img src={services3} alt="" />
                <h1 className='text-white group-hover:text-black transition-colors delay-300 duration-300 ease-in-out text-2xl'>Color & hair Wash</h1>
                <p className='w-[170px] text-center text-slate-400'>Available be the majority have suffered alteration in some form, by injected humour.</p>
            </div>
        </div>
    </div>
  )
}

export default LastComp