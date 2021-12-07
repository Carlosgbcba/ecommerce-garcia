import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Switch from 'react-bootstrap/Switch'
import CartWidget from '../CartWidget/CartWidget'
import Inicio from '../Pages/Inicio/Inicio'
import Contacto from '../Pages/Contacto/Contacto';
import Envios from '../Pages/Envios/Envios'
import Remeras from '../Pages/Categorias/Remeras/Remeras'
import Pantalones from '../Pages/Categorias/Pantalones/Pantalones'

function NavBar() {
    return (
        <>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="/">SELECTO CLOTHES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/remeras">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="/pantalones">Pantalones</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/envios">Envios</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <CartWidget/>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Routes>
                        <Route path='/' element={<Inicio/>} />
                        <Route path='/envios' element={<Envios/>} />
                        <Route path='/contacto' element={<Contacto/>} />
                        <Route path='/remeras' element={<Remeras/>} />
                        <Route path='/pantalones' element={<Pantalones/>} />
                    </Routes>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default NavBar