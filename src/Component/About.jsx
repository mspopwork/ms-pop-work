import React from "react";
import "../Style/About.css";
import aboutImg from "../Assets/Images/about.jpg";

function About() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutSection__container">
        {/* LEFT IMAGE */}
        <div className="aboutSection__image">
          <img src={aboutImg} alt="About Ms POP Work" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutSection__content">
          <h2 className="aboutSection__heading">About Us</h2>

          <p className="aboutSection__text">
            At <span>Ms POP Work</span>, we specialize in delivering premium POP
            designs and elegant interior craftsmanship that elevate living
            spaces with style and sophistication.
          </p>

          <p className="aboutSection__text">
            With years of expertise, our team is committed to quality,
            precision, and customer satisfaction. From modern ceiling designs to
            customized decorative finishes, we transform your vision into
            reality.
          </p>

          <div className="aboutSection__stats">
            <div>
              <h3>150+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <button
            className="aboutSection__btn"
            onClick={() => {
              const section = document.getElementById("contact");
              section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
