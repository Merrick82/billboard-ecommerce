import 'materialize-css/dist/css/materialize.min.css';
import './itemContainer.css';

function ItemContainer(props) {
    return (
        <div className="col s4">
            <div className="card">
                <div className="card-title">
                <span>{props.cardTitle}</span>
                </div>
                <div className="card-image">
                    <img src={props.cardImage} alt="imageCart" />
                </div>
                <div className="card-content">
                    <p>Soy una card sencilla que muestra un poco lo que estuvo haciendo el usuario en el sitio. Soy de utilidad
                        porque no requiero de mucho para usarme efectivamente.
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ItemContainer;