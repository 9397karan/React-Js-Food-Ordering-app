import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
export const Protected = ({element}) => {
 const cart=useSelector((state)=>state.cart.cart);
 return cart.length > 0 ? element :<Navigate to="/" />;
}
