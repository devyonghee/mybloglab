import { Store } from 'redux';
import { History } from 'history';
import { RouterState } from 'connected-react-router';
import { AuthState } from '../features/auth/types';
import { BlogState } from '../features/keyword/types';

export interface ConfigureStore {
  configureStore: () => Store;
  history: History
}

export interface StoreState {
  router: RouterState,
  auth: AuthState,
  keyword: BlogState,
}