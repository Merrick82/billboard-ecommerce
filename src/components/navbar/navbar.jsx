import './navbar.css';
import 'materialize-css/dist/css/materialize.min.css';
import appLogo from '../../assets/icons/ticket-logo-white.svg';
import CartSlider from '../home/cartSlider/cartSlider';
import CartWidget from './cartWidget/cartWidget';
import { useState, useEffect, useContext } from 'react';
import { getFirestore } from '../../database/config';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [showWidgetCart, setShowWidgetCart] = useState(false);
  const [data, setData] = useContext(Store);
  const db = getFirestore();

  const openWidgetCart = () => {
    setShowWidgetCart(!showWidgetCart);
  }

  const getCategoriesFromDB = () => {
    db.collection('categories').get()
    .then(docs => {
      let arr = [];

      docs.forEach(doc => {
        arr.push({
          id: doc.id, 
          data: doc.data()
        });
      });

      setCategories(arr);
    }).catch(e => console.log(e));
  }
    
  useEffect(() => {
      getCategoriesFromDB();
  }, []);

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Billboard-Shop</a>
          <a href="#" className="brand-logo right">
              <img src={appLogo} alt="logo" className="nav-logo"/>
          </a>
          <ul id="nav-bar" className="left hide-on-med-and-down">
          {
            categories.map((category) => (
              <li key={category.id}><Link to={`${category.data.route}/${category.id}`}>{category.data.title}</Link></li>
            ))
          }

          <CartWidget action={openWidgetCart} />
          {data.itemsQty > 0 && <CartSlider show={showWidgetCart} action={openWidgetCart} />}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
