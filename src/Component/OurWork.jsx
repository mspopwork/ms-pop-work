import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import "../Style/ourWork.css";

import img1 from "../Assets/Images/WhatsApp Image 2026-02-22 at 4.33.12 PM.jpeg";
import img2 from "../Assets/Images/WhatsApp Image 2026-02-22 at 4.33.13 PM (1).jpeg";
import img3 from "../Assets/Images/WhatsApp Image 2026-02-22 at 4.33.13 PM (2).jpeg";
import img4 from "../Assets/Images/WhatsApp Image 2026-02-22 at 4.33.13 PM.jpeg";
import img5 from "../Assets/Images/11b35056ebc2ebc43a0ba71d29e62e4c.jpg.jpeg";
import img6 from "../Assets/Images/73dfe79fd3ae6916ef02ed61806cda5b.jpg.jpeg";
import img7 from "../Assets/Images/93d77598d7576a553ee0262e8f7189a0.jpg.jpeg";
import img8 from "../Assets/Images/958767a66846e3ba496625d4c1eb2a39.jpg.jpeg";

function OurWork() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <section className="workSection">
      <div className="workSection__container">
        <h2 className="workSection__heading">Our Work</h2>
        <p className="workSection__subheading">
          A glimpse of our finest craftsmanship and premium interiors.
        </p>

        <div className="workSection__grid">
          {images.map((img, index) => (
            <div
              className="workSection__card"
              key={index}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt="Our Work" />
            </div>
          ))}
        </div>

        <div className="workSection__btnWrap">
          <button
            className="workSection__btn"
            onClick={() => navigate("/gallery")}
          >
            Explore More
          </button>
        </div>
      </div>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          className="workSection__popup"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="workSection__popupContent"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="workSection__close"
              size={30}
              onClick={() => setSelectedImage(null)}
            />
            <img src={selectedImage} alt="Full View" />
          </div>
        </div>
      )}
    </section>
  );
}

export default OurWork;
