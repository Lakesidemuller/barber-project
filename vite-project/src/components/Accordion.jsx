import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HairCut from "../assets/about2.jpg.webp"
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

function Accordion() {
    const hairs = [
        {title: "Trim your Hair", price: 40},
        {title: "Special Beard Treatment", price: 40},
        {title: "Color your Beard", price: 40},
        {title: "Wax your Beard", price: 40},
    ]
    const [current, setCurrent] = useState(null)

    function changeCurrent(x){

        if(x === current){
            setCurrent(null)
        } else {
            setCurrent(x)
        }
        
    }
  return (
    <div className="mb-10 flex flex-col lg:flex-row justify-between lg:items-center px-4 md:px-10 lg:px-16">
        <div className="lg:w-1/2">
            <hr className='mb-8 w-14 text-red-600 h-1.5 bg-red-600 border'/>
            <h1 className="mb-8 text-4xl font-bold">ALL WE DO FOR YOU</h1>
            <div className={`overflow-hidden mb-4 ${current === 1 ? 'h-auto' : 'h-[70px]'}`}>
                <div className={`text-white px-2 h-[70px] flex justify-between items-center ${current === 1 ? 'bg-red-600' : 'bg-black'}`} onClick={() => changeCurrent(1)}>
                    <p className='text-xl font-bold pl-4'>For Hair</p>
                    <i className='pr-4'>{ current === 1 ? <FaCaretUp /> : <FaCaretDown /> }</i>
                </div>
                <ul className="">
                    {
                        hairs.map((hair, i) => (
                            <li key={i}>
                                <Link className='flex border-b-1 border-b-gray-300 justify-between items-center h-[60px]'>
                                    <p className='font-semibold text-[18px]'>{hair.title}</p>
                                    <p>From ${hair.price}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={`overflow-hidden mb-4 ${current === 2 ? 'h-auto' : 'h-[70px]'}`}>
                <div className={`text-white px-2 h-[70px] flex justify-between items-center ${current === 2 ? 'bg-red-600' : 'bg-black'}`} onClick={() => changeCurrent(2)}>
                    <p className='text-xl font-bold pl-4'>For Beard</p>
                    <i className='pr-4'>{ current === 2 ? <FaCaretUp /> : <FaCaretDown /> }</i>
                </div>
                <ul className="">
                    {
                        hairs.map((hair, i) => (
                            <li key={i}>
                                <Link className='flex border-b-1 border-b-gray-300 h-[60px] justify-between items-center'>
                                    <p className='font-semibold text-[18px]'>{hair.title}</p>
                                    <p>From ${hair.price}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>

        <img src={HairCut} alt="" className='h-[550px]' />
    </div>
  )
}

export default Accordion