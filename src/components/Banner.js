import React from "react";
import "./Banner.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

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
        />
        <div
          className="home__img"
          data-src="https://cdn.pixabay.com/photo/2016/10/16/16/33/dual-screen-1745705_960_720.png"
        />
        <div
          className="home__img"
          data-src="https://cdn.pixabay.com/photo/2016/07/12/19/08/laptop-1512838_960_720.png"
        />
      </AutoplaySlider>
    </div>
  );
}

export default Banner;
