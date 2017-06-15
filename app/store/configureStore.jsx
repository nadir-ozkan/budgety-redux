"use strict";

const redux = require('redux');
import thunk from 'redux-thunk';

const { reducer } = require('../reducers/reducers.jsx');

let configure = () => {


  let store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

module.exports = {
  configure : configure
}
