import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { emplo } from "../../data";
import "./employers.css";

const Employers = () => {
  return (
    <div className="conatiner">
      <h1 className="meet">Meet Our Staff</h1>
      <div className="emplo">
        {emplo.map((e) => (
          <div className="emplo-card">
            <img src={e.img} alt="" />
            <div className="emplo-content">
              <h1> {e.name} </h1>
              <p>{e.work}</p>
            </div>
            <div className="emplo-icons">
              <div className="emplo-icon">
                <Facebook />
              </div>
              <div className="emplo-icon">
                <LinkedIn />
              </div>
              <div className="emplo-icon">
                <Instagram />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employers;
