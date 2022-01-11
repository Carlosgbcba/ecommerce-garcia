import { useCartContext  } from '../../../Context/CartContext/CartContext'

const loadImage = (imageName) => (require(`../../../helpers/${imageName}`).default)

export default function Carrito() {
    const {cartList, removeFromCart, deleteFromCart} = useCartContext()
    
    console.log("cartList: ", cartList);

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {cartList.map((product) => (
                <li key={product.id}>
                    <img src={loadImage(`${product.image}`)} alt="" width='75rem' height='75rem'/>
                    <p>Producto: {product.name}</p>
                    <p>Precio: {product.price}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Total: {product.quantity * product.price}</p>
                    <button onClick={() => deleteFromCart(product)}>Eliminar</button>
                </li>
                ))}
                <button onClick={removeFromCart}>Vaciar carrito</button>
            </ul>
        </div>
    )
}
