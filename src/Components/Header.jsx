import React from 'react'
import {SiNike} from 'react-icons/si'
import './Header.css'


function Header() {
  return (
    <header>
      <div className='LeftSectionHeader'>
    <SiNike/>
      </div>
    
      <div className="rightSectionHeader">
    <a>Join Us</a>
    <a>Sign In</a>
      </div>
    </header>
  )
}

export default Header