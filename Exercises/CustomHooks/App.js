import './App.css';
import useToggle from './useToggle';

function App() {
  const [isVisible , toggle]  = useToggle()
  const [isVisible2 , toggle2] = useToggle()
    return (
    <div className="App" >
      <button onClick={toggle}>{isVisible? "Hide" : "Show"}</button>
      <p>{isVisible? "HiddenText" : ""}</p>
      <button onClick={toggle2}>{isVisible2? "Hide" : "Show"}</button>
      <p>{isVisible2? "HiddenText" : ""}</p>
    </div>
  );
}

export default App;

