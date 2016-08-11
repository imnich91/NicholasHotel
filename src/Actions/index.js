export const ACCT_1 = 'ACCT_1';
export const ACCT_2 = 'ACCT_2';
export const ACCT_3 = 'ACCT_3';
export const ACCT_4 = 'ACCT_4';
export const CHANGE_AUTH = 'CHANGE_AUTH';
export const FETCH_ACCTS = 'FETCH_ACCTS';
export const FETCH_REG_JOBS = 'FETCH_REG_JOBS';
export const FETCH_STARTED_JOBS = 'FETCH_STARTED_JOBS';
export const FETCH_SCHEDULED_JOBS = 'FETCH_SCHEDULED_JOBS';
export const SETUP_ACCT_ONE = 'SETUP_ACCT_ONE';
export const SETUP_ACCT_TWO = 'SETUP_ACCT_TWO';
export const DLT_MODAL = 'DLT_MODAL';




const api_key = "c395f0d1";
const api_secret = "e06c47fa2a014c";
const api_fullKey = btoa('c395f0d1:e06c47fa2a014c');

export const displayAcct1 = (state) => ({
  type: ACCT_1,
  payload: !state
});

export const displayAcct2 = (state) => ({
  type: ACCT_2,
  payload: !state
});

export const displayAcct3 = (state) => ({
  type: ACCT_3,
  payload: !state
});

export const displayAcct4 = (state) => ({
  type: ACCT_4,
  payload: !state
});

export const authenticate = (isLoggedIn) => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
})

export const displayDltAcct = (state) => ({
  type: DLT_MODAL,
  payload: !state
});

const prepareAccountOne = (acct) => {
  return {
    acctName: acct.acctName,
    acctEmail: "",
    acctNumber: acct.acctNumber,
    region: acct.region,
    environment: acct.environment,
  }
}

const prepareAccountTwo = (acct) => {
  return{
    databaseProduct: acct.databaseProduct,
    databaseType: acct.databaseType,
    sqlIP: acct.sqlIP,
    sqlPort: acct.sqlPort,
    databaseUsername: acct.databaseUsername,
    databasePassword: acct.databasePassword
  }
}

export const setupAcctOne = (acct) => ({
  type: SETUP_ACCT_ONE,
  payload: prepareAccountOne(acct)
})

export const setupAcctTwo = (acct) => ({
  type: SETUP_ACCT_TWO,
  payload: prepareAccountTwo(acct)
})

export const finishedRequest = (actionType,response) => ({
    type: actionType,
    payload: response
})

export function fetchAccts(){
  return function(dispatch){
    return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/account/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + api_fullKey
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(value){
       dispatch(finishedRequest(FETCH_ACCTS, value))
    })
  }
}

export function fetchRegJobs(){
  return function(dispatch){
    return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/job/?region=us-west-2&status=Registered`,{
      headers: {
        Authorization: 'Basic ' + api_fullKey
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(value){
       dispatch(finishedRequest(FETCH_REG_JOBS, value))
    })
  }
}

export function fetchStartedJobs(){
  return function(dispatch){
    return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/job/?region=us-west-2&status=Started`,{
      headers: {
        Authorization: 'Basic ' + api_fullKey
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(value){
       dispatch(finishedRequest(FETCH_STARTED_JOBS, value))
    })
  }
}

export function fetchSchedule(){
  return function(dispatch){
    return fetch(`http://admin-cluster-restapi-lb-797006272.us-west-2.elb.amazonaws.com/v1/schedule/`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + api_fullKey
      }
    })
    .then(function(response){
      return response.json()
    })
    .then(function(value){
       dispatch(finishedRequest(FETCH_SCHEDULED_JOBS, value))
    })
  }
}
