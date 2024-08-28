import "./Review.css"; 
import { testimonialsData } from "../constants";
import leftArrow from "../assets/leftarrow.png";
import rightArrow from "../assets/rightarrow.png";

import { useState } from "react";

const Review = () => {
    const [selected,setSelected]=useState(0);
    const tlength=testimonialsData.length;
  return (
    <div className='testimonials' id="reviews">
      <div className="left-t">
        <span>What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>{testimonialsData[selected].name}</span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>

        <img src={testimonialsData[selected].image}/>
        <div className="arrows">
            <img 
            onClick={()=>{
              selected===0?setSelected(tlength-1): setSelected((prev)=>prev-1)
            }}
            src={leftArrow} className="arrow2" alt="" height="80rem" />
            <img 
             onClick={()=>{
              selected===tlength-1?setSelected(0): setSelected((prev)=>prev+1)
            }}
            src={rightArrow} className="arrow2" alt="" height="70rem"width="40rem"/>
        </div>
      </div>

    </div>
  )
}

export default Review
