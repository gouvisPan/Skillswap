import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

import "./Header.scss";
import { logoutUser } from "../../store/actions/user-actions";
import { useAppDispatch } from "../../hooks/hooks";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

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
      <FaSignOutAlt onClick={handleSignOut} className="logout" />
    </nav>
  );
};

export default Navbar;
