import React from "react";
import "./About.css";
import aboutImg1 from '../../assets/IMAGE (1).png'
import aboutImg2 from '../../assets/IMAGE (2).png'
import aboutImg3 from '../../assets/IMAGE (3).png'


function About() {
  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <p>
        Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br />
        neque nisi felis non ultrices massa id egestas quam velit pretium.
      </p>
      <div className="about-steps">
        <div>
            <img src={aboutImg1} alt="" />
          <h3>1. Schedule online</h3>
          <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed.</p>
        </div>
        <div>
            <img src={aboutImg2} alt="" />
          <h3>2. Pay online easily</h3>
          <p>Vitae ut accumsan blandit ullamcorper suscipit orci gravida amet.</p>
        </div>
        <div>
            <img src={aboutImg3} alt="" />
          <h3>3. Get your house cleaned</h3>
          <p>Neque mauris tellus mattis mattis massa porta cursus velit.</p>
        </div>
      </div>
      <div className="about-buttons">
        <button className="quote-btn">Get a free quote</button>
        <button className="explore-btn">Explore services</button>
      </div>
    </section>
  );
}

export default About;