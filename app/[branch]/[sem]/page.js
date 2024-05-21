"use client"
import useShowToast from '@/hooks/useShowToast'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const sem = useParams();
  const branch = sem.branch;
  const semester = sem.sem;
  // console.log(branch)
  // console.log(semester)

  const showToast = useShowToast();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/notes/${branch}/${semester}`)

        const data = await res.json();

        // console.log(data)
        if (data.error) {
          showToast('Error', data.error, 'error')
          return;
        }
        setNotes(data);
        const n = data;

        const arr = [n];

        for (let i = 0; i < n.length; i++) {
          arr[i] = data[i].subject;
        }

        // console.log(data)
        const uniqueSet = new Set(arr);

        const uniqueArray = Array.from(uniqueSet);

        // console.log(uniqueArray);
        if(data.length > 0){
          setNotes(uniqueArray);
        }

      }
      catch (error) {
        showToast('Error', error, 'error')
      }
    }

    fetchData();
  }, [])

  return (
    <div className="flex flex-wrap justify-center items-center lg:mt-10 mt-8 gap-10">
      {
        notes && notes.length > 0 && notes?.map((item,i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <Link href={`/${branch}/${semester}/${item}`}><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
            <p>{item}</p>
          </div>
        ))
      }
      {
        notes.length == 0 && (
          <div>
            Notes are not uploaded yet
          </div>
        )
      }
      {/* <div className="flex flex-col justify-center items-center">
        <Link href={`/${branch}/${semester}/Control System`}><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
        <p>Control System</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href={`/${branch}/${semester}/Electrical machine`}><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
        <p>Electrical Machine</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href={`/${branch}/${semester}/Power System`}><img src="/fileicon.png" alt="" className="lg:w-40 w-32" /></Link>
        <p>Power System</p>
      </div> */}
    </div>
  )
}

export default page
