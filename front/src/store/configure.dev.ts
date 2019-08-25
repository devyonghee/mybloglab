import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import * as authActions from '../features/auth/actions';
import * as blogActions from '../features/blog/actions';
import createRootReducer from '../features/root-reducers';
import { RootState } from './types';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);

const configureStore = (initialState?: RootState): Store => {
  const routerMiddleware: Middleware = createRouterMiddleware(history);
  const logger: Middleware = createLogger({ level: 'info', collapsed: true });
  const middleware: Array<Middleware> = [routerMiddleware, thunk, logger];

  const actionCreators = {
    ...authActions,
    ...blogActions,
  };

  const composeEnhancers =
    (window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators }))
    || compose;

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState || {}, enhancers);

  if (module.hot) {
    module.hot.accept(
      '../features/root-reducers',
      () => store.replaceReducer(require('../features/root-reducers').default)
    );
  }
  return store;
};

export default { configureStore, history };