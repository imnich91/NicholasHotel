import React from 'react';
import Button from 'coreui/lib/components/Button';
import {connect} from 'react-redux';
import Modal from 'coreui/lib/components/Modal';

export const ProvisionModal = (props) => (
  <Modal onHide={()=> props.action(props.data)}>
    <div class="modal-content">
      <div className = "modal-header">
        <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {()=> props.action(props.data)}>
          <span className = "icon icon-close exit-style"></span>
        </Button>
        <h1 className = "modal-header-style">
          <span className = "icon icon-sync"></span>
          Provisioning...
        </h1>
        <p>In progress</p>
      </div>
      <div className = "modal-side-pad" id = "ModalOne">
        <div className = "row">
          <div className = "col-xs-12 col-sm-12 col-lg-12 modal-body-pad">
            <p className = "provision-message">
              Your instance is now provisioning and syncing.
              This Process could take anywhere from 10 minutes to 8 hours.
              You may check the status of the account provisioning process in your account list.
            </p>
          </div>
        </div>
      </div>
      <div className = "modal-footer text-xs-right">
      <Button className = "btn btn-primary" data-dismiss = "modal" onClick = {()=> props.action(props.data)}>
        Close
      </Button>
      </div>
    </div>
  </Modal>
)

export default ProvisionModal;
