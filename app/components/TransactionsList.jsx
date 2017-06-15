import React from 'react';

import IncomeItem from './IncomeItem.jsx';
import ExpenseItem from './ExpenseItem.jsx';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props); // TotalIncome, List
  }

  renderList(type){
    const {list, totalIncome} = this.props;
    return list.map(function (item) {
      if (item.type === type){
        return type === "income" ?
          <IncomeItem {...item} key={item.id}></IncomeItem> :
          <ExpenseItem {...item} key={item.id} totalIncome={totalIncome}></ExpenseItem>
      } else {
        return null;
      }
    });
  }

  render(){
    return(
      <div className="container clearfix">

          <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">
                {this.renderList("income")}
              </div>
          </div>

          <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">
                {this.renderList("expense")}
              </div>
          </div>

      </div>
    );
  }
}

export default TransactionsList;
