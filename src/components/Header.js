import React from "react";
import logoalex from "./../logoalex.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";
function Header() {
  const handleClicktotop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logoalex} onClick={handleClicktotop} alt="logo_alex" />
        </div>
        <div className="header__navbar">
          <Navbar />
        </div>
        <div className="header__input">
          <input type="text" placeholder="search something ...." />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
