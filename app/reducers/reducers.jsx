"use strict";

const ActionTypes = require('../actions/actionTypes.js');
const uuid = require('node-uuid');
const moment = require('moment');

let searchTextReducer = (searchText = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TEXT:
      return action.searchText;
    default:
      return searchText;
  }
}

let showCompletedReducer = (showCompleted = false, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SHOW_COMPLETED:
      return !showCompleted;
    default:
      return showCompleted;
  }
}

let todosReducer = (todos = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...todos,
        action.todo
      ];
    case ActionTypes.ADD_TODOS:
      return [
        ...action.todos
      ];
    case ActionTypes.UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id == action.id) {
          return {
            ...todo,
            ...action.updates
          }
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
}

module.exports = {
  searchTextReducer: searchTextReducer,
  showCompletedReducer: showCompletedReducer,
  todosReducer: todosReducer
}
