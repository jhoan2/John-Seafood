import { combineReducers } from 'redux'
import cartReducer from '../reducers/cart/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;