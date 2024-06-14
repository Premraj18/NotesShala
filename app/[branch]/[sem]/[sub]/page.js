"use client"
import useShowToast from '@/hooks/useShowToast';
import { ThreeDots } from "react-loader-spinner"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const param = useParams();
    const branch = param.branch;
    const sem = param.sem;
    const sub = param.sub;

    const [notes, setNotes] = useState([]);
    const showToast = useShowToast();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(`https://noteshaala.onrender.com/api/notes/${branch}/${sem}/${sub}`)

                const data = await res.json();

                // console.log(data)
                setNotes(data);
            }

            catch (error) {
                showToast('Error', error.response.data.message, 'error')
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    return (
        <div className='flex flex-wrap justify-center items-center gap-x-7 gap-y-12 mt-24 mb-8 min-h-[80vh]'>
            {
                notes.map((item) => (
                    <div className='flex flex-col items-center justify-center w-40 text-center px-3' key={item._id}>
                        <a href={item.file} target='_blank'>
                            <img src="/pdficon.png" alt="" className='w-24' />
                        </a>
                        <p>{item.fileName}</p>
                    </div>
                ))
            }
            {
                loading && (
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#29b5f6"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                )
            }
        </div>
    )
}

export default Page
