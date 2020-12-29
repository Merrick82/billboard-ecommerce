import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import {getCategoryNameById} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';

function ItemListContainer() {
    const { categoryId } = useParams();
    const [categoryName, setCategoryName] = useState();

    const mockService = getCategoryNameById(categoryId);

    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setCategoryName(rta)).catch(error => alert(error));
    }, );

    return (
        <>
            <h2 className="text">{categoryName}</h2>
            <ItemList categoryId={categoryId}/>
        </>
    );
  }
  
  export default ItemListContainer;