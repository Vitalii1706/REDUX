import React from 'react';
import Users from './users/Users.jsx';
import { Provider } from 'react-redux';
// import Counter from './counter/Counter.jsx';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
