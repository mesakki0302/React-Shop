import React, { useContext, useMemo } from 'react'
import './Cart.css'
import { CartContext } from '../Context/Cartcontext'
import { FaTrash } from "react-icons/fa";

function Cart() {

  const { cart, deleteproduct } = useContext(CartContext)

  // ✅ Total Items
  const totalItems = cart?.reduce((acc, item) => acc + (item.quantity || 1), 0)

  // ✅ Total Price
  const totalPrice = useMemo(()=>
   {
    console.log("Calculating total price...");
    return (cart || []).reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0)
    
},[cart]) 

return (
    <div className='Master'>

      {!cart || cart.length === 0 ? (
        <div className='Emptycart'>
          <img src='https://cdn-icons-png.flaticon.com/512/2038/2038854.png' alt='empty'/>
          <h1>Your Cart is Empty</h1>
        </div>
      ) : (
        <>
          {/* 🧾 Table */}
          <div className='table-container'>
            <table className='cart-table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <tr key={item._id}>
                    
                    <td>
                      <img src={item.image} alt={item.title} className='table-img'/>
                    </td>

                    <td>{item.title}</td>

                    <td>₹ {item.price}</td>

                    <td>{item.quantity || 1}</td>

                    <td>₹ {item.price * (item.quantity || 1)}</td>

                    <td>
                      <button 
                        className='delete-btn'
                        onClick={() => deleteproduct(item._id)}
                      >
                       <FaTrash />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 💰 Summary */}
          <div className='cart-summary'>
            <h3>Total Items: {totalItems}</h3>
            <h2>Total Price: ₹ {totalPrice}</h2>
          </div>
        </>
      )}

    </div>
  )
}

export default Cart