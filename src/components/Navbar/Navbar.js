import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      
      
      <div className="nav-logo">
      <NavLink exact activeClassName="current" to="/">
          <li className="nav-item">ELËA HARRISON</li>
        </NavLink>
      </div>
      <ul className="nav-list">
        <NavLink exact activeClassName="current" to="/Parcours">
          <li className="nav-item">PARCOURS</li>
        </NavLink>
        <NavLink exact activeClassName="current" to="/Rugby">
          <li className="nav-item">RUGBY</li>
        </NavLink>
        <NavLink exact activeClassName="current" to="/Amorino">
          <li className="nav-item">AMORINO</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
