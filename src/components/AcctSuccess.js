import React from 'react';
import Button from 'coreui/lib/components/Button';
import {connect} from 'react-redux';
import Modal from 'coreui/lib/components/Modal';
import { displayAcct4 } from '../Actions';

class AcctSuccess extends React.Component{

  constructor(props){
    super(props);
  }

  toggleModals = () =>(
    this.props.action(this.props.data),
    this.props.displayAcct4(this.props.modalState4)
  )
  render = () => (
    <Modal onHide={()=> this.props.action(this.props.data)}>
      <div class="modal-content">
        <div className = "modal-header">
          <Button className="close inverse" data-dismiss="modal" aria-label="Close" onClick = {()=> this.props.action(this.props.data)}>
            <span className = "icon icon-close exit-style"></span>
          </Button>
          <h1 className = "modal-header-style">
            <span className = "icon icon-check-circle text-success"></span>
            Success!
          </h1>
          <p>You have successfully setup your new account.</p>
        </div>
        <div className = "modal-side-pad" id = "ModalOne">
          <div className = "row">
            <div className = "col-xs-12 col-sm-12 col-lg-12 modal-body-pad">
              <p className = "provision-message">You may now provision an instance and run a one-time ad-hoc sync. This process could take anywhere from 10 minutes to 8 hours.</p>
            </div>
          </div>
        </div>
        <div className = "modal-footer text-xs-right">
          <Button className = "btn btn-primary" data-toggle = "modal" onClick = {()=> this.toggleModals()}>Provision account</Button>
        </div>
      </div>
    </Modal>
  )
}
  const mapStateToProps = (state) => ({modalState4: state.modalState4});

  export default connect(mapStateToProps, {displayAcct4})(AcctSuccess)
