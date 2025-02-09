import React, { useCallback, useEffect, useState } from "react";
import "./carousel.css";
import SlideItem from "./SlideItem";
import Prev from "../../../assets/prev.svg";
import Next from "../../../assets/next.svg";

const Carousel = ({ slides }) => {
  const [curr, setCurr] = useState(0);

  const len = slides.length;

  const leftHandle = () => {
    setCurr(curr - 1 < 0 ? len - 1 : curr - 1);
  };

  const rightHandle = useCallback(() => {
    setCurr(curr + 1 > len - 1 ? 0 : curr + 1);
  }, [curr, len]);

  useEffect(() => {
    const interval = setTimeout(() => {
      rightHandle();
    }, 6000);

    return () => clearTimeout(interval);
  }, [rightHandle]);

  return (
    <div className="carousel-container">
      <h1>Technologies</h1>
      <div className="carousel-wrapper">
        <img src={Prev} alt="" className="arrow" onClick={leftHandle} />
        <SlideItem
          name={slides[curr].name}
          description={slides[curr].description}
          image={slides[curr].image}
        />
        <img src={Next} alt="" className="arrow" onClick={rightHandle} />
      </div>
    </div>
  );
};

export default Carousel;
