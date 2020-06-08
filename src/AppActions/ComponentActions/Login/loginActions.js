import {SAGA_AUTHENTICATE_USER} from '../../ActionsTypes';

const authenticateUser = (
  userCredential,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_AUTHENTICATE_USER,
  userCredential,
  onSuccesscallback,
  onErrorcallback,
});

export {authenticateUser};
