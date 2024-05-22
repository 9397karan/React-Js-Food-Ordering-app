import React, { useEffect, useState } from 'react'
import FoodData from "../data/FoodData"
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/slice/CategorySlice';
export const Category = () => {

  const [category,setcategory]=useState([]);
  const handlecategory=()=>{
    const categories=[...new Set(FoodData.map((item)=>item.category))]
    setcategory(categories);
    console.log(categories);
  }
  const dispatch=useDispatch();
  const selectedCategory=useSelector((state)=>state.category.category)
  useEffect(()=>{
handlecategory();
  },[])
  return (
    <div className='m-2'>
        <h2 className='text-xl font-semibold'>Find the best Food</h2>
        <div className='ml-2 flex gap-2 mt-2'>
        <button onClick={()=>dispatch(setCategory("All"))} className={`bg-gray-200 p-2 px-3 py-2 rounded-lg hover:text-white font-bold hover:bg-green-500 ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>
        {category.map((item)=>(
          <button onClick={()=>dispatch(setCategory(item))} className={`bg-gray-200 p-2 px-3 py-2 rounded-lg hover:text-white font-bold hover:bg-green-500 ${selectedCategory === item && "bg-green-500 text-white"}`} key={item}>{item}</button>
        ))}
       
        </div>
    </div>
  )
}
