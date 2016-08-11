import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import numberLocalizer from 'react-widgets/lib/localizers/simple-number';
import { connect } from 'react-redux';

numberLocalizer();
momentLocalizer(Moment);

const Overview = (children) => (
  <div className = "wrapper">
    <Navbar/>
    <div className="app">
        {children}
    </div>
  </div>
);

const Login = (children) => (
  <div>
    {children}
  </div>
)

const App = ({children, authenticated}) => authenticated ? Overview(children) : Login(children)

const mapStateToProps = (state) => ({authenticated: state.authenticated})

export default connect(mapStateToProps)(App);
