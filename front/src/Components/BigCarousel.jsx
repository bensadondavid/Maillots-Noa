import React, { useState } from "react";

const BigCarousel = () => {

  const categories = [
    { name: "SWIMWEAR", image: "swimwear.jpg" },
    { name: "BEACHWEAR", image: "beachwear.jpg" },
    { name: "ACCESSORIES", image: "accessories.jpg" }
  ];
  const [index, setIndex] = useState(0);

  const PreviousItem = () => {
    setIndex(previousIndex => (previousIndex === 0 ? categories.length - 1 : previousIndex - 1));
  };

  const NextItem = () => {
    setIndex(previousIndex => (previousIndex === categories.length - 1 ? 0 : previousIndex + 1));
  };

  return (
    <>
    <div className="category-carousel">
      <div key={index} className="category">
        <img src={categories[index].image} alt={categories[index].name} />
        <h2>{categories[index].name}</h2>
        <button className="shop-button">SHOP NOW</button>
      </div>
      <div className="carousel-container">
        <button className="previous-button" onClick={PreviousItem}>&lt;</button>
        <button className="next-button" onClick={NextItem}>&gt;</button>
      </div>
      </div>
    </>
  );
};

export default BigCarousel;