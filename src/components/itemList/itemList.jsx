import 'materialize-css/dist/css/materialize.min.css';
import './itemList.css';
import Item from '../item/item';
import {getProductsByCategoryId} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';

function ItemList(props) {
    const mockService = getProductsByCategoryId(props.categoryId);
    const [items, setItems] = useState([]);

    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setItems(rta)).catch(error => alert(error));
    }, []);

    return (
        <div className="row">
            {
                items.length ?
                items.map((item) => (
                    <Item key={item.id} itemId={item.id} title={item.title} price={item.price} stock={item.stock} urlCover={item.urlCover} />
                ))
                : <p className="loading">Cargando productos...</p>
            }
        </div>
    );
  }
  
  export default ItemList;