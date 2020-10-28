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
  const [info, setInfo] = useState({
    user_name: "",
    user_email: "",
    message: "",
    user_subject: "",
  });

  const { user_name, user_email, message, user_subject } = info;
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
            setInfo({
              user_name: "",
              user_email: "",
              user_subject: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          console.log("Something went wrong!", error.text);
        }
      );
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="contact">
      <div className="contact__container" data-aos="fade-right">
        <form
          className="contact__formular"
          id="contact_form"
          onSubmit={sendEmail}
        >
          <h1 className="contact__h1">Contact Form</h1>
          <h4 className="contac__h4">
            Would you like more information about us?
          </h4>
          <div className="contact__info">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              onChange={handleChange}
              placeholder="Charles..."
              value={user_name}
            />
          </div>
          <div className="contact__info">
            <label>Email</label>
            <input
              type="text"
              placeholder="example: email@email.com"
              name="user_email"
              onChange={handleChange}
              value={user_email}
            />
          </div>
          <div className="contact__info">
            <label>Subject</label>
            <input
              type="text"
              placeholder="I need information about..."
              onChange={handleChange}
              name="user_subject"
              value={user_subject}
            />
          </div>
          <div className="contact__info">
            <label>Message</label>
            <textarea
              type="text"
              placeholder="what would you like to know?..."
              name="message"
              onChange={handleChange}
              value={message}
            />
          </div>
          <div className={classes.root}>
            {enviando ? (
              <CircularProgress style={{ color: "rgb(23, 194, 180)" }} />
            ) : null}
            {emailsend ? <Alert severity="success">{emailsend}</Alert> : null}
          </div>
          <div className="contact__info">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <div className="contact__container" id="contactInfo" data-aos="fade-left">
        <div className="contact__containerinfo">
          <div className="contact__title">
            <h1>Contact information</h1>
          </div>
          <div className="contact__info2">
            <h3>Phone</h3>
            <div className="contact__adress">
              <p>+49-1000000000</p>
            </div>
          </div>
          <div className="contact__info2">
            <h3>Direct Contact</h3>
            <div className="contact__adress">
              <p>Email@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
