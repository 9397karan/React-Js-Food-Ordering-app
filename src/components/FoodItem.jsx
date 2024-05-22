import React from 'react'
import { FoodCard } from './FoodCard'
import FoodData from "../data/FoodData"
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export const FoodItem = () => {
  const category=useSelector((state)=>state.category.category);
  const handleToast=(item)=>{
    toast.success(`${item} added to cart`)
  }
  const search=useSelector((state)=>state.search.search);
  return (
   <><Toaster
   position="top-center"
   reverseOrder={false}
 />
    <div className='flex flex-wrap gap-10'>
{FoodData.filter((food)=>{
if(category === "All"){
  return food.name.toLowerCase().includes(search.toLowerCase());
}else{
  return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
}
}).map((item)=>(
  <FoodCard key={item.id} food={item} handleToast={handleToast}/>
))}


       
        </div>
   </>
  )
}
