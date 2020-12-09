import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
