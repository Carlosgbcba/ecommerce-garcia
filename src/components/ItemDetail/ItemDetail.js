import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import ItemCount from '../ItemCount/ItemCount'


const loadImage = (imageName) => (require(`../../helpers/${imageName}`).default);

export default function ItemDetail({item}) {
    const [goCart, setGoCart] = useState(false)

    const onAdd = (quantityToAdd) => {
        
        console.log(`ItemDetail: A seleccionado ${quantityToAdd} productos`)
        setGoCart(true)
    }

    return (
        <Container className="d-flex justify-content-center" key={item.id}>
            <Card className="text-center" style={{ width: '600px' }}>
                <Card.Header as="h5">{item.name}</Card.Header>
                <Card.Img variant="top" src={loadImage(`${item.image}`)} />
                <Card.Body>
                    <Card.Title>$ {item.price}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    {!goCart ? 
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                        :
                        <Button variant="success" href="/carrito" >Ir al carrito</Button>
                    }
                    <br />
                    <br />
                    <Button variant="secondary" href="/" >Volver</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{item.stock} Unidades disponibles</Card.Footer>
            </Card>
        </Container> 
    )
}
