import React, { useState } from 'react'
import { ItemCard } from './ItemCard'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const cart=useSelector(state => state.cart.cart);
  const [active,setActive]=useState(false)
const totalItems=cart.length>0;
const totalPrice=cart.reduce((total,item)=> total + item.qty * item.price,0);
const navigate=useNavigate();
  return (
    <>
    <div className={`fixed top-0 right-0 w-full lg:w-[30vw] h-full bg-white ${active ? "translate-x-0" :"translate-x-full"} transition-all duration-500 ease-in-out `}>
        <div className='flex justify-between m-2'>
            <h1 className='text-2xl font-semibold'>My Orders</h1>
            <span><button className='text-2xl font-semibold mr-2' onClick={()=>setActive(false)}>X</button></span>
        </div>
        {totalItems  ? (
            cart.map(food => <ItemCard key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}/>)
          ) : (
            <h1 className='text-center text-xl font-semibold'>No items in cart</h1>
          )}        <div className='absolute bottom-0 m-2 bg-white'>
            <h1 className='text-md font-bold'>Items:{totalItems ?cart.length:0}</h1>
            <h2 className='text-md font-bold'>Price:₹{totalPrice}</h2>
            <button onClick={()=>navigate("/success")} className='bg-green-500 p-1 w-[90vw] m-2 lg:w-[25vw] font-semibold text-white rounded-lg'>Checkout</button>
        </div>
    </div>
    {!active && <FaShoppingCart className='fixed bottom-10 right-0 text-6xl mr-2 bg-white rounded-full p-3 shadow-lg' onClick={()=>setActive(true)}/>}
    </>
  )
}
