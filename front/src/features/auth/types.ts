import { LOGIN, LOGOUT } from './constants';

export interface LoginAction {
  type: typeof LOGIN,
  id: string,
  password: string,
}

export interface LogoutAction {
  type: typeof LOGOUT
}

export interface AuthState {
  name?: String,
  token?: String,
}

export type AuthActionTypes = LoginAction | LogoutAction;