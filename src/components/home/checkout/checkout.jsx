import './checkout.css';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../../../store';
import { getFirestore } from '../../../database/config';
import firebase from 'firebase/app';

function Checkout() {
    const db = getFirestore();

    const [data, setData] = useContext(Store);
    const [purchaseId, setPurchaseId] = useState('');
    const [purchaseStatus, setPurchaseStatus] = useState(false);
    const history = useHistory();
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        creditCard: '',
        vigency: '',
        creditCardName: '',
        creditCode: ''
    });
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        creditCard: '',
        vigency: '',
        creditCardName: '',
        creditCode: ''
    });

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const purchase = {
        user: formData,
        items: data.items,
        totalPrice: data.itemsQty,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    function validateForm() {
        let formIsValid = true;
        let validateErrors = {};
        
        if (!formData["name"]) {
            formIsValid = false;
            validateErrors["name"] = 'Este campo es obligatorio';
        }

        if (!formData["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            validateErrors["name"] = "Debe ingresar letras unicamente";
        }

        if (!formData["lastname"]) {
            formIsValid = false;
            validateErrors["lastname"] = 'Este campo es obligatorio';
        }

        if (!formData["lastname"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            validateErrors["lastname"] = "Debe ingresar letras únicamente";
        }

        if (!formData["email"]) {
            formIsValid = false;
            validateErrors["email"] = 'Este campo es obligatorio';
        }

        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (formData["email"]) {
            if (!formData["email"].match(mailformat)) {
                formIsValid = false;
                validateErrors["email"] = "El email ingresado es invalido";
            }
        }

        if (!formData["telephone"]) {
            formIsValid = false;
            validateErrors["telephone"] = 'Este campo es obligatorio';
        }

        if (!formData["telephone"].match(/^[0-9]+$/)) {
            formIsValid = false;
            validateErrors["telephone"] = "Debe ingresar números únicamente";
        }

        if (formData["telephone"].length > 15) {
            formIsValid = false;
            validateErrors["telephone"] = "No debe superar los 15 digitos";
        }

        if (!formData["creditCard"]) {
            formIsValid = false;
            validateErrors["creditCard"] = 'Este campo es obligatorio';
        }

        if (formData["creditCard"].length < 13 || formData["creditCard"].length > 16) {
            formIsValid = false;
            validateErrors["creditCard"] = 'El número ingresado es inválido';
        }

        if (!formData["vigency"]) {
            formIsValid = false;
            validateErrors["vigency"] = 'Este campo es obligatorio';
        }

        if (!formData["creditCardName"]) {
            formIsValid = false;
            validateErrors["creditCardName"] = 'Este campo es obligatorio';
        }

        if (!formData["creditCardName"].match(/^[a-zA-Z ]+$/)) {
            formIsValid = false;
            validateErrors["creditCardName"] = 'Debe ingresar letras unicamente';
        }

        if (!formData["creditCode"]) {
            formIsValid = false;
            validateErrors["creditCode"] = 'Este campo es obligatorio';
        }

        if (formData["creditCode"].length < 0 || formData["creditCode"].length > 4) {
            formIsValid = false;
            validateErrors["creditCode"] = 'El número ingresado es inválido';
        }

        setErrors(validateErrors);
        return formIsValid;
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (validateForm()) {
            db.collection('purchases').add(purchase)
            .then(({id}) => {
                setPurchaseStatus(true);
                setPurchaseId(id);
                clearCart();
            })
            .catch(e => console.log(e));
        } else {
            console.log('handleSubmitForm', errors);
        }
    }

    const close = () => {
        history.push('/');
    }

    const clearCart = () => {
        setData({items: [], itemsQty: 0});
    }

    return (
        <section>
            <div className="container center">
                <h2>Checkout</h2>
                {
                    !purchaseStatus ?
                    <div className="row">
                        <form className="col s12" onSubmit={handleSubmitForm}>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_name" type="text" value={formData.name} 
                                        onChange={handleChangeInput} name="name" className="validate"/>
                                    <label for="icon_name">Nombre</label>
                                    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="icon_lastname" type="text" value={formData.lastname} 
                                        onChange={handleChangeInput} name="lastname" className="validate"/>
                                    <label for="icon_lastname">Apellido</label>
                                    {errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">email</i>
                                    <input id="icon_mail" type="email" value={formData.email} 
                                        onChange={handleChangeInput} name="email" className="validate"/>
                                    <label for="icon_mail">Email</label>
                                    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" value={formData.telephone} 
                                        onChange={handleChangeInput} name="telephone" className="validate"/>
                                    <label for="icon_telephone">Telephone</label>
                                    {errors.telephone && <p style={{ color: "red" }}>{errors.telephone}</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">credit_card</i>
                                    <input id="icon_card" type="number" value={formData.creditCard} 
                                        onChange={handleChangeInput} name="creditCard" className="validate"/>
                                    <label for="icon_card">Número de Tarjeta</label>
                                    {errors.creditCard && <p style={{ color: "red" }}>{errors.creditCard}</p>}
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">credit_card</i>
                                    <input id="icon_vigency" type="text" value={formData.vigency} 
                                        onChange={handleChangeInput} name="vigency" className="validate"/>
                                    <label for="icon_vigency">Vencimiento</label>
                                    {errors.telephone && <p style={{ color: "red" }}>{errors.vigency}</p>}
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">credit_card</i>
                                    <input id="icon_cardName" type="text" value={formData.creditCardName} 
                                        onChange={handleChangeInput} name="creditCardName" className="validate"/>
                                    <label for="icon_cardName">Nombre del titular</label>
                                    {errors.creditCardName && <p style={{ color: "red" }}>{errors.creditCardName}</p>}
                                </div>
                                <div className="input-field col s6">
                                    <i className="material-icons prefix">credit_card</i>
                                    <input id="icon_code" type="number" value={formData.creditCode} 
                                        onChange={handleChangeInput} name="creditCode" className="validate"/>
                                    <label for="icon_code">Codigo Seguridad</label>
                                    {errors.telephone && <p style={{ color: "red" }}>{errors.creditCode}</p>}
                                </div>
                            </div>

                            <button className="continue-btn">Pagar</button>
                        </form>
                    </div> :
                    <div>
                        <p>Gracias por tu compra!!! El número de seguimiento es: {purchaseId}</p>
                        <button className="continue-btn" onClick={close}>Cerrar</button>
                    </div>
                }
            </div>
        </section>
    )
}

export default Checkout;