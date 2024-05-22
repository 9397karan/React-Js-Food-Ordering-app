import React from 'react'
import { Category } from './Category';
import { useDispatch } from 'react-redux';
import {setsearch} from "../store/slice/SearchSlice"

const Navbar = () => {
 const dispatch=useDispatch();
  return (
    <>
    <nav className='flex flex-col lg:flex-row justify-between p-3'>
        <div>
            <h1 className='text-2xl' >{new Date().toUTCString().slice(0,16)}</h1>
            <h1 className='text-3xl font-bold'>Food</h1>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setsearch(e.target.value))} type="text" placeholder='Search food' className='p-3 text-lg my-2 w-full outline-none border border-gray-400 rounded-lg lg:w-[25vw] '/>
        </div>

    </nav>
  
    </>
  )
}
export default Navbar;