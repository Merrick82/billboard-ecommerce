import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Error404 from './components/error404/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/video/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/music/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/comic/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
     </div>
  );
}

export default App;
