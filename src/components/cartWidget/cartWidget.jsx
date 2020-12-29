import 'materialize-css/dist/css/materialize.min.css';
import './cartWidget.css';

function CartWidget({action}) {
    return (
        <li>
            <div onClick={action}>
                <i className="material-icons widget-space">shopping_cart</i>
                <small className="notification-cart">1</small>
            </div>
        </li>
    );
  }
  
  export default CartWidget;