import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducer';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Entry point of the app

// Create and initialize the Redux store
// The reducer (function) is the argument of createStore
// counter comes from reducer.js
let store = createStore(counterReducer);

// Store is a prop of the Provider component
// Provider is the outermost component of the app to help
// ensure that every component every component has access
/// to the Redux store and functionality 
// The <Provider /> makes the Redux store available to any nested 
// components that have been wrapped in the connect() function
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
