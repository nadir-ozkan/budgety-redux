import React from 'react';

class Expense extends React.Component {
  constructor(props) {
    super(props);
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
                  <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
              </div>
          </div>
      </div>
    );
  }
}

export default Expense;
