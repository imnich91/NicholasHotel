import {
  FETCH_STARTED_JOBS
} from '../Actions';

const initialAccount = {
  jobs: [0],
  success: false
}

export const StartedJobsReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case FETCH_STARTED_JOBS:
    return action.payload
  }
  return state;
}
