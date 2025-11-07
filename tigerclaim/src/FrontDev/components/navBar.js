import React from "react";
import "../../styles/navBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Tiger Claim</div>
      <div className="navbar-links">
        <button className="nav-btn">Lost Items</button>
        <button className="nav-btn">Found Items</button>
      </div>
    </nav>
  );
};

export default Navbar;
