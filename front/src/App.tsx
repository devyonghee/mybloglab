import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/styles';
import { configureStore, history } from './store/configure';
import Router from './router';
import theme from './layouts/base/theme';

const store = configureStore();

const App = (): React.ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default App;
