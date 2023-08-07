import React from 'react'

import {FaFacebookF} from 'react-icons/fa'
import {BsGithub, BsInstagram, BsTwitter, BsTwitch} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ul>
            </div>
            
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to Our Newslatter</p>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam</p>
                <form className='flex flex-col sm:flex-row'>
                    <input type="email" className='w-full p-2 rounded-md mb-4' />
                    <button className='p-2 mb-4 '>Subscribe</button>
                </form>
            </div>


        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebookF />
            <BsInstagram />
            <BsGithub />
            <BsTwitter />
            <BsTwitch />
        </div>
        </div>

    </div>
  )
}

export default Footer