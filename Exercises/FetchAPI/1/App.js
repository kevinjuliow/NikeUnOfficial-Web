import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [catFact , setCatFact] = useState("")
  const handleCatFact = ()=>{
    axios.get("https://catfact.ninja/fact").then((e)=>{
      setCatFact(e.data.fact) /* .fact because catFact is an object */
    })
  }
  useEffect(()=>{
    handleCatFact()
  },[]) 
  
  
    return (
    <div className="App" >
       <button onClick={handleCatFact}>Generate</button>
       <p>{catFact}</p>
    </div>
  );


}

export default App;
