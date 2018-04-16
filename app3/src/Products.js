import React, { Component } from 'react'
import './Products.css'

class Product extends Component{

    constructor(props){
      super(props)
      this.state= { product: this.props.product}

      this.showHideDesc = this.showHideDesc.bind(this);
    }

    showHideDesc()
    {
        var updatedProduct = this.state.product;
        updatedProduct.showDescription = !updatedProduct.showDescription;
        this.setState({product: updatedProduct});
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name' data-f={this.state.product.showDescription}><span onClick={this.showHideDesc}>{this.state.product.showDescription?'-':'+'}</span>{this.props.product.name}</div>
                {this.state.product.showDescription?<div className='desc'>{this.props.product.description}</div>:null}
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-'+ p.name + '_' + i }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products