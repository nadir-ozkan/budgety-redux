"use strict";

const redux = require('redux');
import thunk from 'redux-thunk';

const { searchTextReducer, todosReducer, showCompletedReducer} = require('../reducers/reducers.jsx');

let configure = () => {

  let reducer = redux.combineReducers({
    searchText : searchTextReducer,
    todos : todosReducer,
    showCompleted : showCompletedReducer
  });

  let store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

module.exports = {
  configure : configure
}
