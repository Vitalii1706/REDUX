import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('nd'));
store.dispatch(addProduct({ id: 1, name: 'iPhone 10' }));
store.dispatch(addProduct({ id: 2, name: 'Samsung 20' }));
store.dispatch(addProduct({ id: 3, name: 'Xiaomi 10' }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: 'Ed' }));
store.dispatch(setLanguage('vt'));
store.dispatch(setUser({ name: 'Sem' }));
store.dispatch(removeUser());
