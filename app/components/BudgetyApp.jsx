import React from 'react';

import AppHeader from './AppHeader.jsx';
import AddTransaction from './AddTransaction.jsx';
import TransactionsList from './TransactionsList.jsx';


class BudgetyApp extends React.Component {
  constructor(props) {
    super(props);
    this.list = [
      {type:"income", value:100},
      {type:"income", value:2000},
      {type:"income", value:50},
      {type:"expense", value:10},
      {type:"expense", value:20},
      {type:"expense", value:70},
    ]
  }

  calculateTotal(type){
    return this.list.reduce(function incomeCalculater(currentTotal, transaction) {
      if (transaction.type === type){
        return currentTotal + transaction.value
      } else {
        return currentTotal;
      }
    },0);
  }

  render(){
    return(
      <div>
        <AppHeader month="Haziran" year="2017" totalIncome = {this.calculateTotal("income")} totalExpense ={this.calculateTotal("expense")}></AppHeader>
        <div className="bottom">
            <AddTransaction></AddTransaction>
            <TransactionsList list={this.list}></TransactionsList>
        </div>
      </div>
    );

  }

}

export default BudgetyApp;
