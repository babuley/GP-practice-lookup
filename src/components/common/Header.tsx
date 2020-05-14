import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {


  render() {
    const activeStyle = { color: "#E13B2E" };
    const { isAuthenticated, login, logout } = this.props.auth;

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
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={activeStyle} to="/profile">
                Profile
            </NavLink>
            </li>
            <li className="nav-item">     
              <NavLink className="nav-link" activeStyle={activeStyle}  onClick={isAuthenticated() ? logout : login} to="/">
                {isAuthenticated() ? "Log Out" : "Log In"}                           
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
