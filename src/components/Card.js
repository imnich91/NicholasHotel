import React from 'react';
import Button from 'coreui/lib/components/Button';
import CreateAcct from "../components/CreateAcct";
import { Link } from 'react-router';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: props.cardType,
      visible: props.acctVisible,
      icon: this.setCard()
    };
  }

  setCard = function(){
    switch(this.props.cardType) {
      case "Accounts": return "icon icon-account icon-card-default"
      case "Jobs": return "icon icon-queue-settings icon-card-default"
      case "Schedules": return "icon icon-clock icon-card-default"
    }
  }

  getRoute = function(){
    switch(this.props.cardType) {
      case "Accounts": return 'accounts'
      case "Jobs": return 'jobs'
      case "Schedules": return 'schedule'
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
                  <span className = "card-numbers">
                    {(() => {
                      switch(this.state.cardType) {
                        case 'Accounts': return this.props.accounts.accounts.length;
                        case 'Jobs': return this.props.jobInfo.jobs.length;
                        case 'Schedules': return this.props.scheduleInfo.schedules.length;
                      }
                    })()}
                    </span>
                  <span className = {this.state.cardType}>{this.state.cardType}</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className = "row">
              <div className = "col-xs-6 account-button">
                <CreateAcct style = "btn-link account-button" visible = {this.state.visible}/>
              </div>
              <div className = "col-xs-6 details-button">
                <Link className="btn-link details-button" activeClassName = 'active' to={this.getRoute()}>
                  Details
                  <span className="icon icon-chevron-right"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
