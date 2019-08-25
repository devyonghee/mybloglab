import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import authReducer from '@src/features/auth/reducer';
import blogReducer from '@src/features/blog/reducer';

const createRootReducer = (history: History) => combineReducers<{}, any>({
  router: connectRouter(history),
  auth: authReducer,
  blog: blogReducer,
});

export default createRootReducer;