import { createStore, combineReducers } from 'redux';
import { lenduageReducer } from './language.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const appReducer = combineReducers({
  language: lenduageReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
