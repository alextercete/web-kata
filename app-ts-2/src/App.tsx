import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { GetData } from './data';
import { Product } from '../Models/Product';

interface AppState {
  products: Product[];
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: GetData(),
      newProductName: '',
      newProductDescription: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onProductRemove = this.onProductRemove.bind(this);
  }

  onNameChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      newProductName: event.currentTarget.value
    });
  }

  onDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      newProductDescription: event.currentTarget.value
    });
  }

  onFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const product: Product = {
      name: this.state.newProductName,
      description: this.state.newProductDescription
    };
    this.setState((prevState, props) => ({
      products: [...prevState.products, product]
    }));
  }

  onProductRemove(name: string): void {
    this.setState((prevState, props) => ({
      products: prevState.products.filter(product => product.name !== name)
    }));
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>
          <form onSubmit={this.onFormSubmit}>
            <label>Product name</label>
            <input
              type='text'
              name='product-name'
              id='product-name'
              value={this.state.newProductName}
              onChange={this.onNameChange}
            />

            <label>Product description</label>
            <input
              type='text'
              name='product-description'
              id='product-description'
              value={this.state.newProductDescription}
              onChange={this.onDescriptionChange}
            />

            <input type='submit' value='Add'/>

          </form>
        </div>
        <div className='products-container'>
          <ProductList onProductRemove={this.onProductRemove} products={this.state.products} />
        </div>
      </div>);
  }
}

export default App;