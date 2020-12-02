import appLogo from './assets/icons/billboard-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={appLogo} className="App-logo" alt="logo" />
        <h2>
          Bienvenido a Billboard-eCommerce
        </h2>
        <p>
          El lugar dónde encontrarás películas, series, recitales y más!!
        </p>
      </header>
    </div>
  );
}

export default App;
