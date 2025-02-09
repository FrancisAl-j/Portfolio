import React, { useCallback, useEffect, useState } from "react";
import "./slide.css";
import SlideItems from "./SlideItems";

const ProjectSlide = ({ slides }) => {
  const [curr, setCurr] = useState(0);
  const [imageCur, setImageCur] = useState(0);
  const len = slides.length;

  const imageLen = slides[curr].images.length;

  console.log(slides);

  const slideShow = useCallback(() => {
    setImageCur(imageCur + 1 > imageLen - 1 ? 0 : imageCur + 1);
  }, [imageCur, imageLen]);

  useEffect(() => {
    const interval = setTimeout(() => {
      slideShow();
    }, 5000);

    return () => clearTimeout(interval);
  }, [slideShow]);

  const leftHandle = () => {
    setCurr(curr - 1 < 0 ? len - 1 : curr - 1);
  };

  const rightHandle = useCallback(() => {
    setCurr(curr + 1 > len - 1 ? 0 : curr + 1);
  }, [curr, len]);

  return (
    <SlideItems
      name={slides[curr].name}
      image={slides[curr].images[imageCur]}
      link={slides[curr].link}
      description={slides[curr].description}
    />
  );
};

export default ProjectSlide;
