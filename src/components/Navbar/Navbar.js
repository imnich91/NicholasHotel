import React from 'react';
import Button from 'coreui/lib/components/Button';
import MenuItems from './MenuItems';


const Navbar = () =>(
  <div>
    <nav className = "navbar navbar-primary">
      <div className = "row nav-row">
        <Button className="off-canvas-open" data-toggle="off-canvas" data-target="#off-canvas-demo">
          <span className="icon icon-menu nav-menu-icon"></span>
        </Button>
        <div className = "col-xs-6 col-sm-6 col-md-9 col-lg-9">
          <div className = "nav-header">Forte Admin</div>
        </div>
        <div className = "col-xs-0 col-md-3 col-lg-3 pad-dropdown">
          <div className = "dropdown float-left pad-dropdown">
            <Button className = "dropdown-toggle default-dropdown pad-dropdown" type="button" id="dropdownDemo1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className = "icon icon-user "></span>
                <span className = "icon icon-chevron-down icon-chevron-down-default"></span>
            </Button>
            <div className = "dropdown-menu" aria-labeledby = "dropdownDemo1">
              <li><a href="/">Logout</a></li>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <aside className="off-canvas off-canvas-left" id="off-canvas-demo">
      <nav className = "sidebar-nav">
        <Button className="off-canvas-close" data-toggle="off-canvas" data-target="#off-canvas-demo">
          <span className="icon icon-close"></span>
        </Button>
        <MenuItems/>
      </nav>
    </aside>
    <nav className = "navbar-vertical">
      <MenuItems/>
    </nav>
  </div>
)

export default Navbar;
