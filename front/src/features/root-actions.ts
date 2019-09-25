import { Action } from 'redux';

type TypeConstant = string;

export interface AppAction<T extends TypeConstant, P> extends Action<T> {
  type: T;
  payload: P;
}
