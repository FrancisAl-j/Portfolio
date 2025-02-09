import React from "react";
import "./carousel.css";

const SlideItem = ({ name, description, image }) => {
  return (
    <div className="items">
      <div className="image-container">
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default SlideItem;
