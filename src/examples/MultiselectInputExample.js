import React from 'react';
import MultiselectInput from 'coreui/lib/components/MultiselectInput';

const MultiselectInputExample = () => (
  <div className="example">
    <h3>Multiselect Input</h3>
    <MultiselectInput data={['orange', 'red', 'blue']} defaultValue={['orange']} />
  </div>
);

export default MultiselectInputExample;
