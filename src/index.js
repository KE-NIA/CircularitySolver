import {render} from "react-dom";
import App from './components/App';
import React, { Component } from 'react';
//REDUX KRAM
import { Provider, connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import configureStore from './store/configureStore';
import {initWebSocket} from './middleware/sensorSocketMW'

//create and configure store
const store = configureStore();
initWebSocket(store);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('App')
);
