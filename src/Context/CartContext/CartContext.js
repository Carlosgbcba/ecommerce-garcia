import { createContext, useState, useContext } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    function addToCart (product) {
        const index = cartList.findIndex(i => i.id === product.id)
        if (index > -1) {
            const prevQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {...product, quantity: product.quantity + prevQuantity}])
        } else {
            setCartList([...cartList, product])
        }
      };

    function deleteFromCart (product) {
        setCartList(cartList.filter(item => item.id !== product.id))
    };
    
    function removeFromCart () {
        setCartList([])
    };

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart, 
            removeFromCart,
            deleteFromCart
            }}>
                {children}
          </CartContext.Provider>
    )
}
