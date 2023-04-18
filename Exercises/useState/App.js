import './App.css';
import { useState } from 'react';

function App() {
  //Button
  const [age , setAge] = useState(0)

  const increaseAge = () =>{
    setAge(age+1)
  }
  const decreaseAge = () =>{
    setAge(age-1)
  }


  //Text Box 
  const [inputValue , setInputvalue] = useState("")

  const handleInput = (e) =>{
    setInputvalue(e.target.value)
  }


  //Array names
  const names = ["Kev" , "Julio" , "Eden" ,"Lucas"]
  const [nameChange , setNameChange] = useState("K")

  const handleNameChange = ()=>{
    const random = Math.floor(Math.random() * names.length);
    setNameChange(names[random])
  }

  //Show Text
  const [showText , setShowText] = useState(true)

  //Change Color
  const [colorChange , setColorChange] = useState("black")


    return (
    <div className="App" >
      <button onClick={decreaseAge}>-</button>
      {age} 
      <button onClick={increaseAge}>+</button>


      {/* TextBox */}
      <input type="text" onChange={handleInput} placeholder = "Input Text here"/>
      <h1>{age}{inputValue}</h1>

      {/* Array names */}
      <h1>{nameChange}</h1>
      <button onClick={handleNameChange}>Change Array</button>

      {/* Show Text */}
      <button onClick={()=>{
        setShowText(!showText)
      }}>show/hide</button>
      {showText === true && <h1 style={{color : colorChange}}>Bla Bla Bla</h1> }

      {/* Change Color */}
      <button onClick={()=>{
        setColorChange(colorChange === "black"? "red":"black")
      }}>Change Color</button>

    </div>
  );


}

export default App;
