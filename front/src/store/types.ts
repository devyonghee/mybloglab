import { Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { History } from 'history';
import { AuthState } from '../features/auth/types';
import { BlogState } from '../features/blog/types';

export type ConfigureStore = {
  configureStore: () => Store;
  history: History;
};

export interface RootState {
  router: RouterState;
  auth: AuthState;
  blog: BlogState;
}
