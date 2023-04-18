import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [fetch ,  setFetch] = useState("")
  const fetchHandler = (excuse)=>{
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((e)=>{
      setFetch(e.data[0].excuse)
    })
  }
    return (
    <div className="App" >
        <button onClick={()=>fetchHandler("office")}>Office</button>
        <button onClick={()=>fetchHandler("family")}>Family</button>
        <button onClick={()=>fetchHandler("college")}>College</button>
        <button onClick={()=>fetchHandler("party")}>Party</button>
        <button onClick={()=>fetchHandler("gaming")}>Gaming</button>

        <p>Response : 
          <h4> {fetch}</h4></p>
    </div>
  );


}

export default App;
