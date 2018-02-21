import 'whatwg-fetch'

export const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED'
export const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED'
export const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED'
export const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED'
export const PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED'
export const PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED'

const initialState = { products: [] }


export default (state = initialState, action) => {
        switch(action.type) {
            case PRODUCTS_REQUESTED:
                return {
                    ...state
                }
            case PRODUCTS_COMPLETED:
                return {
                    ...state,
                    products: action.payload.products
                }
            case PRODUCT_ADD_REQUESTED:
                return {
                    ...state
                }
            case PRODUCT_ADD_COMPLETED:
                return {
                    ...state,
                    products: action.payload.products
                }
            case PRODUCT_REMOVE_COMPLETED:
                return {
                    ...state,
                    products: action.payload.products
                }
            case PRODUCT_REMOVE_REQUESTED:
                return {
                    ...state
                }    
            default:
                return state
        }
    }
  
export const fetchProducts= () => {
    return dispatch => {
        dispatch({ type: PRODUCTS_REQUESTED})
        fetch('/api/products/get',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
          }).then(r => {
            return r.json()
          }).then(json => {
              console.log(json)
        dispatch({ type: PRODUCTS_COMPLETED, payload: {products: json} })
     })
    }
}

export const removeProduct = product => {
    return dispatch => {
        dispatch({ type: PRODUCT_REMOVE_REQUESTED })
        fetch(`/api/products/delete/${product}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
        }).then(r => {
        return r.json()
        }).then(json => {
            dispatch({ type: PRODUCT_REMOVE_COMPLETED , payload: {products: json}})
        })
     } 
}

export const addProduct = product => {
    return dispatch => {
        dispatch({type: PRODUCT_ADD_REQUESTED })
        fetch('/api/products/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify(product)
          }).then(r => {
            return r.json()
          }).then(json => {
              dispatch({ type: PRODUCT_ADD_COMPLETED, payload:  { products: json }})
          })
    }
}