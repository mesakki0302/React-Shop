import React, { useState } from 'react'
import { forgotPassword } from '../../Services/product'
import { useNavigate } from 'react-router-dom'
import './Forgot.css'

function Forgot() {
  const [form, setForm] = useState({
    email:'',
  })

  const navigate = useNavigate()

  const handlerChange = (e)=>{
    
    setForm({...form,[e.target.name]:e.target.value})

  }

  const handlerSubmit = async (e)=>{
    
    e.preventDefault()

    try{
       const result = await forgotPassword (form)
       
       alert("OTP send Successful")

       setForm({
           email: '',
       })

       navigate('/Reset')
    }

    catch(err){
      alert(err.response?.data?.message||'OTP Send Failed')
    }

  }

  return (
     <div className="forgot-container">

      <form className="forgot-box" onSubmit={handlerSubmit}>
        <h2>Forgot Password</h2>

        <div className="input-group">
          <input type="email" placeholder="Email" name='email' value={form.email} onChange={handlerChange} />
        </div>

        <button type= 'submit' className="forgot-btn">Reset Password</button>

     </form>

    </div>
  )
}

export default Forgot