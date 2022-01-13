import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Inicio from './components/Pages/Inicio/Inicio'
import Remeras from './components/Pages/Categorias/Remeras/Remeras'
import Pantalones from './components/Pages/Categorias/Pantalones/Pantalones'
import Carrito from './components/Pages/Carrito/Carrito'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./Context/CartContext/CartContext";

export default function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Inicio/>} />
              <Route path='/categoria/remeras' element={<Remeras />} />
              <Route path='/categoria/pantalones' element={<Pantalones />} />
              <Route path='/comprar/:itemId' element={<ItemDetailContainer />} />    
              <Route path='/carrito' element={<Carrito />} />    
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}