import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cards } from "../data";
import "./cards/cards.css";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const SingleCard = ({ match }) => {
  const [item, setItem] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    const id = match.params.id;
    const card = cards.find((c) => {
      return c.id == id;
    });
    setItem(card);
    JSON.stringify(item);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="card-item">
        <div className="card-item-img">
          <img src={item.img} alt="" />
        </div>
        <div className="card-item-content">
          <h1> {item.title} </h1>
          <p> {item.description} </p>
          <p>{item.price}</p>
          <button className="card-item-btn" onClick={() => setActive(!active)}>
            Shop now
          </button>
        </div>
        <div className={active ? "pop-up active" : "pop-up"}>
          <div className="pop-up-card">
            <h1>Thank you for shoping at Why Not</h1>
            <Link to="/" className="pop-up-link">
              Go To Home Page
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleCard;
