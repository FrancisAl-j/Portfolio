import React, { useState, useRef, useEffect } from "react";
import "./menu.css";
import { NavLink } from "react-router-dom";
import Home from "../../assets/home.svg";
import About from "../../assets/about.svg";
import Mouth from "../../assets/mouth.png";
import Contact from "../../assets/contact.svg";
import Website from "../../assets/website.svg";

const Menu = ({ setShowMenu }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null); // Reference to the eye container
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = () => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const eye = eyeRef.current.getBoundingClientRect();
    const eyeCenter = {
      x: eye.left + eye.width / 2,
      y: eye.top + eye.height / 2,
    };
    const eyeRadius = 30; // The radius of the eye
    const pupilRadius = 15; // The radius of the pupil
    const maxDistance = eyeRadius - pupilRadius;

    // Calculate the direction vector from the eye to the mouse
    const dx = mousePosition.x - eyeCenter.x;
    const dy = mousePosition.y - eyeCenter.y;

    // Calculate the distance
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Constrain the pupil within the eye
    const distanceFactor = Math.min(1, maxDistance / distance);
    const constrainedX = dx * distanceFactor;
    const constrainedY = dy * distanceFactor;

    return { x: constrainedX, y: constrainedY };
  };

  const calculateRightPupilPosition = () => {
    if (!rightEyeRef.current) return { x: 0, y: 0 };

    const eye = rightEyeRef.current.getBoundingClientRect();
    const eyeCenter = {
      x: eye.left + eye.width / 2,
      y: eye.top + eye.height / 2,
    };
    const eyeRadius = 30; // The radius of the eye
    const pupilRadius = 15; // The radius of the pupil
    const maxDistance = eyeRadius - pupilRadius;

    // Calculate the direction vector from the eye to the mouse
    const dx = mousePosition.x - eyeCenter.x;
    const dy = mousePosition.y - eyeCenter.y;

    // Calculate the distance
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Constrain the pupil within the eye
    const distanceFactor = Math.min(1, maxDistance / distance);
    const constrainedX = dx * distanceFactor;
    const constrainedY = dy * distanceFactor;

    return { x: constrainedX, y: constrainedY };
  };

  const pupilPosition = calculatePupilPosition();
  const pupilRightPosition = calculateRightPupilPosition();
  return (
    <>
      <ul className="menu desktop">
        <header>
          <h1 onClick={() => setShowMenu(false)}>X</h1>
        </header>
        <NavLink to="/" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Home} alt="" />
            <p>Home</p>
          </li>
        </NavLink>
        <NavLink to="/about" onClick={() => setShowMenu(false)}>
          <li>
            <img src={About} alt="" />
            <p>About</p>
          </li>
        </NavLink>

        <NavLink to="/contact" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Contact} alt="" />
            <p>Contact</p>
          </li>
        </NavLink>

        <NavLink to="/projects" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Website} alt="" />
            <p>Projects</p>
          </li>
        </NavLink>
      </ul>

      <ul className="menu mobile1">
        <header>
          <h1 onClick={() => setShowMenu(false)}>X</h1>
        </header>
        <a href="#home" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Home} alt="" />
            <p>Home</p>
          </li>
        </a>
        <a href="#about" onClick={() => setShowMenu(false)}>
          <li>
            <img src={About} alt="" />
            <p>About</p>
          </li>
        </a>

        <a href="#contact" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Contact} alt="" />
            <p>Contact</p>
          </li>
        </a>

        <a href="#projects" onClick={() => setShowMenu(false)}>
          <li>
            <img src={Website} alt="" />
            <p>Projects</p>
          </li>
        </a>
      </ul>

      <div className="face-container">
        <div className="eyes-container">
          <div ref={eyeRef} className="eye">
            <div className="eyelid1"></div>
            <div
              className="ball"
              style={{
                transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
              }}
            ></div>
            <div className="eyelid2"></div>
          </div>

          <div ref={rightEyeRef} className="eye">
            <div className="eyelid1"></div>
            <div
              className="ball"
              style={{
                transform: `translate(${pupilRightPosition.x}px, ${pupilRightPosition.y}px)`,
              }}
            ></div>
          </div>
        </div>

        <img src={Mouth} alt="" className="mouth" />
      </div>
    </>
  );
};

export default Menu;
