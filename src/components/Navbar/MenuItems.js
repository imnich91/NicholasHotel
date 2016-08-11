import React from 'react';
import { Link, IndexLink } from 'react-router';

const MenuItems = () =>(
  <div>
    <IndexLink className = "navbar-vertical-link" activeClassName = 'active' to='/dashboard'>
      <span className = "icon icon-gauge-full nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Dashboard</span>
    </IndexLink>
    <Link className = "navbar-vertical-link" activeClassName = 'active' to='accounts'>
      <span className = "icon icon-account nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Accounts</span>
    </Link>
    <Link className = "navbar-vertical-link" activeClassName = 'active' to='jobs'>
      <span className = "icon icon-queue-settings nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Jobs</span>
    </Link>
    <Link className = "navbar-vertical-link" activeClassName = 'active' to='schedule'>
      <span className = "icon icon-clock nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Schedule</span>
    </Link>
  </div>
)

export default MenuItems;
