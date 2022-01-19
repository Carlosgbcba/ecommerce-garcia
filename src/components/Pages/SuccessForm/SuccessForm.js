import { Link } from "react-router-dom";

const SuccessForm = ({ order, orderId }) => {
  return (
  <>
    <p>GRACIAS POR COMPRAR EN SELECTO CLOTHES</p>
    <p> Su orden <b>{orderId}</b> se ha ingresado exitosamente.</p>

    <p><b>ID de su orden:</b> {orderId}</p>
    <p><b>Fecha:</b> {order.date.toLocaleDateString()}</p>

    <Link to="/">
        Volver a la tienda
    </Link>

  </>
  );
};

export default SuccessForm;