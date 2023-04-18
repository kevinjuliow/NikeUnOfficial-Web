import React, { useContext } from 'react'
import { AppContext } from './App'

function HomePage() {
  const {userName} = useContext(AppContext)
  return (
    <div>
      <p>This is Home , User name : {userName}</p>
    </div>
  )
}

export default HomePage