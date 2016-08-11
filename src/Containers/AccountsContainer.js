import React from 'react';
import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import Accounts from '../components/AccountsPage/Accounts'
import {displayDltAcct} from '../Actions';

class AccountsContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render = () => (
    <Accounts data = {this.props.dltAcctModalState} action = {this.props.displayDltAcct} accounts = {this.props.accountsInfo}/>
  )
}


const mapStateToProps = (state) => ({dltAcctModalState: state.dltAcctModalState, accountsInfo: state.accountsInfo});

export default connect(mapStateToProps, {displayDltAcct})(AccountsContainer);
