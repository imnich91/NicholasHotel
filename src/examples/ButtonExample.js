import React from 'react';
import Button from 'coreui/lib/components/Button';

const ButtonExample = () => (
  <div className="example">
    <h3>Button</h3>
    <Button actionType="secondary" onClick={() => alert('Button clicked!')}>
      Click!
    </Button>
  </div>
);

export default ButtonExample;
