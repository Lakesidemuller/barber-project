import React from 'react'
import contactImg from "../assets/hero4.jpg.webp"
import { FaEnvelope, FaHome, FaMobile} from "react-icons/fa"
import { Link } from 'react-router-dom'

function Contact() {

  return (
    <main className='flex flex-col gap-6'>
        <div className='flex justify-between h-[350px] bg-black'>
          <div className='flex items-center mx-auto'>
            <h1 className=' text-white font-bold text-6xl'>Contact</h1>
          </div>

          <div className='w-[60%] hidden md:block'>
            <img src={contactImg} alt="" className='h-full'/>
          </div>
        </div>

        <div className='px-16 sm:px16 flex flex-col lg:flex-col gap-10 mt-14'>
          <p className='font-bold text-2xl'>Get in Touch</p>

          <div className='flex flex-col sm:flex-row gap-8 sm:gap-24'>

            <div className='w-full sm:w-[69%]'>
              <form action="" className='flex flex-col gap-6'>
                <textarea name="message" id="description" cols={100} rows={10} placeholder='Enter Message' className='border pl-4 outline-0 w-full border-gray-200 caret-gray-500' onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = "Enter Message")}></textarea>

                <div className='flex flex-col sm:flex-row gap-6 sm:gap-8'>
                  <input type="text" name="" id="name" placeholder='Enter your name' minLength={3} maxLength={100} className='border h-12 w-full sm:w-[49%] pl-4 outline-0 border-gray-200 caret-gray-500' onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter your name')} />
                  <input type="text" name="" id="email" placeholder='Enter email address' minLength={3} maxLength={100} className='border h-12 w:full sm:w-[49%] pl-4 outline-0 border-gray-200 caret-gray-500' onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter your email address')} />
                </div>

                <input type="text" name="" id="subject" minLength={3} maxLength={100} placeholder='Enter subject' className='border pl-4 h-12 outline-0 border-gray-200 caret-gray-500' onFocus={(e) => (e.target.placeholder = '')} onBlur={(e) => (e.target.placeholder = 'Enter subject')}/>

              </form>
            </div>

            <div className='w-full sm:w-[30%] flex flex-col gap-12'>

              <div className='flex gap-5'>
                <i className='text-3xl text-gray-500'><FaHome /></i>
                <div>
                  <p>Buttonwood, California.</p>
                  <p className='text-gray-500'>Rosemead, CA 91770</p>
                </div>
              </div>

              <div className='flex gap-5'>
                <i className='text-3xl text-gray-500'><FaMobile /></i>
                <div>
                  <p>+1 253 565 2365</p>
                  <p className='text-gray-500'>Mon to Fri 9am to 6pm</p>
                </div> 
              </div>
            
              <div className='flex gap-5'>
                <i className='text-3xl text-gray-500'><FaEnvelope /></i>
                <div>
                  <p>support@colorlib.com</p>
                  <p className='text-gray-500'>Send us your query anytime!</p>
                </div>
              </div>

            </div>
            
          </div>

          <button type="submit" className='w-32 h-16 border cursor-pointer text-red-600 text-xs font-medium hover:bg-red-500 hover:text-white duration-200 transition-all ease-in-out'><Link>SEND</Link></button>

        </div>


    </main>
  )
}

export default Contact