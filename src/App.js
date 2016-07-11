import React from 'react';
import AcctCard from './components/AcctCard';
import JobsCard from './components/JobsCard';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import FormExample from './examples/FormExample';
import TableExample from './examples/TableExample';
import Box from './examples/Box';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';

numberLocalizer();
momentLocalizer(Moment);

const App = () => (
  <div className="app container">
    {/*<Login/>*/}
    {/*<Dashboard/>*/}
    {/*<TableExample/>*/}
    <Box/>
  </div>
);

export default App;
