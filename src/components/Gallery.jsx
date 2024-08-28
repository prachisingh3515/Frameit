import React, { useState, useRef } from 'react';
import "./Gallery.css"; 
import video from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";


const Gallery = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const handleMouseOver1 = () => {
        setIsHovered1(true);
        if (videoRef1.current) {
            videoRef1.current.play();
        }
    };

    const handleMouseOut1 = () => {
        setIsHovered1(false);
        if (videoRef1.current) {
            videoRef1.current.pause();
            videoRef1.current.currentTime = 0; // Optional: Reset video to start
        }
    };

    const handleMouseOver2 = () => {
        setIsHovered2(true);
        if (videoRef2.current) {
            videoRef2.current.play();
        }
    };

    const handleMouseOut2 = () => {
        setIsHovered2(false);
        if (videoRef2.current) {
            videoRef2.current.pause();
            videoRef2.current.currentTime = 0; // Optional: Reset video to start
        }
    };

    return (
        <div className="gallery" id='gallery'>
            <div className="gallery-head" data-aos='fade-up' data-aos-delay='200'>
                Our Top Photography Picks
            </div>

            <div data-aos='fade-up'
                 data-aos-delay='300'
                className='video-container' 
                onMouseOver={handleMouseOver1} 
                onMouseOut={handleMouseOut1}
            >
                <video
                    ref={videoRef1}
                    className="gallery-video"
                    src={video}
                    muted
                ></video>
            </div>

            <div className='gallery-container2'>
                <div  data-aos="fade-right" data-aos-delay='500'>
                    <img src={img1} alt="" className='gallery-img1' />
                </div>
                <div>
                    <div data-aos="flip-left" data-aos-delay='500'>
                        <img src={img2} alt="" className='gallery-img2'/>
                    </div>
                    <div data-aos="flip-right" data-aos-delay='500'
                        onMouseOver={handleMouseOver2} 
                        onMouseOut={handleMouseOut2}
                    >
                        <video
                            ref={videoRef2}
                            src={video2}
                            muted
                            className='gallery-video2'
                        ></video>
                    </div>
                </div>
            </div>
            <div className='gallery-container3'>
                <div data-aos="fade-right" data-aos-delay='500'><img className='gallery-img3' src={img3} alt="" /></div>
                <div data-aos="fade-left" data-aos-delay='500'><img className='gallery-img4'src={img4} alt="" /></div>
            </div>
        </div>
    )
}

export default Gallery;
