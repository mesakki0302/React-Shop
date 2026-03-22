import React, { useState } from 'react'
import { resetPassword } from '../../Services/product'
import { useNavigate } from 'react-router-dom'

function Reset() {
    const [form, setForm] = useState({
        email:'',
        otp:'',
        password:''
      })
    
      const navigate = useNavigate()
    
      const handlerChange = (e)=>{
        
        setForm({...form,[e.target.name]:e.target.value})
    
      }
    
      const handlerSubmit = async (e)=>{
        
        e.preventDefault()
    
        try{
           const result = await resetPassword (form)
           
           alert("Password Reset Successful")
    
           setForm({
               email: '',
               otp:'',
               password:''
           })
    
           navigate('/Login')
        }
    
        catch(err){
          alert(err.response?.data?.message||'Reset Password Failed')
        }
    
      }
    
      return (
         <div className="Reset-container">
    
          <form className="Reset-box" onSubmit={handlerSubmit}>
            <h2>Reset Password</h2>
    
            <div className="input-group">
              <input type="email" placeholder="Enter the Email" name='email' value={form.email} onChange={handlerChange} />
            </div>

             <div className="input-group">
              <input type="email" placeholder="Enter the OTP" name='otp' value={form.otp} onChange={handlerChange} />
            </div>

             <div className="input-group">
              <input type="email" placeholder="Enter the Password" name='password' value={form.password} onChange={handlerChange} />
            </div>

    
            <button type= 'submit' className="Reset-btn">Reset Password</button>
    
         </form>
    
        </div>
      )
    }

export default Reset