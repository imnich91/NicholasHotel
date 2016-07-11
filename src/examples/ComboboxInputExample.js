import React from 'react';
import ComboboxInput from 'coreui/lib/components/ComboboxInput';

const ComboboxInputExample = () => (
  <div className="example">
    <h3>Combobox Input</h3>
    <ComboboxInput data={['orange', 'red', 'blue']} defaultValue="orange" />
  </div>
);

export default ComboboxInputExample;
