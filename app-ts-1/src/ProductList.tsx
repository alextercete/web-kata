import * as React from 'react';
import { Product } from './Models/Product';
import { ProductItem } from './ProductItem';

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
                            <ProductItem key={product.name} product={product} />
                        )
                    }
                </ul>
            </div>
        );
    }
}