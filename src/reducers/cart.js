import { ADD_TO_CART } from '../constants/ActionTypes';

// i got everything working, but I do not understand how to add items into the cart. might have to watch that youtube video first 
const reducer = (state, action) => {
  console.log(state)
  if (action.type === ADD_TO_CART) {
    return {...state.cart, action}
  }
}
export default reducer;