import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/home/home';
import Checkout from './components/checkout/checkout';
import Footer from './components/footer/footer';
import Error404 from './components/error404/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import {Store} from './store';
import {useState} from 'react';

function App() {
  const [data, setData] = useState({
    items: [],
    itemsQty: 0
  })

  return (
    <Store.Provider value={[data, setData]}>
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
            <Route exact path="/cart" component={Cart}>
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
     </Store.Provider>
  );
}

export default App;
