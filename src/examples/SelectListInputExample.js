import React from 'react';
import SelectListInput from 'coreui/lib/components/SelectListInput';

const SelectListInputExample = () => (
  <div className="example">
    <h3>Select List Input</h3>
    <SelectListInput data={['orange', 'red', 'blue']} defaultValue="orange" />
  </div>
);

export default SelectListInputExample;
