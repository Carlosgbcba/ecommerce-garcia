import { useCartContext  } from '../../../Context/CartContext/CartContext'
import PageTitles from '../../PageTitles/PageTitles'
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import './Cart.css'

export default function Carrito() {
    const {cartList, addQuantity, removeQuantity, emptyCart, deleteFromCart, totalCart} = useCartContext()
    
    if (cartList < 1) {
        return (
            <center className="emptyCart">
                <div className='empty'></div>
                <PageTitles title={'No hay productos en el carrito'} />
                <Button className="btn-back" variant="secondary" href="/" style={{fontSize: "20px"}} >Volver a la tienda</Button>
            </center>
        )
    } else {
        return (
            <div>
                <PageTitles title={'Carrito'} />
                <Container>
                    <ListGroup as="ol">
                        {cartList.map((product) => (
                            <ListGroup.Item
                                key={product.id}
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                >
                                <img src={product.image} alt="" width='75rem' height='75rem'/>
                                <div className="ms-2 me-auto" style={{fontSize: "18px"}}>
                                    <div className="fw-bold">{product.name}</div>
                                    <p>${product.quantity * product.price}</p>
                                </div>

                                <Button variant="outline-dark" onClick={()=>{removeQuantity(product)}} style={{marginRight: "5px", marginLeft: "5px"}}>
                                    -
                                </Button>
                                <p>
                                    x{product.quantity}
                                </p>
                                <Button variant="outline-dark" onClick={()=>{addQuantity(product)}} style={{marginRight: "15px", marginLeft: "5px"}}>
                                    +
                                </Button>

                                <Button variant="danger" onClick={() => deleteFromCart(product)}>X</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <center>
                        <h4 style={{marginTop: "15px"}}>Total: ${totalCart()}</h4> 
                        <Button variant="danger" style={{marginLeft: "100px", marginRight: "100px"}} onClick={() => emptyCart()}>Vaciar carrito</Button>
                        <Link className="btn btn-success" style={{marginLeft: "100px", marginRight: "100px"}} to="/formulario">Terminar compra</Link>
                    </center>
                </Container>
            </div>
        );
    }
}