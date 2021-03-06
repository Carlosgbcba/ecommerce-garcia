import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from 'react-bootstrap/Button'
import './CheckoutForm.css'

const CheckoutForm = ({ createOrder, handleChangeF}) => {

	return (
		<div className="formContainer">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    repeatEmail: '',
                    phone: ''
                }}
                validate={(values) => {
                    let errors = {}

                    if(!values.name){
                        errors.name = 'Este campo es obligatorio'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        errors.name = 'El nombre solo puede contener letras y espacios'
                    }

                    if(!values.email){
                        errors.email = 'Este campo es obligatorio'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
                    }

                    if(!values.repeatEmail){
                        errors.repeatEmail = 'Este campo es obligatorio'
                    } else if (values.repeatEmail !==  values.email) {
                        errors.repeatEmail = 'Los correos deben coincidir'
                    }

                    if (!values.phone) {
                        errors.phone = 'Este campo es obligatorio'
                      } else if (!/^[0-9]{9}$/.test(values.phone)) {
                        errors.phone = 'Este campo solo puede contener numeros y debe poseer 9 caracteres'
                      }

                    return errors
                }}
                onSubmit={({ resetForm }) => {
                    resetForm();
                  }}
            >
                { () => (
                    <Form className="orderForm" onSubmit={createOrder} onChange={handleChangeF}>
                        
                        <div className="inputContainer">
                            <Field className="inputForm" type="text" name="name" id="name" placeholder="Nombre" required/>
                            <ErrorMessage name="name" component="p" className="errorInput" />
                        </div>

                        <div className="inputContainer">
                            <Field className="inputForm" type="email" name="email" id="email" placeholder="Correo electrónico" required />
                            <ErrorMessage name="email" component="p" className="errorInput" />
                        </div>

                        <div className="inputContainer">
                            <Field className="inputForm" type="email" name="repeatEmail" id="repeatEmail" placeholder="Confirma tu correo electrónico" required />
                            <ErrorMessage name="repeatEmail" component="p" className="errorInput" />
                        </div>

                        <div className="inputContainer"> 
                            <Field className="inputForm" type="tel" name="phone" id="phone" placeholder="Teléfono" required/>
                            <ErrorMessage name="phone" component="p" className="errorInput" />
                        </div>

                        <Button variant="secondary" type="submit" className="btn-order">
                            Generar Orden{" "}
                        </Button >
                    </Form>
                    )}
            </Formik>
		</div>
	);
}
 
export default CheckoutForm;