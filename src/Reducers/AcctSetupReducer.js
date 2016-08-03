import {
  SETUP_ACCT
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

export const AccountsReducer = (state = initialAccount, action) => {
  switch(action.type) {
    case SETUP_ACCT:
    return action.payload
  }
  return state;
}
