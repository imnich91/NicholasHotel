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
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <Card cardType = "Accounts" acctVisible = "makeVis"/>
      </div>
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <Card status = {"REGISTERED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis"/>
      </div>
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <Card status = {"STARTED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis"/>
      </div>
    </div>
  </div>
)

export default Dashboard;
