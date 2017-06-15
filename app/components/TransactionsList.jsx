import React from 'react';

import IncomeItem from './IncomeItem.jsx';
import ExpenseItem from './ExpenseItem.jsx';

class TransactionsList extends React.Component {
  constructor(props) {
    super(props); // TotalIncome, List
  }

  render(){
    return(
      <div className="container clearfix">

          <div className="income">
              <h2 className="icome__title">Income</h2>

              <div className="income__list">
                <IncomeItem description="Maaş" value="7000"></IncomeItem>
              </div>

          </div>

          <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>

              <div className="expenses__list">
                <ExpenseItem description="Kira" value="1000" totalIncome="10000"></ExpenseItem>
              </div>

          </div>

      </div>
    );
  }
}

export default TransactionsList;
