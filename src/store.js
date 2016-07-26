import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();
const store = applyMiddleware(logger)(createStore);

export default store(rootReducer);
