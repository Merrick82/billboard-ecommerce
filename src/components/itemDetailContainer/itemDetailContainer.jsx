import 'materialize-css/dist/css/materialize.min.css';
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';
import {getMovieById} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';

function ItemDetailContainer(props) {
    const [item, setItem] = useState({});
    const mockService = getMovieById(props.itemId);

    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setItem(rta)).catch(error => alert(error));
    }, []);

    return (
        <ItemDetail movie={item} />
    );
  }
  
  export default ItemDetailContainer;