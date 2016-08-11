import React from 'react';
import Button from 'coreui/lib/components/Button';
import TextInput from 'coreui/lib/components/TextInput';
import Table from 'coreui/lib/components/Table';
import RegisteredJobs from './RegisteredJobs/RegisteredJobs';

class Jobs extends React.Component{
  constructor(props){
    super(props);
  }

  render = () => (
    <div>
      <div className = "row">
        <div className = "col-lg-9 col-md-6 col-xs-12 jobs-bottom-border">
          <h1 className = 'jobs-header'>
            Jobs
          </h1>
        </div>
      </div>
      <RegisteredJobs/>
    </div>
  )

}



export default Jobs;
