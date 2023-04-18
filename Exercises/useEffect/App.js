import './App.css';
import { useState } from 'react';
import Text from './Text';
function App() {
  const [showText , setShowText] = useState(false)
  
  const txtBtn = ()=> {
    setShowText(!showText)
  }
    return (
    <div className="App" >
        <button onClick={txtBtn}>
          Show Text
        </button>

         {showText && <Text />}
    </div>
  );


}

export default App;
