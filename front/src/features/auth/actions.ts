import { LOGIN, LOGOUT } from './constants';
import { AuthActionTypes } from './types';

const login = (id: string, password: string): AuthActionTypes => {
  return {
    type: LOGIN,
    id, password,
  };
};

const logout = (): AuthActionTypes => {
  return {
    type: LOGOUT,
  };
};

export {
  login, logout
};