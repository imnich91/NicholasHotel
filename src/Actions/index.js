export const ACCT_1 = 'ACCT_1';
export const ACCT_2 = 'ACCT_2';
export const ACCT_3 = 'ACCT_3';
export const ACCT_4 = 'ACCT_4';
export const CHANGE_AUTH = 'CHANGE_AUTH';


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
       dispatch(finishedRequest("fetchAccts", value))
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
       dispatch(finishedRequest("fetchAccts", value))
       console.log(value)
    })
  }
}

export function fetchRegisteredJobs(){
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
       dispatch(finishedRequest("fetchAccts", value))
       console.log(value)
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
       dispatch(finishedRequest("fetchAccts", value))
       console.log(value)
    })
  }
}
