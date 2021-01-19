import 'materialize-css/dist/css/materialize.min.css';
import appLogo from '../../assets/icons/ticket-logo-white.svg';
import CartWidget from '../cartWidget/cartWidget';
import './navbar.css';
import {getCategories} from '../mockService/mockService.js';
import {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import CartSlide from '../cartSlide/cartSlide';
import { Store } from '../../store';
// import { getFirestore } from '../../database/dbconf';
// import { getCategoriesFromDB } from '../databaseService/databaseService';

function NavBar() {
    const [categories, setCategories] = useState([]);
    const [showWidgetCart, setShowWidgetCart] = useState(false);
    const mockService = getCategories();
    const [data, setData] = useContext(Store);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    // const db = getFirestore();
    // let arr = [];

    // const getCategoriesDB = () => {
    //   db.collection('categories').get()
    //   .then(docs => {
    //       docs.forEach(doc => {
    //         console.log(doc.id);
    //         console.log(doc.data());
    //         arr.push(doc.data());
    //       });

    //       setCategories(arr);
    //     }
        
    //     ).catch(e => console.log(e));
    //   }
      
    //   console.log(getCategoriesDB());
      
    // Simula consumir una api
    useEffect(() => {
        mockService.then(rta => setCategories(rta)).catch(error => alert(error));
    }, []);

    return (
      <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Billboard-Shop</a>
            <a href="#" className="brand-logo right">
                <img src={appLogo} alt="logo" className="nav-logo"/>
            </a>
            <ul id="nav-bar" className="left hide-on-med-and-down">
              {
                  categories.map((category) => (
                      <li key={category.id}><Link to={`${category.route}/${category.id}`}>{category.title}</Link></li>
                  ))
              }
              <CartWidget action={openWidgetCart}/>
              {data.itemsQty > 0 && <CartSlide show={showWidgetCart} action={openWidgetCart}/>}
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;