import 'materialize-css/dist/css/materialize.min.css';
import './item.css';
import ItemCount from '../itemCount/itemCount';
import Modal from '../modal/modal';
import {useState} from 'react';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';

function Item(props) {
    const [show, setModalState] = useState(false);

    function setModalStatus(mustShow) {
        mustShow ? setModalState(true) : setModalState(false);
    }

    return (
        <div className="col s3">
            <div className="card">
                <div className="card-title">
                    <span><strong>{props.title}</strong></span>
                </div>
                <div className="card-image centerImage">
                    <img src={props.urlCover} alt="imageCart" onClick={() => setModalStatus(true)}/>
                </div>
                <div className="card-content">
                    <h4>$ {props.price}</h4>
                    <ItemCount maxItems={props.stock}/>
                    <div className="space">
                        <Modal show={show} handleClose={() => setModalStatus(false)}>
                            <ItemDetailContainer itemId={props.itemId} />
                        </Modal>
                        <button type="button" className="addWidget" onClick={() => setModalStatus(true)}>
                            Detalle
                        </button>
                    </div>
                    <div>
                        <button className="addWidget">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Item;