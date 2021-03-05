import { ADD_TO_CART, REMOVE_FROM_CART, GET_TOTAL } from '../../constants/ActionTypes';
import products from '../../products';

const INITIAL_STATE = { 
  products,
  cart: [],
  total: 0
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
      let tempCart = []
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id)
      }
      else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {...item, amount: item.amount - 1}
          }
          return item
        })
      }
      return { ...state, cart: tempCart}
    case GET_TOTAL:
      let { total } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal
        return cartTotal
      }, { total: 0 });
      return {
        ...state, 
        total
      }
    default: 
      return state
  }
}

export default cartReducer;
