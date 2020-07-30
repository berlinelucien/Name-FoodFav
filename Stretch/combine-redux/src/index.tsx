import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import cakeReducer from "./redux/cakereducer";
import icecreamReducer from "./redux/icecreamreducer";

const rootReducer = combineReducers({
  cake: cakeReducer, 
  icecream: icecreamReducer
})

let store = createStore(rootReducer);

console.log("STORE");
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
