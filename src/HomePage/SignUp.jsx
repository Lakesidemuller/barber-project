import React from 'react'
import Laptop from "../assets/phoneetlap.png"

function SignUp() {
  return (
    <section className='bg-white mb-8'>
        <div className='flex flex-col items-center h-[500px] bg-gray-300 rounded-2xl w-10/12 md:w-[600px] lg:w-[800px] mx-auto justify-center text-center md:text-left'> 
            <div className='flex flex-col gap-2 mb-3'>
              <h1 className='text-4xl font-bold text-center'>Never miss a thing</h1>
              <p className='text-lg'>Sign up for texts to be notified about our best offers on  the perfect gifts.</p>
            </div>
            <img src={Laptop} alt="" className='w-72 mb-4'/>
            <div className='w-[400px] h-[50px]'>
              <input type="text" placeholder='Your email' className='h-[100%] bg-inherit border border-black rounded-l-3xl w-[75%] outline-none pl-4'/>
              <button type="submit" className='text-white bg-black w-[25%] rounded-r-3xl h-[100%]'>Sign Up</button>
            </div>

        </div>
    </section>
  )
}

export default SignUp