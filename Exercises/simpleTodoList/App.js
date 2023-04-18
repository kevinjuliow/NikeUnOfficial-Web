import './App.css';
import { useState } from 'react';
function App() {
  const [textValue , setTextValue] = useState(" ")
  const handleValue = (e)=>{
    setTextValue(e.target.value);
  }

  const [todoList , setTodoList] = useState([])
  const addTodo =()=>{
    setTodoList([...todoList,textValue ]);
  }

  const delleteFunction = (e) => {
    const tempArray = todoList.filter((x)=>{
      return x !== e
    })
    setTodoList(tempArray)
  }
    return (
    <div className="App" >
          <input type="text" onChange={handleValue}/>
          <button onClick={addTodo}>+</button>
         

          <div>
          {todoList.map((e)=>{
            return(
              <div>
                {e}
                <button onClick={()=>delleteFunction(e)}>X</button>
              </div>
            )
          })}
          </div>

    </div>
  );


}

export default App;
