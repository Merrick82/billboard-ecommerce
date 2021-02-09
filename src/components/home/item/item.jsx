import 'materialize-css/dist/css/materialize.min.css';
import './item.css';
import { Link } from 'react-router-dom';

function Item(props) {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-title">
                    <span><strong>{props.title}</strong></span>
                </div>
                <div className="card-image">
                    <img src={props.urlCover} alt="imageProduct" />
                </div>
                <div className="card-content">
                    <h4>$ {props.price}</h4>
                    <div className="boton">
                        <Link to={`/detail/${props.itemId}`}>Ver detalle</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;