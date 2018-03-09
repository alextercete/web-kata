import React, { Component } from 'react'


  
class Products extends Component  {
    render(){
         return <div className='products'>
         <ul>
          {
            this.props.displayProducts.map((product, index) =>
                <Product key={index} product={product}/>
            )
          }
          </ul>
        </div>
    }
  }

  class NewProduct extends Component  {
    render(){
    if (this.props.new) {
      return <span className="new"> New </span>;
    }
    return null;
}
}

  function FreeProduct(props) {
    if (props.free) {
      return <span className="free"> Free </span>;
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