import React from 'react'
import "./Contact.css"; 
import contact from "../assets/contact.jpg";


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      
      <div className='contact-form'>
      <form className='form-style' data-aos='fade-right'>
    <div>
        <h1>Enter details to contact us</h1>
    </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" className='input-style' required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email"className='input-style' required />
      </div>
      <div>
        <label>Contact:</label>
        <input type="tel" name="contact" className='input-style' required />
      </div>
      <div>
        <label>Service Required:</label>
        <input type='text' name="description" className='input-style textarea-input' required />
      </div>
    </form>
      </div>
      <div className='contact-image'>
        <img src={contact} alt="" height="400px" width="550px" data-aos='fade-left' className='contact-img'/>
        <button className='contact-button' data-aos='fade-left'>Book Us</button>
      </div>
    </div>
  )
}

export default Contact
