import React from 'react';
import AcctCard from './components/AcctCard';
import JobsCard from './components/JobsCard';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';

numberLocalizer();
momentLocalizer(Moment);

const App = () => (
  <div className = "wrapper">
        <Navbar/>
    <div className="app">
      <Dashboard/>
    </div>
  </div>
);

export default App;
