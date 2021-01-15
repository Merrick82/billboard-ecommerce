import './cart.css';
import {useContext, useEffect, useState} from 'react';
import { Store } from '../../store';
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
            total = total + item.quantity * item.price;
        });

        setCartTotal(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [data]);

    return (
        <section className="container customMargin">
            {data.items.length === 0 && <h3>El carrito se encuentra vacío!</h3>}
            {
                data.items.length !== 0 && data.items.map((item, i) => (
                <div className="container">
                    <div className="row" key={item.id + i + Math.random()}>
                        <div className="col s12">
                            <div className="card" style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                                <img src={item.urlCover} style={{ width: "15%" }} alt="cartImage"/>

                                <div className="card-body" style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div className="card-content valign-wrapper">
                                        <h5><strong>{item.title}</strong></h5>
                                    </div>
                                    <div className="card-content valign-wrapper">
                                        <p><strong>Cantidad:</strong> {item?.quantity}</p>
                                    </div>
                                    <div className="card-content valign-wrapper">
                                        <p><strong>Precio:</strong> ${item.price}</p>
                                    </div>
                                </div>
                                <div className="card-content valign-wrapper right">
                                    <button href="#" className="btn red" onClick={() => deleteFromCart(item.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="row">
                <div className="col s6">
                    <h5>Total Productos: {data.itemsQty}</h5>
                </div>
                <div className="col s6">
                    <h5>Importe: ${cartTotal}</h5>
                </div>
            </div>

            <div>
                {data.items.length !== 0 && <button className="addWidget" onClick={clearCart}>Vaciar Carrito</button>}&nbsp;
                <button className="addWidget" onClick={close}>Cerrar</button>
            </div>
        </section>
    )
}

export default Cart;