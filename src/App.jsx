import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Nav from './Components/Nav'
import Header from './Components/Header';
import Home from './Pages/HomePages/Home';
import Cart from './Pages/CartPages/Cart';
import { ContextProvider } from './Context/Context';
import Favorites from './Pages/FavoritesPages/Favorites';



function App() {

    return (
    <>
    <Header />

    
    <ContextProvider>
    <Router>
        <Nav/>
        <div className='container' >
        <Routes> 
          <Route path = '/' element={<Home/>}/>
          <Route path = '/favorite' element ={<Favorites/>}/>
          <Route path = '/cart' element ={<Cart/>}/>
        </Routes>
        </div>
      </Router>
    </ContextProvider>
    
     
    
    </>
  );
}

export default App;

