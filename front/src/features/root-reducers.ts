import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import authReducer from '@src/features/auth/reducer';
import keywordReducer from '@src/features/keyword/reducer';

const createRootReducer = (history: History) => combineReducers<{}, any>({
  router: connectRouter(history),
  auth: authReducer,
  keyword: keywordReducer,
});

export default createRootReducer;