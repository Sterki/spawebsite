import React from "react";
import "./Footer.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const handleClicktotop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer">
      <KeyboardArrowUpIcon onClick={handleClicktotop} />
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
