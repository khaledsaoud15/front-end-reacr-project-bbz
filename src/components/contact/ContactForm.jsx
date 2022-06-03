import React from "react";
import "./contact.css";
import location from "../../images/location.png";

const ContactForm = () => {
  return (
    <div className="contact">
      <form className="contact-form">
        <div className="form-holders">
          <input type="text" placeholder="username.." />
          <input type="email" placeholder="email.." />
        </div>
        <textarea cols="30" rows="10" placeholder="message.."></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
