import 'materialize-css/dist/css/materialize.min.css';
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../database/dbconf';

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const db = getFirestore();

    useEffect(() => {
        db.collection('products').doc(id).get()
        .then(doc => {
            if (doc.exists) {
                setItem(doc.data());
            }
        }).catch(e => console.log(e));
    }, []);

    return (
        <ItemDetail item={item} itemId={id} />
    );
  }
  
  export default ItemDetailContainer;