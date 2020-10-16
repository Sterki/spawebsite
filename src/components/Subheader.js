import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Subheader.css";

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader__phono">
        <PhoneIcon />
        <p>+49-1633833515</p>
      </div>
      <div className="subheader__socialmedia">
        <InstagramIcon style={{ color: "#e66465" }} />
        <FacebookIcon style={{ color: "rgb(59,89,152)" }} />
        <TwitterIcon style={{ color: "rgb(29,161,242)" }} />
      </div>
    </div>
  );
}

export default Subheader;
