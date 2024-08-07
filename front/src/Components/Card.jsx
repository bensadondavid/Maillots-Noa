import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Slices/CartSlice";
import { addWish } from "../Slices/WishSlice";

const Card = ({ item })=>{

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        const itemWithId = { ...item, id: Date.now() }
        dispatch(addCart(itemWithId))
    }

    const handleAddToWish = () => {
        const itemWithId = { ...item, id: Date.now() }
        dispatch(addWish(itemWithId))
    }

    return(
        <>
        <div className="Card">
            <div className="card-img">
                <img src="maillot1.webp" />
            </div>
            <div className="details">
                <div className="price-name">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div className="svg-card">
                <button className="redux-add-cart" onClick={handleAddToCart}><svg id="fi_11082907" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="black" className="add-to-cart"><path d="m56.02272 52.00191-5.02539-35.17872a1.00055 1.00055 0 0 0 -.991-.85907l-8.22607-.00024-1.35755-5.42926c-2.21734-8.70355-14.6369-8.72211-16.86078.00012l-1.35742 5.42865-8.2262-.00024a1.00054 1.00054 0 0 0 -.991.85907l-5.02538 35.17969a7.00631 7.00631 0 0 0 6.93507 7.99646h34.19066a7.04958 7.04958 0 0 0 6.93506-7.99646zm-30.51984-40.98157c1.67035-6.69043 11.307-6.6966 12.97888.00012l1.23609 4.94336-15.45085-.00037zm27.36505 45.25152a5.00083 5.00083 0 0 1 -3.78027 1.725h-34.19066a5.03448 5.03448 0 0 1 -4.953-5.71155l4.9022-34.32064 26.15076.0008 8.14154.00024 4.90222 34.31964a5.002 5.002 0 0 1 -1.17279 3.98651z"></path><path d="m39.49818 39.9828h-6.50507v-6.50506a1.001 1.001 0 0 0 -2.00158.00006v6.505h-6.505a1.0008 1.0008 0 0 0 0 2.00159h6.505v6.505a1.00079 1.00079 0 1 0 2.00158 0v-6.505h6.50507a1.001 1.001 0 0 0 0-2.00159z"></path></svg></button>
                <button className="redux-add-wish" onClick={handleAddToWish}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="transparent" stroke="black" strokeWidth={1.5} className="heart"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card