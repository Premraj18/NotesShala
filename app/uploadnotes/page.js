"use client"
import React, { useEffect, useState } from 'react'
import Sub from './subject.json'
import Branch from './branch.json'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'
import useShowToast from '@/hooks/useShowToast'
import { Button, Stack } from '@chakra-ui/react'

const page = () => {
    const [subject, setSubject] = useState('')
    const [branch, setBranch] = useState('')
    const [sem, setSem] = useState('1')
    const [file, setFile] = useState('')
    const postedBy = "6605655c144c996b0f047dc8"

    const showToast = useShowToast();
    const toast = useToast()
    const [loading, setloading] = useState(false);

    // console.log(sem);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            if (!file) {
                showToast("Error","file feild must be filled", 'error')
                return;
            }
            const formdata = new FormData();
            formdata.append("postedBy", postedBy)
            formdata.append("branch", branch)
            formdata.append("semester", sem)
            formdata.append("subject", subject)
            formdata.append("file", file)

            const res = await axios.post(`http://localhost:5000/api/notes/upload`, formdata, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            // console.log(res.data);
            if (res.error) {
                showToast('Error', data.error, 'error')
                return
            }

            showToast('Success', 'Upload Successfully', 'success')

            setBranch('')
            setSem('')
            setSubject('')
            setFile('')
        }
        catch (error) {
            showToast('Error', error, 'error')
        }
        finally {
            setloading(false)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <form className='shadow-md p-5 w-[50vw]' onSubmit={handleSubmit} >
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                        Branch
                    </label>
                    <input
                        className="shadow appearance-none border border-slate-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="branch"
                        type="text"
                        placeholder="ex:- EE ECE"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    <div className="px-3">
                        {
                            Branch.filter((item) => {
                                const searchItem = branch.toLowerCase();
                                const stream = item.stream.toLowerCase();

                                return searchItem && stream.startsWith(searchItem) && stream !== searchItem;
                            })
                                .map((item, i) => (
                                    <div key={i} onClick={() => setBranch(item.stream)} className='cursor-pointer'>
                                        {item.stream}
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                        Semester
                    </label>
                    <select className="shadow  border border-slate-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => setSem(e.target.value)}
                    >
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                        <option value={'6'}>6</option>
                        <option value={'7'}>7</option>
                        <option value={'8'}>8</option>
                    </select>
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                        Subject
                    </label>
                    <input
                        className="shadow appearance-none border border-slate-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="branch"
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <div className="px-3">
                        {
                            Sub.filter((item) => {
                                const searchItem = subject.toLowerCase();
                                const sub = item.sub.toLowerCase();

                                return searchItem && sub.startsWith(searchItem) && sub !== searchItem;
                            })
                                .map((item, i) => (
                                    <div key={i} onClick={() => setSubject(item.sub)} className='cursor-pointer'>
                                        {item.sub}
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="branch">
                        Upload file
                    </label>
                    <input
                        className="shadow appearance-none border border-slate-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="branch"
                        type="file"
                        placeholder="Subject"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>

                <Stack spacing={10} pt={2}>
                    <Button
                        type='submit'
                        loadingText="file submitting"
                        size="lg"
                        isLoading={loading} style={{ background: 'rgb(194, 189, 189)', padding: '5px', width: '130px', borderRadius: '10px' }}>
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    )
}

export default page
