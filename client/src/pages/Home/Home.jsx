import React from "react";
import "./home.css";
import Programming from "../../assets/programmer.gif";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Github from "../../assets/github.svg";
import { Link } from "react-router-dom";
import About from "../about/About";
import Projects from "../project/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  return (
    <article>
      <section className="home" id="home">
        <div className="header-home">
          <div className="header-content">
            <h1>welcome to my portfolio</h1>
            <p>
              I'm a beginner software developer with an experience in
              JavaScript, frameworks like ReactJs, NodeJs, ExpressJs, and
              MongoDB (MERN). I created this portfolio of mine to display the
              basic knowledge I have as a MERN Stack Developer.
            </p>
            <div className="icons">
              <Link to="/contact">
                <button>Talk to me</button>
              </Link>

              <Link to="https://www.facebook.com/Bilaso2/" target="_blank">
                <img src={Facebook} alt="" />
              </Link>

              <Link
                to="https://www.instagram.com/theweekdyssss_/"
                target="_blank"
              >
                <img src={Instagram} alt="" />
              </Link>

              <Link to="https://github.com/FrancisAl-j" target="_blank">
                <img src={Github} alt="" />
              </Link>
            </div>
          </div>

          <img src={Programming} alt="" />
        </div>
      </section>

      <div className="mobile">
        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </article>
  );
};

export default Home;
