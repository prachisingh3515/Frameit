import React from "react";
import video from "../assets/video.mp4";
import "./Hero.css"; 

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 data-aos='fade-up' data-aos-delay='300'>Welcome to Frameit</h1>
        <h2 data-aos='fade-up' data-aos-delay='600'>Capturing moments from today, creating memories for a lifetime.</h2>
      </div>
    </section>
  );
};

export default HeroSection;
