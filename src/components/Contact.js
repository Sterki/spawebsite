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
            <input type="text" name="user_name" placeholder="Charles..." />
          </div>
          <div className="contact__info" name="user_email">
            <label>Email</label>
            <input type="text" placeholder="example: email@email.com" />
          </div>
          <div className="contact__info" name="user_subject">
            <label>Subject</label>
            <input type="text" placeholder="I want info about..." />
          </div>
          <div className="contact__info" name="message">
            <label>Message</label>
            <textarea type="text" placeholder="Send us a message..." />
          </div>
          <div className="contact__info">
            <button>Send Message</button>
          </div>
        </form>
      </div>
      <div className="contact__container">
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
