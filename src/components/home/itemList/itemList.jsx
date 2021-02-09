import 'materialize-css/dist/css/materialize.min.css';
import './itemList.css';
import Item from '../item/item';
import { useState, useEffect } from 'react';
import { getFirestore } from '../../../database/config';

function ItemList(props) {
  const [items, setItems] = useState([]);
  const db = getFirestore();

  const getProductsByCategoryIdFromDB = () => {
    db.collection('products').where("categoryId", "==", props.categoryId).get()
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
    if (props.categoryId) {
      getProductsByCategoryIdFromDB();
    }
  }, [props.categoryId]);

  return (
    <div className="row">
      {
        items.length ?
        items.map((item) => (
            <Item key={item.id} itemId={item.id} title={item.data.title} price={item.data.price} 
            stock={item.data.stock} urlCover={item.data.urlCover} />
        ))
        : <p className="loading">Cargando productos...</p>
      }
    </div>
  );
}

export default ItemList;