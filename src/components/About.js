import React from "react";
import "./About.css";
import dummyText from "./Dummytext";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__info">
          <div className="about__title" data-aos="fade-right">
            <div className="about__h3">
              <h3>Who are we?</h3>
            </div>
            <div className="about__p">
              <p>{dummyText.whoarewe}</p>
            </div>
          </div>
          <div className="about__image" data-aos="fade-left">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/13/02/17/project-management-2061635_960_720.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="about__container">
        <div className="about__info" id="aboutsecond">
          <div className="about__image" data-aos="fade-right">
            <img
              src="https://cdn.pixabay.com/photo/2017/01/20/19/53/productivity-1995786_960_720.jpg"
              alt=""
            />
          </div>
          <div className="about__title" data-aos="fade-left">
            <div className="about__h3">
              <h3>Our ideals</h3>
            </div>
            <div className="about__p">
              <p>{dummyText.ideals}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
