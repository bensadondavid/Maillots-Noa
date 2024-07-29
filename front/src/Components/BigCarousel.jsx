import React, { useState } from "react";
import Carousel from "./Carousel";

const BigCarousel = () => {
  const carousels = [
    <Carousel key={0} />,
    <Carousel key={1} />,
    <Carousel key={2} />,
    <Carousel key={3} />
  ];
  const [index, setIndex] = useState(0);

  const PreviousItem = () => {
    setIndex(previousIndex => (previousIndex === 0 ? carousels.length - 1 : previousIndex - 1));
  };

  const NextItem = () => {
    setIndex(previousIndex => (previousIndex === carousels.length - 1 ? 0 : previousIndex + 1));
  };

  return (
    <div className="big-carousel">
      <div>
        <div key={index}>
          {carousels[index]}
        </div>
        <div className="carousel-container">
          <button className="previous-button" onClick={PreviousItem}>&lt;</button>
          <button className="next-button" onClick={NextItem}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default BigCarousel;