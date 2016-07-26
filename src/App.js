import React from 'react';
import Dashboard from './Containers/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';

import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';

numberLocalizer();
momentLocalizer(Moment);

const App = () => (
  <div className = "wrapper">
  {/*<Login/>*/}
    <Navbar/>
    <div className="app">
        <Dashboard/>
    </div>
  </div>
);

export default App;
