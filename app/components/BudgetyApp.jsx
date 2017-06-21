import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import {connect} from 'react-redux';

import AppHeader from './AppHeader.jsx';
import AddTransaction from './AddTransaction.jsx';
import TransactionsList from './TransactionsList.jsx';

class BudgetyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateTotal(type){
    return this.props.list.reduce(function incomeCalculater(currentTotal, transaction) {
      if (transaction.type === type){
        return currentTotal + transaction.value
      } else {
        return currentTotal;
      }
    },0);
  }

  render(){
    const totalIncome = this.calculateTotal("income");
    return(
      <div>
        <AppHeader totalIncome = {totalIncome} totalExpense ={this.calculateTotal("expense")}></AppHeader>
        <div className="bottom">
            <AddTransaction></AddTransaction>
            <TransactionsList totalIncome = {totalIncome}></TransactionsList>
        </div>
      </div>
    );

  }

}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list
  }
};

export default connect(mapStateToProps)(BudgetyApp);
