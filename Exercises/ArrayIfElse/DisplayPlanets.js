import React from 'react'

function DisplayPlanets(e) {
  if(e.isGasPlanet == true ){
    return (
      <div>
        <h1>Planet : {e.name} , is a gas planet</h1>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>Planet : {e.name} , is not a gas Planet</h1>
      </div>
    )
  }
  
}

export default DisplayPlanets