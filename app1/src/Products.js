import React, { Component } from 'react'


  
class Products extends Component  {
    render(){
         return <div className='products'>
          {
            this.props.displayProducts.map((product, index) =>
                <Product key={index} product={product}/>
            )
          }
        </div>
    }
  }

  class NewProduct extends Component  {
    render(){
    if (this.props.new) {
      return <b> New </b>;
    }
    return null;
}
}

  function FreeProduct(props) {
    if (props.free) {
      return <i> Free </i>;
    }
    return null;
  }
  
class Product extends Component  {
    render(){
         return <li> 
             <span>
             {this.props.product.name}
            </span>
            <NewProduct new={this.props.product.new}/>
            <FreeProduct free={this.props.product.free}/>
         </li>
    }
  }

  export default Products;