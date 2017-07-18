import React from 'react';
import {connect} from 'react-redux';

import Utils from './Utils.js';
import actions from '../actions/actions.jsx';

import LoginPage from './LoginPage.jsx';
import Credits from './Credits.jsx';

class AppHeader extends React.Component {
  constructor(props) {
    super(props); // income, expense
  }

  showCredits(e){
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(actions.showModal("Credits","Coded by Nadir Özkan",<Credits></Credits>));
  }

  showLoginPage(e){
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(actions.showModal("Credits","Coded by Nadir Özkan",<LoginPage></LoginPage>));
  }

  render(){
    const {month, year, totalIncome, totalExpense} = this.props;
    const calculatePercentage = () => {
      if (totalIncome === 0) return "---";
      return Math.round(parseFloat(totalExpense) / parseFloat(totalIncome) * 100) + "%";
    }
    const calculateBalance = () => {
      const balance = totalIncome - totalExpense;
      const sign = balance > 0 ? "+" : balance < 0 ? "-"  : " ";
      return sign + " " + Math.abs(balance).toString();
    }
    return(
      <div className="top">
          <div id="top-bar">
            <a id="rulesAndCredits" href="#" onClick={this.showCredits.bind(this)}>Rules & Credits</a>
            <a id="loginLink" href="#" onClick={this.showLoginPage.bind(this)}>Login</a>
          </div>
          <div className="budget">
              <div className="budget__title">
                  Available Budget in <span className="budget__title--month">{Utils.date.getMonthName(month) + " " +year}</span>
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
                      <div className="budget__expenses--percentage">{calculatePercentage()}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    month: state.month,
    year : state.year,
  }
};

export default connect(mapStateToProps)(AppHeader);
