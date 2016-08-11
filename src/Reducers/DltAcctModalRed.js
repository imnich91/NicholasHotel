import {
  DLT_MODAL
} from '../Actions';

export const DltAcctModalRed= (state = false, action) => {
  switch (action.type) {
    case DLT_MODAL:
    return action.payload
  }
  return state
};
