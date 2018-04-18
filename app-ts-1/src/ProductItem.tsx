import * as React from 'react';
import { Product } from './Models/Product';

interface ProductItemProps {
    product: Product;
}

export class ProductItem extends React.Component<ProductItemProps> {
    render() {
        const product = this.props.product;

        return (
            <li>
                {product.free && <span>Free</span>}
                <strong>
                    {product.name}{product.new && '*'}
                </strong>
                {product.description}
            </li>
        );
    }
}