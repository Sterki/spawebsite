import React from "react";
import "./Footer.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { animateScroll as scroll } from "react-scroll";
import CopyrightIcon from "@material-ui/icons/Copyright";
import CheckIcon from "@material-ui/icons/Check";

function Footer() {
  const handleClicktotop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer">
      <div className="footer__iconarrow">
        <KeyboardArrowUpIcon onClick={handleClicktotop} />
      </div>
      <div
        className="footer_container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="footer__services">
          <h3>Title here</h3>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
        </div>
        <div className="footer__services">
          <h3>Title here</h3>
          <p>Some info</p>
          <p>Some Info</p>
          <p>Some Info</p>
          <p>Some info</p>
          <p>Some info</p>
          <p>Some info</p>
        </div>
        <div className="footer__services">
          <h3>Title here</h3>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
          <p>Services info</p>
        </div>
        <div className="footer__services">
          <h3>Title here</h3>
          <p>Some info</p>
          <p>Some Info</p>
          <p>Some Info</p>
          <p>Some info</p>
          <p>Some info</p>
          <p>Some info</p>
        </div>
      </div>
      <div
        className="footer__subfooter"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="footer__terms">
          <p>Terms and Conditions | Privacy Policy | Legal Notice</p>
        </div>
        <div className="footer__created">
          <CopyrightIcon />
          <p>2020. Powered By Alex Rodriguez</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
