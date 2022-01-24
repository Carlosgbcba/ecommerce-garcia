import { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock){
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count > initial){
            setCount(count-1)
        }
    }

    return (
        <center>
            <Button variant="outline-dark" onClick={restar}>-</Button>{' '}
            {count}{' '}
            <Button variant="outline-dark" onClick={sumar}>+</Button>{' '}
            <Button variant="outline-dark" onClick={()=> onAdd(count)} >Agregar al carrito</Button>
        </center>
    )
}