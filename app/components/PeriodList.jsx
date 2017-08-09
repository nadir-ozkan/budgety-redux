import React from 'react';

class PeriodList extends React.Component {
  renderList(){
    const {periodList, dispatch} = this.props;
    if (periodList){
      return periodList.map((period, idx)=>{
        return <p key={"period_"+idx}>{period}</p>
      });
    } else {
      return <p>There is no period to display!</p>;
    }
  }
  render(){
    return(
      <div>
        {this.renderList()}
      </div>
    );
  }

}

export default PeriodList;
