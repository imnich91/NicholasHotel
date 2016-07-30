import {
  CHANGE_AUTH
} from '../Actions'

export const AuthReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
}
