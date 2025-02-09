import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import Search from "../../assets/search.svg";
import Menu from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const Nav = ({ setShowMenu }) => {
  const [name] = useState(JSON.parse(localStorage.getItem("name")));
  const [search, setSearch] = useState(false);
  const [guest, setGuest] = useState(
    name ||
      localStorage.setItem(
        "name",
        JSON.stringify(`Guest${Math.floor(Math.random() * 10000)}`)
      )
  );
  const inputRef = useRef(null);

  /*useEffect(() => {
    localStorage.setItem("name", JSON.stringify(guest));
  }, []);*/

  const handleSearch = () => {
    inputRef.current.focus();
    setSearch(true);
  };

  const unfocus = () => {
    setSearch(false);
  };

  return (
    <header>
      <nav>
        <h1>Francis Al-j</h1>

        <div className="profile-wrapper">
          {/*<section className="search-container">
            <input
              type="text"
              ref={inputRef}
              className={search ? "input-show" : "input-hide"}
              onBlur={unfocus}
            />
            <img src={Search} alt="" onClick={handleSearch} />
          </section>*/}
          <Link to="/about">
            <button className="know">Know me</button>
          </Link>

          <img
            onClick={() => setShowMenu(true)}
            className="menu-img"
            src={Menu}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
