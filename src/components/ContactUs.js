import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className='contact-us-container'>
      <h2>Contact Us</h2>
      <div className='contact-details'>
      <p><strong>Address: </strong>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p><strong>Phone: </strong>+1 (123) 456-7890</p>
      <p><strong>Email: </strong>info@springdale.edu</p>
      </div>
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className='form-group'>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className='map-container'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0223894718145!2d144.95605431535447!3d-37.817209742636026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3f50dd850!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1622581027746!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          title="School Location"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
