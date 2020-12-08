import appLogo from './assets/icons/ticket-logo.svg';
import NavBar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <body className="App-body">
        <img src={appLogo} className="App-logo" alt="logo" />
        <h2>
          Bienvenido a Billboard-Shop
        </h2>
        <p>
          El lugar dónde encontrarás películas, series, comics, música y más!!
        </p>
      </body>
    </div>
  );
}

export default App;
