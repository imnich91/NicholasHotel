import React from 'react';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';
import SelectListInput from 'coreui/lib/components/SelectListInput';
import Modal from 'coreui/lib/components/Modal';
import { displayAcct3 } from '../Actions';
import {connect} from 'react-redux';

class AcctInfoPg2 extends React.Component{

  constructor(props){
    super(props);
  }

  toggleModals = () =>(
    this.props.action(this.props.data),
    this.props.displayAcct3(this.props.modalState3)
  )

  render = () => (
    <Modal onHide={()=> this.props.action(this.props.data)}>
      <div className="modal-content">
        <div className = "modal-header">
          <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {()=> this.props.action(this.props.data)}>
            <span className = "icon icon-close exit-style"></span>
          </Button>
          <h1 className = "modal-header-style">Create New Account</h1>
          <p>Enter your source database inputs.</p>
        </div>
        <div className = "modal-side-pad" id = "ModalOne">
          <div className = "row">
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="region">Database Product</Label>
              <DropdownListInput disabled defaultValue="Nexxus Marketing"/>
            </div>
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="environment">Database Type</Label>
              <DropdownListInput data={['prod', 'development']} placeholder= "Select account type"/>
            </div>
          </div>
          <div className = "row">
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="acct-name">SQL IP</Label>
              <input className="form-control" id="acct-name" type="text" placeholder = "ie: 1.1.0.1.145"></input>
            </div>
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="admin-eamil">SQL Port</Label>
              <input className="form-control" id="admin-email" type="text" placeholder = "ie: 3306"></input>
            </div>
          </div>
          <div className = "row">
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="acct-name">Database Username</Label>
              <input className="form-control" id="acct-name" type="text" placeholder = "Type username"></input>
            </div>
            <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
              <Label className="modal-body-title required" htmlFor="admin-eamil">Database Password</Label>
              <input className="form-control" id="admin-email" type="text" placeholder = "Type password"></input>
            </div>
          </div>
        </div>
        <div className = "modal-footer text-xs-right">
          <Button className = "btn btn-link" data-dismiss = "modal" onClick = {()=> this.props.action(this.props.data)}>
            <span className = "icon icon-close text-bottom"></span>
            Cancel
          </Button>
          <Button className = "btn btn-primary" data-toggle = "modal" onClick = {() =>this.toggleModals()}>Create Account</Button>
        </div>
      </div>
    </Modal>
  )
}


const mapStateToProps = (state) => ({modalState3: state.modalState3});

export default connect(mapStateToProps, {displayAcct3})(AcctInfoPg2)
