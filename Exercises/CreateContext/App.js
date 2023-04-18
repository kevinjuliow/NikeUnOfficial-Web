import './App.css';
import { BrowserRouter as Router , Route , Routes , Link } from 'react-router-dom';
import HomePage from './HomePage';
import Profile from './Profile';
import { createContext, useState } from 'react';

export const AppContext = createContext()
function App() {

  const [userName , setUserName ] = useState("")
    return (
  
    <div className="App" >
    
    <AppContext.Provider value={{userName , setUserName}}>
          <Router>
            <Link to = '/'>Home</Link>
            <Link to = '/profile'>Profile</Link>
            <Routes>
              <Route path = '/' element ={ <HomePage/> }></Route>
              <Route path = '/profile' element={ <Profile/> }></Route>
            </Routes>
          </Router>
    </AppContext.Provider>
     
    </div>
  );

}

export default App;
