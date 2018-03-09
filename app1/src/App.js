import React, { Component } from 'react'
import Products from './data.js'
import './App.css'
import FilterComponent from './components/FilterComponent';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {products: Products.products, filter: ""};
    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  onAdd(event, name, description) {
    event.preventDefault();
    this.setState(prevState => ({
      products: [{name, description}, ...prevState.products]
    }));
  }

  onRemove(event, product) {
    this.setState(prevState => ({
      products: prevState.products.filter(x => x.name !== product.name)
    }));
  }

  onFilterChanged(event) {
    this.setState({filter: event.target.value});
  }

  applyFilterTo(products) {
    return products.filter(x => x.name.toLowerCase().includes(this.state.filter));
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <p className="App-intro">
        To get started change this text and save save to reload.
      </p>
      <div className='products'>
        <AddProductForm onAdd={this.onAdd}/>
        <FilterComponent onFilterChanged={this.onFilterChanged}/>
        <ProductList
          products={this.applyFilterTo(this.state.products)}
          onRemove={this.onRemove}
        />
      </div>
    </div>
  }
}

export default App;
