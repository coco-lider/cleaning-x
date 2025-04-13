import React from "react";
import "./Services.css";
import servicesImg4 from '../../assets/IMAGE (4).png'
import servicesImg5 from '../../assets/IMAGE (5).png'
import servicesImg6 from '../../assets/IMAGE (6).png'

function Services() {
  return (
    <section className="services" id="services">
      <div className="serves-title">
      <h2>Our Services</h2>
      <button className="explore-btn">Explore services</button>
      </div>
      <div className="service-cards">
        <div className="card">
            <img src={servicesImg4} alt="" />
          <h3>House cleaning</h3>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className="card">
            <img src={servicesImg5} alt="" />
          <h3>Office cleaning</h3>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
        <div className="card">
            <img src={servicesImg6} alt="" />
          <h3>Industrial cleaning</h3>
          <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;