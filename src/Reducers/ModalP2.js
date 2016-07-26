import {
  ACCT_2
} from '../Actions';

export const modalP2Reducer= (state = false, action) => {
  switch (action.type) {
    case ACCT_2:
    return action.payload
  }
  return state
};
