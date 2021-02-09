import './cart.css';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../../store';
import { useHistory } from 'react-router-dom';

function Cart() {
    const [data, setData] = useContext(Store);
    const [cartTotal, setCartTotal] = useState(0);
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

    const checkout = () => {
        history.push('/checkout');
    }

    const deleteFromCart = itemId => {
        // Busco el item que quiero eliminar para saber que cantidad debo quitar del total
        let item = data.items.filter(item => item.id === itemId)[0];
        const itemQty = item.quantity;
        
        let itemToDelete = data.items.filter(item => item.id !== itemId);
        setData({items: itemToDelete, itemsQty: data.itemsQty - itemQty});
    };

    function calculateTotal() {
        let total = 0;
        data.items.forEach((item) => {
            total = total + item.quantity * item.item.price;
        });

        setCartTotal(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [data]);

    return (
        <div className="container align">
            <h2>Carrito</h2>
            {data.items.length === 0 && <h3>El carrito se encuentra vacío!</h3>}
            {
                data.items.length !== 0 && data.items.map((item, i) => (
                <div className="container" key={i + Math.random()}>
                    <div className="row" key={item.id}>
                        <div className="col custom-col-img grid-example">
                            <img src={item.item.urlCover} style={{ width: "50%" }} alt="cartImage"/>
                        </div>
                        <div className="col custom-col grid-example">
                            <h5><strong>{item.item.title}</strong></h5>
                        </div>
                        <div className="col custom-col grid-example">
                            <p><strong>Cantidad:</strong> {item?.quantity}</p>
                        </div>
                        <div className="col custom-col grid-example">
                            <p><strong>Precio:</strong> ${item.item.price}</p>
                        </div>
                        <div className="col custom-col-close grid-example">
                            <button href="#" className="btn red custom-close" onClick={() => deleteFromCart(item.id)}>X</button>
                        </div>
                    </div>
                </div>
            ))}
            {   data.items.length !== 0 && 
                <div className="container align">
                    <div className="row">
                        <div className="col s6">
                            <h5>Total Productos: {data.itemsQty}</h5>
                        </div>
                        <div className="col s6">
                            <h5>Importe: ${cartTotal}</h5>
                        </div>
                    </div>

                    <div>
                        <button className="buttons" onClick={clearCart}>Vaciar Carrito</button>&nbsp;
                        <button className="buttons" onClick={close}>Cerrar</button>&nbsp;
                        <button className="buttons" onClick={checkout}>Finalizar Compra</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;