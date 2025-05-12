import React from 'react'
import lappy from "../assets/Laptop_Image.png"
import watch from "../assets/Watch_Image.png"
import iphone from "../assets/Phone_Image.png"
import tablet from "../assets/Tablet_image.png"

function LatestOffers() {
  return (
    <section className='py-12'>
        <div className="flex items-center gap-2 text-center flex-col mb-12">
            <h1 className='text-4xl font-bold'>Shop our latest offers and categories</h1>
            <p className='lg:w-[700px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto molestias fugiat sunt incidunt vel tenetur doloremque, dolorum eveniet nostrum nisi!</p>
        </div>
        <div className="flex flex-col items-center h-[100vh] justify-between px-16 md:flex-row">
            <div className="md:w-[39%] w-full h-full flex flex-col justify-between" >
                <div className="h-[69%] hover:shadow-2xl hover:scale-105 bg-white relative overflow-hidden rounded-2xl ">
                    <img src={lappy} alt="" className='w-10/12 absolute top-[-150px] left-0' />
                    <div className='absolute right-3 bottom-16 w-44 text-right'>
                        <h6 className='font-normal text-xl'>Laptops</h6>
                        <h2 className='font-bold text-3xl'>True Laptop Solution</h2>
                    </div>
                </div>

                <div className="h-[28%] hover:shadow-2xl hover:scale-105 bg-white relative overflow-hidden rounded-2xl ">
                    <img src={watch} alt="" className='w-7/12 absolute ' />

                    <div className='absolute right-3 text-right w-44 bottom-1'>
                        <h6 className='font-normal text-xl'>Watch</h6>
                        <h2 className='font-bold text-3xl'>Not just stylisht</h2>
                    </div>
                </div>

            </div>

            <div className="md:w-[29%] w-full h-full hover:shadow-2xl hover:scale-105 bg-white relative overflow-hidden rounded-2xl ">                
                <img src={iphone} alt="" className='absolute min-w-[125%] right-[-100px] top-16 object-cove' />

                <div className='absolute bottom-12 w-52 text-center -translate-x-1/2 left-1/2'>
                    <h6 className='font-normal text-xl'>Phones</h6>
                    <h2 className='font-bold text-3xl'>Your day to day life</h2>
                </div>
            </div>


            <div className="w-[29%] h-full hover:shadow-2xl hover:scale-105 bg-white relative overflow-hidden rounded-2xl">

                <div className='top-[-20px] w-40 text-center mx-auto'>
                    <h6 className='font-normal text-xl'>Tablet</h6>
                    <h2 className='font-bold text-3xl'>Empower your work</h2>
                </div>

                <img src={tablet} alt="" className='absolute left-[-80px] top-[140px] min-w-[170%]' />
                
            </div>
        </div>
    </section>
  )
}

export default LatestOffers