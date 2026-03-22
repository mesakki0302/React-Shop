import React, { useState } from 'react'
import { Registers } from '../../Services/product'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
   
    const [form, setForm] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()
  
    const handlerChange = (e)=>{
      
      setForm({...form,[e.target.name]:e.target.value})
  
    }
  
    const handlerSubmit = async (e)=>{
      
      e.preventDefault()
  
      try{

         const result = await Registers(form)

         alert("Register Successful")

         setForm({
           name: '',
           email: '',
           password: ''
         })

         navigate('/Login')
      }
  
      catch(err){
        alert(err.response?.data?.message||'Register Failed')
      }
  
    }
  
    return (
       <div className="Sign-container">
  
        <form className="Sign-box" onSubmit={handlerSubmit}>
          <h2>Register</h2>

          <div className="input-group">
            <input type="text" placeholder="Enter the Username" name='name' value={form.name} onChange={handlerChange} />
          </div>

  
          <div className="input-group">
            <input type="email" placeholder="Enter the Email" name='email' value={form.email} onChange={handlerChange} />
          </div>

  
          <div className="input-group">
            <input type="password" placeholder="Enter the Password" name='password' value={form.password} onChange={handlerChange} />
          </div>
  
          <button type='submit' className="Sign-btn" >Register</button>
  
         </form>
  
      </div>
    )
  }

export default Signup