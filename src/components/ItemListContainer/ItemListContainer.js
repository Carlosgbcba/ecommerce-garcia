import { useState, useEffect, memo } from 'react'
import ItemList from "../ItemList/ItemList";
import Loading from '../Loading/Loading';

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = memo ( ( {categoryPage} ) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        
        const db = getFirestore();

        if(categoryPage){
            const queryProducts = query(collection(db, 'productos'), where('category', '==', categoryPage));
            getDocs(queryProducts)
            .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()})))
            setLoading(false)   
            })
        } else {
            const queryProducts = collection(db, 'productos');
            getDocs(queryProducts)
            .then(resp => { setProducts( resp.docs.map(product => ({id: product.id, ...product.data()})))
            setLoading(false)
        })
    }}, [categoryPage]);

    return (
        <center>
            {loading ? <Loading />
            : 
            <ItemList items={products} />}
        </center>
    )
})

export default ItemListContainer; 