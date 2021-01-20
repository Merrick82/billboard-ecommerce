import 'materialize-css/dist/css/materialize.min.css';
import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

function ItemDetail(props) {
    console.log('ItemDetail', props.item);
    return (
        <div className="container">
            <div className="movieTitle">
                <p><strong>{props.item.title}</strong></p>
            </div>
            <div className="poster">
                <img src={props.item.urlCover} alt="imageCart" />
            </div>
            <div className="extra">
                <p><strong>Descripcion: </strong>{props.item.description}</p>
            </div>
            <div className="card-content space">
                <h4><strong>Precio: </strong>$ {props.item.price}</h4>
                <ItemCount item={props.item} itemId={props.itemId} />
            </div>
        </div>
    );
  }
  
  export default ItemDetail;