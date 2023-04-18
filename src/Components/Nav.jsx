  import React, { createContext, useContext, useEffect, useState } from 'react'
  import './nav.css'
  import {SiJordan} from 'react-icons/si'
  import {AiOutlineHeart} from 'react-icons/ai'
  import {BsBag} from 'react-icons/bs'
  import { Link } from 'react-router-dom'
  import { ShopContext } from '../Context/Context'
  import { Products } from '../Products'



  function Nav() {
    const [ isSrolled , setIsScrolled ] = useState(false)
    const {numb , isLiked } = useContext(ShopContext)
    
    useEffect(()=>{
      const handleScroll = () =>{
        const currentScroll = window.pageYOffset;
        const scrollDestination = currentScroll > 15;

        setIsScrolled(scrollDestination)
      };
      window.addEventListener('scroll' , handleScroll)
      return () => window.removeEventListener('scroll' , handleScroll)
    } ,[])


    
    return (
      <>
      <nav className={`navBar ${isSrolled && 'navBarScrolled'}`} >
        <div className="leftSectionNav">
          <Link to='/'><SiJordan/></Link>
        </div>
        <div className="rightSectionNav">
          <Link to='/favorite'> <AiOutlineHeart style={{color: `${isLiked[1]? 'red' : 'black'}`}}/> </Link>
          <Link to='/cart' > <BsBag/> </Link>
          <div className="cartNumb" style={{display:numb>0 && "flex" }}>{numb>0 && numb} </div>
        </div>  
        
      </nav>
    

      </>
    )  
  }

  export default Nav