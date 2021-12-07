import { useState } from 'react'
import './ItemCount.css'

export default function ItemCount({stock}) {
    
    const [count, setCount] = useState(0)

    const sumar = () => {
        if (count < stock){
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count > 0){
            setCount(count-1)
        }
    }

    const addToCart = () => {
        if(count > 0){
            console.log(`A seleccionado ${count} productos`)
        } else {
            console.log(`No ha seleccionado ningun producto`)
        }
    }

    return (
        <center>
            <div class="box">
                <p>
                    <button class="count-btn" onClick={restar}>-</button>
                    {count}
                    <button class="count-btn" onClick={sumar}>+</button>
                </p>
                <button class="add-btn" onClick={addToCart}>Agregar al carrito</button>
            </div>
        </center>
    )
}