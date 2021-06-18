import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userInfo from './userInfo_reducer';
import contestCreate from './contest_create_reducer';

const rootReducer = combineReducers({
  auth,
  userInfo,
  contestCreate,
});
export default rootReducer;
