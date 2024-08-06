import react from "react";
import { createSlice } from '@reduxjs/toolkit'

const getInitialState = ()=>{
    const wish = localStorage.getItem('wish')
    return wish ? {wish : JSON.parse(wish)} : {wish : []}
}

const WishSlice = createSlice({
    name : 'wish', 
    initialState : getInitialState(),
    reducers : {
        addWish : (state, action) => {state.wish.push(action.payload)
            localStorage.setItem('wish', JSON.stringify(state.wish));
        },
        removeWish : (state, action)=> {state.wish = state.wish.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('wish', JSON.stringify(state.wish));
        }
    }
})

export const { addWish, removeWish } = WishSlice.actions
export default WishSlice.reducer 