import React from 'react';
import DropdownListInput from 'coreui/lib/components/DropdownListInput';

const DropdownListInputExample = () => (
  <div className="example">
    <h3>Dropdown List Input</h3>
    <DropdownListInput data={['orange', 'red', 'blue']} defaultValue="orange" />
  </div>
);

export default DropdownListInputExample;
