import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import LoginContainer from './Containers/LoginContainer';
import Dashboard from './Containers/Dashboard';
import AccountsContainer from './Containers/AccountsContainer';
import Jobs from './components/JobsPage/Jobs';
import Schedule from './components/Schedule';
import App from './Containers/App';
import SingleAccount from './components/AccountsPage/SingleAccount';
import requireAuth from './Containers/Authentication';
import {acctData} from './components/AccountsPage/AccountsTable';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="dashboard" component={requireAuth(Dashboard)} />
    <Route path="accounts" component = {requireAuth(AccountsContainer)}/>
    <Route path="jobs" component = {requireAuth(Jobs)}/>
    <Route path="schedule" component = {requireAuth(Schedule)}/>
    <Route path="singleAcct" component = {requireAuth(SingleAccount)} acctData = {acctData}/>
  </Route>
)

export default Routes;
