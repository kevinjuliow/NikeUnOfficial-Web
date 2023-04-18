import { createContext, useState } from "react";
import { Products } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {}
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;    
  }
  return cart 
}

export const ContextProvider = (props) =>{
  const [cartItems , setCartItems] = useState(getDefaultCart())
  const [numb , setNumb] = useState(0)


  const addCart = (itemId) =>{
    setCartItems((prev) => ({...prev , [itemId] : prev[itemId]+1}))
    cartItems[itemId] >= 0 && setNumb(numb+1)
    cartItems[itemId] >= 1 && setNumb(numb)
  }
  const removeCart = (itemId) =>{
    setCartItems((prev) => ({...prev , [itemId] : prev[itemId]-1}))
    cartItems[itemId] >= 0 && setNumb(numb-1)
    cartItems[itemId] > 1 && setNumb(numb)
  }

  const clearCart = (itemId) =>{  
    setCartItems((prev) => ({...prev , [itemId] : 0}))
    cartItems[itemId] >= 0 && setNumb(numb-1)
  }

  //===========================================================
  const defaultCart = ()=>{
    let cart = {}
    for (let i = 1; i <= Products.length; i++) {
          cart[i] = false
    }
    return cart
  }


  const [isLiked, setIsLiked ] = useState(defaultCart())

  const onLiked =  (id) =>{
      setIsLiked((prev)=> ({...prev , [id] : !prev[id] }))
  }

  const value = {cartItems , addCart , removeCart , numb , clearCart , isLiked  , onLiked}

  return(
    <ShopContext.Provider value={value}>
      {props.children}  
    </ShopContext.Provider>
  )
}