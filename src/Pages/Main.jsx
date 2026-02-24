// Main.jsx  ← your current file
import React from "react";
import Header from "../Component/Header";
import Hero from "./Hero";
import Footer from "../Component/Footer";
import WhyChooseUs from "../Component/WhyChooseUs";
import OurWork from "../Component/OurWork";
import About from "../Component/About";

function Main() {
  return (
    <>
      {/* <Header />   ← you commented it out – maybe add it back? */}

      <Hero />
      <About />
      <OurWork />
      <WhyChooseUs />

      {/* Floating icons – appear when scrolling through these sections */}
      <div className="floating-contacts">
        <a
          href="tel:+919075353598"
          className="float-btn float-call"
          aria-label="Call us now"
          title="Call Now"
        >
          <i className="fas fa-phone-alt"></i>
        </a>

        <a
          href="https://wa.me/919075353598?text=Hello!%20I'm%20interested%20in%20your%20luxury%20collection."
          className="float-btn float-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Main;
