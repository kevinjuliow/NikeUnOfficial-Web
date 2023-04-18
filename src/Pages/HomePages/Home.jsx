import React from 'react'
import './Home.css'
import HomeHeader from './HomeHeader'
import DisplayHome from './DisplayHome'
import Shop from './Shoping/Shop'

function Home() {
  return (
    <div>
      <HomeHeader/>
      <DisplayHome/>
      <Shop/>

    </div>
  )
}

export default Home