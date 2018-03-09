import React, { Component } from 'react'
import './App.css'
import data from './data.js'

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <p className="App-intro">
        To get started change this text and save save to reload.
      </p>
      <Products displayProducts={data.products} />
    </div>
  }
}

class Products extends Component  {
  render(){
       return <div className='products'>
        {
          this.props.displayProducts.map((product, index) =>
        <li key={index}> {product.name}  {product.description}</li>
        )}
      </div>
  }
}

export default App;
