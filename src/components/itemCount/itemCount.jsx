import 'materialize-css/dist/css/materialize.min.css';
import './itemCount.css';
import {useState} from 'react';

function ItemCount(props) {
    const [itemQty, setQty] = useState(1);

    function clicker(isSum) {
        if (isSum) {
            if (itemQty >= props.maxItems) {
                alert(`El maximo permitido es ${props.maxItems}`);
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

    return (
        <div className="s2 itemQty">
            <button onClick={() => clicker(false)}>-</button>
            <input type="text" size="1" value={itemQty} readOnly/>
            <button onClick={() => clicker(true)}>+</button>
        </div>
    );
  }
  
  export default ItemCount;