import React, { useState } from "react";
import Cards from "../components/cards/Cards";
import Navbar from "../components/navbar/Navbar";
import { cards } from "../data";
import Blog from "../components/about/Blog";
import "./home.css";
import FakeCards from "../components/cards/FakeCards";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [filter, setFilter] = useState("");

  const onchange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Navbar onchange={onchange} />
      <FakeCards />
      <Cards filter={filter} />
      <div className="blog-container">
        <h1 className="blog-header">From our blog</h1>
        <div className="blog-compo">
          <Blog />
        </div>
      </div>
      <div className="conatc-us">
        <h1 className="conatc-header">Please Contact us here</h1>
        <div className="contact-compo">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
