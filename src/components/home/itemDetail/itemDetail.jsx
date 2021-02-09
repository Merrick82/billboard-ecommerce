import 'materialize-css/dist/css/materialize.min.css';
import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

function ItemDetail(props) {
    return (
        <div className="row">
            <div className="col s12">
                <h3 className="title"><strong>{props.item.title}</strong></h3>
            </div>
            <div className="col s3"></div>
            <div className="col s3">
                <img className="poster" src={props.item.urlCover} alt="image-cart" />
            </div>
            <div className="col s3">
                <h5 className="title-style"><strong>Descripcion </strong></h5>
                <p className="description">{props.item.description}</p>
                <br/>
                <h5 className="title-style"><strong>Precio: </strong>$ {props.item.price}</h5>
                <ItemCount item={props.item} itemId={props.itemId} />
            </div>
        </div>
    );
}
  
export default ItemDetail;