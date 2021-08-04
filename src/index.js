import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
window.store = store;
// const { dispatch } = store;

//const { incAC, decAC, randAC } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
