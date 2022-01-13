import {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext  } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({item}) {
    const [goCart, setGoCart] = useState(false)

    const {addToCart} = useCartContext()

    function onAdd (quantity) {
        addToCart({...item, quantity: quantity})
        setGoCart(true)
    }

    return (
        <Container className="d-flex justify-content-center" key={item.id}>
            <Card className="text-center" style={{ width: '600px' }}>
                <Card.Header as="h5">{item.name}</Card.Header>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>$ {item.price}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    {goCart === false ? 
                        (<ItemCount initial={1} stock={item.stock} onAdd={onAdd} />)
                        :
                        <Link class="btn btn-success" to="/carrito">Ir al carrito</Link>
                    }
                    <br />
                    <br />
                    <Link class="btn btn-secondary" to="/">Seguir comprando</Link>
                </Card.Body>
                <Card.Footer className="text-muted">{item.stock} Unidades disponibles</Card.Footer>
            </Card>
        </Container> 
    )
}
