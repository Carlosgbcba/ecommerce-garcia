import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './Item.css'

const loadImage = (imageName) => (require(`../../helpers/${imageName}`).default)

export default function Item({item}) {
    return (
        <>
            <Col sm={4} key={item.id} style={{ marginBottom: '30px' }}>
                <Card style={{ width: '18rem', height:'29rem' }}>
                    <Card.Img variant="top" src={loadImage(`${item.image}`)} height='300rem' />
                    <Card.Body className="text-center">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                        <Card.Text class="single-line">
                            {item.description}
                        </Card.Text>
                        {/* <Button variant="secondary" href={`/comprar/${item.id}`} >Detalle</Button> */}
                        <Link to={`/comprar/${item.id}`}>Detalle</Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
