
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Pages/Inicio';
import Pantalones from './components/Pages/Pantalones';
import Remeras from './components/Pages/Remeras';

function App() {
  return (  
    
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/pantalones' element={<Pantalones/>} />
        <Route path='/remeras' element={<Remeras/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
