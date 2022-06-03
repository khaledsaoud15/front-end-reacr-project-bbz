import { Search } from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.css";
import store from "../../images/store.png";
import { Link } from "react-router-dom";

const Navbar = ({ submit, onchange }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1 className="nav-title">Why Not </h1>
        <img src={store} alt="" className="nav-img" />
      </div>
      <form className="nav-search-bar" onSubmit={submit}>
        <input
          type="text"
          className={active ? "search active" : "search"}
          placeholder="Search..."
          onChange={onchange}
        />
        <div className={active ? "icon active" : "icon"}>
          <Search onClick={() => setActive(!active)} />
        </div>
      </form>
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
