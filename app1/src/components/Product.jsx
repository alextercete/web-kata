import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Expander from './Expander';

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
          <Link to={`/products/${product.name}`}>
            {product.name}
          </Link>
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

export default Product;
