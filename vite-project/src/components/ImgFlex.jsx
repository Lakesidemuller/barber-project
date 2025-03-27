import React from 'react'
import Img1 from "../assets/instra1.jpg.webp"
import Img2 from "../assets/instra2.jpg.webp"
import Img3 from "../assets/instra3.jpg.webp"
import Img4 from "../assets/instra4.jpg.webp"
import Img5 from "../assets/instra2.jpg (1).webp"


function ImgFlex() {
  return (
    <main className=' flex'>         
   
        <div className='group relative overflow-hidden'>
            <img src={Img1} alt="" className='transition duration-300 group-hover:opacity-100 object-cover'/>

            <div className='absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10 '></div>
        </div>

        <div className='group relative overflow-hidden'>
            <img src={Img2} alt="" className='transition duration-300 group-hover:opacity-100' />

            <div className='absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10'></div>        
        </div>

        <div className='group relative overflow-hidden'>
            <img src={Img3} alt="" className='transition duration-300 group-hover:opacity-100' />

            <div className='absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10'></div>
        </div>

        <div className='group relative overflow-hidden'>
            <img src={Img4} alt="" className='transition duration-300 group-hover:opacity-100'/>

            <div className='absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10'></div>
        </div>

        <div className='group relative overflow-hidden'>
            <img src={Img5} alt="" className='transition duration-300 group-hover:opacity-100'/>

            <div className='absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10'></div>
        </div>

        
    </main>
  )
}

export default ImgFlex