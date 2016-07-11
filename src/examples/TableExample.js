import React from 'react';
import Table from 'coreui/lib/components/Table';

const TableExample = () => (
  <div className="example">
    <h3>Table</h3>
    <Table
      data={[
        { Name: 'Griffin Smith', Age: 18 },
        { Age: 23, Name: 'Lee Salminen' },
        { Age: 28, Position: 'Developer' },
      ]}
    />
  </div>
);

export default TableExample;
