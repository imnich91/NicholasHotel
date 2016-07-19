import React from 'react';
import Button from 'coreui/lib/components/Button';
import Modal from 'coreui/lib/components/Modal';
import Label from 'coreui/lib/components/Label';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';

const buttons = [
  { displayText: 'Cancel', isCancel: true },
  { displayText: 'Continue', isDefault: true },
];

class AcctModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      style: props.style,
      visible: props.visible,
      showModal: false
    }
  }


  maybeRenderModal = () => this.state.showModal && (
    <Modal {...{ buttons }} onHide={this.toggleShowModal}>
      <div className = "modal-header">
        <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {this.toggleShowModal}>
          <span className = "icon icon-close exit-style"></span>
        </Button>
        <h1 className = "modal-header-style">Create New Account</h1>
        <p>Enter your account information.</p>
      </div>
      <div className = "modal-body">
        <div className = "row">
          <div className = "col-xs-6 modal-body-pad">
            <Label className="modal-body-title required" for="acct-name">Full name</Label>
            <input className="form-control" id="acct-name" type="text" placeholder = "Type account name here"></input>
          </div>
          <div classname = "col-xs-6 modal-body-pad">
            <Label className="modal-body-title required" for="admin-eamil">Admin Email Address</Label>
            <input className="form-control" id="admin-email" type="text" placeholder = "email@domain.com"></input>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-6 modal-body-pad">
            <Label className="modal-body-title required" for="region">Region</Label>
            <DropdownListInput disabled defaultValue="United States"/>
          </div>
          <div classname = "col-xs-6 modal-body-pad">
            <Label className="modal-body-title required" for="environment">Environment</Label>
            <DropdownListInput data={['prod']} placeholder= "Choose your environment"/>
          </div>
        </div>
      </div>
    </Modal>
  )

  toggleShowModal = () => this.setState({ showModal: !this.state.showModal })

  render = () => (
    <div>
      <Button className="btn-link account-button" id = {this.state.visible} onClick = {this.toggleShowModal}>
        <span className="icon icon-plus"></span>
        New Account
      </Button>
      {this.maybeRenderModal()}
    </div>
  )
}

export default AcctModal;
