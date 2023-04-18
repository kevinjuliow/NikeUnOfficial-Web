import React, { useContext, useState } from 'react'
import './shop.css'
import {AiOutlineHeart} from 'react-icons/ai'
import { Products } from '../../../Products'
import { ShopContext } from '../../../Context/Context'
import { Product } from './Product'

function Shop() {

 

  return (
    <div className='shopContainer' id='shop'>
     {Products.map((data)=>{ 
      return (
        <Product data={data}/>
      )
      })}
    </div>
  )
}

export default Shop