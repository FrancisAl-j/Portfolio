import React from "react";
import "./slide.css";
import Web from "../../../assets/web.svg";

const SlideItems = ({ name, image, link, description }) => {
  console.log(description);

  return (
    <div className="project-items">
      <h1>{name}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
      <a href="https://cake-shop-dgvz.onrender.com/" target="_blank">
        <img src={Web} alt="" />
        <p>{link}</p>
      </a>
    </div>
  );
};

export default SlideItems;
