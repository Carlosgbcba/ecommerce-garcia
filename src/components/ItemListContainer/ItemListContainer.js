import { useState, useEffect } from 'react'
import {catalogo} from '../../helpers/catalogo';
import ItemList from "../ItemList/ItemList";

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
        <div>
            <h2 style={{textDecoration: "underline"}}>
                {msg}
            </h2>
             
            {loading ? <h2>Cargando...</h2> 
            : 
            <ItemList items={productos} />}
        </div>
    )
}

export default IntemListContainer