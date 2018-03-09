import React, { Component } from 'react'


  
class Products extends Component  {
    render(){
         return <div className='products'>
          {
            this.props.displayProducts.map((product, index) =>
                <Product key={index} name={product.name} description={product.description} />
            )
          }
        </div>
    }
  }

  
class Product extends Component  {
    render(){
         return <li> 
         {this.props.name} 
         </li>
    }
  }

  export default Products;