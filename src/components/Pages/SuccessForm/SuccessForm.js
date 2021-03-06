import { Link } from "react-router-dom";
import "./SuccessForm.css"

const SuccessForm = ({ order, orderId }) => {
  return (
  <div className="successForm" style={{fontSize: "20px"}}>
    <p>GRACIAS POR COMPRAR EN SELECTO CLOTHES</p>
    <br />
    <p> Su orden <b>{orderId}</b> se ha ingresado exitosamente.</p>
    <br />
    <p><b>ID de su orden:</b> {orderId}</p>
    <br />
    <p><b>Fecha:</b> {order.date.toLocaleDateString()}</p>
    <br />
    <Link className="btn btn-secondary" to="/" style={{fontSize: "20px"}} > Volver a la tienda </Link>

  </div>
  );
};

export default SuccessForm;