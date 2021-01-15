import 'materialize-css/dist/css/materialize.min.css';
import './home.css';
import {getFeaturedProducts} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';
import Item from '../item/item';

function Home() {
    const mockService = getFeaturedProducts();
    const [items, setItems] = useState([]);

    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setItems(rta)).catch(error => alert(error));
    }, []);

    return (
      <div className="row">
        <h2 className="text">Productos Destacados</h2>
        {
            items.length ?
            items.map((item) => (
                <Item key={item.id} itemId={item.id} title={item.title} price={item.price} stock={item.stock} urlCover={item.urlCover} />
            ))
            : <p className="loading">Cargando destacados...</p>
        }
      </div>
    );
  }
  
  export default Home;
  