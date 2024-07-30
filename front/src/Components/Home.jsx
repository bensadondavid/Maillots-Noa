import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ChangeScreenWidth from "./Screenwidth";
import BigCarousel from "./BigCarousel";

const Home = () => {

  const {screenWidth} = ChangeScreenWidth()

  return (
    <>
    <div className="Home">
      <Header />
      <div className="shop">
        <img src="/plage-maillot.jpg" alt="plage" className="plage-img" />
        <div className="shop-p-btn">
          <p>DISCOVER NEW ARRIVALS</p>
          <button>SHOP NOW</button>
        </div>
      </div>
      </div>
      <div className="carousel-container">
      <Carousel />
      {screenWidth > 768 ? 
      <>
      <Carousel />
      <Carousel />
      <Carousel />
      </> 
      : null}
      </div>
      <div className="categories">
        <div className="category">
          <img src="/category-maillot.jpg"/>
          <h2>SWIMWEAR</h2>
          <button className="shop-button"> SHOP NOW</button>
        </div>
        <div className="category">
          <img src="category-habits.jpg" />
          <h2 className="cloth">CLOTHES</h2>
          <button className="shop-button"> SHOP NOW</button>
        </div>
        <div className="category">
          <img src="category-bags.jpg"/>
          <h2 className="bags">BAGS</h2>
          <button className="shop-button"> SHOP NOW</button>
        </div>
      </div>
      <hr className="hr-home" />
      <Footer />
    </>
  );
};

export default Home;


{/* <div className="about">
          <h2>About us</h2>
          <p> Welcome to Noa, where fashion meets passion. Based in the heart of Jerusalem, our brand is born from a love for style and creativity.
              Our founder, Noa, has always had a flair for drawing and sewing, turning her dreams into reality with a beautiful line of swimwear.
              At Noa, we believe in celebrating individuality and confidence. Each piece is designed with care, blending elegance and comfort
              to make every woman feel special.
              Join us on this journey of fashion and grace. Thank you for being a part of our story!
          </p>
      </div> */}