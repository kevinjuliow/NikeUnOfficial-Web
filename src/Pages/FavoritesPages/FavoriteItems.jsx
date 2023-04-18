import React from 'react'
import './Fav.css'

const FavoriteItems = (props) => {
  const {id , price , name , image} = props.data
  return (

    <div className='container1'>
      <div className="pictSection">
        <img src={image} className='pict'/>
      </div>
      <div className="textSections">
        {name}
      </div>
    </div>

    
  )
}

export default FavoriteItems