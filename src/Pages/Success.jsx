import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners'

export const Success = () => {
  const [loading,setloading]=useState(true);
  const navigate=useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      {loading ? <BeatLoader color="#36d7b7" /> :(
        <div>
          <video src="vid.mp4" autoPlay muted className='w-[25vw] items-center block mx-auto'></video>
     <h1 className='text-center text-3xl'>Ordered Successfully</h1>
      <h2 className='text-center text-xl'>You'll recieve your Order soon</h2>
     
     </div>
      ) }
     
     
    </div>
  )
}
