import React from 'react';
import AcctCard from '../components/AcctCard';
import JobsCard from '../components/JobsCard';

const Dashboard = () => (
  <div className = "Dashboard">
    <div className = "row card-padding">
      <div className = "col-lg-9">
        <h1 className = "dashboard-header">Dashboard</h1>
      </div>
    </div>
    <div className = "row card-padding">
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <AcctCard/>
      </div>
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <JobsCard status = {"REGISTERED"}/>
      </div>
      <div className = "col-xl-3 col-lg-12 col-md-12 col-sm-12 dashboard-col">
        <JobsCard status = {"STARTED"}/>
      </div>
    </div>
  </div>
)

export default Dashboard;
