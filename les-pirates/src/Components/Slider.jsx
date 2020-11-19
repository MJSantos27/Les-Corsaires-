import React from "react";
import "./Slider.css";
import Carousel from "react-elastic-carousel";

function Slider() {
  const breakPoints = [
    { width: 1, itemsToScroll: 1, itemsToShow: 1 },
    { width: 500, itemsToScroll: 1, itemsToShow: 1 },
    { width: 768, itemsToScroll: 1, itemsToShow: 1 },
    { width: 1200, itemsToScroll: 1, itemsToShow: 1 },
  ];

  return (
    <div className="Slider">
      <Carousel breakPoints={breakPoints}>
        <img src="https://via.placeholder.com/150" alt="" />
        <img scr="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
        <img src="https://via.placeholder.com/150" alt="" />
      </Carousel>
    </div>
  );
}
export default Slider;
