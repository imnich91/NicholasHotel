import React from 'react';
import Button from 'coreui/lib/components/Button';
import Label from 'coreui/lib/components/Label';
import SelectListInput from 'coreui/lib/components/SelectListInput';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';
import {connect} from 'react-redux';
import AccountInfoPg1 from './AccountInfoPg1';
import AcctInfoPg2 from './AcctInfoPg2';
import AcctSuccess from './AcctSuccess';
import ProvisionModal from './ProvisionModal';
import { displayAcct1 } from '../Actions';
import { displayAcct2 } from '../Actions';
import { displayAcct3 } from '../Actions';
import { displayAcct4 } from '../Actions';



class CreateAcct extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      style: props.style,
      visible: props.visible
    }
  }

  maybeRenderModal1 = () => this.props.modalState1 && (
    <AccountInfoPg1 data = {this.props.modalState1} action = {this.props.displayAcct1}/>
  )
  maybeRenderModal2 = () => this.props.modalState2 && (
    <AcctInfoPg2 data = {this.props.modalState2} action = {this.props.displayAcct2}/>
  )
  maybeRenderModal3 = () => this.props.modalState3 && (
    <AcctSuccess data = {this.props.modalState3} action = {this.props.displayAcct3}/>
  )
  maybeRenderModal4 = () => this.props.modalState4 && (
    <ProvisionModal data = {this.props.modalState4} action = {this.props.displayAcct4}/>
  )


  render = () => (
    <div>
      <Button className="btn-link account-button" id = {this.state.visible} onClick = {() => this.props.displayAcct1(this.props.modalState1)}>
        <span className="icon icon-plus"></span>
        New Account
      </Button>
      {this.maybeRenderModal1()}
      {this.maybeRenderModal2()}
      {this.maybeRenderModal3()}
      {this.maybeRenderModal4()}
    </div>
  )
}

const mapStateToProps = (state) => ({ modalState1: state.modalState1, modalState2: state.modalState2,
                                      modalState3: state.modalState3, modalState4: state.modalState4});

export default connect(mapStateToProps, {displayAcct1, displayAcct2, displayAcct3, displayAcct4} )(CreateAcct)
