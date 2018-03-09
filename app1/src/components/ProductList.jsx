import React, { Component } from 'react'
import Product from './Product.jsx';

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

export default ProductList;;
