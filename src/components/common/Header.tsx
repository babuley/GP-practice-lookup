import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F13B2E" };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/practices">
        Practices
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/consultants">
        Consultants
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
