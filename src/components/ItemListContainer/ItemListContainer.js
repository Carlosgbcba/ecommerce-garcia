import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/esm/Container';
import DataList from '../../helpers/JSON/DataList.json';

const getItemList = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve(DataList)
    }, 3000)
})

export default function IntemListContainer ( {categoryPage, msg} ) {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        if(categoryPage){
            getItemList
            .then(data => {
            setProducts(data.filter(item => item.category === categoryPage));
          }).catch(err => console.log(err))
          .finally(() => setLoading(false))
        } else {
            getItemList
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
      }, [categoryPage]);

    return (
        <Container>
            <h2 style={{textDecoration: "underline"}}>
                {msg}
            </h2>
             
            {loading ? <h2>Cargando...</h2> 
            : 
            <ItemList items={products} />}
        </Container>
    )
}