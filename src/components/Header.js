import React, { useEffect, useState } from "react";
import logoalex from "./../logoalex.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";
function Header() {
  const handleClicktotop = () => {
    scroll.scrollToTop();
  };
  const [scrollPoss, setScrollPos] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    let headerid = document.getElementById("headerid");

    setScrollPos(position);
    if (scrollPoss > 250) {
      headerid.classList.add("headeridtrans");
    } else {
      headerid.classList.remove("headeridtrans");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="header" id="headerid">
      <div className="header__container">
        <div className="header__navbar">
          <Navbar />
        </div>
        {/* <div className="header__logo">
          <img src={logoalex} onClick={handleClicktotop} alt="logo_alex" />
        </div> */}
        <div className="header__input">
          <input type="text" placeholder="search...." />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
