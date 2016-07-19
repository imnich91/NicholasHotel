import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ModalExample from './examples/ModalExample';

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
    {/*<ModalExample/>*/}
  </div>
);

export default App;
