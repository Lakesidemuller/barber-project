import React, { useState } from 'react'
import { BiCode } from 'react-icons/bi'
import { CiCalendar, CiCircleInfo } from 'react-icons/ci'
import { FiBell, FiDollarSign } from 'react-icons/fi'
import { IoCubeOutline } from 'react-icons/io5'
import Works from '../components/Works'
import Update from '../components/Update'
import Notice from '../components/Notice'
import Profile from '../components/Profile'
import UpToDate from '../components/UpToDate'
import Developer from '../components/Developer'

function MidSection() {

    const data = [<Works />, <Update />, <Notice />, <Profile />, <UpToDate />, <Developer />]

    const navigator = [
        {
            icon: <CiCircleInfo />,
            header: "How does this work",
            para: "Something about the product"
        },

        {
            icon: <FiDollarSign />,
            header: "Update Payment",
            para: "Something about the product"
        },

        {
            icon: <FiBell />,
            header: "Notice",
            para: "Something about the product"
        },

        {
            icon: <IoCubeOutline />,
            header: "Profile Picture",
            para: "Something about the product"
        },

        {
            icon: <CiCalendar />,
            header: "Up to date",
            para: "Something about the product"
        },

        {
            icon: <BiCode />,
            header: "Developer Tools",
            para: "Something about the product"
        },
    ]

    const [activeNumber, setActiveNumber] = useState(0)
  return (
    <section className='px-16 h-[600px] py-10 flex'>
        
        <div className="flex flex-col gap-5">
            {
                navigator.map((x, i) => (
                    <div key={i} className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6' onClick={() => setActiveNumber(i)}>                
                        <i className='absolute top-7 left-3 text-2xl'>{x.icon}</i>                          
                        <div className='ml-12'>
                            <h1 className='text-[25px] font-semibold'>{x.header}</h1>
                            <p>{x.para}</p>
                        </div>                
                    </div>
                ))
            }

            {/* <div className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6'>
                <i className='absolute top-7 left-3 text-2xl'><FiDollarSign /></i>
                <div className='ml-12'>
                    <h1 className='text-[25px] font-semibold'>Update Payment</h1>
                    <p>Something about the product</p>
                </div>
            </div>

            <div className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6'>
                <i className='absolute top-7 left-3 text-2xl'><FiBell /></i>
                <div className='ml-12'>
                    <h1 className='text-[25px] font-semibold'>Notification</h1>
                    <p>Something about the product</p>
                </div>
            </div>

            <div className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6'>
                <i className='absolute top-7 left-3 text-2xl'><IoCubeOutline /></i>
                <div className='ml-12'>
                    <h1 className='text-[25px] font-semibold'>Profile Picture</h1>
                    <p>Something about the product</p>
                </div>
            </div>

            <div className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6'>
                <i className='absolute top-7 left-3 text-2xl'><CiCalendar /></i>
                <div className='ml-12'>
                    <h1 className='text-[25px] font-semibold'>Up to date</h1>
                    <p>Something about the product</p>
                </div>
            </div>

            <div className='relative w-96 rounded-xl h-20 border border-blue-500 pt-4 leading-6'>
                <i className='absolute top-7 left-3 text-2xl'><BiCode /></i>
                <div className='ml-12'>
                    <h1 className='text-[25px] font-semibold'>Developer tools</h1>
                    <p>Something about the product</p>
                </div>
            </div> */}
        </div>

        <div>
            {
                data[activeNumber]
            }
        </div>
    </section>
  )
}

export default MidSection