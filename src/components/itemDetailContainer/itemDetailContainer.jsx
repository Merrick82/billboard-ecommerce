import 'materialize-css/dist/css/materialize.min.css';
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import {getProductById} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const mockService = getProductById(id);

    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setItem(rta)).catch(error => alert(error));
    }, []);

    return (
        <ItemDetail movie={item} />
    );
  }
  
  export default ItemDetailContainer;