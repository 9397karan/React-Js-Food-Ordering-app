import React from 'react'
import Navbar  from '../components/Navbar'
import { Category } from '../components/Category'
import { FoodItem } from '../components/FoodItem'
import { Cart } from '../components/Cart'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <Category/>
    <FoodItem/>
    <Cart/>
    </>
  )
}
