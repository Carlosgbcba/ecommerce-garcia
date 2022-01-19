import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import All from './components/Pages/Categories/All/All'
import Tshirts from "./components/Pages/Categories/Tshirts/Tshirts";
import Pants from './components/Pages/Categories/Pants/Pants'
import Cart from './components/Pages/Cart/Cart'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartContextProvider from "./Context/CartContext/CartContext"
import Checkout from "./components/Pages/Checkout/Checkout"

export default function App() {

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/categoria/todo' element={<All />} />
              <Route path='/categoria/remeras' element={<Tshirts />} />
              <Route path='/categoria/pantalones' element={<Pants />}/>
              <Route path='/comprar/:itemId' element={<ItemDetailContainer />} />    
              <Route path='/carrito' element={<Cart />} />    
              <Route path='/formulario' element={<Checkout />} />    
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}