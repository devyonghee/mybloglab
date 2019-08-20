import { Action, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { AuthState } from '../features/auth/types';
import { BlogState } from '../features/keyword/types';
import RootActions from '../features/root-actions';
import { History } from 'history';

export type ConfigureStore = {
  configureStore: () => Store;
  history: History
}

export type RootAction = Action<typeof RootActions>;

export interface RootState {
  router: RouterState;
  auth: AuthState;
  keyword: BlogState;
}