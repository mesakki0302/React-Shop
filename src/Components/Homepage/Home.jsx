import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { getProducts } from '../../Services/product';
import'./Home.css'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../Context/Cartcontext';

function Home() {
  const [search, setSearch] = useState("")
  
  const[product,setProduct]= useState([])

  const {addToCart} = useContext(CartContext)
  
  const filteredProducts = Array.isArray(product)? product.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())):[]
  
  useEffect(()=>{
    getProducts().then((res)=> setProduct(res.data)).catch((err)=>{
      alert(err)
    })
  },[])

  return (
      <div className='Main'>
      <div className='search1'>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      /></div>

      <div className='productcontainer'>
        {filteredProducts.map((item)=>(
          <div className='cart' key={item._id}>
            <div className='cart-body'>
               <img src={item.image} alt={item.title} />
               <h4>{item.title}</h4>
               <p>{item.description}</p>
               <p>₹ {item.price}</p>
               <Button variant="outline-secondary" className='buts' onClick={()=>{addToCart(item)}}>Add to cart</Button>
            </div>
          </div>
        ))}
      </div>
      </div>
      
  )
}

export default Home