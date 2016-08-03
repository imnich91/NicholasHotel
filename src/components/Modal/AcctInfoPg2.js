import React from 'react';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';
import SelectListInput from 'coreui/lib/components/SelectListInput';
import Form, { Field, Message } from 'coreui/lib/components/Form';
import Modal from 'coreui/lib/components/Modal';
import { displayAcct3 } from '../../Actions';
import {connect} from 'react-redux';
import yup from 'yup';

const defaultRequiredStr = yup.string().default('').required('This field is required');
const schema = yup.object({
  databaseProduct: defaultRequiredStr,
  databaseType: defaultRequiredStr,
  sqlIP: defaultRequiredStr,
  sqlPort: defaultRequiredStr,
  databaseUsername: defaultRequiredStr,
  databasePassword: defaultRequiredStr,
  databaseSize: defaultRequiredStr
});

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
        <Form {...{schema}}
              defaultValue = {schema.default()}
              onSubmit ={(value) =>console.log(value)}>
          <div className = "modal-side-pad" id = "ModalOne">
            <div className = "row">
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor="database-product">Database Product</Label>
                <Field
                  data = {["Nexxus Marketing"]}
                  id = 'databaseProduct'
                  name = 'databaseProduct'
                  type = 'dropdownlist'/>
              </div>
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor="database-type">Database Type</Label>
                <Field
                  data = {['Prod', 'Development']}
                  id = 'databaseType'
                  name = 'databaseType'
                  type = 'dropdownlist'/>
              </div>
            </div>
            <div className = "row">
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor="sql-ip">SQL IP</Label>
                <Field
                  className="form-control"
                  id="sqlIP"
                  name='sqlIP'
                  type="text"
                  placeholder = "ie: 1.1.0.1.145"/>
              </div>
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor="sql-port">SQL Port</Label>
                <Field
                  className="form-control"
                  id="sqlPort"
                  name='sqlPort'
                  type="text"
                  placeholder = "ie: 3306"/>
              </div>
            </div>
            <div className = "row">
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor='database-username'>Database Username</Label>
                <Field
                  className="form-control"
                  id="databaseUsername"
                  name='databaseUsername'
                  type="text"
                  placeholder = "Type username"/>
              </div>
              <div className = "col-xs-12 col-sm-6 col-lg-6 modal-body-pad">
                <Label className="modal-body-title required" htmlFor="database-password">Database Password</Label>
                <Field
                  className="form-control"
                  id="databasePassword"
                  name='databasePassword'
                  type="text"
                  placeholder = "Type password"/>
              </div>
            </div>
            <div className = "row">
              <Field
                className = 'database-input'
                name = 'databaseSize'
                id = 'databaseSize'
                data={['Small', 'Medium', 'Large']}
                type = 'selectlist'/>
            </div>
          </div>
          <div className = "modal-footer text-xs-right">
            <Button className = "btn btn-link" data-dismiss = "modal" onClick = {()=> this.props.action(this.props.data)}>
              <span className = "icon icon-close text-bottom"></span>
              Cancel
            </Button>
            <Button className = "btn btn-primary" type = 'submit'>Create Account</Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}


const mapStateToProps = (state) => ({modalState3: state.modalState3});

export default connect(mapStateToProps, {displayAcct3})(AcctInfoPg2)
