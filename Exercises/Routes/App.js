import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import NavBar from './NavBar';

function App() {

    return (
    <div className="App" >

      <Router>
        <NavBar />
        <Routes>
          <Route path ="/" element={<HomePage/>}></Route>
          <Route path ="/menu" element={<Menu/>}></Route>
          <Route path ="/contact" element={<Contact/>}></Route>
          <Route path = "*" element={ <h1> Page Not Found</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  );

}

export default App;
