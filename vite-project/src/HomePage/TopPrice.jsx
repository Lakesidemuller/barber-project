import React from 'react'
import { Link } from 'react-router-dom'
import one from "../assets/barber1.jpg.webp"
import two from "../assets/barber2.jpg.webp"
import three from "../assets/barber3.jpg.webp"
import four from "../assets/barber4.jpg.webp"
import five from "../assets/barber5.jpg.webp"
import six from "../assets/barber6.jpg.webp"

function TopPrice() {
  return (
    <main className='flex flex-col lg:flex-row gap-24 mb-24'>
        <div className='flex flex-wrap lg:w-[60%]'>
            <img src={one} alt="" className='w-[33.33%]' />
            <img src={two} alt="" className='w-[33.33%]' />
            <img src={three} alt="" className='w-[33.33%]' />
            <img src={four} alt="" className='w-[33.33%]' />
            <img src={five} alt="" className='w-[33.33%]' />
            <img src={six} alt="" className='w-[33.33%]' />
        </div>

        <div className='mt-7 px-8 lg:px-0'>
            <h1 className='font-bold text-3xl lg:text-4xl'>OUR TOP PRICES</h1>
            <hr className='mt-7'/>

            <div className='mt-14'>
                <div className='flex justify-between'>
                    <Link className='text-[18px] font-serif'><p>Special Beard Treatment</p></Link>
                    <p>From <span className='text-red-600 font-extrabold'>$40</span></p>
                </div>
                <hr className='mt-5'/>
            </div>

            <div className='mt-7'>
                <div className='flex justify-between'>
                    <Link className='text-[18px]'><p>Special Beard Treatment</p></Link>
                    <p>From <span className='text-red-600 font-extrabold'>$40</span></p>
                </div>
                <hr className='mt-5'/>
            </div>

            <div className='mt-7'>
                <div className='flex justify-between'>
                    <Link className='text-[18px]'><p>Color your beard</p></Link>
                    <p>From <span className='text-red-600 font-extrabold'>$40</span></p>
                </div>
                <hr className='mt-5'/>
            </div>

            <div className='mt-7'>
                <div className='flex justify-between'>
                    <Link className='text-[18px]'><p>Wax your beard</p></Link>
                    <p>From <span className='text-red-600 font-extrabold'>$40</span></p>                    
                </div>    
                <hr className='mt-5'/>
            </div>

            <div className='mt-7'>
                <div className='flex justify-between'>
                    <Link className='text-[18px]'><p>Wax your beard</p></Link>
                    <p>From <span className='text-red-600 font-extrabold'>$40</span></p>
                </div>
                <hr className='mt-5'/>
            </div>
        </div>
    </main>
  )
}

export default TopPrice