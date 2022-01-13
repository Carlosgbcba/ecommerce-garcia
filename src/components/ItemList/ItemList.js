import Item from '../Item/Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { memo } from 'react';

const ItemList = memo (( { items } ) => {
    return (
        <Container>
            <Row>
            {Array.from({ length: 1 }).map((_, idx) => (
                items.map(item => <Item item={item}/>)
            ))}
            </Row>
        </Container>
    )
})

export default ItemList