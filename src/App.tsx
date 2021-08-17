import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HOME, PRODUCT, PRODUCTS } from './constants/routes';

import { Menu } from './components/Menu';

import { Home } from './components/Home';
import { Products } from './components/Products';
import { Product } from './components/Product';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>

          <Route path={PRODUCT}>
            <Product />
          </Route>

          <Route path={PRODUCTS}>
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
