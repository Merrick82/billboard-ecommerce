import 'materialize-css/dist/css/materialize.min.css';
import './featured.css';
import Item from '../item/item';
import { getFirestore } from '../../../database/config';
import { useState, useEffect } from 'react';

function Featured() {
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
        <div className="container">
            <div className="row center">
                <h2>Productos Destacados</h2>
                {
                    items.length ?
                    items.map((item) => (
                        <Item key={item.id} itemId={item.id} title={item.data.title} price={item.data.price} 
                        stock={item.data.stock} urlCover={item.data.urlCover} />
                    ))
                    : <p className="loading">Cargando destacados...</p>
                }
            </div>
      </div>
    );
}
  
export default Featured;
  