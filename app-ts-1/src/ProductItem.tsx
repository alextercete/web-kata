import * as React from 'react';
import { Product } from './Models/Product';
import './ProductItem.css';

interface ProductItemProps {
    product: Product;
}

export class ProductItem extends React.Component<ProductItemProps> {
    render() {
        const product = this.props.product;

        return (
            <div>
                {product.free && <span className='product-free'>Free</span>}
                {product.new && <span className='product-new'>New</span>}
                <span className='product-name'>{product.name}</span>
                <p className='product-description'>{product.description}</p>
            </div>
        );
    }
}