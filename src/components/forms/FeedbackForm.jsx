"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

const FeedbackForm = () => {
    const router = useRouter();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const message = e.target.message.value;
        const res =await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();

        if(data.insertedId){
            alert("success");
            router.push("/feedback");
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='space-y-5 text-center'>
            <textarea
            required
            className='w-xl border border-dashed p-3' 
            name='message' id=""
             cols="30" rows="10">
             </textarea>
             <hr />
            <button className='btn'>Add feedback</button>
        </form>
    </div>
  )
}

export default FeedbackForm;