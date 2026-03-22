import React from 'react'
import './Navs.css'
import { Link } from 'react-router-dom'

function Navs() {
  return (
    <div className='navbar'>
         <div className="nav-logo">
            <img src='https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_rp_progressive&w=740&q=80' alt='E-com'/>
            <p>Shopper</p>
         </div>
         <ul className='nav-menu'>
           <li><Link to='/' style={{textDecoration:'none', color:'#626262'}}>Home</Link></li> 
            <li><Link to='/About' style={{textDecoration:'none',color:'#626262'}}>About</Link></li>
            <li><Link to='/Contact' style={{textDecoration:'none',color:'#626262'}}>Contact</Link></li>
            <li><Link to='/Login' style={{textDecoration:'none',color:'#626262'}}>Login</Link></li>
         </ul>
         <div className='nav-login'>
          <Link to='/Cart'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAdVBMVEX///8AAABfX18fHx+fn5/19fXf399paWkpKSmUlJQlJSXv7++/v78UFBSurq7y8vKlpaXPz88+Pj7Hx8fY2Njp6elkZGQ2NjZYWFiDg4OLi4utra0ICAhvb2/5+fktLS1HR0dPT096enp0dHTAwMASEhJERESIakMVAAAC7ElEQVR4nO3a25KqMBAF0EZFEJGbiDfwOuP/f+JJCKUeH4RGR1pqrycfkqpuZQdJIAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAL2JdLbou5TW3RvyuS3nNrZFJ16W85taI03Up73BWjSRdF/EOkWpk1nUR75D2YNky8u9ftozk+5cto+jLsjXqy7IV92XZ2um0W/ls6O2XyeG4GjjFab2ZjKJt4M/jdLwId12X2NDSqvUdbWb1jTwz7Lr+q8lrjQy6rv9qrqrxduFinMZz3w+i0WSzPp2LbHU8XpKlO5z95s8aGXVd/5Wty5k+H7Obmj6DbdWno/o86HupNf5MlU3srZZ/UhaiIkI0UPVs2kyMREWEaKPqWbWZmImKCNGPqsdtM3EoKyI01Zm1+fNSYREh8lRFc/60ibCIEK2sVo8kK2ERIVqrijL+tF9hESHyVUV79qxYXETKG5vF/he7ERcRs47G3EkHcREhOraoqXwgkxURk3buBoQvLyJEgSpqyZxzEhgRGquicmbalwIjQjRjp30q7FmkcmF/vYHEiJgLvmDNKCRGhGhrcbcbXZERKf+R55wJC5kRMYcLKWN8JDMi5nAhYowfyIyIye6ZMX4oMyLmcOHSfHgqNSLlwwWTyIhUhwssIiPS6HDhgciIEDnsRkRGxOztHLsu4h0EbiW0s9NXSy/egGh9uCBN68MFaXTaWx0uiDLPPO7q62XsnbA/Fw7YN5FS1uIs4i/Z/Lt6JZHVScvfo/xNuq79nj5nt9zADgP9HF73nBhXo20zWlJO9JGmW56zT3VtNZspD6Mlveml16vAfNSbVTXHog+jvb+tjUVfIVVoQ6t2M4U3+qN600hvLq27+Hr18eWN/qhqQQ3DwGuwoPJGf9Z/r9DVfsW80R9lJ7fKLrXHPfejEzkvNJbs67dcNKjsNtoR1ocSO26eu0XDbezY8fLcc0TlAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa+Qeuax1vIUjW7wAAAABJRU5ErkJggg=='/></Link>
           </div>
    </div>
  )
}

export default Navs