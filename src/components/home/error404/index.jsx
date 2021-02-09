import './index.css';
import ErrorImage from '../../../assets/images/error-404.jpg';

function Error404() {
    return (
        <div className="container">
            <div id="error404">
                <img src={ErrorImage} alt="error-404" className="center"/>
            </div>
        </div>
    );
  }
  
export default Error404;
  