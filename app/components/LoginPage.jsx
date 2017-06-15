import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const divStyle = {
      width : "300px",
      height : "200px",
      backgroundColor : "lightskyblue",
      textAlign : "center",
      marginLeft : "auto",
      marginRight : "auto"
    }
    return(
      <div style ={divStyle}>
        <div style = {{paddingTop : "60px"}}>
          <p>Login With GitHub Account</p>
          <button>Login</button>
        </div>
      </div>
    );
  }

}

export default LoginPage;
