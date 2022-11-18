import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "./Header.scss";

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <NavLink to="/learning">
        <span>My Mentors</span>
      </NavLink>
      <NavLink to="/teaching">
        <span>My Mentees</span>
      </NavLink>
      <NavLink to="/profile">
        <CgProfile />
      </NavLink>
    </nav>
  );
};

export default Navbar;
