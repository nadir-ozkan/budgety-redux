import React from 'react';

class IncomeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {description, value, id} = this.props;
    return(
      <div className="item clearfix" id={id} >
          <div className="item__description">{description}</div>
          <div className="right clearfix">
              <div className="item__value">+ {value}</div>
              <div className="item__delete">
                  <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
              </div>
          </div>
      </div>
    );
  }
}

export default IncomeItem;
