import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/features/root-saga';
import createRootReducer from '../features/root-reducers';

const history = createBrowserHistory();

const configureStore = (): Store => {
  const rootReducer = createRootReducer(history);
  const reduxSagaMiddleware = createSagaMiddleware();

  const routerMiddleware: Middleware = createRouterMiddleware(history);
  const middleware: Array<Middleware> = [routerMiddleware, reduxSagaMiddleware];
  const enhancers = compose(applyMiddleware(...middleware));

  const store = createStore(rootReducer, {}, enhancers);
  reduxSagaMiddleware.run(rootSaga);

  return store;
};

export default { configureStore, history };
