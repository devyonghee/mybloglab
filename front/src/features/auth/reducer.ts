import { AuthActionTypes, AuthState } from './types';
import { LOGIN, LOGOUT } from './constants';

const initialState: AuthState = {};

const authReducer = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default authReducer;
