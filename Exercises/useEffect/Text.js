import React from 'react'
import { useState , useEffect } from 'react'

function Text() {
  const [textValue , setTextValue]= useState("")

  const textHandle = (e)=>{
    setTextValue(e.target.value)
  }

  useEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log('Unmounted')
  }
  },[]) /* Empty array for unwanted action when updating. */
  
  return (
    <div>
      <input type="text" onChange={textHandle} />
      <p>{textValue}</p>
    </div>
  )
}

export default Text