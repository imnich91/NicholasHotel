import React from 'react';
import Button from 'coreui/lib/components/Button';
const Navbar = () =>(
  <div>
    <nav className = "navbar">
      <div className = "row nav-row">
        <div className = "col-xs-6 col-sm-6 col-md-9 col-lg-9">
          <div className = "nav-header">Forte Admin</div>
        </div>
        <div className = "col-xs-0 col-md-3 col-lg-3 pad-dropdown">
          <div className = "dropdown float-left pad-dropdown">
            <Button className = "dropdown-toggle default-dropdown pad-dropdown" type="button" id="dropdownDemo1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className = "icon icon-user "></span>
                <span className = "icon icon-chevron-down"></span>
            </Button>
            <div className = "dropdown-menu" aria-labeledby = "dropdownDemo1">
              <li><a href="#0">Logout</a></li>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav className = "navbar-vertical">
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
    </nav>
  </div>
)

export default Navbar;
