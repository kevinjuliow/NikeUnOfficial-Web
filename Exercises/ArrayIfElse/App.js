
import './App.css';
import DisplayPlanets from './DisplayPlanets';


function App() {
  const planets = [
    {name : "Mars" , isGasPlanet:false},
    {name : "Earth" , isGasPlanet:false},
    {name : "Jupiter" , isGasPlanet:true},
    {name : "Venus" , isGasPlanet:false},
    {name : "Neptune" , isGasPlanet:true},
    {name : "Uranus" , isGasPlanet:true},
  ]
  return (
    <div className="App" >
      {planets.map((e)=>{
        return <DisplayPlanets name = {e.name} isGasPlanet = {e.isGasPlanet}/>
      })}
    </div>
  );


}

export default App;
