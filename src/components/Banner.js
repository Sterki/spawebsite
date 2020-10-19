import React from "react";
import "./Banner.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-scroll";

function Banner() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="banner">
      <AutoplaySlider
        className="home__image"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div
          className="home__img"
          data-src="https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_960_720.png"
        >
          <div className="banner__info">
            <div className="banner__pbutton">
              <h3>
                Do you need a reliable and fast website or application when
                browsing?
              </h3>
              <button>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  More info
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="home__img"
          data-src="https://cdn.pixabay.com/photo/2016/10/16/16/33/dual-screen-1745705_960_720.png"
        >
          <div className="banner__info">
            <div className="banner__pbutton">
              <h3>Start by knowing a little more about us and our services</h3>
              <button>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  Go to Services
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="home__img"
          data-src="https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_960_720.png"
        >
          <div className="banner__info">
            <div className="banner__pbutton">
              <h3>
                Learn a little about our company through social networks, don't
                forget to follow us
              </h3>
              {/* <button>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  Go to Contact
                </Link>
              </button> */}
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Banner;
