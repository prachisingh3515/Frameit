import React from 'react'
import "./About.css"; 
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

    const paragraphs = [
        "Welcome to Frameit, where every click of the camera tells a story. With a keen eye for detail and a passion for capturing the beauty in every moment, we specialize in delivering exceptional photography services that turn fleeting moments into timeless memories.",
        "At Frameit, we believe that photography is more than just taking pictures—it's about creating art. Our team of professional photographers is dedicated to capturing your special moments with creativity, precision, and an artistic touch. Whether it’s a wedding, a portrait session, a corporate event, or any other special occasion, we work closely with you to ensure that every shot reflects your unique personality and style.",
        "With years of experience in the industry, we use the latest technology and techniques to provide high-quality images that you'll cherish for years to come. From candid moments to carefully posed portraits, our goal is to provide you with stunning photographs that perfectly encapsulate your story.",
        "Explore our portfolio to see the magic we create and let us bring your vision to life. We’re committed to providing a personalized and memorable experience. Contact us today to discuss how we can make your next event unforgettable."
    ];

    useEffect(() => {
      AOS.init();

        const interval = setInterval(() => {
            setCurrentParagraphIndex((prevIndex) =>
                (prevIndex + 1) % paragraphs.length
            );
            
        }, 3000); 

        return () => clearInterval(interval); 
    }, [paragraphs.length]);

    
  return (
    <div className='about' id='about'>
        <h1 data-aos='fade-up' className='about-heading'>About Us</h1>
        <h1 data-aos='fade-up' data-aos-delay='300' className='about-subhead'>Capturing Moments, Creating Memories</h1>
        {paragraphs.map((paragraph, index) => (
                <p  className='about-para'
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    key={index === currentParagraphIndex ? `active-${index}` : `inactive-${index}`}
                    style={{
                        display: index === currentParagraphIndex ? 'block' : 'none'
                    }}
                >
                    {paragraph}
                </p>
            ))}
    </div>
  )
}

export default About
