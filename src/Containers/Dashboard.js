import React from 'react';
import Card from '../components/Card';
import {fetchAccts} from '../Actions';
import {fetchRegJobs} from '../Actions';
import {fetchStartedJobs} from '../Actions';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
  componentWillMount(){
    this.props.fetchAccts(),
    this.props.fetchRegJobs(),
    this.props.fetchStartedJobs()
  }


  render(){
    return(
      <div className = "Dashboard">
        <div className = "row card-padding hide-dash">
          <div className = "col-lg-9 col-md-6">
            <h1 className = "dashboard-header">Dashboard</h1>
          </div>
        </div>
        <div className = "row card-padding">
          <Card cardType = "Accounts" acctVisible = "makeVis" accounts = {this.props.accountsInfo}/>
          <Card status = {"REGISTERED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis" jobInfo = {this.props.regJobsInfo}/>
          <Card status = {"STARTED"} cardType = "Jobs" label = {"status-label"} acctVisible = "hideVis" jobInfo = {this.props.startedJobsInfo}/>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state) => ({accountsInfo: state.accountsInfo, regJobsInfo: state.regJobsInfo, startedJobsInfo: state.startedJobsInfo});

export default connect(mapStateToProps, {fetchAccts, fetchRegJobs, fetchStartedJobs})(Dashboard)
