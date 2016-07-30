import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import LoginContainer from './Containers/LoginContainer';
import Dashboard from './Containers/Dashboard';
import Accounts from './components/Accounts';
import Jobs from './components/Jobs';
import Schedule from './components/Schedule';
import App from './Containers/App';
import requireAuth from './Containers/Authentication';

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="dashboard" component={requireAuth(Dashboard)} />
    <Route path="accounts" component = {requireAuth(Accounts)}/>
    <Route path="jobs" component = {requireAuth(Jobs)}/>
    <Route path="schedule" component = {requireAuth(Schedule)}/>
  </Route>
)

export default Routes;
