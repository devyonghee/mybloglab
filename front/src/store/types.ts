import { Action, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { History } from 'history';
import { AuthState } from '../features/auth/types';
import { BlogState } from '../features/blog/types';
import RootActions from '../features/root-actions';

export type ConfigureStore = {
  configureStore: () => Store;
  history: History;
};

export type RootAction = Action<typeof RootActions>;

export interface RootState {
  router: RouterState;
  auth: AuthState;
  blog: BlogState;
}
