import 'materialize-css/dist/css/materialize.min.css';
import appLogo from '../../assets/icons/ticket-logo-white.svg';
import './navbar.css';

function NavBar() {
    return (
      <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Billboard-Shop</a>
            <a href="#" className="brand-logo right">
                <img src={appLogo} alt="logo" className="nav-logo"/>
            </a>
            <ul id="nav-bar" className="left hide-on-med-and-down">
                <li><a href="http://www.imdb.com/chart/top">Peliculas</a></li>
                <li><a href="http://www.imdb.com/chart/toptv">Series</a></li>
                <li><a href="http://www.imdb.com/nycc">Comics</a></li>
                <li><a href="http://www.allmusic.com">Musica</a></li>
            </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;