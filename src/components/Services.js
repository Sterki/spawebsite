import React from "react";
import "./Services.css";
import ComputerIcon from "@material-ui/icons/Computer";
import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import dummyText from "./Dummytext";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";

function Services() {
  return (
    <div className="services" data-aos="zoom-in">
      <h1>Our Services</h1>
      <div className="services__container">
        <div className="services__info2">
          <h3>Web Development</h3>
          <p>{dummyText.webdevelopment}</p>
          <div className="services__icon">
            <CodeIcon />
          </div>
        </div>
        <div className="services__info2">
          <h3>Application Maintenance</h3>
          <p>{dummyText.mantentcion}</p>
          <div className="services__icon">
            <BuildIcon />
          </div>
        </div>
        <div className="services__info1">
          <h3>Consulting</h3>
          <p>{dummyText.consultor}</p>
          <div className="services__icon">
            <ComputerIcon />
          </div>
        </div>
      </div>
      <div className="services__container">
        <div className="services__info1">
          <h3>Cloud Applications</h3>
          <p>{dummyText.cloudapp}</p>
          <div className="services__icon">
            <SettingsSystemDaydreamIcon />
          </div>
        </div>
        <div className="services__info2">
          <h3>Custom-Made Products</h3>
          <p>{dummyText.custommadeproducto}</p>
          <div className="services__icon">
            <AspectRatioIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
