import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/header.css";
import logo2 from "../Assets/Images/Black_White_Minimalist_Professional_Initial_Logo__1_-removebg-preview.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSectionNavigate = (sectionId) => {
    navigate("/"); // Go to home first
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <header className="headerNav">
      <div className="headerNav__container">
        {/* Logo */}
        <div className="headerNav__logo">
          <Link to="/">
            <img src={logo2} alt="Ms POP Work Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="headerNav__menuDesktop">
          <Link to="/" className="headerNav__link">
            Home
          </Link>

          <button
            className="headerNav__link"
            onClick={() => handleSectionNavigate("about")}
          >
            About
          </button>

          <Link to="/gallery" className="headerNav__link">
            Gallery
          </Link>

          <button
            className="headerNav__link"
            onClick={() => handleSectionNavigate("contact")}
          >
            Contact
          </button>
        </nav>

        {/* Hamburger */}
        <div
          className={`headerNav__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`headerNav__mobile ${isOpen ? "active" : ""}`}>
        <div className="headerNav__closeBtn" onClick={() => setIsOpen(false)}>
          ✕
        </div>

        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="headerNav__mobileLink"
        >
          Home
        </Link>

        <button
          onClick={() => handleSectionNavigate("about")}
          className="headerNav__mobileLink"
        >
          About
        </button>

        <Link
          to="/gallery"
          onClick={() => setIsOpen(false)}
          className="headerNav__mobileLink"
        >
          Gallery
        </Link>

        <button
          onClick={() => handleSectionNavigate("contact")}
          className="headerNav__mobileLink"
        >
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
