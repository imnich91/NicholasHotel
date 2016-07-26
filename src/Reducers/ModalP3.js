import {
  ACCT_3
} from '../Actions';

export const modalP3Reducer= (state = false, action) => {
  switch (action.type) {
    case ACCT_3:
    return action.payload
  }
  return state
};
