import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions/actions.jsx';

class Expense extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.dispatch(actions.startDeleteTransaction(this.props.id));
  }

  render(){
    const {description, value, totalIncome, id} = this.props;
    const calculatePercentage = () => {
      return Math.round((parseFloat(value) / parseFloat(totalIncome))*100);
    }
    return(
      <div className="item clearfix" id={id}>
          <div className="item__description">{description}</div>
          <div className="right clearfix">
              <div className="item__value">- {value}</div>
              <div className="item__percentage">{calculatePercentage()}%</div>
              <div className="item__delete">
                  <button className="item__delete--btn" onClick={this.handleClick.bind(this)}><i className="ion-ios-close-outline"></i></button>
              </div>
          </div>
      </div>
    );
  }
}

export default connect()(Expense);
