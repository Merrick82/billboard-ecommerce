import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getFirestore } from '../../database/dbconf';

function ItemListContainer() {
    const { categoryId } = useParams();
    const [category, setCategory] = useState({});
    const db = getFirestore();

    useEffect(() => {
        db.collection('categories').doc(categoryId).get()
        .then(doc => {
            if (doc.exists) {
                setCategory(doc.data());
            }
        }).catch(e => console.log(e));
    }, []);

    return (
        <>
            <h2 className="text">{category.title}</h2>
            <ItemList categoryId={categoryId}/>
        </>
    );
  }
  
  export default ItemListContainer;