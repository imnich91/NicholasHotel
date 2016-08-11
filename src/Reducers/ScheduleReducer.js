import {
  FETCH_SCHEDULED_JOBS
} from '../Actions';

const initialAccount = {
  schedules: [0],
  success: false
}

export const ScheduleReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case FETCH_SCHEDULED_JOBS:
    return action.payload
  }
  return state;
}
