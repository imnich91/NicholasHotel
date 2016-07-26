import {
  ACCT_1
} from '../Actions';

export const modalP1Reducer= (state = false, action) => {
  switch (action.type) {
    case ACCT_1:
    return action.payload
  }
  return state
};
