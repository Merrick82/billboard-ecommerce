import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemContainer from '../itemContainer/itemContainer';
import comic from '../../assets/icons/comic-card.jpg';
import movie from '../../assets/icons/movie-card.jpg';
import music from '../../assets/icons/music-card.jpeg';

function ItemListContainer() {
    return (
        <div className="row">
            <ItemContainer cardTitle="Peliculas" cardImage={movie} />
            <ItemContainer cardTitle="Musica" cardImage={music} />
            <ItemContainer cardTitle="Comics" cardImage={comic} />
        </div>
    );
  }
  
  export default ItemListContainer;