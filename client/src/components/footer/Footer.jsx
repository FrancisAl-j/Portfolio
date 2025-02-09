import React from "react";
import "./footer.css";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Github from "../../assets/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        <h1>Francis Al-j Bilas</h1>
        <p>
          I do basic Full-stack Web Application specialize on JavaScript and
          libraries like ReactJs, NodeJs, and ExpressJs.
        </p>

        <div className="socials">
          <a href="https://www.facebook.com/Bilaso2/" target="_blank">
            <img src={Facebook} alt="" />
          </a>

          <a href="https://www.instagram.com/theweekdyssss_/" target="_blank">
            <img src={Instagram} alt="" />
          </a>

          <a href="https://github.com/FrancisAl-j" target="_blank">
            <img src={Github} alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
