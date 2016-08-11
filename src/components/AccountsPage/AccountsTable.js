import React from 'react';
import Button from 'coreui/lib/components/Button';
import Table from 'coreui/lib/components/Table';
import { Link, IndexLink } from 'react-router';
import SingleAccount from './SingleAccount';


const myAccounts = []

const AccountsButton = ({ data }) =>
  <Link className="btn btn-link" activeClassName = 'active' to='singleAcct'>{data}</Link>

class AccountsTable extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    for(var i = 0; i < this.props.accounts.length; i++) {
      myAccounts[i] =
        {Name: this.props.accounts[i].name,
         Region: this.props.accounts[i].region}

    }
  }

  getData = () => (
    myAccounts
  )

  render = () => (
    <Table
            columns={[
              { component: AccountsButton, displayName: 'Name', id: 'Name' },
              { displayName: 'Region', id: 'Region' },
              { displayName: 'Status', id: 'Status' },
              { displayName: 'Product', id: 'Product' },
              { displayName: 'Last Job Run', id: 'Last Job Run' },
              { displayName: 'Job ID', id: 'Job ID' },
              { displayName: 'Job Date', id: 'Job Date' }
            ]}
            data = {this.getData()}
            pageSize = {10}
            pagination
            searchable
          />
  )
}

export default AccountsTable;
