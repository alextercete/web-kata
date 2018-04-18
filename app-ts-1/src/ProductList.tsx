import * as React from 'react';
import { Product } from './Models/Product';

interface ProductListPops {
    products: Product[];
}

export class ProductList extends React.Component<ProductListPops> {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.products.map(product =>
                            <li key={product.name}><strong>{product.name}</strong> {product.description}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}