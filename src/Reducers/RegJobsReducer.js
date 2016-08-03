import {
  FETCH_REG_JOBS
} from '../Actions';

const initialAccount = {
  jobs: [0],
  success: false
}

export const RegJobsReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case FETCH_REG_JOBS:
    return action.payload
  }
  return state;
}
