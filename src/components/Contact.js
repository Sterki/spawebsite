import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const [enviando, setEnviado] = useState(false);
  const [emailsend, setEmailSend] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setEnviado(true);
    emailjs
      .sendForm(
        "zloan_service_id", //YOUR_ID_SERVICE
        "contact_form", // YOUR_TEMPLATE_ID AND THIS NEED TO BE THE SAME IN BOTH SIDE HERE AND INTO UR TEMPLATE IN EMAILJS
        e.target, // THIS ARE THE VALUES FROM OUR FORMULAR
        "user_zvdh1HirL2WmVAx3yIl4H" // THIS IS UR USER_ID FROM EMAILJS (SEARCH IN THE DASHBOARD INTEGRATION, THIS USER_ID SHOULD BE THERE!)
      )
      .then(
        (result) => {
          setTimeout(() => {
            setEmailSend("Email sent successfully");
            setEnviado(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__container">
        <form id="contact_form" onSubmit={sendEmail}>
          <h1 className="contact__h1">Contact Form</h1>

          <div className="contact__info">
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Charles..." />
          </div>
          <div className="contact__info">
            <label>Email</label>
            <input
              type="text"
              placeholder="example: email@email.com"
              name="user_email"
            />
          </div>
          <div className="contact__info" name="user_subject">
            <label>Subject</label>
            <input type="text" placeholder="I need information about..." />
          </div>
          <div className="contact__info">
            <label>Message</label>
            <textarea
              type="text"
              placeholder="what would you like to know?..."
              name="message"
            />
          </div>
          <div className={classes.root}>
            {enviando ? <CircularProgress /> : null}
            {emailsend ? <Alert severity="success">{emailsend}</Alert> : null}
          </div>
          <div className="contact__info">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <div className="contact__container" id="contactInfo">
        <div className="contact__containerinfo">
          <div className="contact__title">
            <h1>Title here!</h1>
          </div>
          <div className="contact__info2">
            <h3>icons here</h3>
            <div className="contact__adress">
              <p>adress here!!</p>
            </div>
          </div>
          <div className="contact__info2">
            <h3>icons here</h3>
            <div className="contact__adress">
              <p>adress here!!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
