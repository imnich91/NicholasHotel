import React from 'react';
import Calendar from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const Availability = () => (
  <div >
    <div className = "row hide-dash">
      <div className = "col-lg-7 col-md-6">
        <h1 className = "dashboard-header">Availability</h1>
      </div>
      <div className = "col-lg-4 col-md-6">
        
      </div>
    </div>

  </div>
)

export default Availability;
