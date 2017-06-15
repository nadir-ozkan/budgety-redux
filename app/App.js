import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import BudgetyApp from './components/BudgetyApp.jsx';
import LoginPage from './components/LoginPage.jsx';

const actions = require('./actions/actions.jsx');
const store = require('./store/configureStore.jsx').configure();

// import './poc/firebase/index.js'; //  Bu kod satırı firebase denemelerini çalıştırır.

store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch(actions.addTodo("Kediyi gezdir."));

render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="app" component={BudgetyApp}></Route>
        <IndexRoute component={BudgetyApp}></IndexRoute> // Daha sonra login sayfasına yönlendirecek.
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root'));
