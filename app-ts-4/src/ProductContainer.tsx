import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
  productName: string;
}

interface Props extends RouteComponentProps<Props> { }

class ProductContainer extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className='product-container'>
        {this.props.match.params.productName}
      </div>
    );
  }
}

export default ProductContainer;