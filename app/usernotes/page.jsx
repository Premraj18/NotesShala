"use client"
import React, { useEffect, useState } from 'react'
import { ThreeDots } from "react-loader-spinner"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import useShowToast from '@/hooks/useShowToast';
import { MdDelete } from "react-icons/md";
import DeleteComponent from '../components/DeleteComponent';

const Page = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false)

    const { user } = useKindeBrowserClient();
    const showToast = useShowToast();

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.email) {
                // user is not defined yet, wait for it to be defined
                return;
            }

            const postedBy = user.email;
            setLoading(true);
            try {
                const res = await fetch(`https://noteshaala.onrender.com/api/notes/name/${postedBy}`)
                const data = await res.json();

                // console.log(data)
                setNotes(data);
            }
            catch (error) {
                showToast('Error', error.response?.data?.message || 'Something went wrong', 'error')
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [user]);

    return (
        <div className="flex flex-col md:px-20 px-10 items-center lg:mt-24 mt-24 mb-10 gap-10 min-h-[80vh]">
            <h2 className='text-xl my-5'>Hey!  <span className='text-[#2577ece4]'>{user?.email}</span> visit yor profile</h2>
            {
                notes && notes?.length > 0 && notes.map((item, id) => (
                    <>
                        <div className='flex flex-col  items-center justify-center w-40 text-center px-3' key={item?._id}>
                            <div className='flex border-2 border-gray-300 w-[90vw] sm:w-[60vw] lg:w-[30vw] rounded-lg p-3 items-center justify-center gap-x-40'>
                                <div className='flex flex-col w-3/4 items-center justify-center'>
                                    <a href={item.file} target='_blank'>
                                        <img src="/pdficon.png" alt="" className='w-24' />
                                    </a>
                                    <p>{item.fileName}</p>
                                </div>
                                <div className='text-2xl flex items-center justify-center'>
                                    <DeleteComponent id={item?._id}/>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
            {
                loading && notes.length === 0 && (
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
            {
                !loading && notes.length === 0 && (
                    <div className='text-xl my-10'>
                        Notes are not uploaded yet
                    </div>
                )
            }
        </div>
    )
}

export default Page
