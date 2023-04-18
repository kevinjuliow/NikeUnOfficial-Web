import React from 'react'
import './shop.css'
import { useContext , useState } from 'react'
import { ShopContext } from '../../../Context/Context'
import {AiOutlineHeart} from 'react-icons/ai'
import { Products } from '../../../Products'

export const Product = (props) => {
  const {id ,name , price , image } = props.data
  const {addCart , cartItems , isLiked , onLiked} = useContext(ShopContext)

  const cartItemsAmount = cartItems[id];

  

  return (
    <div className="grid">
          <div className="imageGrid" >
            <img src={image} alt="" />
            <AiOutlineHeart className='heartIcon' onClick={()=>onLiked(id)} style={{color : `${isLiked[id] ? 'red' : 'black'}`}} />
              <button className="addCartIcon" onClick={()=>addCart(id) }>
                Add to Cart {cartItemsAmount>0 && "("+cartItemsAmount+")"}
              </button>
              
              <p style={{fontSize:'5px'}}>{name}</p>
              <b style={{fontSize:'10%'}} >${price}</b>
          </div>
        </div>
  )
}
