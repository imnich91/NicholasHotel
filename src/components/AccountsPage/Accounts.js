import React from 'react';
import Button from 'coreui/lib/components/Button';
import CreateAcct from "../../components/CreateAcct";
import TextInput from 'coreui/lib/components/TextInput';
import {connect} from 'react-redux';
import {DltAcctModal} from '../DltAcctModal';
import AccountsTable from './AccountsTable';



class Accounts extends React.Component{

  constructor(props){
    super(props);
  }

  maybeRenderModal = () => this.props.data && (
    <DltAcctModal
      data = {this.props.data}
      action = {this.props.action}/>
  )

  render = () => (
    <div>
      <div className = "row">
        <div className = "col-lg-12 col-md-6 col-xs-12 acct-bottom-border">
          <h1 className = 'accounts-header'>
            Accounts
          </h1>
          <CreateAcct style = "btn btn-primary acct-page-button" type = 'button'/>
        </div>
      </div>
      <div className = "row">
        <div className = "col-xs-12 table-pad col-no-pad">
          <Button
            className = "btn btn-link acct-trash-button-style"
            onClick = {() => this.props.action(this.props.data)}>
            <span className = "icon icon-trash"></span>
            Delete
          </Button>
          <AccountsTable accounts = {this.props.accounts.accounts}/>
        </div>
      </div>
      {this.maybeRenderModal()}
    </div>
  )
}

export default Accounts;
