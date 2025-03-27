import React from 'react'
import { GiStarShuriken } from "react-icons/gi"
import firstimg from "../assets/barber4.jpg.webp"
import secondimg from "../assets/about1.jpg.webp"
import thirdimg from "../assets/h1_hero1.jpg.webp"


function BottomSection() {
  return (
    <main className='px-10 -[400px] flex flex-col gap-10 mt-16'>

        <div className='flex flex-col items-center gap-5'>
            <hr className='w-14 text-red-600 h-1.5 bg-red-600 border'/>
            <h1 className='font-bold text-4xl'>CUSTOMERS SAY ABOUT US</h1>
        </div>

        <div className='flex flex-wrap lg:border lg:border-x-0 border-gray-300 -[400px] items-center text-xl gap-y-6'>
            <div className='flex flex-col h-auto pt-10 border border-gray-300 md:border-0 px-10 gap-5 w-full sm:w-1/2 md:w-[33.33%]'>
                <div className='flex text-red-600'>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                <div className='flex items-center gap-3'>
                    <img src={firstimg} alt="" className='w-[50px] h-[50px] rounded-[50%]'/>
                    <p className='text-sm'>Wilma Mumduya</p>
                </div>
            </div>

            <div className='border h-auto flex flex-col pt-10 border-gray-300 md:border-0 px-10 gap-5 w-full sm:w-1/2 md:w-[33.33%] md:border-x'>
                <div className='flex text-red-600'>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                <div className='flex items-center gap-3'>
                    <img src={secondimg} alt="" className='w-[50px] h-[50px] rounded-[50%]'/>
                    <p className='text-sm'>Jimmy Changa</p>
                </div>
            </div>

            <div className='flex flex-col h-auto pt-10 px-10 gap-5 border border-gray-300 w-full sm:w-1/2 md:w-[33.33%] md:border-0'>
                <div className='flex text-red-600'>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                    <i><GiStarShuriken /></i>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.</p>
                <div className='flex items-center gap-3'>
                    <img src={thirdimg} alt="" className='w-[50px] h-[50px] rounded-[50%]'/>
                    <p className='text-sm'>Wilma Mumduya</p>
                </div>
            </div>
        </div>
        
        
    </main>
  )
}

export default BottomSection