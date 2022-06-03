import React from "react";
import { imgs } from "../../data";
import "./cards.css";

const FakeCards = () => {
  return (
    <div className="fake">
      {imgs.map((i) => (
        <div className="fake-container">
          <div className="overlay"></div>
          <img src={i.img} alt="" />
          <h1>{i.desc}</h1>
        </div>
      ))}
    </div>
  );
};

export default FakeCards;
