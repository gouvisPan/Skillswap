import React from "react";
import Navbar from "./Navbar";
import logo from "./../../assets/images/logo-no-bg.png";
import logoW from "./../../assets/images/logo-w.png";
import { NavLink } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Header = () => {
  const scrollPosition = useScroll();
  const headerCss =
    scrollPosition > 20 ? "header-container trans" : "header-container";
  const navLogo = scrollPosition > 20 ? logo : logoW;

  return (
    <div className={headerCss}>
      <NavLink to="home">
        <img src={navLogo} alt="logo"></img>
      </NavLink>
      <Navbar scrolled={scrollPosition > 20} />
    </div>
  );
};

export default Header;
