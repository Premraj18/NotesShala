"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const param = useParams();
    const branch = param.branch;
    const sem = param.sem;
    const sub = param.sub;

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/api/notes/${branch}/${sem}/${sub}`)

            const data = await res.json();

            // console.log(data)
            setNotes(data);
        }

        fetchData();
    },[])
    return (
        <div className='flex flex-wrap justify-center items-center gap-x-7 gap-y-12 mt-24 mb-8 min-h-[80vh]'>
            {
                notes.map((item) => (
                    <div className='flex flex-col items-center justify-center w-40 text-center px-3' key={item._id}>
                        <a href={item.file} target='_blank'>
                            <img src="/pdficon.png" alt="" className='w-24'/>
                        </a>
                        <p>{item.fileName}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default page
