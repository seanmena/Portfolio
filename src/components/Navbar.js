import { useState } from "react";
import { ReactComponent as Hamburger } from "../assets/icons/hamburger.svg";
import { ReactComponent as X } from "../assets/icons/x.svg";
// import { ReactComponent as Brand } from "../../assets/icons/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="logo"></div>
        <div
          className={showNavbar ? "hide-me" : "menu-icon"}
          onClick={handleShowNavbar}
        >
          <Hamburger />
        </div>
        <div
          className={showNavbar ? "x-icon" : "hide-me"}
          onClick={handleShowNavbar}
        >
          <X />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
