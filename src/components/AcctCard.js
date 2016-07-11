import React from 'react';
import Button from 'coreui/lib/components/Button';


const AcctCard = (props) => (
  <div className = "AcctCard">
    <div className="card">
      <div className="card-block">
        <div className = "row">
          <div className = "col-xs-6">
            <span className="icon icon-account"></span>
          </div>
          <div className = "col-xs-6 ">
              <span className = "card-numbers">81</span>
              <span className = "accounts">Accounts</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className = "row">
        <div className = "col-xs-6 ">
          <Button className="btn-link acct-button">
            <span className="icon icon-plus"></span>
            New Account
          </Button>
        </div>
          <div className = "col-xs-6">
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

export default AcctCard;
