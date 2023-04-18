import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import './Cart.css'
import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'
import {BiTrash } from 'react-icons/bi'
import {IoBagCheckOutline} from 'react-icons/io5'

const CartAdded = (props) => {
  const {id ,name , price , image } = props.data 
  const {cartItems , addCart , removeCart  , clearCart} = useContext(ShopContext)

  const cartItemsAmount = cartItems[id]

  return (
    <div className='cartContainer'>
      <div className='addedProducts'>
        <div className="imgSection">
        <img src={image} className='cartImg'/>
        </div>
      
        <div className="textSection">
        <h1>{name}</h1>
        <div className="priceSection">
        <h5>${price}</h5>
        <div className="quantitySection">
          Quantity : {cartItemsAmount}
          
          <button className='addBtn' onClick={()=>addCart(id)}><AiOutlineArrowUp/></button>
          <button className='rmvBtn' onClick={()=>removeCart(id)}>{cartItemsAmount > 1? <AiOutlineArrowDown/> : <BiTrash/>}</button>
  
         <p style={{position:'absolute' , right : '10%' , bottom : '15%'}}>${price*cartItemsAmount}</p> 
        <button onClick={()=>clearCart(id) & alert(`$${price*cartItemsAmount} Payment Successful !`)} className ='checkOutBtn'> <IoBagCheckOutline/> </button>
        
        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartAdded