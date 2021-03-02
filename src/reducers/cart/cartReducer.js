import { ADD_TO_CART, REMOVE_FROM_CART, GET_TOTAL } from '../../constants/ActionTypes';
import products from '../../products';

const INITIAL_STATE = { 
  products,
  cart: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      let item = state.products.find((item) => item.id === action.payload.id)
      const inCart = state.cart.find((item) => item.id === action.payload.id) ? true : false
      return {
        ...state,
        cart: inCart ? state.cart.map((item) => item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item) : [ ...state.cart, {...item, amount: 1}],
            }
    case REMOVE_FROM_CART:
      return {}
    case GET_TOTAL:
      return {}
    default: 
      return state
  }
}

export default cartReducer;