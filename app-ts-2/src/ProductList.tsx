import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import './ProductList.css';

interface ProductItemProps {
    product: Product;
    key: string;
    onRemove: (name: string) => void;
}

interface ProductItemState { }

class ProductItem extends Component<ProductItemProps, ProductItemState> {
    render(): JSX.Element {
        return (
            <div className='product'>
                <div className='details'>
                    <div className='name'>{this.props.product.name}</div>
                    <div className='desc'>{this.props.product.description}</div>
                </div>
                <div className='actions'>
                    <div
                        onClick={() => this.props.onRemove(this.props.product.name)}
                        className='remove'
                        title='fix me'
                    >
                    x
                    </div>
                </div>
            </div>);
    }
}

interface ProductListProps {
    products: Product[];
    onProductRemove: (name: string) => void;
}

interface ProductListState { }

class ProductList extends Component<ProductListProps, ProductListState> {
    render(): JSX.Element {
        return (
            <div className='products'>
                {this.props.products.map(
                    (p, i) =>
                        <ProductItem onRemove={this.props.onProductRemove} product={p} key={'product-' + i} />
                )}
            </div>);
    }
}

export default ProductList;