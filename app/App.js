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

// import './poc/firebase/index.js'; //  Bu kod satırı firebase denemelerini çalıştırır.

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(actions.addTransactions( [
  {type:"income", value:1000, description : "Proje", createdAt : moment().unix(), id : "1"},
  {type:"income", value:2000, description : "Kira Geliri", createdAt : moment().unix() + 100, id : "2" },
  {type:"income", value:5000, description : "Maaş", createdAt : moment().unix() + 200, id : uuid()},
  {type:"expense", value:1000, description : "Yol harcaması", createdAt : moment().unix() + 300, id : uuid()},
  {type:"expense", value:20, description : "Öğlen yemeği", createdAt : moment().unix() + 400, id : uuid()},
  {type:"expense", value:70, description : "Pazar parası", createdAt : moment().unix() + 500, id : uuid()},
]));

store.dispatch(actions.addTransaction("income", "Maaş2", 10000));
store.dispatch(actions.removeTransaction("2"));

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
