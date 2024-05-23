"use client"; 
import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <>
    <div  className='bg-gray-50  w-full flex md:flex-row flex-col justify-around items-start p-20'>
        <div className="p-5">
            <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
      <Image src="/assets/logo.svg" alt="Grivas Logo" width={150} height={50} />
    </p>
                <div className='flex gap-6 pb-5'>
                    <FaInstagram className='text-2xl cursor-pointer hover:text-orange-600' />
                    <FaTwitter className='text-2xl cursor-pointer hover:text-orange-600' />
                    <FaLinkedin className='text-2xl cursor-pointer hover:text-orange-600' />
                    <FaYoutube className='text-2xl cursor-pointer hover:text-orange-600' />
                </div>
            </ul>
        </div>
        <div className="p-5">
            <ul>
                <p className='text-gray-800 font-bold text-2xl mb-4'>Quick Links</p>
                <li className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>Home</li>
                <li className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>About Us</li>
                <li className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>Products</li>
                <li className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>Testimonials</li>
                <li className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>Enquire</li>
            </ul>
        </div>
        <div className='p-5'>
            <p className='text-gray-800 font-bold text-2xl mb-4'>Office</p>
            <p className='text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer'>
            53, 1st Floor, Velachery Main Rd, Mehta Nagar,<br/>Selaiyur, Chennai, Tamil Nadu 600073
            </p>
        </div>
        <div className='p-5'>
            <p className='text-gray-800 font-bold text-2xl mb-4'>Contact Us</p>
            <p className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
  <span className="text-gray-800 font-semibold text-l mb-4">Phone:</span> 070102 58295
  <br />
  <span className="text-gray-800 font-semibold text-l mb-4">Email Address:</span> grivas.techno@gmail.com
</p>
        </div>
      
    </div>
    <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
            <h1 className='text-gray-800 font-light'>2024 All Rights reserved</h1>
        </div> 
    </>  
  )
}

export default Footer