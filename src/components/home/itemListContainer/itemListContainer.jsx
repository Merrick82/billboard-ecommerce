import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getFirestore } from '../../../database/config';

function ItemListContainer() {
    const { route, categoryId } = useParams();
    const [category, setCategory] = useState({});
    const db = getFirestore();

    const getProductsFromDB = () => {
        db.collection('categories').doc(categoryId).get()
        .then(doc => {
            if (doc.exists) {
                setCategory(doc.data());
            }
        }).catch(e => console.log(e));
    }

    useEffect(() => {
        if (categoryId) {
            getProductsFromDB();
        }
    }, [categoryId]);

    return (
        <section>
            <div className="container center">
                <h2>{category.title}</h2>
                <ItemList categoryId={categoryId}/>
            </div>
        </section>
    );
}
  
export default ItemListContainer;