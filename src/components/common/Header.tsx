import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#E13B2E" };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              to="/practices"
            >
              Practices
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              to="/consultants"
            >
              Consultants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              to="/ccgs"
            >
              CCG
            </NavLink>
          </li>          
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
