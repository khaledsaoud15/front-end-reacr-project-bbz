import React from "react";
import "./contact.css";
import location from "../../images/location.png";

const Location = () => {
  return (
    <div className="location">
      <img src={location} alt="" />
      <h1 className="fill">Fill the form below</h1>
    </div>
  );
};

export default Location;
