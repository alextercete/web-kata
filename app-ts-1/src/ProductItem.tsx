import * as React from 'react';
import { Product } from './Models/Product';

interface ProductItemProps {
    product: Product;
}

export class ProductItem extends React.Component<ProductItemProps> {
    render() {
        const product = this.props.product;

        return (
            <li><strong>{product.name}</strong> {product.description}</li>
        );
    }
}