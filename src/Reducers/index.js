import { combineReducers } from 'redux';
import { modalP1Reducer } from './ModalP1';
import { modalP2Reducer } from './ModalP2';
import { modalP3Reducer } from './ModalP3';
import { modalP4Reducer } from './ModalP4';
import {AuthReducer} from './AuthReducer';

const rootReducer = combineReducers({
  modalState1: modalP1Reducer,
  modalState2: modalP2Reducer,
  modalState3: modalP3Reducer,
  modalState4: modalP4Reducer,
  authenticated: AuthReducer
});

export default rootReducer;
