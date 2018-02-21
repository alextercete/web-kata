
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import products from './products'
import versions from './versions'

export default combineReducers({
  routing: routerReducer,
  versions, products
})