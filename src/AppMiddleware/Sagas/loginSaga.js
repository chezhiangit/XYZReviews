import {takeLatest, call, put} from 'redux-saga/effects';
import {SAGA_AUTHENTICATE_USER} from '../../AppActions/ActionsTypes';
import {userLoginSuccess} from '../../AppActions/SagaActions/loginSagaAction';
import {authenticateUserService} from '../../NetworkServices/loginServices/login';
// import {startLoading, stopLoading} from '../AppStore/loadingActions';

function* userLogin(action) {
  try {
    console.log('saga user login userinfo...', action.userCredential);
    const response = yield call(authenticateUserService, action.userCredential);
    console.log('saga login api response...', response);
    if (
      response !== null &&
      response.status === 200 &&
      response.AccessToken !== undefined &&
      response.AccessToken !== null &&
      response.IsLoginSuccess
    ) {
      yield put(
        userLoginSuccess({
          userName: action.userCredential.userName,
          userLoggedIn: response.IsLoginSuccess,
          accessToken: response.AccessToken,
          IsMobileVerificationDone: response.IsMobileVerificationDone,
          IsEmailVerificationDone: response.IsEmailVerificationDone,
          RepName: response.RepName,
        }),
      );
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback(
        'Unable to complete your request. Please try again.',
      );
    }
  } catch (error) {
    action.onErrorcallback(
      'Unable to complete your request. Please try again.',
    );
  }
}

export default function* watchuserLoginAction() {
  yield takeLatest(SAGA_AUTHENTICATE_USER, userLogin);
}
