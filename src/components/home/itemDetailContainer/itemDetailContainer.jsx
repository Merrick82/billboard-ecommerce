import 'materialize-css/dist/css/materialize.min.css';
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../../database/config';

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const db = getFirestore();

    const getProductsById = () => {
        db.collection('products').doc(id).get()
        .then(doc => {
            if (doc.exists) {
                setItem(doc.data());
            }
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        getProductsById();
    }, []);

    return (
        <ItemDetail item={item} itemId={id} />
    );
}
  
export default ItemDetailContainer;