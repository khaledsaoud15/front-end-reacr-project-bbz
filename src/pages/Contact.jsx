import React from "react";
import ContactForm from "../components/contact/ContactForm";
import Location from "../components/contact/Location";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
