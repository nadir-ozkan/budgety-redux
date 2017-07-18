import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
import {connect} from 'react-redux';

import AppHeader from './AppHeader.jsx';
import AddTransaction from './AddTransaction.jsx';
import TransactionsList from './TransactionsList.jsx';
import ModalDialog from './ModalDialog.jsx';
import Credits from './Credits.jsx';

import actions from '../actions/actions.jsx';

class BudgetyApp extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateTotal(type){
    return this.props.list.reduce(function incomeCalculater(currentTotal, transaction) {
      if (transaction.type === type){
        return currentTotal + transaction.value
      } else {
        return currentTotal;
      }
    },0);
  }

  showCredits(){
    const {dispatch} = this.props;
    dispatch(actions.showModal("Credits","Coded by Nadir Özkan",<Credits></Credits>));
  }

  componentDidMount(){
    this.showCredits();
  }

  render(){
    const totalIncome = this.calculateTotal("income");
    const {modalDialogInfo} = this.props;
    return(
      <div>
        <AppHeader totalIncome = {totalIncome} totalExpense ={this.calculateTotal("expense")}></AppHeader>
        <div className="bottom">
            <AddTransaction></AddTransaction>
            <TransactionsList totalIncome = {totalIncome}></TransactionsList>
        </div>
        <ModalDialog dispatch={this.props.dispatch} modalDialogInfo={modalDialogInfo}></ModalDialog>
      </div>
    );

  }

}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
    modalDialogInfo : state.modalDialogInfo
  }
};

export default connect(mapStateToProps)(BudgetyApp);
