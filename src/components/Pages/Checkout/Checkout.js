import { useState } from "react";
import { useCartContext } from "../../../Context/CartContext/CartContext";
import { collection, addDoc, getFirestore, query, documentId, writeBatch, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import  CheckoutForm  from "../CheckoutForm/CheckoutForm";
import SuccessForm from "../SuccessForm/SuccessForm";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cartList, totalCart, emptyCart } = useCartContext();

  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState({
    date: new Date(),
    items: cartList.map((item) => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      price: item.price * item.quantity,
    })),
    status: "Generada, pendiente de envío",
    quantity: cartList.reduce((acc, item) => acc + item.quantity, 0),
    total: totalCart(),
  });

  const createOrder = async (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const validateStock = cartList.every((item) => item.quantity <= item.stock);
    if (!validateStock) {
      toast("No hay suficiente stock para algunos productos", {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: true,
          closeButton: true,
        });
        return;
    } else {
      try {
        const response = await addDoc(orderCollection, order);
        setOrderId(response.id);
        if (response.id) {
          toast(`Su orden ${response.id} fue generada exitosamente`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: true,
            closeButton: false,
          });
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        emptyCart();
      }
    }

    const updateStock = query(
      collection(db, "productos"),where(documentId(), "in", cartList.map((item) => item.id))
    )
    const batch = writeBatch(db);
    getDocs(updateStock)
    .then(resp => {resp.docs.forEach(res => batch.update(res.ref, { 
        stock: res.data().stock - cartList.find(item => item.id === res.id).quantity}))
      })
    .then(() => batch.commit())
  };
  const handleChangeF = (e) => {setOrder({...order, [e.target.name]: e.target.value,})};

  return (
    <div>
      <h2>Checkout</h2>
      {cartList.length > 0 ? ( <CheckoutForm createOrder={createOrder} handleChangeF={handleChangeF}/>
      ) : (
        <div className="order">
          {orderId ? (<SuccessForm order={order} orderId={orderId}/>)
          :
          (<Link to="/" >Volver a la tienda</Link>)}
        </div>
      )}
    </div>
  );
};

export default Checkout;