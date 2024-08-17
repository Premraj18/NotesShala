"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

    return (
        <section className="flex items-center bg-slate-50 w-full font-poppins sm:pt-10 sm:pb-10">
            <div className="justify-center flex-1 w-full py-4 mx-auto lg:py-4 md:px-6">
                <div className="px-4 flex flex-col items-center justify-center text-center md:mb-10">
                    <p className="mb-2 text-2xl font-semibold text-[#3eb4eb] ">
                        About Us
                    </p>
                    <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl ">
                        What we do
                    </h2>
                    <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                        <div className="flex-1 h-2 bg-[#62c7f6d5]">
                        </div>
                        <div className="flex-1 h-2 bg-[#22a3dfd5]">
                        </div>
                        <div className="flex-1 h-2 bg-[#56c4f7d5]">
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center lg:px-32 w-full">
                    {/* <div className="w-full px-4 mb-10 lg:w-1/2 flex justify-center lg:mb-0"
                    

                    >
                        <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                            className="relative object-cover border-2 lg:w-[500px] w-full h-96 rounded-tr-3xl rounded-bl-3xl" />
                    </div> */}
                    <div className="w-full px-4  lg:w-3/4 lg:mb-0 text-center">
                        <h2
                            className="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 ">
                            We are providing a better notes sharing facility !
                        </h2>
                        <p className="mb-4 text-base leading-7 text-gray-500 ">
                            We believe in transforming spaces into captivating experiences. 
                        </p>
                        <ul className="lg:ml-16 mt-8 text-center">
                            <li className="flex items-center mb-4 text-base ">
                                <span className="mr-3 text-[#22a3dfd5]  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Everyone in college can upload and view notes, making resources easily accessible.
                            </li>
                            <li className="flex items-center mb-4 text-base ">
                                <span className="mr-3 text-[#22a3dfd5] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Students can share their notes, promoting collaborative learning and diverse perspectives.
                            </li>
                            <li className="flex items-center mb-4 text-base ">
                                <span className="mr-3 text-[#22a3dfd5]  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                The site accommodates different note formats, catering to various learning preferences.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About
