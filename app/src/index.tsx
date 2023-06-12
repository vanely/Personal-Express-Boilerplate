import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'; 
// import thunk from 'redux-thunk';
// may not need thunk: https://medium.com/@ozantekindev/async-operations-in-redux-with-the-redux-toolkit-thunk-e7d024cbf875
import App from './App'

export const store = configureStore({
  reducer: {
    // reducer exports
  },
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)