"use strict";

const ActionTypes = require('./actionTypes');
import firebase, {fbRef} from '../firebase/index.js';

const moment = require('moment');

import Transaction from '../models/Transaction.js';

// asyncAction boilerplate : This type of function returning action should be used
// when an action couses an asynchorous operation such as db call, with react-thunk middleware of course.

// const asyncActiond = (args) => {
//   return (dispatch, getState) => {
//
//   }
// }

const setSearchText = (searchText) => {
  return {
    type : ActionTypes.SET_SEARCH_TEXT,
    searchText : searchText
  }
}

const addTodo = (todo) => {
  return {
    type : ActionTypes.ADD_TODO,
    todo : todo
  }
}

const addTodos = (todos) => {
  return {
    type : ActionTypes.ADD_TODOS,
    todos : todos
  }
}

const toggleShowCompleted = () => {
  return {
    type : ActionTypes.TOGGLE_SHOW_COMPLETED
  }
}

const updateTodo = (id, updates) => {
  return {
    type : ActionTypes.UPDATE_TODO,
    id : id,
    updates : updates
  }
}

const startAddtodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text: text,
      completed: false,
      createdAt: moment().unix()
    }

    var todoRef = fbRef.child("todos").push(todo);

    todoRef.then(()=> {
      dispatch(addTodo({
        ...todo,
        id : todoRef.key
      }));
    });
  }
}

const startToggleTodo = (id, isCompleted) => {
    return (dispatch, getState) => {
      let todoRef = fbRef.child("todos/"+id);
      let updates = {
        completed : isCompleted,
        completedAd : isCompleted ? moment().unix() : null
      }

      todoRef.update(updates).then(()=>{
        dispatch(updateTodo(id, updates));
      });

    }
  }

const startGetTodos = () => {
  return (dispatch, getState) => {
    const todosRef = fbRef.child("todos");

    todosRef.once("value").then((snapshot) => {
      const todos = snapshot.val() || {};
      let parsedTodos = [];

      Object.keys(todos).forEach((id)=> {
        parsedTodos.push({
          id : id,
          ...todos[id]
        });
      });

      dispatch(addTodos(parsedTodos));

    });

  }
}

const _addTransaction = (transaction ) => {
  return {
    type : "ADD_TRANSACTION",
    transaction : transaction
  }
}

const _addTransactions = (transactions) => {
  return {
    type : "ADD_TRANSACTIONS",
    transactions : transactions
  }
}

const _removeTransaction = (id) => {
  return {
    type : "REMOVE_TRANSACTION",
    id : id
  }
}

module.exports = {
  addTransaction : _addTransaction,
  removeTransaction : _removeTransaction,
  addTransactions : _addTransactions,
  setMonth : (month) => {
    return {
      type : "SET_MONTH",
      month : month
    }
  },
  setYear : (year) => {
    return {
      type : "SET_YEAR",
      year : year
    }
  },
  startGetTransactions : (month, year) => {
    return (dispatch, getState) => {
      const trRef = fbRef.child("transactions");

      trRef.once("value").then((snapshot) => {
        const transactions = snapshot.val() || {};
        let parsedTransactions = [];

        Object.keys(transactions).forEach((id)=> {
          parsedTransactions.push({
            id : id,
            ...transactions[id]
          });
        });

        dispatch(_addTransactions(parsedTransactions));
      });
    }
  },
  startAddTransaction : (trType, description, value) => {
    return (dispatch, getState) => {
      const trRef = fbRef.child("transactions").push(
        Transaction(trType, description, parseFloat(value), null) // id null olarak geçince Firebase veri tabanında id alanı hiç oluşmasyacak!
      );

      trRef.then(function() {
        dispatch(_addTransaction(
            Transaction(trType, description, parseFloat(value), trRef.key)
          )
        );
      });
    }
  },
  startDeleteTransaction : (id) => {
    return (dispatch, getState) => {
      const trRef = fbRef.child("transactions/"+ id).remove();
      trRef.then(()=> {
        dispatch(_removeTransaction(id));
      });
    }
  }
}
