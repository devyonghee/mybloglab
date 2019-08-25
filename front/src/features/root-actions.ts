import { routerActions } from 'connected-react-router';
import * as authActions from './auth/actions';
import * as keywordActions from './blog/actions';

export default {
  router: routerActions,
  auth: authActions,
  blog: keywordActions
};