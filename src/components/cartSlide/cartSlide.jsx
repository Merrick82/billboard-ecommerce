import './cartSlide.css';
import Cart from '../cart/cart';

function CartSlide({show, action}) {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <Cart />
            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default CartSlide;