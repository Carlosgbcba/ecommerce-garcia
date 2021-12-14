import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import ItemDetail from '../ItemDetail/ItemDetail'
import DataList from '../../helpers/JSON/DataList.json';

const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DataList);
    }, 2000)
  });

export default function ItemDetailContainer () {
    const [item, setItem] = useState ([])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();

    useEffect(()=>{
        getItem.then(data => {
            setItem(data.find(item => item.id === parseInt(itemId)));
          setLoading(false);
        })
      }, [itemId]);

    return (
        <Container>
  
            {loading ? <h2>Cargando...</h2> 
            : 
            <ItemDetail item={item} />}
            
        </Container>
    )
}