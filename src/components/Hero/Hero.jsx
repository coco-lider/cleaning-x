import React from "react";
import "./Hero.css";
import heroImg from '../../assets/IMAGE.png'
import telImg from '../../assets/tel.png'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Quality cleaning <br /> for your home</h1>
        <p>
          Condimentum mauris sit cursus amet id non neque pharetra nulla ornare
          facilisis et. Facilisi sit ultrices egestas dapibus.
        </p>
        <div className="hero-buttons">
          <button className="quote-btn">Get a free quote</button>
          <div className="call">
            <div className="callImg"><img src={telImg} alt="" /></div>
            <div className="number">
                <span>Call us now</span>
                <p>(414) 567 - 2109</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;