import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, incrementQty, removeFromcart} from '../store/slice/CartSlice';
import toast from 'react-hot-toast';

export const ItemCard = ({id,name,price,img,qty }) => {
  const dispatch=useDispatch();

  const handleremove=()=>{
    dispatch(removeFromcart(id));
    toast(`${name} removed from cart`, {
      icon: '👏',
    });
  }
 
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-5 m-4">
    <button onClick={() => {
          dispatch(removeFromcart(id));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }} className="absolute -my-3 right-7 text-gray-600 cursor-pointer ">X</button>
    <img src={img} alt="" className="w-[50px] h-[50px] " />
    <div className="leading-5">
      <h2 className="font-bold text-gray-800">{name}</h2>
      <div className="flex justify-between ">
        <span className="text-green-500 font-bold">₹{price}</span>
        <div className="flex justify-center items-center gap-2 absolute right-7 mb-2">
          <button onClick={()=> qty>1 ? dispatch(decrementQty({id})):(qty=1)}  className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer">-</button>
          <span>{qty}</span>
          
           <button onClick={()=> qty>=1 ? dispatch(incrementQty({id})):(qty=1)} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer">+</button>
          
        </div>
      </div>
    </div>
  </div>
  )
}
