import { useCartContext  } from '../../../Context/CartContext/CartContext'
import PageTitles from '../../PageTitles/PageTitles'
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import './Cart.css'

export default function Carrito() {
    const {cartList, addQuantity, removeQuantity, emptyCart, deleteFromCart, totalCart} = useCartContext()
    
    if (cartList < 1) {
        return (
            <center className='empty'>
                <PageTitles title={'No hay productos en el carrito'} />
                <Button variant="secondary" href="/" style={{fontSize: "20px"}} >Volver a la tienda</Button>
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

                                <button className="remove" onClick={()=>{removeQuantity(product)}}>
                                    -
                                </button>
                                <Badge bg="secondary" style={{marginRight: "20px", fontSize: "15px"}} >
                                    x{product.quantity}
                                </Badge>
                                <button className="add" onClick={()=>{addQuantity(product)}}>
                                    +
                                </button>

                                <Button variant="danger" onClick={() => deleteFromCart(product)}>X</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <center>
                        <h4 style={{marginTop: "15px"}}>Total: ${totalCart()}</h4> 
                        <Button variant="danger" style={{marginLeft: "100px", marginRight: "100px"}} onClick={() => emptyCart()}>Vaciar carrito</Button>
                        <Link style={{marginLeft: "100px", marginRight: "100px"}} to="/formulario">Terminar compra</Link>
                    </center>
                </Container>
            </div>
        );
    }
}