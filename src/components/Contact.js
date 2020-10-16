import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <form id="contact_form">
          <h1 className="contact__h1">Contact Form</h1>
          <div className="contact__info">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="contact__info" name="user_email">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="contact__info" name="user_subject">
            <label>Subject</label>
            <input type="text" />
          </div>
          <div className="contact__info" name="message">
            <label>Message</label>
            <textarea type="text" />
          </div>
          <div className="contact__info">
            <button>Send info</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
