import * as React from 'react';
import { Component } from 'react';
import { GetData } from './data';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

interface Props { }

interface State {
  products: Product[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { products: GetData() };
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 4- Add router to an app</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} />
          <Router>
            <div>
              <Route path='/' />
              <Route path='/products/:productName' component={ProductContainer} />
            </div>
          </Router>
        </div>
      </div >
    );
  }
}

export default App;