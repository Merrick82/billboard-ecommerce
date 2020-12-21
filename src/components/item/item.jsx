import 'materialize-css/dist/css/materialize.min.css';
import './item.css';
import ItemCount from '../itemCount/itemCount';
import {getRandomArbitrary} from '../utils/numberUtils.js';

function Item(props) {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-title">
                <span><strong>{props.title}</strong></span>
                </div>
                <div className="card-image centerImage">
                    <img src={props.urlCover} alt="imageCart" />
                </div>
                <div className="card-content">
                    <h4>$ {props.price}</h4>
                    <ItemCount maxItems={getRandomArbitrary(10, 50)}/>
                    <button className="addWidget">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Item;