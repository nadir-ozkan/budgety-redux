import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions/actions.jsx';
import Transaction from '../models/Transaction.js';

class AddTransaction extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(){
    if (this.refs.Ref_Description.value.trim() === "") {
      alert("Please enter a description.");
      return;
    }
    if (this.refs.Ref_Value.value.trim() === ""){
      alert("Please enter a value.");
      return;
    }
    this.props.dispatch(actions.startAddTransaction(
      this.refs.Ref_Type.value === "inc" ? "income" : "expense",
      this.refs.Ref_Description.value,
      parseFloat(this.refs.Ref_Value.value))
    );
    this.refs.Ref_Description.value = "";
    this.refs.Ref_Value.value = "";
  }

  handleKeyPress(e){
    if (e.which == 13) this.handleClick();
  }

  render(){
    return(
      <div className="add" onKeyPress={this.handleKeyPress.bind(this)}>
          <div className="add__container">
              <select className="add__type" ref = "Ref_Type">
                  <option value="inc" selected>+</option>
                  <option value="exp">-</option>
              </select>
              <input ref = "Ref_Description" type="text" className="add__description" placeholder="Add description"></input>
              <input ref = "Ref_Value" type="number" className="add__value" placeholder="Value"></input>
              <button className="add__btn" onClick={this.handleClick.bind(this)}><i className="ion-ios-checkmark-outline"></i></button>
          </div>
      </div>
    );
  }
}

export default connect()(AddTransaction);
