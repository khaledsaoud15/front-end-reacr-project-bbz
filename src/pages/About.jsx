import React from "react";
import Navbar from "../components/navbar/Navbar";
import Blog from "../components/about/Blog";
import "./about.css";
import Side from "../components/about/Side";
import Employers from "../components/about/Employers";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="latest">
          <div className="blogs">
            <h1 className="latest-header">Latest Blog News Here</h1>
            <Blog />
            <Employers />
          </div>
        </div>
        <Side />
      </div>
      <Footer />
    </div>
  );
};

export default About;
