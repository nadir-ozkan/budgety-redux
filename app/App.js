import React, { Component } from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
const moment = require('moment');
const uuid = require('node-uuid');

import BudgetyApp from './components/BudgetyApp.jsx';
import LoginPage from './components/LoginPage.jsx';

const actions = require('./actions/actions.jsx');
const store = require('./store/configureStore.jsx').configure();

import Transaction from './models/Transaction.js';
import firebase from './firebase/index.js';

// import './poc/firebase/index.js'; //  Bu kod satırı firebase denemelerini çalıştırır.

//import './poc/eloquentJs/higherOrder.js';

const updateUser = (user) => {
  return new Promise(function(resolve, reject) {
    store.dispatch(actions.setUser(user));
    setTimeout(function () {
      resolve(user);
    },1);
  });
}

firebase.auth().onAuthStateChanged((user)=>{
  if (user) { // there is a logged in user
    console.log("User logged in. ", user);
    updateUser(user.uid)
      .then((user)=> {
        store.dispatch(actions.startGetTransactions());
      });
  } else {// user logged out.
    console.log("User logged out.");
    updateUser("test")
      .then((user)=> {
        store.dispatch(actions.startGetTransactions());
      });
  }

});

store.subscribe(() => {
  //console.log(store.getState());
});

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
