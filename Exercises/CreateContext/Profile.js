import React, { useContext, useState } from 'react'
import { AppContext } from './App'
function Profile() {
  const {userName , setUserName } = useContext(AppContext)
  const [newName , setNewName ] = useState('')

  const nameHandler = ()=>{
    setUserName(newName)
  }

  return (
    <div>
      <p> This is Profile Page . User Name : {userName}</p>
      <input type="text"  placeholder='New User Name' onChange={(e)=>{
         setNewName(e.target.value)
      }}/>
      <button onClick={nameHandler}>New</button>
    </div>
  )
}

export default Profile