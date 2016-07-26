import {
  ACCT_4
} from '../Actions';

export const modalP4Reducer= (state = false, action) => {
  switch (action.type) {
    case ACCT_4:
    return action.payload
  }
  return state
};
