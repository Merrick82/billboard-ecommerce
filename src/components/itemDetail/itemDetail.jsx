import 'materialize-css/dist/css/materialize.min.css';
import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

function ItemDetail(props) {
    return (
        <div className="container">
            <div className="movieTitle">
                <p><strong>{props.movie.title}</strong></p>
            </div>
            <div className="poster">
                <img src={props.movie.urlCover} alt="imageCart" />
            </div>
            <div className="extra">
                <p><strong>Director: </strong>{props.movie.director}</p>
                <p><strong>Año: </strong>{props.movie.year}</p>
                <p><strong>Elenco: </strong>{props.movie.cast}</p>
                <p><strong>Sinopsis: </strong>{props.movie.sinopsis}</p>
            </div>
            <div className="card-content">
                <h4><strong>Precio: </strong>$ {props.movie.price}</h4>
                <ItemCount maxItems={props.movie.stock} />
                <button className="addWidget">Agregar al carrito</button>
            </div>
        </div>
    );
  }
  
  export default ItemDetail;