import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context'
import { Products } from '../../Products'
import FavoriteItems from './FavoriteItems'
import './Fav.css'

const Favorites = () => {
const { isLiked } = useContext(ShopContext)

return(
  <div style= {{textAlign:'center'}}>
  Favorites
  <div style={{display:'flex' , justifyContent:'center'}}>
    <div className="containerFav" >
    {Products.map((product)=>{
      if(isLiked[product.id] === true){
        return(
          <FavoriteItems data = {product} />
        )
      }
    })}
    </div>
  </div>
  </div>
  
)
}

export default Favorites