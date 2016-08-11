import React from 'react';
import TextInput from 'coreui/lib/components/TextInput';
import Table from 'coreui/lib/components/Table';

const RegisteredJobs = () => (
  <div className = "row">
    <div className = "col-lg-9 col-md-9 col-xs-12 col-no-pad">
      <h3 className = "reg-job-style">Registered Jobs</h3>
      <div className="search search-style-jobs">
        <TextInput
          className="search-input"
          type="search"
          placeholder="Search Jobs"/>
      </div>
    </div>
  </div>
)

export default RegisteredJobs;
