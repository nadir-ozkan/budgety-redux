import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions/actions.jsx';

class IncomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    this.props.dispatch(actions.startDeleteTransaction(this.props.id));
  }

  render(){
    const {description, value, id} = this.props;
    return(
      <div className="item clearfix" id={id} >
          <div className="item__description">{description}</div>
          <div className="right clearfix">
              <div className="item__value">+ {value}</div>
              <div className="item__delete">
                  <button className="item__delete--btn" onClick={this.handleClick.bind(this)}><i className="ion-ios-close-outline"></i></button>
              </div>
          </div>
      </div>
    );
  }
}

export default connect()(IncomeItem);
