import React from 'react'
import "./Services.css"; 
import { serviceItems } from "../constants";


const Services = () => {
  return (
    <div className='services' id='services'>
      <h1 className='serv-head' data-aos='fade-right'>Our Services</h1>
      <div className='service-container' data-aos='fade-up' data-aos-delay='300'>
      {serviceItems.map((item, index) => (
            <div key={index} className='service-item'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Services
