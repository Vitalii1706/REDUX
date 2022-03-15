import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import userReducer from './user.reducer';
import productReducer from './cart.reduser';

const appReducer = combineReducers({
  language: languageReducer,
  product: productReducer,
  user: userReducer,
});

const store = createStore(appReducer);

export default store;
