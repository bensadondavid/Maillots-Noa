import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
    <div className="Home">
      <Header />
      <div className="shop">
        <img src="/plage-maillot.jpg" alt="plage" className="plage-img" />
        <div className="shop-p-btn">
          <p>DISCOVER NEW ARRIVALS</p>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </div>
      </div>
      <p className="carousel-title">See what we do</p>
      <div className="carousel-container">
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
      </div>
      <hr className="hr-home" />
      <Footer />
    </>
  );
};

export default Home;