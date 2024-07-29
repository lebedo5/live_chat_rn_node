import {combineReducers} from 'redux';
import auth from './auth-reducer';
import user from './user-reducer';
import message from './message-reducer';
import chat from './chat-reducer';

export default combineReducers({
  auth,
  user,
  message,
  chat,
});
