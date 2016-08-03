import React from 'react';
import Button from 'coreui/lib/components/Button';
import CreateAcct from "../components/CreateAcct";

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

  setCard = function(){
    if(this.props.cardType === "Accounts"){
      return "icon icon-account icon-account-card"
    } else{
      return "icon icon-queue-settings"
    }
  }

  render(){
    return(
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <div className="card">
          <div className="card-block">
            <div className = "row">
              <div className = "col-xs-6">

                <span className= {this.state.icon}></span>
              </div>
              <div className = "col-xs-6">
                  <span className = "card-numbers">{this.state.cardType === 'Accounts' ? this.props.accounts.accounts.length : this.props.jobInfo.jobs.length}</span>
                  <span className = {this.state.cardType}>{this.state.cardType}</span>
                  <span className = {this.state.label}>{this.state.status}</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className = "row">
              <div className = "col-xs-6 account-button">
                <CreateAcct style = "btn-link account-button" visible = {this.state.visible}/>
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
