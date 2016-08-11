import React from 'react';
import Button from 'coreui/lib/components/Button';
import Modal from 'coreui/lib/components/Modal';

export const DltAcctModal = (props) => (
  <Modal onHide={() => props.action(props.data)}>
    <div className = "modal-content">
      <div className = "modal-header">
        <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {() => props.action(props.data)}>
          <span className = "icon icon-close exit-style"></span>
        </Button>
        <h1 className = "modal-header-style">
          <span className = "icon icon-alert-circle icon-danger-style"></span>
          Delete Account
        </h1>
      </div>
      <div>
        <div className = "row">
            <div className = "col-xs-12 col-sm-12 col-lg-12 modal-body-pad">
              <p className = "dlt-acct-msg pad-dlt-msg">This account will be permanently removed.
                                            Are you sure you want to proceed?
              </p>
          </div>
        </div>
      </div>
      <div className = "modal-footer text-xs-right">
        <Button className = "btn btn-link" onClick = {() => props.action(props.data)}>
          <span className = "icon icon-close text-bottom"></span>
          Cancel
        </Button>
        <Button
          className = "btn btn-primary"
          onClick = {() => props.action(props.data)}>Yes, delete account</Button>
      </div>
    </div>
  </Modal>
)
