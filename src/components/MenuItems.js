import React from 'react';

const MenuItems = () =>(
  <div>
    <a className = "navbar-vertical-link active" href= "http://localhost:8080/">
      <span className = "navbar-vertical-link-title active">Dashboard</span>
    </a>
    <a className = "navbar-vertical-link">
      <span className = "navbar-vertical-link-title">Accounts</span>
    </a>
    <a className = "navbar-vertical-link">
      <span className = "navbar-vertical-link-title">Jobs</span>
    </a>
    <a className = "navbar-vertical-link">
      <span className = "navbar-vertical-link-title">Schedule</span>
    </a>
  </div>
)

export default MenuItems;
