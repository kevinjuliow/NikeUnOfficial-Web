import React, { useEffect, useState } from 'react'
import './Home.css'
import {SiJordan} from 'react-icons/si'
import DisplayHome1 from '../../Assets/DisplayHome1.jpg'
import {Products} from '../../Products'
import Slides from './Slides'
import DisplayShoes from './DisplayShoes'


function DisplayHome() {

  return (
    <div className='displayHome'>
      <div className="topDisplay">
        <SiJordan style={{fontSize:'30px',animation:'moveUpDown 4s infinite'}}/>
        <div className={`displayMenu`} style={{animation:'appearLogoAnimation .4s linear' , marginTop:'8%'}}>
          <a href="#newRelease">New Releases</a>
          <a href="#shop">Start Shopping</a>
        </div>
      </div>
      <div className="mainDisplay" id='newRelease'>
        <img src={DisplayHome1} alt="" />
        <div className="displayShop">
          <Slides />
        </div>
      </div>

      <h1 className='displayHomeText' >AIR JORDAN XXXI | Architectural Digest</h1>
      <p  className='displayHomeText2' >The Air Jordan XXXI | Architectural Digest Colorway Tricks out the Ultimate performance Shoe to make a bold statement.</p>
      <button className='shopBtn'><a href="#shop" style={{color:'white'}}>Shop</a></button>
      <DisplayShoes/>
      
    </div>
  )
}

export default DisplayHome