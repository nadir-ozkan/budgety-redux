import React from 'react';

import actions from '../actions/actions.jsx';

class PeriodList extends React.Component {

  handleClick(e){
    const {dispatch} = this.props;
    e.stopPropagation();
    if (e.target.className === "period-row"){
      const period = e.target.textContent;
      const periodArr = period.split("_");
      const month = parseInt(periodArr[0]) - 1;
      const year = parseInt(periodArr[1]);
      dispatch(actions.startGetTransactions(month,year));
      dispatch(actions.hideModal());
    }
  }

  renderList(){
    const {periodList, dispatch} = this.props;
    if (periodList){
      return periodList.map((period, idx)=>{
        return <p className="period-row" key={"period_"+idx}>{period}</p>
      });
    } else {
      return <p>There is no period to display!</p>;
    }
  }
  render(){
    return(
      <div className="period-list" onClick={this.handleClick.bind(this)}>
        {this.renderList()}
      </div>
    );
  }

}

export default PeriodList;
