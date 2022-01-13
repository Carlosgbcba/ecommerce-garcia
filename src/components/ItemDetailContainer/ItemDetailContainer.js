import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer () {
    const [item, setItem] = useState ({})
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams();

    useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db, `productos/${itemId}`);
      getDoc(queryDb)
      .then(resp => setItem({id: resp.id, ...resp.data()}))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [itemId]);

    return (
        <Container>
  
            {loading ? <Loading />
            : 
            <ItemDetail item={item} />}
            
        </Container>
    )
}