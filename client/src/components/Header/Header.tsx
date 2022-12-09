import React from "react";
import Navbar from "./Navbar";
import logo from "./../../assets/images/logo-no-bg.png";
import logoW from "./../../assets/images/logo-w.png";
import { NavLink, useLocation } from "react-router-dom";
import useScroll from "../../hooks/useScroll";

const Header = () => {
  const scrollPosition = useScroll();
  const { pathname } = useLocation();
  const expression =
    pathname.includes("learning/") || pathname.includes("teaching/");
  const headerCss = expression ? "header-container trans" : "header-container";

  return (
    <div className={headerCss}>
      <NavLink to="home">
        {!expression && <img src={logoW} alt="logo"></img>}
      </NavLink>
      <Navbar scrolled={scrollPosition > 12} />
    </div>
  );
};

export default Header;
