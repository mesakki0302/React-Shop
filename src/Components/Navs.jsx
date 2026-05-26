import React, { useContext, useState } from 'react'
import './Navs.css'
import { Link } from 'react-router-dom'
import { CartContext } from './Context/Cartcontext'

function Navs() {

  const [menuOpen, setMenuOpen] = useState(false)

  const { cart } = useContext(CartContext)

  return (
    <div className='navbar'>
      
      <div className="nav-logo">   
        <img src='https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg' alt='logo'/>
        <p>Shopper</p>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to='/Home'>Home</Link></li> 
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/'>Login</Link></li>
        <li><Link to = '/logout'> Logout </Link></li>
      </ul>

      {/* 🛒 Cart */}
      <div className='nav-login'>
        <Link to='/Cart' className="cart-icon">
          
          {/* Working cart image */}
          <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='cart'/>

          {/* 🔴 Count */}
          {cart?.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}

        </Link>
      </div>

    </div>
  )
}

export default Navs