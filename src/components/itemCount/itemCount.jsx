import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './itemCount.css';
import {Store} from '../../store';

function ItemCount(props) {
    const [data, setData] = useContext(Store);
    const [itemQty, setQty] = useState(1);
    const history = useHistory();
    
    function clicker(isSum) {
        if (isSum) {
            if (itemQty >= props.item.stock) {
                alert(`El maximo permitido es ${props.item.stock}`);
                return;
            }
            
            setQty(itemQty + 1);
        } else {
            if (itemQty <= 1) {
                alert(`La cantidad no puede ser menor o igual a cero`);
                return;
            }
            
            setQty(itemQty - 1);
        }
    }
    
    const onAdd = () => {
        if (isOnCart(props.itemId)) {
            let item = data.items.filter(prod => prod.id === props.itemId)[0];
            item.quantity = item.quantity + itemQty;
            
            let itemsWithoutTheseItem = data.items.filter(prod => prod.id !== props.itemId);
            itemsWithoutTheseItem.push(item);

            setData(
                {
                    items: itemsWithoutTheseItem,
                    itemsQty: data.itemsQty + itemQty
                }
            );
        } else {
            let itemToAdd = { id: props.itemId, item: props.item, quantity: itemQty };

            setData(
                {
                    ...data, 
                    items: [...data.items, itemToAdd],
                    itemsQty: data.itemsQty + itemQty
                }
            );
        }

        history.push('/cart');
    }

    function isOnCart(id) {
        let product = data.items && data.items.filter((item) => item.id === id);
        return product.length ? true : false;
    }
        
    return (
        <div>
            <div className="s2 itemQty">
                <button onClick={() => clicker(false)}>-</button>
                <input type="text" size="1" value={itemQty} readOnly/>
                <button onClick={() => clicker(true)}>+</button>
            </div>
            <div className="card-content">
                <button className="addWidget" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
  }
  
  export default ItemCount;