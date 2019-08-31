import { Action } from 'redux';
import { LOGIN, LOGOUT } from './constants';

export interface LoginAction extends Action {
  type: typeof LOGIN;
  id: string;
  password: string;
}

export interface LogoutAction extends Action {
  type: typeof LOGOUT;
}

export type AuthState = {
  name?: String;
  token?: String;
};

export type AuthActionTypes = LoginAction | LogoutAction;
