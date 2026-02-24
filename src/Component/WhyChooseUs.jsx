import React from "react";
import "../Style/whyChooseUs.css";
import {
  CheckCircle,
  Gem,
  BadgeDollarSign,
  Users,
  MapPin,
  Building2,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle size={40} />,
      title: "Simplicity",
      desc: "Enjoy a smooth, hassle-free home buying experience from start to finish.",
    },
    {
      icon: <Gem size={40} />,
      title: "Luxury",
      desc: "Premium living spaces designed with elegance and comfort in mind.",
    },
    {
      icon: <BadgeDollarSign size={40} />,
      title: "Affordable Rates",
      desc: "Competitive pricing without compromising on quality or design.",
    },
    {
      icon: <Users size={40} />,
      title: "Community Living",
      desc: "Vibrant neighborhoods built for families, friendships, and connection.",
    },
    {
      icon: <MapPin size={40} />,
      title: "Strategic Locations",
      desc: "Properties located near key transport, business, and lifestyle hubs.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Distinguished Architecture",
      desc: "Standout designs that blend modern aesthetics with lasting value.",
    },
  ];

  return (
    <section className="whySection" id="why">
      <div className="whySection__container">
        <h2 className="whySection__heading">Why Choose Us</h2>
        <p className="whySection__subheading">
          We are committed to providing exceptional service and value to our
          clients.
        </p>

        <div className="whySection__grid">
          {features.map((item, index) => (
            <div className="whySection__card" key={index}>
              <div className="whySection__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
