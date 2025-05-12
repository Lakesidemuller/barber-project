import React from 'react'
import Tab from "../assets/Tablet.png"
import Iphone from "../assets/Phone.png"
import Android from "../assets/Mobile.png"
import Watch from "../assets/Watch.png"
import { Link } from 'react-router-dom'

function MostSelled() {
  return (
    <section className='py-12'>
        <div className='flex flex-col items-center text-center gap-2 mb-12'>
            <h1 className='font-bold text-4xl'>Save on our most selled items.</h1>
            <p className='font-medium'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>

        <div className='flex flex-wrap gap-y-6 justify-between py-12 px-10'>

            <Link className='w-[48%] md:w-[24%] group'>
                
                <div className='mb-3 bg-white  h-[300px] flex items-center justify-center rounded-lg border'>
                    <img src={Tab} alt="" className='group-hover:scale-110 w-10/12 transition-all duration-300 delay-300 ease-in-out' />
                </div>

                <div className='flex flex-col min-h-[130px] justify-between'>
                    <h1 className='text-xl font-bold'>Tablet</h1>
                    <p className='leading-5 opacity-75'>Lorem ipsum dolor sit amet, consectetur.</p>
                    <h6>$ 210.00 USD</h6>
                </div>
                
                
            </Link>

            <Link className='w-[48%] md:w-[24%] group'>
                <div className='mb-3 bg-white h-[300px] flex items-center justify-center rounded-lg border'>
                    <img src={Iphone} alt="" className='group-hover:scale-110 h-[250px] transition-all duration-300 delay-300 ease-in-out'/>
                </div>

                <div className='flex flex-col min-h-[130px] justify-between'>
                    <h1 className='text-xl font-bold'>Mobile</h1>
                    <p className='leading-5 opacity-75'>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                    <h6>$ 562.00 USD</h6>
                </div>
            </Link>

            <Link className='w-[48%] md:w-[24%]'>                
                <div className='mb-3 group bg-white h-[300px] flex items-center justify-center rounded-lg border'>
                    <img src={Android} alt="" className='group-hover:scale-110 h-[275px] transition-all duration-300 delay-300 ease-in-out' />  
                </div>

                <div className='flex flex-col min-h-[130px] justify-between'>
                    <h1 className='text-xl font-bold'>Phone</h1>
                    <p className='leading-5 opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h6>$ 590.00USD</h6>
                </div>
            </Link>

            <Link className='w-[48%] md:w-[24%]'>
                <div className='mb-3 group bg-white h-[300px] flex items-center justify-center rounded-lg border'>
                    <img src={Watch} alt="" className='group-hover:scale-110 h-[280px] transition-all duration-300 delay-300 ease-in-out'/>
                </div>

                <div className='flex flex-col min-h-[130px] justify-between'>
                    <h1 className='text-xl font-bold'>Smart Watch</h1>
                    <p className='leading-5 opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                    <h6>$ 239.00 USD</h6>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default MostSelled