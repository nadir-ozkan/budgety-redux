import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import AppHeader from './AppHeader.jsx';
import AddTransaction from './AddTransaction.jsx';
import TransactionsList from './TransactionsList.jsx';

class BudgetyApp extends React.Component {
  constructor(props) {
    super(props);
    var d = new Date();
    this.list = [
      {type:"income", value:1000, description : "Proje", createdAt : moment().unix(), id : uuid()},
      {type:"income", value:2000, description : "Kira Geliri", createdAt : moment().unix() + 100, id : uuid() },
      {type:"income", value:5000, description : "Maaş", createdAt : moment().unix() + 200, id : uuid()},
      {type:"expense", value:1000, description : "Yol harcaması", createdAt : moment().unix() + 300, id : uuid()},
      {type:"expense", value:20, description : "Öğlen yemeği", createdAt : moment().unix() + 400, id : uuid()},
      {type:"expense", value:70, description : "Pazar parası", createdAt : moment().unix() + 500, id : uuid()},
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
    const totalIncome = this.calculateTotal("income");
    return(
      <div>
        <AppHeader month="Haziran" year="2017" totalIncome = {totalIncome} totalExpense ={this.calculateTotal("expense")}></AppHeader>
        <div className="bottom">
            <AddTransaction></AddTransaction>
            <TransactionsList list={this.list} totalIncome = {totalIncome}></TransactionsList>
        </div>
      </div>
    );

  }

}

export default BudgetyApp;
