"use client"
import Link from 'next/link'
import React from 'react'

const NotesBranchWise = () => {
    return (
        <div>
            <div className='px-10 py-5 mt-16'>
                <h2 className='text-3xl font-semibold py-2'>Notes</h2>
                <p>Gets your hands on your study materials now !</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-center">
                    <Link href='/EE'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Electrical
                        </div>
                    </Link>
                
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/ECE'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2  bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Electronics and Communication
                        </div>
                    </Link>
                    
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/ME'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Mechanical
                        </div>
                    </Link>
                
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/CS'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Computer Science
                        </div>
                    </Link>
            
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/CE'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Civil
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/MME'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Material and Metallurgy
                        </div>
                    </Link>
                
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/PIE'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Production and Industrial
                        </div>
                    </Link>
                
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Link href='/ECM'>
                        <div className='w-32 h-28 rounded-xl text-center flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
                            Computational mechanics
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotesBranchWise
