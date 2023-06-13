import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { applyMiddleware } from 'redux';
// the @reduxjs/toolkit allows for the creation of reducers(state update) and action creators(state updater) in one place
import { configureStore } from '@reduxjs/toolkit'; 
// import thunk from 'redux-thunk';
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