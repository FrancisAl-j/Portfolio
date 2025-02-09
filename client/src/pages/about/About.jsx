import React, { useState } from "react";
import "./about.css";
import { stack_data } from "../../assets/Data";
import Carousel from "./Carousel/Carousel";

const About = () => {
  const [slides] = useState(stack_data);
  return (
    <section className="about">
      <div className="about-content ">
        <h1>MERN Stack Development</h1>
        <p>
          Hey there! I'm Francis, a passionate beginner diving into the world of
          MERN stack development. With a curiosity-driven approach, I'm
          exploring the intricacies of building robust web applications using
          MongoDB, Express, React, and Node.js. Every day is a new adventure in
          coding as I navigate through the challenges and triumphs of learning
          the ropes. Join me on this journey as I strive to craft meaningful
          digital experiences and expand my skills in web development.
        </p>
      </div>

      <Carousel slides={slides} />
    </section>
  );
};

export default About;
