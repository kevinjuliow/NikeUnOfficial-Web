import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NavBar from './NavBar';
import { QueryClient , QueryClientProvider} from '@tanstack/react-query';


function App() {
const client = new QueryClient();
    return (
    <div className="App" >
        <QueryClientProvider client={client}>
            <Router>
              <NavBar />
              <Routes>
                <Route path = '/' element={ <Home/> }></Route>
                <Route path = '/profile' element={ <Profile/> }></Route>
                <Route path = '/contact' element={ <Contact/> }></Route>
              </Routes>
            </Router>
        </QueryClientProvider>
    </div>
  );
}

export default App;
