import './cartWidget.css';
import 'materialize-css/dist/css/materialize.min.css';
import {useContext} from 'react';
import {Store} from '../../store';

function CartWidget({action}) {
    const [data, setData] = useContext(Store);

    return (
        <li>
            <div onClick={action}>
                <i className="material-icons widget-space">shopping_cart</i>
                <small className="notification-cart">{data.itemsQty}</small>
            </div>
        </li>
    );
  }
  
  export default CartWidget;