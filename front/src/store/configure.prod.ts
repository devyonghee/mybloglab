import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import createRootReducer from '../features/root-reducers';

const history = createHashHistory();
const rootReducer = createRootReducer(history);

const configureStore = () => {
  const routerMiddleware: Middleware = createRouterMiddleware(history);
  const middleware: Array<Middleware> = [routerMiddleware, thunk];
  const enhancers = compose(applyMiddleware(...middleware));

  return createStore(rootReducer, {}, enhancers);
};

export default { configureStore, history };