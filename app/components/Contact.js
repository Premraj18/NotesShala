"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import useShowToast from '@/hooks/useShowToast'

const Contact = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const showToast = useShowToast(); 
    const handleclick = () => {
        if(!name || !message){
            showToast("Error", "All feild must be filled", 'error')
        }
        else{
            showToast('Success', 'Thank you! Your form is submitted', 'success')
            setName('');
            setMessage('');
        }
    }
    return (
        <div>
            <div className='flex md:justify-evenly justify-center md:flex-row flex-col items-center px-4 py-4'>
                {/* Left side */}
                <div className='flex flex-col justify-center items-center'>
                    <p className="md:text-5xl text-3xl font-bold text-black md:mb-12 mb-5 md:ml-8">CONTACT</p>
                    {/* Email icon */}
                    <div className="flex items-center mt-2 md:ml-8">
                        <HiOutlineMail className="mr-2" size={20} />
                        <span>Email: example@example.com</span>
                    </div>
                    {/* Phone icon */}
                    <div className="flex items-center mt-2 md:ml-8">
                        <HiOutlinePhone className="mr-2" size={20} />
                        <span>Phone: +1234567890</span>
                    </div>
                </div>
                {/* Right side */}
                <div className="bg-lightblue rounded-lg p-4 mt-7 md:mt-0">
                    <div className="bg-dark-blue rounded-lg p-4 lg:py-10">
                        <h3 className="text-xl mb-2 text-white">Share Your Experience With Us!</h3>
                        <div className="p-4 bg-dark-blue rounded-lg">
                            <input type="text" className="w-full p-2 mb-2 border border-blue-500 rounded-lg bg-light-blue" placeholder="Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <textarea className="w-full p-2 border border-blue-500 rounded-lg bg-light-blue" rows="4" placeholder="Your Review"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div onClick={handleclick} className='border cursor-pointer w-32 border-blue-500 rounded-lg bg-light-blue p-2 text-center hover:scale-[1.02]'>
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
