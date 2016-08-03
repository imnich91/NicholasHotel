import {
  FETCH_ACCTS
} from '../Actions';

const initialAccount = {
  accounts: [0],
  success: false
}

export const AccountsReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case FETCH_ACCTS:
    return action.payload
  }
  return state;
}
