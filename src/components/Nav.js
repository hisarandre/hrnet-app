import React from "react";
import { NavLink } from "react-router-dom";
import { RiFolderUserLine, RiUserAddLine } from "react-icons/ri";

import logo from "../asset/logo.png";

const Nav = () => {
  return (
    <nav className="sidebar">
      <header className="logo">
        <img src={logo} alt="Wealth Health" />
      </header>

      <div className="menu">
        <div className="menu--top">
          <ul className="menu__links">
            <li className="nav__link">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : null)}>
                <RiFolderUserLine className="icon" />
                <span className="text">Employees</span>{" "}
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : null)}>
                <RiUserAddLine className="icon" />
                <span className="text">Add employee</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
