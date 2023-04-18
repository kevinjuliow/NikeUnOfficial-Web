
// import './App.css';

function App() {
  const Job = (e) =>{/* Creating Components. Note: first Letter must be Capital letter */
    return(
    <div>
       <h1>{e.salary}</h1>
        <h1>{e.position}</h1>
        <h1>{e.company}</h1>
    </div>
    )
    
  }
  return (
    <div className="App">
      <Job salary = {90000} position = "Manager" company = "Google"/>
      <Job salary = {100000} position = "Vice-Manager" company = "Amazon"/>
      <Job salary = {94000} position = "Member" company = "Nike"/>
    </div>
  );


}

// export default App;
