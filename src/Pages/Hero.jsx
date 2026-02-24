import React, { useState } from "react";
import HeroVideo from "../Assets/Video/ms pop video.mp4";
import { FaPhoneAlt, FaWhatsapp, FaTimes } from "react-icons/fa";
import "../Style/hero.css";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="heroSection">
      <video
        className="heroSection__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="heroSection__overlay" />

      <div className="heroSection__content">
        <h1 className="heroSection__title">Elevate Your Presence</h1>

        <p className="heroSection__subtitle">
          Premium style in Nagpur
          <br />
          clean, elegant, confident.
        </p>

        <div className="heroSection__buttons">
          <button className="heroSection__btn heroSection__btn--primary">
            Explore Collection
          </button>

          <button
            className="heroSection__btn heroSection__btn--secondary"
            onClick={() => setShowPopup(true)}
          >
            Contact Us
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="heroPopup" onClick={() => setShowPopup(false)}>
          <div className="heroPopup__box" onClick={(e) => e.stopPropagation()}>
            <FaTimes
              className="heroPopup__close"
              onClick={() => setShowPopup(false)}
            />

            <h2>Private Assistance</h2>

            <a
              href="tel:+919075353598"
              className="heroPopup__link heroPopup__link--call"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href="https://wa.me/919075353598"
              target="_blank"
              rel="noopener noreferrer"
              className="heroPopup__link heroPopup__link--whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
