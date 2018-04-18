import * as React from 'react';
import { Product } from './Models/Product';
import { ProductItem } from './ProductItem';
import './ProductList.css';

interface ProductListPops {
    products: Product[];
}

export class ProductList extends React.Component<ProductListPops> {
    render() {
        return (
            <ul className='product-list'>
                {
                    this.props.products.map(product =>
                        <li key={product.name} className='product-item' >
                            <ProductItem product={product} />
                        </li>
                    )
                }
            </ul>
        );
    }
}