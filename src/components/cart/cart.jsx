import './cart.css';
import {useContext} from 'react';
import {Store} from '../../store';
import { useHistory } from 'react-router-dom';

function Cart() {
    const [data, setData] = useContext(Store);
    const history = useHistory();

    const close = () => {
        goHome();
    }

    const clearCart = () => {
        setData({items: [], itemsQty: 0});
        goHome();
    }

    function goHome() {
        history.push('/');
    }

    return (
        <div className="customMargin">
            <h2>Soy un Cart</h2>
            {
                data.items.length ?
                data.items.map((item) => (
                    <div>
                        <h4>Se agrego:</h4>
                        <p>Pelicula: {item.title}</p>
                        <p>Total Pedido: {data.itemsQty}</p>
                    </div>
                ))
                : <p className="loading">Cargando productos de la cart...</p>
            }
            <div>
                <button className="addWidget" onClick={clearCart}>Vaciar Carrito</button>&nbsp;
                <button className="addWidget" onClick={close}>Cerrar</button>
            </div>
        </div>
    )
}

export default Cart;