import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
//import LoginContainer from './Containers/LoginContainer';
import Dashboard from './Containers/Dashboard';
// import AccountsContainer from './Containers/AccountsContainer';
// import Jobs from './components/JobsPage/Jobs';
// import Schedule from './components/Schedule';
 import Overview from './Containers/App';
// import SingleAccount from './components/AccountsPage/SingleAccount';
// import requireAuth from './Containers/Authentication';
// import {acctData} from './components/AccountsPage/AccountsTable';

const Routes = (
  <Route path="/" component={Overview}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
  </Route>
)

export default Routes;
