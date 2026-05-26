import React, { useCallback, useState } from 'react'
import'./Contact.css'
import {ContactList} from '../../Services/product'

function Contact() {
  
  const[contact, setContact] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })

  const [error, setError] = useState({})

  const handleChange = useCallback((e)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  },[contact])

  const handleerror = ()=>{
    let errors = {}
  
    if(!contact.name){
      errors.name = 'Name is Required'
    }

    if(!contact.email){
      errors.email = 'Email is Required'
    }

    if(!contact.subject){
      errors.subject = 'Subject is Required'
    }

    if(!contact.message){
      errors.message = 'Message is Required'
    }

    return errors

  }

  const handleSubmit = async (e)=>{
  try{

    const validateerrors = handleerror()

    if(Object.keys(validateerrors).length===0){
    
    e.preventDefault()

    const result = await ContactList(contact)
    
    if(result){
      alert('Contact Send Sucessfully')
    }
  }  
    
  }
  catch(error){
    setError(error)
  }
  }



  return (
   <div className="contact-container">
      
      <div className="contact-box">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name='name' value={contact.name} onChange={handleChange} placeholder="Your Name" required />
          <p style={{color:'red'}}>{error.name}</p>
          <input type="email" name='email' value={contact.email} onChange={handleChange} placeholder="Your Email" required />
          <p style={{color:'red'}}>{error.email}</p>
          <input type="text" name='subject' value={contact.subject} onChange={handleChange} placeholder="Subject" required />
          <p style={{color:'red'}}>{error.subject}</p>
          <textarea name='message' value={contact.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
          <p style={{color:'red'}}>{error.message}</p>
          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default Contact