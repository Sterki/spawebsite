import React from "react";
import "./Services.css";
import ComputerIcon from "@material-ui/icons/Computer";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import dummyText from "./Dummytext";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

function Services() {
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <h1>Services</h1>
        </div>
        <div className="services__firstcolumn">
          <div className="services__icon">
            <div className="services__subtitle">
              <h3>Subtitle Here</h3>
            </div>
            <p>{dummyText.dummyTextParraf}</p>
            <div className="services__buildicon">
              <CodeIcon />
            </div>
          </div>
          <div className="services__icon2">
            <div className="services__subtitle">
              <h3>Subtitle Here</h3>
            </div>
            <p>{dummyText.dummyTextParraf}</p>
            <div className="services__buildicon">
              <BuildIcon />
            </div>
          </div>
          <div className="services__icon3">
            <div className="services__subtitle">
              <h3>Subtitle Here</h3>
            </div>
            <p>{dummyText.dummyTextParraf}</p>
            <div className="services__buildicon">
              <ComputerIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="services__container">
        <div className="services__firstcolumn">
          <div className="services__icon">
            <div className="services__subtitle">
              <h3>Subtitle Here</h3>
            </div>
            <p>{dummyText.dummyTextParraf}</p>
            <div className="services__buildicon">
              <AccessTimeIcon />
            </div>
          </div>
          <div className="services__icon3">
            <div className="services__subtitle">
              <h3>Subtitle Here</h3>
            </div>
            <p>{dummyText.dummyTextParraf}</p>
            <div className="services__buildicon">
              <AspectRatioIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
