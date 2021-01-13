import 'materialize-css/dist/css/materialize.min.css';
import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

function ItemDetail({item}) {
    return (
        <div className="container">
            <div className="movieTitle">
                <p><strong>{item.title}</strong></p>
            </div>
            <div className="poster">
                <img src={item.urlCover} alt="imageCart" />
            </div>
            <div className="extra">
                <p><strong>Director: </strong>{item.director}</p>
                <p><strong>Año: </strong>{item.year}</p>
                <p><strong>Elenco: </strong>{item.cast}</p>
                <p><strong>Sinopsis: </strong>{item.sinopsis}</p>
            </div>
            <div className="card-content space">
                <h4><strong>Precio: </strong>$ {item.price}</h4>
                <ItemCount item={item} />
            </div>
        </div>
    );
  }
  
  export default ItemDetail;