import 'materialize-css/dist/css/materialize.min.css';
import './itemDetail.css';
import ItemCount from '../itemCount/itemCount';

function ItemDetail({movie}) {
    return (
        <div className="container">
            <div className="movieTitle">
                <p><strong>{movie.title}</strong></p>
            </div>
            <div className="poster">
                <img src={movie.urlCover} alt="imageCart" />
            </div>
            <div className="extra">
                <p><strong>Director: </strong>{movie.director}</p>
                <p><strong>Año: </strong>{movie.year}</p>
                <p><strong>Elenco: </strong>{movie.cast}</p>
                <p><strong>Sinopsis: </strong>{movie.sinopsis}</p>
            </div>
            <div className="card-content space">
                <h4><strong>Precio: </strong>$ {movie.price}</h4>
                <ItemCount maxItems={movie.stock} />
                <button className="addWidget">Agregar al carrito</button>
            </div>
        </div>
    );
  }
  
  export default ItemDetail;