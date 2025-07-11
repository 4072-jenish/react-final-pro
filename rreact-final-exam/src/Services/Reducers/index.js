import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  cart: cartReducer,
  filters: filterReducer
});

export default rootReducer;
