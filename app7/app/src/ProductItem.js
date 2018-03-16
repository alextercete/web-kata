import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { removeProduct, addVote } from './modules/products'

class ProductItem extends Component {
  render() {
    const { name } = this.props.product
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link>
      </div>
      <div className='product-item-remove' onClick={() => this.props.removeProduct(name)}>x</div>
      <button type="button" onClick={() => this.props.addVote(this.props.product.name)}>Vote</button>
    </div>
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeProduct,
  addVote
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)