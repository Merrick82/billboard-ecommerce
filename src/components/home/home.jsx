import 'materialize-css/dist/css/materialize.min.css';
import './home.css';
import {useState, useEffect} from 'react';
import Item from '../item/item';
import { getFirestore } from '../../database/dbconf';

function Home() {
    const [items, setItems] = useState([]);
    const db = getFirestore();

    const getRandomProductsFromDB = () => {
      db.collection('products').where("categoryId", "==", 'Oyvbi8UDSgROPxy2uOFt').limit(4).get()
      .then(docs => {
          let arr = [];

          docs.forEach(doc => {
            arr.push({
              id: doc.id, 
              data: doc.data()
            });
          });

          setItems(arr);
        }).catch(e => console.log(e));
      }

    useEffect(() => {
      getRandomProductsFromDB();
    }, []);

    return (
      <div className="row">
        <h2 className="text">Productos Destacados</h2>
        {
            items.length ?
            items.map((item) => (
                <Item key={item.id} itemId={item.id} title={item.data.title} price={item.data.price} 
                stock={item.data.stock} urlCover={item.data.urlCover} />
            ))
            : <p className="loading">Cargando destacados...</p>
        }
      </div>
    );
  }
  
  export default Home;
  