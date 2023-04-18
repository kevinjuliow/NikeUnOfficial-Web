import React, { useContext } from 'react'
import { Products } from '../../Products'
import CartAdded from './CartAdded'
import { ShopContext } from '../../Context/Context'
import './Cart.css'



const Cart = () => {
  const {cartItems} = useContext(ShopContext)

 return (
  <div style={{textAlign:'center'}}>
    <h2 style={{margin : '10px 0px' , backgroundColor:'var(--grayColor)'}}>Your Cart</h2>
    {
      Products.map((product)=>{
        if (cartItems[product.id] > 0){
          return(
            <CartAdded data ={product}/>
          ) 
        } 
      })
    }
  </div>
 )
    
  
  
}

export default Cart