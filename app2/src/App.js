import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products, { AddProduct }  from './Products.js'

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          products: data.products          
      }

      // This binding is necessary to make `this` work in the callback
      this.AddNewProduct = this.AddNewProduct.bind(this);
  }

  AddNewProduct(product){
      var newProds = this.state.products.concat([product]);      
      this.setState({
         products: newProds
      });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
      <AddProduct onAddNewProduct={this.AddNewProduct}/>
      </div>
      <div className='products-container'>
        <Products products={this.state.products}/>
      </div>
    </div>
  }
}

export default App
