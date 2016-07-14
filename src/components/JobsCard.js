import React from 'react';
import Button from 'coreui/lib/components/Button';

class JobsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status
    };
  }

  render(){
    return(
      <div className = "JobsCard">
        <div className="card">
          <div className="card-block">
            <div className = "row">
              <div className = "col-xs-6 jobs-col">
                <span className="icon icon-queue-settings"></span>
              </div>
              <div className = "col-xs-6 jobs-col ">
                  <span className = "card-numbers">81</span>
                  <span className = "jobs">Jobs</span>
                  <span className = "status-label">{this.state.status}</span>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className = "row">
              <div className = "col-xs-12 details-button">
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

export default JobsCard;
