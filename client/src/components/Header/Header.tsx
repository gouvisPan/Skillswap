import React from "react";
import Navbar from "./Navbar";
import logo from "./../../assets/images/logo-no-bg.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/">
        <img src={logo}></img>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
