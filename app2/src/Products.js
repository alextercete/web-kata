import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props) {
        super(props);
        this.state = {name: '', description: ''};
  
        // This binding is necessary to make `this` work in the callback
        this.removeProduct = this.removeProduct.bind(this);
      }
    removeProduct(){
        this.props.onRemoveProduct(this.props.product);
    }
    
    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={this.removeProduct}>x</div>
            </div>
        </div>
    }    
}



class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product product={p} key={'product-' + i } onRemoveProduct={this.props.onRemoveProduct}/>
            )}
        </div>
    }
}

export class AddProduct extends Component{
    constructor(props) {
      super(props);
      this.state = {name: '', description: ''};

      // This binding is necessary to make `this` work in the callback
      this.addProduct = this.addProduct.bind(this);
    }

    addProduct(sender){
       var product = {name:sender.target.productName.value, description: sender.target.productDescription.value};
    
        this.props.onAddNewProduct(product);
      sender.preventDefault();
    }

    render(){        
        return <form onSubmit={this.addProduct}>
            <label>Product Name: <input id="productName" type="text"></input></label>
            <label>Description: <input id="productDescription" type="text"></input></label>
            <input type="submit" id="productSubmit" value="Enter" />
        </form>
    }
}

export default Products;