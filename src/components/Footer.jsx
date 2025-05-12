import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex justify-between h-80 w-[100%] pl-16 pr-28 py-8 border border-t-gray-300 flex-col md:flex-row gap-y-5 bg-gray-50'>

        <div className="w-[60%] md:w-[23%]">
            <h1 className='text-3xl font-bold mb-3'><Link to="/" >CALIFORNIA</Link></h1>
            <p className='font-normal text-lg'>Sign up for texts to be notified about our best offers on the perfect gifts</p>
        </div>

        <div className='md:w-[65%]'>
            <ul className='flex justify-between h-full flex-wrap gap-y-5'>

                <li className='text-xl font-semibold w-1/2 md:w-fit'>All products
                    <ul className='text-[20px] font-normal flex flex-col gap-[10px] mt-4 h-[146px]'>
                        <li className='relative w-fit group'><div className="absolute bg-zinc-500 h-[2px] w-0 transition-all delay-150 duration-150 ease-in-out group-hover:w-full left-0 group-hover:right-0 bottom-[-2px]"></div><Link>Phones</Link></li>


                        <li><Link>Watch</Link></li>
                        <li><Link>Tablets</Link></li>
                        <li><Link>Laptops</Link></li>
                    </ul>
                </li>

                <li className='text-xl font-semibold w-1/2 md:w-fit'>Company
                    <ul className='text-[20px] font-normal flex flex-col gap-[10px] mt-4 h-[146px]'>
                        <li><Link>About</Link></li>
                        <li><Link>Support</Link></li>
                    </ul>
                </li>

                <li className='text-xl font-semibold w-1/2 md:w-fit'>Support
                    <ul className='text-[20px] font-normal flex flex-col gap-[10px] mt-4 h-[146px]'>
                        <li><Link>Style Guide</Link></li>
                        <li><Link>Licensing</Link></li>
                        <li><Link>Change Log</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </li>

                <li className='text-xl font-semibold w-1/2 md:w-fit'>Follow Us
                    <ul className='text-[20px] font-normal flex flex-col gap-[10px] mt-4 h-[146px]'>
                        <li><Link>Instagram</Link></li>
                        <li><Link>Facebook</Link></li>
                        <li><Link>LinkedIn</Link></li>
                        <li><Link>Youtube</Link></li>
                    </ul>
                </li>

            </ul>
        </div>

    </footer>
  )
}

export default Footer