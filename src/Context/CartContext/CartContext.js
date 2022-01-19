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

    function addQuantity(product) {
        const newCartList = cartList.map((item) => {
          if (item.id === product.id) {
            item.quantity += 1;
            if (item.stock < item.quantity) {
              item.quantity -= 1;
            }
          }
          return item;
        });
        setCartList(newCartList);
      }

      function removeQuantity(product) {
        const newCartList = cartList.map((item) => {
          if (item.id === product.id) {
            item.quantity -= 1;
            if (item.quantity <= 0) {
              item.quantity = 1;
            }
          }
          return item;
        });
        setCartList(newCartList);
      }

      function deleteFromCart(product) {
        setCartList(cartList.filter((item) => item.id !== product.id));
      }

    function totalItems () {
        return cartList.reduce((acc, item) => acc + item.quantity, 0);
    }

    function totalCart () {
        return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    
    function emptyCart() {
      setCartList([]);
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart, 
            addQuantity,
            removeQuantity,
            deleteFromCart,
            totalItems,
            totalCart,
            emptyCart
            }}>
                {children}
          </CartContext.Provider>
    )
}