import {
  SETUP_ACCT_ONE,
  SETUP_ACCT_TWO
} from '../Actions';

const initialAccount = {
  acctName: "",
  acctEmail: "",
  acctNumber: "",
  region: "",
  environment: "",
  databaseProduct: "",
  databaseType: "",
  sqlIP: "",
  sqlPort: "",
  databaseUsername: "",
  databasePassword: ""
}

export const AcctSetupReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case SETUP_ACCT_ONE:
    return {...state, ...action.payload}
    case SETUP_ACCT_TWO:
    return {...state, ...action.payload}
  }
  return state;
}
