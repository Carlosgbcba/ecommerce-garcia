import { useCartContext  } from '../../../Context/CartContext/CartContext'
import PageTitles from '../../PageTitles/PageTitles'
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import './Carrito.css'

const loadImage = (imageName) => (require(`../../../helpers/${imageName}`).default)

export default function Carrito() {
    const {cartList, removeFromCart, deleteFromCart, totalCart} = useCartContext()
    
    console.log("cartList: ", cartList);

    if (cartList < 1) {
        return (
            <center className='empty'>
                <PageTitles title={'No hay productos en el carrito'} />
                <Link to="/">Volver a la tienda</Link>
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
                                <img src={loadImage(`${product.image}`)} alt="" width='75rem' height='75rem'/>
                                <div className="ms-2 me-auto" style={{fontSize: "18px"}}>
                                    <div className="fw-bold">{product.name}</div>
                                    <p>${product.quantity * product.price}</p>
                                </div>
                                <Badge bg="secondary" style={{marginRight: "20px", fontSize: "15px"}} >
                                    x{product.quantity}
                                </Badge>
                                <Button variant="danger" onClick={() => deleteFromCart(product)}>X</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <center>
                        <h4 style={{marginTop: "15px"}}>Total: ${totalCart()}</h4> 
                        <Link to="">Terminar compra</Link>
                    </center>
                </Container>
            </div>
        );
    }
}