import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const loadImage = (imageName) => (require(`../../helpers/${imageName}`).default);

export default function Item({item}) {
    return (
        <>
            <Col sm={4} key={item.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={loadImage(`${item.image}`)} />
                    <Card.Body className="text-center">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">${item.price}</Card.Subtitle>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="secondary">Ver detalle</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
