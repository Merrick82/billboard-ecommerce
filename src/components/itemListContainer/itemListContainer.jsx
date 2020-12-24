import 'materialize-css/dist/css/materialize.min.css';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';

function ItemListContainer() {
    return (
        <>
            <h2>Peliculas</h2>
            <ItemList />
        </>
    );
  }
  
  export default ItemListContainer;