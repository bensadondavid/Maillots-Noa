import react from "react";
import { createSlice } from '@reduxjs/toolkit'

const getInitialState = ()=>{
    const cart = localStorage.getItem('cart')
    return cart ? {cart : JSON.parse(cart)} : {cart : []}
}

const CartSlice = createSlice({
    name : 'cart', 
    initialState : getInitialState(),
    reducers : {
        addCart : (state, action) => {state.cart.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeCart : (state, action)=> {state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
})

export const { addCart, removeCart } = CartSlice.actions
export default CartSlice.reducer