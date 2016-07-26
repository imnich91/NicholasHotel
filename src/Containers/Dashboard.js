import React from 'react';
import Card from '../components/Card';

const Dashboard = () => (
  <div className = "Dashboard">
    <div className = "row card-padding hide-dash">
      <div className = "col-lg-9 col-md-6">
        <h1 className = "dashboard-header">Dashboard</h1>
      </div>
    </div>
    <div className = "row card-padding">
      <Card cardType = "Accounts" acctVisible = "makeVis"/>
      <Card status = {"REGISTERED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis"/>
      <Card status = {"STARTED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis"/>
    </div>
  </div>
)

export default Dashboard;
