import React from "react";
import cartReducer from '../Slices/CartSlice'
import wishReducer from '../Slices/WishSlice'
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer : {
    cart : cartReducer,
    wish : wishReducer
    }
})

export default Store