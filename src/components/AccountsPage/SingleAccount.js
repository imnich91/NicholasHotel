import React from 'react';

const SingleAccount = (props) =>(
  <div>
    <h1>Single Account</h1>
    {console.log(props.route.acctData)}
  </div>
)

export default SingleAccount;
