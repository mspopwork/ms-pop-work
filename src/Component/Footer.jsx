import React from "react";
import "../Style/footer.css";

function Footer() {
  return (
    <footer className="footerSection" id="contact">
      <div className="footerSection__container">
        {/* LEFT SIDE - BUSINESS DETAILS */}
        <div className="footerSection__left">
          <h3 className="footerSection__title">
            Ms p o p work Nagpur - False Ceiling Contractor
          </h3>

          <p>
            <strong>Address:</strong>
            <br />
            Plot No 6 ,Abbumiya Nagar Pardi Nagpur
            <br />
            Nagpur Maharashtra, India
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            skshoeb753@gmail.com
          </p>

          <p>
            <strong>Mobile:</strong>
            <br />
            +91 9075353598
          </p>

          <p>
            <strong>Business Hours:</strong>
            <br />
            Mon – Sat: 9:00 AM – 7:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div className="footerSection__right">
          <h3 className="footerSection__title">Our Location</h3>

          <div className="footerSection__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.8747903952559!2d79.15740850124371!3d21.14207014105077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c73b0491b7f9%3A0xe52e544d14803c11!2sPop%20work!5e0!3m2!1sen!2sin!4v1771755138201!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ms POP Work Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footerSection__bottom">
        © {new Date().getFullYear()} Ms POP Work. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
