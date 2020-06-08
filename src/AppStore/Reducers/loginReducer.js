import {LOGIN_SUCCESSFUL} from '../../AppActions/ActionsTypes';

const loginReducer = (
  state = {userName: '', userLoggedIn: false, accessToken: ''},
  action,
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userName: action.userName,
        accessToken: action.accessToken,
        userLoggedIn: action.userLoggedIn,
      };
    default:
      return state;
  }
};

export default loginReducer;
