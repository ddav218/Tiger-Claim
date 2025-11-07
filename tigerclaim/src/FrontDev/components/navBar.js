import React from "react";
import "../../styles/navBar.css";
import TigerLogo from "../assets/TigerClaimLogoWhite.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={TigerLogo} alt="Tiger Claim Logo" className="navbar-logo-img" />
      </div>
      <div className="navbar-links">
        <button className="nav-btn">Lost Items</button>
        <button className="nav-btn">Found Items</button>
      </div>
    </nav>
  );
};

export default Navbar;
