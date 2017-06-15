import React from 'react';

class PictureLoader extends React.Component {

  constructor(){
    super();
    this.state = {
      src : "none",
      isLoading : false,
    }

    this.setImageUrl = (src, isLoading) => {
      this.props.loadingMessageUpdater(isLoading ? "Resim yüklenirken lütfen bekleyiniz..." : "");
      return {
        isLoading : isLoading,
        src : src
      }
    }
  }

  renderImage (){
    if (this.state.src == "none"){
      return <img style = {{margin : "10px"}} src={require("../../images/inek_saban.jpg")}></img>
    } else {
      return <img style= {{margin : "10px"}} src = {this.state.src}></img>
    }
  }

  handleButtonClick(){
    this.setState(this.setImageUrl("", true));
      const randomUserUrl = "https://randomuser.me/api/"
         $.getJSON(randomUserUrl).done((data) => {
           this.setState(this.setImageUrl(data.results[0].picture.large, false));
         });
  }

  render(){
    return(
      <div>
        {this.renderImage()}
        <div>
          <button onClick={this.handleButtonClick.bind(this)}>Rastgele Kullanıcı Bul</button>
        </div>
      </div>
    );
  }
}

export default PictureLoader;
