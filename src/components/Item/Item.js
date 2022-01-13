import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './Item.css'

export default function Item({item}) {
    return (
        <>
            <Col sm={4} key={item.id}>
                <Link className="cardLink" to={`/comprar/${item.id}`}>
                    <Card className="customCard" >
                        <div className="imgContainer">
                            <Card.Img variant="top" src={item.image} height='410rem'/>
                        </div>
                        <div>
                                <p className="p1">{item.name}</p>
                                <p>${item.price}</p>
                        </div>
                    </Card>
                </Link>
            </Col>
        </>
    )
}
