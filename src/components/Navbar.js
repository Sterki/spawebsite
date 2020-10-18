import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import logoalex from "./../logoalex.png";

const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
});

function Navbar() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClicktotop = () => {
    scroll.scrollToTop();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <div className="navbar__menuapp">
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className="button__nabvarmenu"
              onClick={toggleDrawer(anchor, true)}
            >
              <DehazeIcon
                style={{
                  color: "rgb(23, 194, 180)",
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <div className="navbar">
                <div className="header__logo">
                  <img
                    src={logoalex}
                    onClick={handleClicktotop}
                    alt="logo_alex"
                  />
                </div>
                <Link
                  className="navbar__linkicon"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                  onClick={handleClicktotop}
                >
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
                  to="contact__container"
                  spy={true}
                  offset={-70}
                  smooth={true}
                  duration={600}
                >
                  Contact
                </Link>
              </div>
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Navbar;
