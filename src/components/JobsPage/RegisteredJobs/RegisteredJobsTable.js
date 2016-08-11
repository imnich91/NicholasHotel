import React from 'react';
import Button from 'coreui/lib/components/Button';
import Table from 'coreui/lib/components/Table';

const jobData = {
  Name: "Account Name",
  "Job ID": "Job ID",
  "Type": "Type",
  "Job Date": "8/8/2016"
  Status: "Status"
}

const ActionButton = ({ data }) =>
  <Button className = "btn btn-link" onClick={() => console.log(data)}>Account Name</Button>;

const AccountsTable = () => (
  <Table
          columns={[
            { component: ActionButton, displayName: 'Name', id: 'Name' },
            { displayName: 'Region', id: 'Region' },
            { displayName: 'Status', id: 'Status' },
            { displayName: 'Product', id: 'Product' },
            { displayName: 'Last Job Run', id: 'Last Job Run' },
            { displayName: 'Job ID', id: 'Job ID' },
            { displayName: 'Job Date', id: 'Job Date' }

          ]}
          data={[
            acctData
          ]}
          pageSize = {10}
        />
)

export default AccountsTable;
