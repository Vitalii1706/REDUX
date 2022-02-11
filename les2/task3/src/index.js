import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 1, name: 'Ed' }));
store.dispatch(addUser({ id: 2, name: 'Sem' }));
store.dispatch(addUser({ id: 3, name: 'Ted' }));

store.dispatch(deleteUser(3));

const usersList = store.getState();
console.log(usersList);
