import React from 'react';
import Button from 'coreui/lib/components/Button';


const JobsCard = () => (
  <div className = "JobsCard">
    <div className="card">
      <div className="card-block card-block-jobs">
        <div className = "row">
          <div className = "col-xs-6 jobs-col">
            <span className="icon icon-queue-settings"></span>
          </div>
          <div className = "col-xs-6 jobs-col ">
              <span className = "card-numbers">81</span>
              <span className = "jobs">Jobs</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div>
        <Button className="btn-link details-button">
          Details
          <span className="icon icon-chevron-right"></span>
        </Button>
        </div>
      </div>
    </div>
  </div>
)

export default JobsCard;
