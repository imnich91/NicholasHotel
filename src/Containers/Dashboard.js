import React from 'react';
//import Card from '../components/Card';
// import {fetchAccts} from '../Actions';
// import {fetchRegJobs} from '../Actions';
// import {fetchStartedJobs} from '../Actions';
// import {fetchSchedule} from '../Actions';
import {connect} from 'react-redux';
import Calendar from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';
import Slider from 'react-slick';
import MyCarousel from '../components/MyCarousel';

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


const Dashboard = () => (
  <div className = "Dashboard">
    <div className = "row hide-dash">
      <div className = "col-lg-8 col-md-6 scroll">
        <div className = "row">
          <h1 className = "dashboard-header">Rooms</h1>
          <div className = "col-lg-8 col-md-6">
            <MyCarousel/>
          </div>
        </div>
        <div className = "row">
          <h1 className = "dashboard-header">Ammenities</h1>
          <div className = "col-lg-8 col-md-6">
            <MyCarousel/>
          </div>
        </div>
        <div className = "row">
          <h1 className = "dashboard-header">Entertainment</h1>
          <div className = "col-lg-8 col-md-6">
            <MyCarousel/>
          </div>
        </div>
      </div>
      <div className = "col-lg-4 col-md-6">        
        <div className = "top-margin">
          <h1 className = "dashboard-header">Check-in Date</h1>
          <InfiniteCalendar
            width={300}
            height={300}
            selected={today}
            minDate={lastWeek}
          />
        </div>
      </div>
    </div>

  </div>

)

//const mapStateToProps = (state) => (/*{accountsInfo: state.accountsInfo, regJobsInfo: state.regJobsInfo, scheduleInfo: state.scheduleInfo}*/);

// export default connect(mapStateToProps,/* {fetchAccts, fetchRegJobs, fetchSchedule}*/)(Dashboard)
export default Dashboard;
