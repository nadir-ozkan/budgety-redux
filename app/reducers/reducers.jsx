"use strict";

const ActionTypes = require('../actions/actionTypes.js');
const uuid = require('node-uuid');
const moment = require('moment');

const d = new Date();

const defaultState = {
  list : [],
  month : d.getMonth(),
  year : d.getFullYear(),
  modalDialogInfo : {
    headerText : "",
    footerText : "",
    content : null,
    isShowing : false
  },
  user : "test",
  periodList : []
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MONTH":
      return {
        ...state,
        month : action.month
      }
    case "SET_YEAR":
      return {
        ...state,
        year : action.year
      }
    case "ADD_TRANSACTION":
      return {
        ...state,
        list : [
          ...state.list,
          action.transaction
        ]
      }
    case "ADD_TRANSACTIONS":
        return {
          ...state,
          list : [...action.transactions]
        }
    case "REMOVE_TRANSACTION":
      return {
        ...state,
        list : state.list.filter(item => item.id != action.id )
      }
    case "SHOW_MODAL":
      return {
        ...state,
        modalDialogInfo : action.modalDialogInfo
      }
    case "HIDE_MODAL":
      return {
        ...state,
        modalDialogInfo : action.modalDialogInfo
      }
    case "SET_USER":
      return {
        ...state,
        user : action.user
      }
    case "SET_PERIOD_LIST":
      return {
        ...state,
        periodList : action.periodList
      }
    default:
      return state;
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
