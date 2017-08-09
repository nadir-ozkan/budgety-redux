import React from 'react';
import {connect} from 'react-redux';

import Utils from './Utils.js';
import actions from '../actions/actions.jsx';

import LoginPage from './LoginPage.jsx';
import Credits from './Credits.jsx';
import PeriodList from './PeriodList.jsx';

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
    const anchorText = e.target.textContent;
    const {dispatch} = this.props;
    if (anchorText == "Login") {
      dispatch(actions.startLogin());
    } else {
      dispatch(actions.startLogout());
    }
  }

  showPeriodList(e){
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch(actions.showModal("Period List", "Chose a period to show transactions.",
                                <PeriodList
                                  dispatch={this.props.dispatch}
                                  periodList = {this.props.periodList}
                                >
                                </PeriodList>));
  }

  getLoginWord(){
    const {user} = this.props;
    if (user && user == "test"){
      return "Login";
    } else {
      return "Logout";
    }
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
            <a id="loginLink" href="#" onClick={this.showLoginPage.bind(this)}>{this.getLoginWord()}</a>
          </div>
          <div className="budget">
              <div className="budget__title">
                  Available Budget in <span
                    className="budget__title--month"
                    onClick= {this.showPeriodList.bind(this)}
                    >
                    {Utils.date.getMonthName(month) + " " +year}
                  </span>
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
    user : state.user,
    periodList : state.periodList
  }
};

export default connect(mapStateToProps)(AppHeader);
