import React from 'react'
import { Link } from 'react-router-dom';
import iwatch from "../assets/iwatch.png"
import laptop from "../assets/phoneetlap.png"
import Macbook from "../assets/lap.png"

function BestAround() {
  return (
    <section className='bg-white py-8'>
        <div className='w-fit mx-auto text-center mb-8'>
            <h1>See the best around here</h1>
            <p className="">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between px-16">
            <div className="md:w-[32%] text-center bg-gray-50 pt-8 rounded-xl">
                <div className='mb-8'>
                    <h4 className='text-sm'>Smart light bulb pack</h4>
                    <h1 className="text-3xl font-bold mb-5">Latest and greatest</h1>
                </div>
                <Link to="" className='border border-black py-2 px-10 rounded-3xl block w-fit mx-auto mb-8'>Explore</Link>

                <img src={iwatch} alt="" className="w-9/12 mx-auto block h-[250px]" />
            </div>

            <div className="md:w-[32%] text-center bg-gray-50 pt-8 rounded-xl">
                <div className='mb-8'>
                    <h4 className='text-sm'>Smart light bulb pack</h4>
                    <h1 className="text-3xl font-bold mb-5">Best selling</h1>
                </div>
                <Link to="" className='border border-black py-2 px-10 rounded-3xl block w-fit mx-auto mb-8'>Explore</Link>

                <img src={laptop} alt="" className="w-10/12 mx-auto block" />
            </div>

            <div className="md:w-[32%] text-center bg-gray-50 pt-8 rounded-xl">
                <div className='mb-8'>
                    <h4 className='text-sm'>Smart light bulb pack</h4>
                    <h1 className="text-3xl font-bold mb-5">Every product</h1>
                </div>
                <Link to="" className='border border-black py-2 px-10 rounded-3xl block w-fit mx-auto mb-8'>Explore</Link>

                <img src={Macbook} alt="" className="w-10/12 mx-auto block h-[250px]" />
            </div>

            
        </div>
    </section>
  )
}

export default BestAround