"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const branch = useParams();
  // console.log(branch.branch);
  // const branchValue = typeof branch === 'object' ? branch.someProperty : branch;
  const branchValue = branch.branch;
  return (
    <>
      <div className='px-10 py-5 mt-20'>
        <h2 className='text-3xl font-semibold py-2'>Notes</h2>
        <p>Choose Your semester</p>
      </div>
      <div className='flex flex-wrap gap-8 my-16 mt-10 px-2 md:px-40 justify-center items-center min-h-[60vh]'>
        <div className=''>
          <Link href={`/${branchValue}/1`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              1
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/2`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              2
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/3`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              3
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/4`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              4
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/5`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              5
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/6`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              6
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/7`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              7
            </div>
          </Link>
        </div>
        <div className=''>
          <Link href={`/${branchValue}/8`}>
            <div className='w-32 h-28 md:w-40 md:h-36 rounded-xl text-center text-2xl flex justify-center items-center p-2 bg-gradient-to-r from-[#29b5f6] to-[#67c5f1d5] transition-all duration-300 hover:scale-105'>
              8
            </div>
          </Link>
        </div>
      </div>
    </>
  )

}

export default Page
