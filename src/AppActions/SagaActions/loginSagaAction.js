import {LOGIN_SUCCESSFUL} from '../ActionsTypes';

const userLoginSuccess = userDetails => ({
  type: LOGIN_SUCCESSFUL,
  userDetails,
});

export default {
  userLoginSuccess,
};
