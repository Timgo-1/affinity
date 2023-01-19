import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">Credit Score Check</div>
          <div className="mobile-nav-item">Credit Card Bill Payment</div>
        </div>
      </div>
      <div className="max-width flex header">
        <img
          src={Logo} alt="Logo"
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">Credit Score Check</div>
          <div className="header-nav-item">Credit Card Bill Payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
