import React from 'react';

import actions from '../actions/actions.jsx';

class ModalDialog extends React.Component {

  handleClose(){
    //document.getElementById('myModal').style.display = "none";
    this.props.dispatch(actions.hideModal());
  }

  render(){
    const {modalDialogInfo} = this.props;
    const modalStyle = {};

    modalStyle.display = modalDialogInfo.isShowing ? "block" : "none";

    return (
      <div id="myModal" className="modal" style={modalStyle} >

        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.handleClose.bind(this)}>&times;</span>
            <h2>{modalDialogInfo.headerText}</h2>
          </div>
          <div className="modal-body">
            {modalDialogInfo.content}
            {this.props.children}
          </div>
          <div className="modal-footer">
            <h3>{modalDialogInfo.footerText}</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default ModalDialog;
