import React, { Component } from 'react'

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

  export default Products;