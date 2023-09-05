import style from "./NavBar.module.css";
import React, { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = function () {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <Link
          to="/"
          className={style.logo}
          onClick={() => {
            expand && toggleExpand();
          }}
        >
          <Logo />
        </Link>
        <button className={style.navToggle} onClick={toggleExpand}>
          {expand ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`${style.links} ${expand ? style.expanded : ""}`}>
          <Link to="/about" className={style.link} onClick={toggleExpand}>
            About
          </Link>
          <Link to="/contact" className={style.link} onClick={toggleExpand}>
            Contact
          </Link>
        </div>
        <a href="#" className={style.call}>
          Call Us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
