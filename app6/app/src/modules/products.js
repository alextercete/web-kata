import 'whatwg-fetch'

export const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED'
export const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED'
export const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED'
export const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED'

const initialState = {
    inProgress: false,
    products:[]
  }

export default (state = initialState, action) => {
    switch (action.type) {
      case PRODUCTS_REQUESTED:
        return {
          ...state,
          inProgress: true
        }
      case PRODUCTS_COMPLETED:
        return {
          ...state,
          inProgress: false,
          products: action.payload.products
        }
      case PRODUCT_ADD_REQUESTED:
        return {
            ...state,
            inProgress: true
        }
      case PRODUCT_ADD_COMPLETED:
        return {
          ...state,
          inProgress: false,
          products: action.payload.products
        }
      default:
        return state
    }
  }
  
  export const fetchProducts = () => {
    return dispatch => {
      dispatch({ type: PRODUCTS_REQUESTED })
      const url = '/api/products/get'
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      }).then(response => {
        return response.json()
      }).then(json => {
        dispatch({
          type: PRODUCTS_COMPLETED,
          payload: { products: json }
        })
      })
    }
  }

  export const addProduct = (newProduct) => {
    return dispatch => {
      dispatch({ type: PRODUCT_ADD_REQUESTED })
      const url = '/api/products/add'
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(newProduct)
      }).then(response => {
        return response.json()
      }).then(json => {
        dispatch({
          type: PRODUCT_ADD_COMPLETED,
          payload: { products: json }
        })
      })
    }
  }
