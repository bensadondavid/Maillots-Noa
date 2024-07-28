import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SimpleSwiper from "./Slider"; 
import BigSwiper from "./BigSlider";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="shop">
        <img src="/plage-maillot.jpg" alt="plage" className="plage-img" />
        <div className="shop-p-btn">
          <p>DISCOVER NEW ARRIVALS</p>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </div>
      <div className="slider">
      <SimpleSwiper />
      <SimpleSwiper />
      <SimpleSwiper />
      <SimpleSwiper />
      <SimpleSwiper />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Home;