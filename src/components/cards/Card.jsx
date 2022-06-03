import { Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const Card = ({ item, key }) => {
  return (
    <div className="card" key={key}>
      <div className="card-img">
        <img src={item.img} alt="" />
        <div className="content">
          <h1 className="card-title">{item.title}</h1>
          <p className="card-desc">
            <b>price</b>: {item.price}
          </p>
          <Link to={`/card/${item.id}`} className="search-btn">
            Check
            <Search />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
