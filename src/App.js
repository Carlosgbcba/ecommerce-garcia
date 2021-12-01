
import './App.css';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Pages/Inicio';
import Pantalones from './components/Pages/Pantalones';
import Remeras from './components/Pages/Remeras';

function App() {
  return (

    <div className="App">

      <NavBar />

        <Routes>
          <Route path='/welcome' element={<Inicio/>} />
          <Route path='/pantalones' exact component={<Pantalones/>} />
          <Route path='/remeras' exact component={<Remeras/>} />
        </Routes>

    </div>

  );
}

export default App;
