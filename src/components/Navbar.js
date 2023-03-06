import React, { useState } from "react";
import "./Navbar.css";
import x from "../assets/x.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div>
        <div className={click ? "hide-me" : "hamburger"} onClick={handleClick}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
          <img className={"x"} alt="x" src={x}></img>
        </div>

        <div id="nav-box" className={click ? "nav-menu active " : "navbar"}>
          <li className="nav-logo">
            <a href="/">Sean Mena</a>
          </li>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
