import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import ProductOverview from './ProductOverview';
import ProductDetails from './components/ProductDetails';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ProductOverview} />
      <Route path="/products/:product" component={ProductDetails} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
