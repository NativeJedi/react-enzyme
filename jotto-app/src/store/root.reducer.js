import { combineReducers } from 'redux';
import successReducer from './success/success.reducer';

const rootReducer = combineReducers({
  success: successReducer,
});

export default rootReducer;
