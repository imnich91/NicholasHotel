import React from 'react';
import { Link, IndexLink } from 'react-router';

const MenuItems = () =>(
  <div>
    <IndexLink className = "navbar-vertical-link" activeClassName = 'active' to='/dashboard'>
      <span className = "icon icon-gauge-full nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Dashboard</span>
    </IndexLink>
    <Link className = "navbar-vertical-link" activeClassName = 'active' to='jobs'>
      <span className = "icon icon-queue-settings nav-icon-style"></span>
      <span className = "navbar-vertical-link-title">Packages</span>
    </Link>
  </div>
)

export default MenuItems;
