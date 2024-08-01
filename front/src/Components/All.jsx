import React, { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const All = ()=>{

    const [filters, setFilters] = useState(false)
    const HandleFilters = ()=>{
            setFilters(!filters)
    }

    return(
        <>
        <div className="New-arrivals">
            <Header/>
            <hr className="hr-links"/>
            <h2>All</h2>
            {!filters ? <button onClick={HandleFilters} className="filters-btn">
            <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg" id="fi_6526846"><g id="Filters"><path d="m4 7h16.18a3 3 0 0 0 5.64 0h2.18a1 1 0 0 0 0-2h-2.18a3 3 0 0 0 -5.64 0h-16.18a1 1 0 0 0 0 2zm19-2a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z"></path><path d="m28 15h-16.18a3 3 0 0 0 -5.64 0h-2.18a1 1 0 0 0 0 2h2.18a3 3 0 0 0 5.64 0h16.18a1 1 0 0 0 0-2zm-19 2a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"></path><path d="m28 25h-7.18a3 3 0 0 0 -5.64 0h-11.18a1 1 0 0 0 0 2h11.18a3 3 0 0 0 5.64 0h7.18a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"></path></g></svg>
            Filters </button> :
            <>
            <div className="filters">
            <button onClick={HandleFilters} className="filters-btn">
                <svg id="fi_16180701" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 5"><path d="m4.36 6.37h1.69a1.74 1.74 0 0 0 .13.36 2.17 2.17 0 0 0 1.64 1.07 1 1 0 0 0 .24 0 1.08 1.08 0 0 0 .18 0 .75.75 0 0 0 .24-.08h.09a1.56 1.56 0 0 0 .62-.36 2.12 2.12 0 0 0 .57-1h9.87a.5.5 0 0 0 0-1h-9.86a1.93 1.93 0 0 0 -1-1.24 2 2 0 0 0 -2.31.4 1.91 1.91 0 0 0 -.46.85h-1.64a.5.5 0 0 0 -.5.5.51.51 0 0 0 .5.5zm2.64-.23c0-.06 0 0 0 0zm-.07-.46a0 0 0 0 1 0 0 1.21 1.21 0 0 1 0-.18h.07a.41.41 0 0 0 0-.09l.06-.09.11-.11a.51.51 0 0 1 .27-.21h.11.1.29s-.09 0 0 0h.16.12l.2.1.09.07c.05.05.11.1.16.16l.05.08v.1a1.74 1.74 0 0 1 .05.22s0-.09 0 0v.16a.25.25 0 0 1 0 .08v.09.1s0 .08 0 .09l-.11.2-.09.09-.08.08-.1.06s0 0 0 0h-.07a2.32 2.32 0 0 1 -.38.06 3 3 0 0 1 -.32-.09l-.09-.05h-.17a1.29 1.29 0 0 1 -.16-.17l-.06-.09s-.14-.14-.14-.19v-.15a.19.19 0 0 1 0 0 .24.24 0 0 1 0-.09v-.19z"></path><path d="m4.36 12.48h10a2.3 2.3 0 0 0 .12.34 2.2 2.2 0 0 0 1.64 1.07.69.69 0 0 0 .25 0h.19l.23-.08h.1a1.52 1.52 0 0 0 .61-.36 2 2 0 0 0 .57-1h1.55a.5.5 0 0 0 .5-.5.5.5 0 0 0 -.5-.5h-1.52a1.92 1.92 0 0 0 -1.05-1.25 2 2 0 0 0 -2.31.4 1.78 1.78 0 0 0 -.41.85h-10a.5.5 0 0 0 .03 1.03zm11-.23c0-.06 0 0 0 0zm-.06-.46a.43.43 0 0 0 0-.05 1.21 1.21 0 0 0 .05-.18v-.09a.41.41 0 0 0 .05-.09l.11-.11a.65.65 0 0 1 .16-.09h.12.1.29s-.09 0 0 0h.15s.18.07.12 0l.2.11.09.06.15.16s0 0 0 0a.43.43 0 0 1 0 .07l.06.1a.83.83 0 0 1 .06.21.92.92 0 0 1 0 .16.19.19 0 0 0 0 .08.37.37 0 0 0 0 .09v.1.1l-.11.19a.39.39 0 0 1 -.08.1l-.08.07-.09.06s0 0 0 0h-.07a2.32 2.32 0 0 1 -.38.06 3 3 0 0 1 -.32-.09l-.09-.05-.14-.08a1.29 1.29 0 0 1 -.16-.17l-.06-.08a1.09 1.09 0 0 1 -.08-.15v-.09a.29.29 0 0 0 0-.09s0-.07 0-.09a.22.22 0 0 0 0-.06z"></path><path d="m6.18 18.74a2.17 2.17 0 0 0 1.64 1.07 1 1 0 0 0 .24 0h.19a.75.75 0 0 0 .24-.08h.09a1.56 1.56 0 0 0 .62-.36 2.12 2.12 0 0 0 .57-1h9.87a.5.5 0 0 0 0-1h-9.87a1.93 1.93 0 0 0 -1-1.24 2 2 0 0 0 -2.31.4 1.91 1.91 0 0 0 -.41.83h-1.69a.5.5 0 0 0 -.5.5.51.51 0 0 0 .5.5h1.69a1.74 1.74 0 0 0 .13.38zm.82-.59c0-.06 0 0 0 0zm-.07-.46v-.05a0 0 0 0 1 0 0 1.21 1.21 0 0 1 0-.18h.07a.41.41 0 0 0 0-.09l.06-.09a.57.57 0 0 1 .11-.11.51.51 0 0 1 .27-.17h.11.1.29s-.09 0 0 0h.14.12l.2.1.09.06c.05 0 .11.1.16.16l.05.08v.1a2.25 2.25 0 0 1 .05.22s0-.09 0 0v.16a.25.25 0 0 1 0 .08v.09.1s0 .08 0 .09l-.11.2-.09.09-.08.08-.1.06s0 0 0 0h-.07a2.32 2.32 0 0 1 -.38.06 3 3 0 0 1 -.32-.09h-.09l-.13-.08a1.29 1.29 0 0 1 -.16-.17l-.06-.09s0-.09-.08-.14h-.08v-.1a.19.19 0 0 1 0-.06.24.24 0 0 1 0-.09v-.15z"></path></svg>
            Filters </button>
                <form method="POST" className="filters-form">
                    <select name="category">
                        <option value="select-category">Select a category</option>
                        <option value="swimwear">swimwear</option>
                        <option value="clothes">clothes</option>
                        <option value="bags">bags</option>
                    </select>
                    <select name="size">
                        <option value="select-size">Select a size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                    <input type="number" className="price" placeholder="Price-max"/>
                    <button type="submit">Apply</button>
                </form>
            </div>
            </>
        }
                
            <div className="new-arrivals-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default All