import React from "react";
import "./body.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../../components/Info/Profile";
import About from "../about/About";
import Menu from "../../components/menu/Menu";
import Contact from "../contact/Contact";
import Projects from "../project/Projects";

const Body = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <section className="body-container">
        <aside className="profile-body">
          <Profile />
        </aside>
        <article>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </article>
        <aside className={showMenu ? "show-menu" : "hide-menu"}>
          <Menu setShowMenu={setShowMenu} />
        </aside>
      </section>
    </>
  );
};

export default Body;
