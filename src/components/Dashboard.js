import React from 'react';
import AcctCard from '../components/AcctCard';
import JobsCard from '../components/JobsCard';

const Dashboard = () => (
  <div className = "Dashboard">
    <div className = "row dash-header">
      <div className = "col-xs-12 dash-header-pad">
        <h1>
          Dashboard
        </h1>
      </div>
    </div>
    <div className = "row dashboard-row">
      <div className = "col-xs-4 dashboard-col">
        <AcctCard/>
      </div>
      <div className = "col-xs-4 dashboard-col">
        <JobsCard/>
      </div>
      <div className = "col-xs-4 dashboard-col">
        <JobsCard/>
      </div>
    </div>
  </div>
)

export default Dashboard;
