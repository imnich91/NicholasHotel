import React from 'react';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';
import Modal from 'coreui/lib/components/Modal';
import { displayAcct2 } from '../Actions';
import {connect} from 'react-redux';
import AcctInfoPg2 from './AcctInfoPg2';


class AccountInfoPg1 extends React.Component{

  constructor(props){
    super(props);
  }

  toggleModals = () =>(
    this.props.action(this.props.data),
    this.props.displayAcct2(this.props.modalState2)
  )

  render = () => (
    <Modal onHide={()=> this.props.action(this.props.data)}>
      <div className="modal-content">
        <div className = "modal-header">
          <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {()=> this.props.action(this.props.data)}>
            <span className = "icon icon-close exit-style"></span>
          </Button>
          <h1 className = "modal-header-style">Create New Account</h1>
          <p>Enter your account information.</p>
        </div>
        <div className = "modal-side-pad" id = "ModalOne">
          <div className = "row">
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="acct-name">Full name</Label>
              <input className="form-control" id="acct-name" type="text" placeholder = "Type account name here"></input>
            </div>
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="admin-eamil">Admin Email Address</Label>
              <input className="form-control" id="admin-email" type="text" placeholder = "email@domain.com"></input>
            </div>
          </div>
          <div className = "row">
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="region">Region</Label>
              <DropdownListInput disabled defaultValue="United States"/>
            </div>
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="environment">Environment</Label>
              <DropdownListInput data={['prod', 'development']} placeholder= "Choose your environment"/>
            </div>
          </div>
        </div>
        <div className = "modal-footer text-xs-right">
          <Button className = "btn btn-link" data-dismiss = "modal" onClick = {()=> this.props.action(this.props.data)}>
            <span className = "icon icon-close text-bottom"></span>
            Cancel
          </Button>
          <Button className = "btn btn-primary" data-toggle = "modal" onClick = {()=> this.toggleModals()}>Continue</Button>
        </div>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => ({modalState2: state.modalState2});

export default connect(mapStateToProps, {displayAcct2})(AccountInfoPg1)
