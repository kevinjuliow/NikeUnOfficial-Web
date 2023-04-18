import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [name,setName]= useState("")
  const [fetch,setFetch] = useState(null)
  const handleFetch = ()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((e)=>{
      setFetch(e.data)
    })
  }
  
  
    return (
    <div className="App" >
       <input type="text" placeholder='Input Name' onChange={(e)=>{
        setName(e.target.value)
       }}/>
       <button onClick={handleFetch}>Predict</button>
       <p>Name : {fetch?.name}</p>
       <p>Predicted Age :{fetch?.age} </p>
       <p>User Count : {fetch?.count}</p>
    </div>
  );


}

export default App;
