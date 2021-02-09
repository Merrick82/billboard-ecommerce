import './App.css';
import NavBar from './components/navbar/navbar';
import Featured from './components/home/featured/featured';
import ItemListContainer from './components/home/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/home/itemDetailContainer/itemDetailContainer';
import Cart from './components/home/cart/cart';
import Checkout from './components/home/checkout/checkout';
import Error404 from "./components/home/error404/index";
import { Store } from './store';
import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState({
    items: [],
    itemsQty: 0
  })

  return (
    // <div className="App">
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Featured />
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
          <Route exact path="/:route/:id">
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
      </BrowserRouter>
    </Store.Provider>
    // </div>
  );
}

export default App;
