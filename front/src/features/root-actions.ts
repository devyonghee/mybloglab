import { routerActions } from 'connected-react-router';
import * as authActions from './auth/actions';
import * as keywordActions from './keyword/actions';

export default {
  router: routerActions,
  auth: authActions,
  keyword: keywordActions
};