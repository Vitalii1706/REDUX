import store from './store';
import { addProduct, deleteProduct } from './cart.actions';
import { addUser, removeUser } from './user.actions';
import { languageReducer } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'Ed' }));
