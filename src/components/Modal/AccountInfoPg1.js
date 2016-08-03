import React from 'react';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';
import Form, { Field, Message } from 'coreui/lib/components/Form';
import Modal from 'coreui/lib/components/Modal';
import { displayAcct2 } from '../../Actions/index';
import {connect} from 'react-redux';
import AcctInfoPg2 from './AcctInfoPg2';
import yup from 'yup';

const defaultRequiredStr = yup.string().default('').required('This field is required');
const schema = yup.object({
  acctName: defaultRequiredStr,
  adminEmail: defaultRequiredStr,
  acctNumber: defaultRequiredStr,
  region: defaultRequiredStr,
  environment: defaultRequiredStr
});

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
        <Form {...{schema}}
              defaultValue = {schema.default()}
              onSubmit ={() =>this.toggleModals()}>
          <div className = "modal-side-pad" id = "ModalOne">
              <div className = "row">
                <div className = "col-xs-12 col-sm-4 col-lg-4 modal-body-pad">
                  <Label className="modal-body-title required">Full name</Label>
                  <Field className = "form-control" id = 'acctName' name = "acctName" placeholder = "Type account name here"/>
                </div>
                <div className = "col-xs-12 col-sm-4 col-lg-4 modal-body-pad">
                  <Label className="modal-body-title required">Admin Email Address</Label>
                  <Field className = "form-control" id = 'adminEmail' name = "adminEmail" placeholder = "email@domain.com"/>
                </div>
                <div className = "col-xs-12 col-sm-4 col-lg-4 modal-body-pad">
                  <Label className="modal-body-title required">Account number</Label>
                  <Field className = "form-control" id = "acctNumber" name = "acctNumber" placeholder = "ie: 123"/>
                </div>
              </div>
              <div className = "row">
                <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                  <Label className="modal-body-title required">Region</Label>
                  <Field data = {["United States"]} name = 'region' id = 'region' type = 'dropdownlist'/>
                </div>
                <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                  <Label className="modal-body-title required">Environment</Label>
                  <Field
                    data={['prod', 'development']}
                    name="environment"
                    type="dropdownlist"
                  />
                </div>
              </div>
            </div>
            <div className = "modal-footer text-xs-right">
            <Button className = "btn btn-link" onClick = {()=> this.props.action(this.props.data)}>
              <span className = "icon icon-close text-bottom"></span>
              Cancel
            </Button>
            <Button className = "btn btn-primary" type = 'submit' >Continue</Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => ({modalState2: state.modalState2});

export default connect(mapStateToProps, {displayAcct2})(AccountInfoPg1)
