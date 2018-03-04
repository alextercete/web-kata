import React, { Component } from 'react'
import Products from './data.js'
import './App.css'

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

class FilterComponent extends Component {
  render() {
    return (
      <div className="filter">
        <label>
          Filter:
          <input
            type="text"
            placeholder="filter products..."
            onChange={this.props.onFilterChanged}
          />
        </label>
      </div>
    );
  }
}

class ProductList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(
          p => <Product
            key={p.name}
            product={p}
            onRemove={this.props.onRemove}/>
        )}
      </div>
    );
  }
}

class AddProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", description: "" };
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  onDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  render() {
    return (
      <fieldset>
        <legend>Add a new product</legend>
        <form
          onSubmit={e => this.props.onAdd(e, this.state.name, this.state.description)}>
          <div>
            <label>Product name:</label>
            <input
              type="text"
              name="productName"
              value={this.state.name}
              onChange={this.onNameChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="productDescription"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </fieldset>
    );
  }
}

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {showDescriptions: false};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(event) {
    this.setState(prevState => ({
      showDescriptions: prevState.showDescriptions ? false : true
    }));
  }

  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <div
          className="remove"
          onClick={e => this.props.onRemove(e, product)}>
            Remove
        </div>
        <p className="product-name">
          {product.name}
          <Expander
            onClick={this.onToggle}
            expanded={this.state.showDescriptions}
          />
        </p>
        {this.state.showDescriptions && <p>{product.description}</p>}
        {product.free && <p className="product-free">free tool!</p>}
      </div>
    );
  }
}

class Expander extends Component {
  render() {
    return (
      <span className="expander" onClick={this.props.onClick}>
        {this.props.expanded ? '-' : '+'}
      </span>
    );
  }
}

export default App;
