import React, { useState } from 'react'
import './Login.css'
import { Logins } from '../../Services/product'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [error, setError] = useState({})

  const navigate = useNavigate()

  const validate = ()=>{
    
    let newerrors = {}

    if(!form.email){
      newerrors.email = 'Email is required'
    }
    if(!form.password){
      newerrors.password = 'Password is required'
    }

    return newerrors

  }

  const handlerChange = (e)=>{
    
    setForm({...form,[e.target.name]:e.target.value})

  }

  const handlerSubmit = async (e)=>{
    
    e.preventDefault()

    try{

      const validateerrors = validate()
       
      if(Object.keys(validateerrors).length === 0){
       
       const result = await Logins(form)

       localStorage.setItem('token', result.data.token)
       
       alert("Login Successful")

         setForm({
           email: '',
           password: ''
         })

         navigate('/Home')
        }  
        
        else{
          setError(validateerrors)
        }
    }

    catch(err){
      alert(err.response?.data?.message||'Login Failed')
    }

  }

  return (
     <div className="login-container">

      <form className="login-box" onSubmit={handlerSubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <input type="email" placeholder="Email" name='email' value={form.email} onChange={handlerChange} />
          <p style={{color:'red'}}>{error.email}</p>
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" name='password' value={form.password} onChange={handlerChange} />
          <p style={{color:'red'}}>{error.password}</p>        
        </div>

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>

         <Link to='/Forgot' style={{textDecoration:'none', color:'black'}}><span className="forgot">Forget Password</span></Link>
        </div>

        <button type= 'submit' className="login-btn">Log in</button>

        <p className="register">
          Don't have a account  <Link to='/Register' style={{textDecoration:'none', color:'black'}}><span>Register</span></Link>
        </p>

      </form>

    </div>
  )
}

export default Login