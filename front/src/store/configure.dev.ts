import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import * as authActions from '@src/features/auth/actions';
import * as blogActions from '@src/features/blog/actions';
import createRootReducer from '@src/features/root-reducers';
import rootSaga from '@src/features/root-saga';
import { RootState } from '@src/store/types';

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState?: RootState): Store => {
  const routerMiddleware: Middleware = createRouterMiddleware(history);
  const logger: Middleware = createLogger({ level: 'info', collapsed: true });
  const middleware: Array<Middleware> = [routerMiddleware, sagaMiddleware, logger];

  const actionCreators = {
    ...authActions,
    ...blogActions,
  };

  const composeEnhancers =
    (window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })) ||
    compose;

  const enhancers = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState || {}, enhancers);

  if (module.hot) {
    module.hot.accept('../features/root-reducers', () =>
      store.replaceReducer(require('../features/root-reducers').default),
    );
  }

  sagaMiddleware.run(rootSaga);
  return store;
};

export default { configureStore, history };
