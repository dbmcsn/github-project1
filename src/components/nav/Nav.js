import React from "react";
import "./nav.css";
import NavLogo from "./../../assets/apol.png";

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={NavLogo} className="logo" />
      </div>

      <div className="navLinkContainer">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#goals">Goals</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Nav;
