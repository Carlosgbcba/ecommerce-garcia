import { useState } from 'react'
import { Formik } from 'formik'

const Form = ({order, createOrder, handleChange}) => {
    const [sumbitedForm, setSumbitedForm] = useState(false)

	return (
		<center>
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
                        errors.phone = 'Este campo solo puede contener numeros y debe tener al menos 9 caracteres'
                      }

                    return errors
                }}
                onSubmit={(values, {resetForm}) => {
                    createOrder()
                    resetForm()
                    console.log('Formulario enviado')
                    setSumbitedForm(true)
                    setTimeout(() => setSumbitedForm(false), 5000)
                }}
            >

                { ( { values, errors, touched, handleSubmit, handleChange, handleBlur } ) => (
                    <form className="form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Nombre" 
                                value={values.nombre} 
                                onChange={handleChange}
                                onBlur={handleBlur} 
                            />
                        </div>
                        {touched.name && errors.name && <div className='error'>{errors.name}</div>}

                        <div>
                            <label htmlFor="correo">correo</label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="correo@correo.com" 
                                value={values.email} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                        </div>
                        {touched.email && errors.email && <div className='error'>{errors.email}</div>}

                        <div>
                            <label htmlFor="repeatEmail">Repetir correo</label>
                            <input 
                                type="text" 
                                id="repeatEmail" 
                                name="repeatEmail" 
                                placeholder="correo@correo.com" 
                                value={values.repeatEmail} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                        </div>
                        {touched.repeatEmail && errors.repeatEmail && <div className='error'>{errors.repeatEmail}</div>}

                        <div>
                            <label htmlFor="phone">Telefono</label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="999999999" 
                                value={values.phone} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                            />
                        </div>
                        {touched.phone && errors.phone && <div className='error'>{errors.phone}</div>}

                        <button type="submit">Enviar</button>

                        {sumbitedForm && <center><p className="msg">Formulario enviado con exito!</p></center>}
                    </form>
                    )}
            </Formik>
		</center>
	);
}
 
export default Form;