import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userInfo from './userInfo_reducer';

const rootReducer = combineReducers({
  auth,
  userInfo,
});
export default rootReducer;
