import 'materialize-css/dist/css/materialize.min.css';
import appLogo from '../../assets/icons/ticket-logo-white.svg';
import CartWidget from '../cartWidget/cartWidget';
import './navbar.css';
import {getCategories} from '../mockService/mockService.js';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [categories, setCategories] = useState([]);
    const mockService = getCategories();

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
              <CartWidget />
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;