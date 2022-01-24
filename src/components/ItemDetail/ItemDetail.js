import {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext  } from '../../Context/CartContext/CartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

export default function ItemDetail({item}) {
    const [goCart, setGoCart] = useState(false)

    const {addToCart} = useCartContext()

    function onAdd (quantity) {
        addToCart({...item, quantity: quantity})
        setGoCart(true)
    }

    return (
        <div className='itemDetail' key={item.id}>
            <img className='imgDetail' src={item.image} alt="Logo" />

            <div className='itemInfo'>
                <p className='titleDetail'>{item.name}</p>
                <p className='descriptionDetail'>{item.description}</p>
                <p className='priceDetail'>$ {item.price}</p>
                
                {goCart === false ? 
                    (<ItemCount initial={1} stock={item.stock} onAdd={onAdd} />)
                    :
                    <Link className="btn btn-success btn-detail" to="/carrito">Ir al carrito</Link>
                }

                <p className='stockDetail'>{item.stock} Unidades disponibles</p>

                <Link className="btn btn-secondary btn-detail" to="/">Seguir comprando</Link>
            </div>
        </div> 
    )
}