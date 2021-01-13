import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './itemCount.css';
import {Store} from '../../store';

function ItemCount({item}) {
    const [data, setData] = useContext(Store);
    const [itemQty, setQty] = useState(1);
    const history = useHistory();
    
    function clicker(isSum) {
        if (isSum) {
            if (itemQty >= item.stock) {
                alert(`El maximo permitido es ${item.stock}`);
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
        setData(
            {
                ...data, 
                items: [...data.items, item],
                itemsQty: data.itemsQty + itemQty
            }
        );

        history.push('/cart');
    }

    const isOnCart = (id) => {
        let product = data.items && data.items.filter((item) => item.id === Number(id));

        return product ? true : false;
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