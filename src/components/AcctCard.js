import React from 'react';
import Button from 'coreui/lib/components/Button';


const AcctCard = (props) => (
  <div className = "AcctCard">
    <div className="card">
      <div className="card-block">
        <div className = "row">
          <div className = "col-xs-3 account-card-width">
            <span className="icon icon-account icon-account-card"></span>
          </div>
          <div className = "col-xs-9 text-right">
              <span className = "card-numbers">81</span>
              <span className = "accounts">Accounts</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className = "row">
          <div className = "col-xs-6 account-button">
            <Button className="btn-link account-button">
              <span className="icon icon-plus"></span>
              New Account
            </Button>
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

export default AcctCard;
