import './checkout.css';
import {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store';
import {getFirestore} from '../../database/dbconf';
import firebase from 'firebase/app';

function Checkout() {
    const db = getFirestore();

    const [data, setData] = useContext(Store);
    const [purchaseId, setPurchaseId] = useState('');
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        tel: '',
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const purchase = {
        user: formData,
        items: data.items,
        totalPrice: data.itemsQty,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('purchases').add(purchase)
        .then(({id}) => {
            setPurchaseStatus(true);
            setPurchaseId(id);
            clearCart();
        })
        .catch(e => console.log(e));
    }

    const close = () => {
        history.push('/');
    }

    const clearCart = () => {
        setData({items: [], itemsQty: 0});
    }

    return (
        <section className="customMargin">
            <div className="container customMargin">
                <h2>Checkout</h2>
                {
                    !purchaseStatus ?
                    <div class="row">
                        <form class="col s12" onSubmit={handleSubmitForm}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" value={formData.name} 
                                        onChange={handleChangeInput} name="name" className="validate"/>
                                    <label for="icon_prefix">Nombre</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_telephone" type="text" value={formData.lastname} 
                                        onChange={handleChangeInput} name="lastname" className="validate"/>
                                    <label for="icon_telephone">Apellido</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">email</i>
                                    <input id="icon_prefix" type="email" value={formData.email} 
                                        onChange={handleChangeInput} name="email" className="validate"/>
                                    <label for="icon_prefix">Email</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" value={formData.telephone} 
                                        onChange={handleChangeInput} name="telephone" className="validate"/>
                                    <label for="icon_telephone">Telephone</label>
                                </div>
                            </div>
                            <button className="addWidget">Pagar</button>
                        </form>
                    </div> :
                    <div>
                        <p>Gracias por tu compra!!! El número de seguimiento es: {purchaseId}</p>
                        <button className="addWidget" onClick={close}>Cerrar</button>
                    </div>
                }
            </div>
        </section>
    )
}

export default Checkout;