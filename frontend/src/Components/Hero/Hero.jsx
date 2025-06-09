import React from "react";
import "./Hero.css";
import flash from '../Assets/flash.png';
import superman from '../Assets/supermannewspaper.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="top-section">
          <h1>EXTRA !! EXTRA !!</h1>
        </div>

        <div className="bottom-section">
          <h1>EXTRA !! EXTRA !!</h1>
          <div className="bottom-content">
  <h3>
    Elevated essentials crafted for every moment — from rooftop chases to city strolls and coffee breaks
  </h3>
</div>
        </div>
      </div>

      <div className="hero-images">
        <img src={superman} alt="Superman Newspaper" />
        <img src={flash} alt="Flash" />
        <img src={flash} alt="Flash" />
      </div>
    </section>
  );
};

export default Hero;
