import Link from 'next/link'
import React from 'react'

const ShareNotes = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 text-center mb-10'>
            <h2 className='text-3xl font-semibold'>SHARE YOUR NOTES</h2>
            <p>Help your fellow mates with by sharing your valuable notes</p>
            <Link href='/uploadnotes'>
                <div className='border-white border-[2px] rounded-lg px-7 py-2 text-lg bg-[#29b5f6d5] hover:bg-[#29b5f686] hover:scale-[1.02]'>Upload Notes</div>
            </Link>
            <p>We thank you on behalf of entire batch</p>
        </div>
    )
}

export default ShareNotes
