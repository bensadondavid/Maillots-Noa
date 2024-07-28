import React, { useState } from "react";

const Carousel = ()=>{

    const arr = ['/maillot1.webp', '/maillot2.webp', '/maillot3.webp']
    const [index, setIndex] = useState(0)
    const PreviousItem = ()=>{
        setIndex( previousIndex => previousIndex === 0 ? arr.length - 1 : previousIndex -1)
    }
    const NextItem = ()=>{
        setIndex( previousIndex => previousIndex === arr.length - 1 ? 0 : previousIndex +1)
    }

    return(
        <>
        <div className="Carousel">
            <div className="img-container">
                <img src={arr[index]} />
                    <div className="carousel-container">
                        <button className="previous-button" onClick={PreviousItem}> &lt; </button>
                        <button className="next-button" onClick={NextItem}>&gt;</button>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Carousel