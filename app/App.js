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

firebase.auth().onAuthStateChanged((user)=>{
  if (user) { // there is a logged in user
    console.log("User logged in. ", user);
  } else {// user logged out.
    console.log("User logged out.");
  }
});

store.subscribe(() => {
  //console.log(store.getState());
});

// İleride ay ve yıla göre ilgili işlem listesi getirilebilecek.
store.dispatch(actions.startGetTransactions(5,2011));



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
