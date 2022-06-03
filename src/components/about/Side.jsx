import { Search } from "@material-ui/icons";
import React from "react";
import "./side.css";

const Side = () => {
  return (
    <div className="side-bar">
      <form className="inputs">
        <input type="text" placeholder="Search..." />
        <button className="submiton">
          <Search />
        </button>
      </form>
      <div className="search-exampls">
        <h1 className="search-word">Fashion</h1>
        <h1 className="search-word">Prada</h1>
        <h1 className="search-word">Nike</h1>
        <h1 className="search-word">Runway</h1>
        <h1 className="search-word">Men</h1>
      </div>
      <div className="usefull-links">
        <h1 className="usefull">Check latest blog post here</h1>
        <h1 className="usefull">Our latest release</h1>
        <h1 className="usefull">Where you can find us</h1>
      </div>
    </div>
  );
};

export default Side;
