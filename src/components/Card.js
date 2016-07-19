import React from 'react';
import Button from 'coreui/lib/components/Button';
import ModalExample from '../examples/ModalExample';
import AcctModal from "../components/AcctModal";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      cardType: props.cardType,
      label: props.label,
      visible: props.acctVisible,
      icon: this.setCard()
    };
  }

  handleClick = function(){
    console.log("HI");
  }

  setCard = function(){
    if(this.props.cardType === "Accounts"){
      visible: "makeVis"
      return "icon icon-account icon-account-card"
    } else{
      visible: "hideVis"
      return "icon icon-queue-settings"
    }
  }

  render(){
    return(
      <div>
        <div className="card">
          <div className="card-block">
            <div className = "row">
              <div className = "col-xs-6">

                <span className= {this.state.icon}></span>
              </div>
              <div className = "col-xs-6">
                  <span className = "card-numbers">81</span>
                  <span className = {this.state.cardType}>{this.state.cardType}</span>
                  <span className = {this.state.label}>{this.state.status}</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className = "row">
              <div className = "col-xs-6 account-button">
                <AcctModal style = "btn-link account-button" visible = {this.state.visible}/>
              </div>
              <div className = "col-xs-6 details-button">
                <Button className="btn-link details-button">
                  Details
                  <span className="icon icon-chevron-right"></span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
