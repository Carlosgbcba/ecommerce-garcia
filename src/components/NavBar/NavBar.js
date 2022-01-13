import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

export default function NavBar() {
    return (
        <div>
            <Navbar className="customNav" bg="light" style={{height:'157.5px'}}>
                <Container style={{display: 'flex', justifyContent: 'center'}}>
                <Navbar.Brand href="/">
                    <div>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-garcia.appspot.com/o/Carousel%2Flogo1.png?alt=media&token=8491f2f8-9b6c-4a14-a36e-9a8023410fba"
                            width="425.5"
                            height="157.5"
                            className="d-inline-block align-center"
                            alt="SELECTO CLOTHES"
                        />
                    </div>
                </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="customNav" collapseOnSelect expand="lg" bg="light" variant="light" style={{height:'4rem' }}>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" style={{fontSize: "20px", color: "black"}}>Inicio</Nav.Link>
                    </Nav>
                    <Nav className="m-auto">
                        <Nav.Link href="/categoria/remeras" style={{marginLeft: "30px", marginRight: "30px", fontSize: "20px", color: "black"}} >Remeras</Nav.Link>
                        <Nav.Link href="/categoria/pantalones" style={{marginLeft: "30px", marginRight: "30px", fontSize: "20px", color: "black"}} >Pantalones</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}