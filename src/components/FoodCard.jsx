import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../store/slice/CartSlice';


export const FoodCard = ({food,handleToast}) => {

  const dispatch=useDispatch();

  const addtocart=()=>{
    dispatch(addTocart({
      id:food.id,
      name:food.name,
      price:food.price,
      img:food.img,
      qty:1
    }),
  handleToast(food.name))
  }
  return (
    <div className='w-[250px] mx-auto my-5 flex flex-col p-3 bg-white gap-2 rounded-lg '>
        <img src={food.img} alt="" className='w-auto h-[140px]'/>
        <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>{food.name}</h2>
            <span className='text-green-500 font-bold text-lg '>₹{food.price}</span>
        </div>
        <p className='text-md'>
        {food.desc.slice(0,100)}..</p>
        <div className='flex justify-between'>
            <span className='font-bold'>⭐{food.rating}</span>
            <button onClick={addtocart} className='bg-green-500 p-1 font-bold rounded-md px-2 text-white'  >Add to cart</button>
        </div>
    </div>
  )
}
