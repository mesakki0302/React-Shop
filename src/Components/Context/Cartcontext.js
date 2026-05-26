import { createContext, useCallback, useEffect, useState } from "react";
import { addCartItem, deleteCart, getCart } from "../../Services/product";


export const CartContext = createContext()

export const CartProvider = ({children})=>{
   

const [cart, setCart] = useState([])

useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    getCart()
      .then(res => setCart(res.data))
      .catch(err => {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
        }
      });

  }, []);

                  
const addToCart = useCallback(
         async (product) => {
           
        try{
           
               const cartData = {
                 productId: product._id,
                 title: product.title,
                 image: product.image,
                 price: product.price,
                 description: product.description
               }
           
               const response = await addCartItem(cartData)
           
               setCart((prevCart) => {
           
               const existingItem = prevCart.find(
                   (item) => item.productId === response.data.productId
                 )
           
               if(existingItem){
           
                   // update quantity instead of adding duplicate
                   return prevCart.map((item) =>
                     item.productId === response.data.productId ? response.data: item
                   )
           
                 }

                console.log("Product Added");
           
                 // add new product if not existing
                 return [...prevCart, response.data]
                 
           
               })
           
             }
             catch(err){
               console.log(err)
               alert("Unable to add product")
             }
           
           }
       ,[])
           
const deleteproduct = async (id) => {
                      
          try{
                      
           await deleteCart(id)
           setCart(prev => prev.map(item => item._id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0))
           }
        catch(err){
           
           alert(err.response?.data?.message||"Unable to delete")
           
           }
           
        }
       
           return(
               <CartContext.Provider value={{cart, addToCart, deleteproduct}}>
                   {children}
               </CartContext.Provider>
           )

}