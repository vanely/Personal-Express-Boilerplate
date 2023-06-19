import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// the @reduxjs/toolkit allows for the creation of reducers(state update) and action creators(state updater) in one place
import { configureStore } from '@reduxjs/toolkit'; 
import chats from './reducers/chat'
import users from './reducers/users'
import jobs from './reducers/jobs'

import App from './App';

export const store = configureStore({
  reducer: {
    Chats: chats.reducer,
    Users: users.reducer,
    Jobs: jobs.reducer,
  },
});

// https://stackoverflow.com/questions/63520680/argument-of-type-htmlelement-null-is-not-assignable-to-parameter-of-type-el
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
