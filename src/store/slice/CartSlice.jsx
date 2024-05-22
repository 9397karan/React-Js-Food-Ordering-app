import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addTocart:(state,action)=>{
            const existingItem=state.cart.find((item)=>item.id === action.payload.id);
            if(existingItem){
                state.cart=state.cart.map((item)=> item.id === action.payload.id ?{...item,qty:item.qty +1}:item);
            }else{

                state.cart.push(action.payload);
            }
        },
        removeFromcart:(state,action)=>{
            state.cart=state.cart.filter((item)=> item.id != action.payload);
        },
        incrementQty: (state, action) => {
            state.cart=state.cart.map((item)=> item.id === action.payload.id ?{...item,qty:item.qty +1}:item);
          
          },
          decrementQty: (state, action) => {
            state.cart=state.cart.map((item)=> item.id === action.payload.id ?{...item,qty:item.qty -1}:item);
          },
    }

})
export const {addTocart ,removeFromcart,incrementQty,decrementQty}=CartSlice.actions;
export default CartSlice;