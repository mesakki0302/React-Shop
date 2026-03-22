import React from 'react'
import'./Contact.css'

function Contact() {
  return (
   <div className="contact-container">
      
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default Contact