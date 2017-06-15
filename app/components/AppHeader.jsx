import React from 'react';

class AppHeader extends React.Component {
  constructor(props) {
    super(props); // month, year, income, expense
  }

  render(){
    const {month, year, totalIncome, totalExpense} = this.props;
    const calculatePercentage = () => {
      return Math.round(parseFloat(totalExpense) / parseFloat(totalIncome) * 100);
    }
    const calculateBalance = () => {
      const balance = totalIncome - totalExpense;
      const sign = balance > 0 ? "+" : balance < 0 ? "-"  : " ";
      return sign + " " + balance.toString();
    }
    return(
      <div className="top">
          <div className="budget">
              <div className="budget__title">
                  Available Budget in <span className="budget__title--month">{month + " " +year}</span>:
              </div>

              <div className="budget__value">{calculateBalance()}</div>

              <div className="budget__income clearfix">
                  <div className="budget__income--text">Income</div>
                  <div className="right">
                      <div className="budget__income--value">+ {totalIncome}</div>
                      <div className="budget__income--percentage">&nbsp;</div>
                  </div>
              </div>

              <div className="budget__expenses clearfix">
                  <div className="budget__expenses--text">Expenses</div>
                  <div className="right clearfix">
                      <div className="budget__expenses--value">- {totalExpense} </div>
                      <div className="budget__expenses--percentage">{calculatePercentage()}%</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default AppHeader;
