import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
            <div className='text-center sm:text-left'>
                <img src={assets.logo} className='mb-5 w-32 m-auto sm:ml-0' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic dicta omnis laboriosam minus deleniti perspiciatis beatae, optio corrupti cum.
                </p>
            </div>
            <div className='text-center sm:text-left'>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privecy Policy</li>

                </ul>
            </div>
            <div className='text-center sm:text-left'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>+00: 01746107256</li>
                    <li>+00: 01812480745</li>
                    <li>adbulahad934@gmail.com</li>

                </ul>
            </div>

        </div>
        <div>
            <hr />

            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer