import { combineReducers } from 'redux';
import session from './session_reducer';
import TweetsReducer from './tweets_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  tweets: TweetsReducer
});

export default RootReducer;