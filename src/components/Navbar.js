import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";

function Navbar() {
  const handleClicktotop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar">
      <Link
        className="navbar__linkicon"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        onClick={handleClicktotop}
      >
        <HomeIcon />
        Home
      </Link>
      <Link
        className="navbar__link"
        activeClass="active"
        to="about"
        spy={true}
        offset={-70}
        smooth={true}
        duration={600}
      >
        About us
      </Link>
      <Link
        className="navbar__link"
        activeClass="active"
        to="services"
        spy={true}
        offset={-70}
        smooth={true}
        duration={600}
      >
        Services
      </Link>
      <Link
        className="navbar__link"
        activeClass="active"
        to="banner2"
        spy={true}
        offset={-70}
        smooth={true}
        duration={600}
      >
        Developer Tools
      </Link>
      <Link
        className="navbar__link"
        activeClass="active"
        to="contact"
        spy={true}
        offset={-70}
        smooth={true}
        duration={600}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
