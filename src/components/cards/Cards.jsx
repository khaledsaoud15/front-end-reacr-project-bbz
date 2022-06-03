import React from "react";
import { cards } from "../../data";
import Card from "./Card";
import "./cards.css";

const Cards = ({ filter }) => {
  return (
    <div className="container">
      <h1 className="popular">Our Popular Items</h1>
      <div className="cards">
        {cards
          .filter((c) => {
            if (c.title.toLowerCase().includes(filter)) {
              return c;
            } else {
              return "";
            }
          })
          .map((c) => (
            <Card item={c} key={c.id} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
