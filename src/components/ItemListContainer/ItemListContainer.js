import { useState, useEffect } from 'react'
import {catalogo} from '../../helpers/catalogo';
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/esm/Container';

const IntemListContainer = ( {msg} ) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(()=> {
        catalogo
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
    }, [])

    return (
        <Container>
            <h2 style={{textDecoration: "underline"}}>
                {msg}
            </h2>
             
            {loading ? <h2>Cargando...</h2> 
            : 
            <ItemList items={productos} />}
        </Container>
    )
}

export default IntemListContainer