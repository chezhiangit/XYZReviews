import {combineReducers} from 'redux';

import loginReducer from './loginReducer';

const appReducer = combineReducers({
  login: loginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
