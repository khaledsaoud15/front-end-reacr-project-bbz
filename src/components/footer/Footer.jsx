import { Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import store from "../../images/store.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1 className="footer-header">Why Not</h1>
        <img src={store} alt="" className="footer-img" />
      </div>
      <div className="footer-links">
        <Link to="/" className="footer-link">
          Home
        </Link>
        <Link to="/about" className="footer-link">
          About
        </Link>
        <Link to="/contact" className="footer-link">
          Contact
        </Link>
      </div>
      <div className="footer-contact">
        <h1 className="footer-contact-header">Feel free to hit us up</h1>
        <div className="footer-inputs">
          <input type="text" placeholder="contact.." />
          <button className="footer-btn">
            <Search />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
