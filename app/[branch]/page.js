"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const branch = useParams();
  // console.log(branch.branch);
  // const branchValue = typeof branch === 'object' ? branch.someProperty : branch;
  const branchValue = branch.branch;
  return (
    <>
     <div className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
       <div className=''>
         <Link href={`/${branchValue}/1`}>
          <div className='p-4 border-2'>
            1
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/2`}>
          <div className='p-4 border-2'>
            2
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/3`}>
          <div className='p-4 border-2'>
            3
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/4`}>
          <div className='p-4 border-2'>
            4
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/5`}>
          <div className='p-4 border-2'>
            5
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/6`}>
          <div className='p-4 border-2'>
            6
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/7`}>
          <div className='p-4 border-2'>
            7
          </div>
        </Link>
       </div>
       <div className=''>
         <Link href={`/${branchValue}/8`}>
          <div className='p-4 border-2'>
            8
          </div>
        </Link>
       </div>
     </div>
    </>
  )

}

export default page
