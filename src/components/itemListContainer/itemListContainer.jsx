import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemContainer from '../itemContainer/itemContainer';
import comic from '../../assets/images/comic-card.jpg';
import movie from '../../assets/images/movie-card.jpg';
import music from '../../assets/images/music-card.jpeg';
import series from '../../assets/images/series-card.jpg';
import {getRandomArbitrary} from '../utils/numberUtils.js';

function ItemListContainer() {
    return (
        <div className="row">
            <ItemContainer cardTitle="Peliculas" cardImage={movie} itemPrice={getRandomArbitrary(200, 500)}/>
            <ItemContainer cardTitle="Musica" cardImage={music} itemPrice={getRandomArbitrary(10, 300)}/>
            <ItemContainer cardTitle="Series" cardImage={series} itemPrice={getRandomArbitrary(200, 500)}/>
            <ItemContainer cardTitle="Comics" cardImage={comic} itemPrice={getRandomArbitrary(10, 200)}/>
        </div>
    );
  }
  
  export default ItemListContainer;